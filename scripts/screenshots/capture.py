#!/usr/bin/env python3
"""Capture GreenCap K8s UI screenshots for the portal preview section.

See README.md in this directory for prerequisites and usage.
"""

import asyncio
import base64
import json
import os

import requests
import websockets

APP_URL = os.environ.get("GREENCAP_APP_URL", "http://localhost:8080")
CDP_URL = os.environ.get("GREENCAP_CDP_URL", "http://localhost:9222")
USERNAME = os.environ.get("GREENCAP_USER", "admin")
PASSWORD = os.environ.get("GREENCAP_PASSWORD", "admin")
OUTPUT_DIR = os.environ.get(
    "OUTPUT_DIR",
    os.path.join(os.path.dirname(__file__), "..", "..", "assets", "screenshots"),
)

VIEWPORT_WIDTH = 1600
VIEWPORT_HEIGHT = 1000

# Each shot is captured either by direct navigation ("path") or by clicking a
# sidebar link by its visible text ("nav_text"). The latter performs an SPA
# navigation, which preserves the cluster/namespace already selected in the
# session (a full page reload resets the namespace selector to "Select...").
SHOTS = [
    {"path": "/clusters", "output": "clusters.png"},
    {"path": "/workloads/deployments", "output": "workloads-deployments.png"},
    {"nav_text": "Topology", "output": "topologia.png", "wait": 7},
]

DEEP_QUERY_RECTS = """
(function(sel) {
  function deepQueryAll(selector, root) {
    root = root || document;
    let results = Array.from(root.querySelectorAll(selector));
    const all = root.querySelectorAll('*');
    for (const el of all) {
      if (el.shadowRoot) {
        results = results.concat(deepQueryAll(selector, el.shadowRoot));
      }
    }
    return results;
  }
  const els = deepQueryAll(sel);
  return els.map(el => {
    const r = el.getBoundingClientRect();
    return {x: r.x, y: r.y, width: r.width, height: r.height, type: el.getAttribute('type') || '', tag: el.tagName};
  });
})(%s)
"""

CLICK_BY_TEXT = """
(function(text) {
  function deepQueryAll(selector, root) {
    root = root || document;
    let results = Array.from(root.querySelectorAll(selector));
    const all = root.querySelectorAll('*');
    for (const el of all) {
      if (el.shadowRoot) {
        results = results.concat(deepQueryAll(selector, el.shadowRoot));
      }
    }
    return results;
  }
  const items = deepQueryAll('vaadin-side-nav-item');
  const el = items.find(i => i.textContent.trim().startsWith(text));
  if (!el) return null;
  const r = el.getBoundingClientRect();
  return {x: r.x + r.width/2, y: r.y + r.height/2};
})(%s)
"""


class CDPSession:
    def __init__(self, ws):
        self.ws = ws
        self.msg_id = 0
        self.pending = {}
        self.events = asyncio.Queue()

    async def start(self):
        asyncio.create_task(self._reader())

    async def _reader(self):
        async for raw in self.ws:
            data = json.loads(raw)
            if "id" in data:
                fut = self.pending.pop(data["id"], None)
                if fut:
                    fut.set_result(data)
            else:
                await self.events.put(data)

    async def send(self, method, params=None):
        self.msg_id += 1
        msg_id = self.msg_id
        fut = asyncio.get_event_loop().create_future()
        self.pending[msg_id] = fut
        await self.ws.send(json.dumps({"id": msg_id, "method": method, "params": params or {}}))
        return await fut

    async def wait_for_event(self, name, timeout=15):
        while True:
            event = await asyncio.wait_for(self.events.get(), timeout=timeout)
            if event.get("method") == name:
                return event

    async def evaluate(self, expression):
        result = await self.send("Runtime.evaluate", {
            "expression": expression,
            "returnByValue": True,
            "awaitPromise": True,
        })
        return result["result"]["result"].get("value")


async def click(session, x, y):
    await session.send("Input.dispatchMouseEvent", {"type": "mousePressed", "x": x, "y": y, "button": "left", "clickCount": 1})
    await session.send("Input.dispatchMouseEvent", {"type": "mouseReleased", "x": x, "y": y, "button": "left", "clickCount": 1})


async def type_text(session, text):
    for character in text:
        await session.send("Input.dispatchKeyEvent", {"type": "keyDown", "text": character, "unmodifiedText": character, "key": character})
        await session.send("Input.dispatchKeyEvent", {"type": "keyUp", "text": character, "unmodifiedText": character, "key": character})
        await asyncio.sleep(0.03)


async def press_enter(session):
    await session.send("Input.dispatchKeyEvent", {"type": "keyDown", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13})
    await session.send("Input.dispatchKeyEvent", {"type": "keyUp", "key": "Enter", "code": "Enter", "windowsVirtualKeyCode": 13})


async def login(session):
    inputs = await session.evaluate(DEEP_QUERY_RECTS % "'input'")
    username_field = next(field for field in inputs if field["type"] == "text")
    password_field = next(field for field in inputs if field["type"] == "password")

    await click(session, username_field["x"] + 10, username_field["y"] + username_field["height"] / 2)
    await asyncio.sleep(0.3)
    await type_text(session, USERNAME)

    await click(session, password_field["x"] + 10, password_field["y"] + password_field["height"] / 2)
    await asyncio.sleep(0.3)
    await type_text(session, PASSWORD)

    await asyncio.sleep(0.3)
    await press_enter(session)

    for _ in range(30):
        url = await session.evaluate("document.location.href")
        if "/login" not in url:
            return
        await asyncio.sleep(0.5)
    raise RuntimeError("Login did not redirect away from /login — check GREENCAP_USER/GREENCAP_PASSWORD")


async def capture_shot(session, shot):
    if "path" in shot:
        await session.send("Page.navigate", {"url": f"{APP_URL}{shot['path']}"})
        await session.wait_for_event("Page.loadEventFired")
    else:
        position = await session.evaluate(CLICK_BY_TEXT % json.dumps(shot["nav_text"]))
        if not position:
            raise RuntimeError(f"Sidebar link with text {shot['nav_text']!r} not found")
        await click(session, position["x"], position["y"])

    await asyncio.sleep(shot.get("wait", 4))

    result = await session.send("Page.captureScreenshot", {"format": "png"})
    output_path = os.path.join(OUTPUT_DIR, shot["output"])
    with open(output_path, "wb") as output_file:
        output_file.write(base64.b64decode(result["result"]["data"]))
    print(f"saved {output_path}")


async def main():
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    target = requests.put(f"{CDP_URL}/json/new?{APP_URL}/login").json()
    async with websockets.connect(target["webSocketDebuggerUrl"], max_size=None) as ws:
        session = CDPSession(ws)
        await session.start()

        await session.send("Page.enable")
        await session.send("Runtime.enable")
        await session.send("Emulation.setDeviceMetricsOverride", {
            "width": VIEWPORT_WIDTH, "height": VIEWPORT_HEIGHT, "deviceScaleFactor": 1, "mobile": False
        })

        await session.wait_for_event("Page.loadEventFired")
        await asyncio.sleep(3)  # let Vaadin bootstrap render the login form

        await login(session)
        await asyncio.sleep(2)

        for shot in SHOTS:
            await capture_shot(session, shot)


if __name__ == "__main__":
    asyncio.run(main())

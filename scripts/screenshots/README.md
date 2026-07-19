# Screenshot capture

Captures the UI screenshots used in the "Conheça a Plataforma" / "See It In
Action" section of the portal (`assets/screenshots/`), via the Chrome
DevTools Protocol.

## Prerequisites

1. GreenCap K8s running locally (default `http://localhost:8080`), with a
   demo cluster/namespace set up so the captured views have content.
2. Chrome/Chromium with remote debugging enabled:

   ```bash
   google-chrome --headless=new --remote-debugging-port=9222
   ```

3. Python deps:

   ```bash
   pip install -r requirements.txt
   ```

## Usage

```bash
python3 capture.py
```

Saves `templates-catalog.png`, `workloads-deployments.png` and `topologia.png` to
`assets/screenshots/`, each 1600x1000.

## Configuration

All configuration is via environment variables, with defaults suiting a
local dev setup:

| Variable             | Default                 | Description                          |
|----------------------|--------------------------|---------------------------------------|
| `GREENCAP_APP_URL`    | `http://localhost:8080` | GreenCap K8s base URL                |
| `GREENCAP_CDP_URL`    | `http://localhost:9222` | Chrome DevTools Protocol endpoint    |
| `GREENCAP_USER`       | `admin`                  | Login username                       |
| `GREENCAP_PASSWORD`   | `admin`                  | Login password                       |
| `OUTPUT_DIR`          | `../../assets/screenshots` | Where to save the PNGs            |

## Adding/changing shots

Edit the `SHOTS` list in `capture.py`. Each entry captures one screenshot:

- `{"path": "/some/route", "output": "name.png"}` — full page navigation.
- `{"nav_text": "Sidebar Label", "output": "name.png"}` — clicks a sidebar
  link by its visible text instead of navigating directly. Use this when the
  view depends on state set up by a previous shot (e.g. the namespace
  selected on the Deployments page), since a full page reload resets that
  selection.

Optional `"wait"` (seconds, default `4`) controls how long to wait after
navigation before capturing — increase it for views with slower-rendering
content (e.g. diagrams).

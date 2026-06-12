function initImageLightbox() {
  const overlay = document.getElementById('lightbox-overlay');
  const overlayImage = document.getElementById('lightbox-image');
  const closeButton = document.getElementById('lightbox-close');
  const previewImages = document.querySelectorAll('.preview-card img');

  if (!overlay || !overlayImage || !closeButton || previewImages.length === 0) {
    return;
  }

  const openLightbox = (image) => {
    overlayImage.src = image.src;
    overlayImage.alt = image.alt;
    overlay.classList.add('show');
  };

  const closeLightbox = () => {
    overlay.classList.remove('show');
  };

  previewImages.forEach(image => {
    image.addEventListener('click', () => openLightbox(image));
  });

  closeButton.addEventListener('click', closeLightbox);

  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) {
      closeLightbox();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeLightbox();
    }
  });
}

export { initImageLightbox };

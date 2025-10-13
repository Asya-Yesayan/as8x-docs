// Add CSS dynamically
const style = document.createElement('style');
style.textContent = `
  .image-zoom-container {
    position: relative;
    display: inline-block;
    cursor: zoom-in;
  }

  .image-zoom-overlay {
    position: fixed;
    top: 0; left: 0;
    width: 100vw; height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: zoom-out;
    z-index: 9999;
  }

  .image-zoom-overlay img {
    max-width: 95vw;
    max-height: 95vh;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.3);
  }
`;
document.head.appendChild(style);

// Add zoom functionality
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.style.cursor = "zoom-in";
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "image-zoom-overlay";
      const zoomedImg = document.createElement("img");
      zoomedImg.src = img.src;
      overlay.appendChild(zoomedImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    });
  });
});
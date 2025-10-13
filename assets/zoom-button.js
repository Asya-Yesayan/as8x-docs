document.addEventListener("DOMContentLoaded", function() {
  document.querySelectorAll("img").forEach(img => {
    // Wrap each image in a container
    const wrapper = document.createElement("div");
    wrapper.className = "zoom-container";
    img.parentNode.insertBefore(wrapper, img);
    wrapper.appendChild(img);

    // Add the zoom button
    const button = document.createElement("button");
    button.className = "zoom-button";
    button.innerHTML = "&#128269;"; // 🔍 icon
    wrapper.appendChild(button);

    // Zoom overlay logic
    button.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.className = "zoom-overlay";
      const largeImg = document.createElement("img");
      largeImg.src = img.src;
      overlay.appendChild(largeImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    });
  });
});
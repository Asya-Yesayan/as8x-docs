document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => {
        if (!header.id) {
            header.id = header.textContent.trim().toLowerCase().replace(/\s+/g, "-"); // Generate ID if missing
        }

        let button = document.createElement("button");
        button.innerHTML = "🔗"; // Link emoji
        button.style.marginRight = "8px"; // Move the button to the left side
        button.style.border = "none";
        button.style.background = "none";
        button.style.cursor = "pointer";

        button.addEventListener("click", () => {
            window.location.hash = header.id; // Update URL with the header ID
        });

        // Insert the button before the header's text
        header.insertBefore(button, header.firstChild); // Add button to the left side
    });
});

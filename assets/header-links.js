document.addEventListener("DOMContentLoaded", function () {
    console.log("Script loaded and running!");

    document.querySelectorAll("h1, h2, h3, h4, h5, h6").forEach(header => {
        console.log("Found header:", header.textContent);

        if (!header.id) {
            header.id = header.textContent.trim().toLowerCase().replace(/\s+/g, "-");
        }

        // Create a container for the header and button
        const container = document.createElement('div');
        container.style.position = 'relative';
        container.style.display = 'inline-block';
        
        // Wrap the header in the container
        header.parentNode.insertBefore(container, header);
        container.appendChild(header);
        
        // Style the header to allow space for the button
        header.style.paddingRight = '20px';
        header.style.display = 'inline';
        
        // Create the link button
        let button = document.createElement("a");
        button.innerHTML = "#";
        button.href = `#${header.id}`;
        button.style.position = 'absolute';
        button.style.right = '0';
        button.style.top = '0';
        button.style.opacity = '0';
        button.style.transition = 'opacity 0.2s ease';
        button.style.color = 'inherit';
        button.style.textDecoration = 'none';
        button.style.fontWeight = 'normal';
        button.style.fontSize = '0.8em';
        button.style.paddingLeft = '4px';
        
        // Show button on header hover
        container.addEventListener('mouseenter', () => {
            button.style.opacity = '1';
        });
        
        container.addEventListener('mouseleave', () => {
            button.style.opacity = '0';
        });
        
        container.appendChild(button);
    });
});

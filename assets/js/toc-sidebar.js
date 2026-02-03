// Generate table of contents from page headings - APPROACH 1 (Wrapper Method)
(function() {
  function generateTOC() {
    // Find the main content area - Just the Docs uses .main-content
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;

    const headings = mainContent.querySelectorAll('h1, h2, h3, h4, h5, h6');
    if (headings.length === 0) return;

    // Filter out headings - skip first h1 if it's the page title
    const validHeadings = Array.from(headings).filter((heading, index) => {
      if (index === 0 && heading.tagName === 'H1') {
        return false;
      }
      return true;
    });

    if (validHeadings.length === 0) return;

    // Check if TOC already exists
    if (document.getElementById('toc-sidebar')) {
      return;
    }

    // Create TOC container
    const tocContainer = document.createElement('div');
    tocContainer.id = 'toc-sidebar';
    tocContainer.className = 'toc-sidebar';

    const tocTitle = document.createElement('div');
    tocTitle.className = 'toc-title';
    tocTitle.textContent = 'IN THIS ARTICLE';
    tocContainer.appendChild(tocTitle);

    const tocList = document.createElement('ul');
    tocList.className = 'toc-list';

    validHeadings.forEach((heading, index) => {
      // Ensure heading has an ID (Jekyll/Just the Docs should add these automatically)
      if (!heading.id) {
        // Create a safe ID from the heading text
        heading.id = 'heading-' + index + '-' + heading.textContent
          .toLowerCase()
          .trim()
          .replace(/[^\w\s-]/g, '')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
          .replace(/^-|-$/g, '');
      }

      const listItem = document.createElement('li');
      listItem.className = 'toc-item toc-' + heading.tagName.toLowerCase();

      const link = document.createElement('a');
      link.href = '#' + heading.id;
      link.textContent = heading.textContent.trim();
      link.className = 'toc-link';

      // Smooth scroll behavior
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.getElementById(heading.id);
        if (target) {
          const offset = 80; // Account for fixed header
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - offset;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
          // Update URL without jumping
          history.pushState(null, null, '#' + heading.id);
        }
      });

      listItem.appendChild(link);
      tocList.appendChild(listItem);
    });

    tocContainer.appendChild(tocList);

    // Wrap main content and TOC in a flex container if not already wrapped
    let contentWrapper = mainContent.closest('.main-content-wrapper');
    if (!contentWrapper) {
      contentWrapper = document.createElement('div');
      contentWrapper.className = 'main-content-wrapper';
      
      // Insert wrapper before mainContent
      mainContent.parentNode.insertBefore(contentWrapper, mainContent);
      // Move mainContent into wrapper
      contentWrapper.appendChild(mainContent);
    }

    // Append TOC to the wrapper (will be positioned by CSS)
    contentWrapper.appendChild(tocContainer);

    // Highlight active section on scroll
    highlightActiveSection();
    let scrollTimeout;
    window.addEventListener('scroll', function() {
      if (scrollTimeout) {
        window.cancelAnimationFrame(scrollTimeout);
      }
      scrollTimeout = window.requestAnimationFrame(highlightActiveSection);
    });
  }

  function highlightActiveSection() {
    const headings = document.querySelectorAll('.main-content h1[id], .main-content h2[id], .main-content h3[id], .main-content h4[id], .main-content h5[id], .main-content h6[id]');
    const tocLinks = document.querySelectorAll('.toc-link');
    
    if (headings.length === 0 || tocLinks.length === 0) return;

    let currentSection = '';
    const scrollPosition = window.scrollY + 120; // Offset for header

    // Find the current section
    headings.forEach((heading) => {
      const top = heading.offsetTop;
      if (scrollPosition >= top) {
        currentSection = heading.id;
      }
    });

    // Update active state
    tocLinks.forEach((link) => {
      link.classList.remove('active');
      const href = link.getAttribute('href');
      if (href === '#' + currentSection) {
        link.classList.add('active');
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', generateTOC);
  } else {
    // Small delay to ensure Just the Docs has initialized
    setTimeout(generateTOC, 100);
  }
})();
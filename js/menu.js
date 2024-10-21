document.addEventListener('DOMContentLoaded', () => {
    // Get the current page URL
    const currentPage = window.location.pathname.split('/').pop();
    
    // Select all links in the menu
    const menuLinks = document.querySelectorAll('ul li a');

    // Loop through each link
    menuLinks.forEach(link => {
        // Check if the link's href matches the current page
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active'); // Add 'active' class
        } else {
            link.classList.remove('active'); // Remove 'active' class from others
        }
    });
});
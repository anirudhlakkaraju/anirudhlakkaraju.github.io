// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to each color ring
    document.querySelectorAll('.color-picker .ring').forEach(ring => {
        ring.addEventListener('click', function() {
            const color = this.getAttribute('data-color'); 
            document.documentElement.setAttribute('data-color', color); 
        });
    });
});
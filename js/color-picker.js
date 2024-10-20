const key = 'color-preference';

// Function to retrieve color preference
const getColorThemePreference = () => {
    return localStorage.getItem(key) || 'r1'; // Default to 'r1' if not found
};

const color = {
    value: getColorThemePreference(),
};


// Function to set user preference
const setColorPreference = () => {
    localStorage.setItem(key, color.value);
    reflectColorPreference();
};

// Function to reflect the user's preference in the document
const reflectColorPreference = () => {
    document.firstElementChild.setAttribute('data-color', color.value);
};

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Add click event listeners to each color ring
    document.querySelectorAll('.color-picker .ring').forEach(ring => {
        ring.addEventListener('click', function() {
            const colorPicked = this.getAttribute('data-color');
            color.value = colorPicked;
            setColorPreference();
        });
    });

    // Set preference on screen load
    reflectColorPreference();
});

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
    
    // Update the global --color-ring CSS variable in the root element
    document.documentElement.style.setProperty('--color-ring', `var(--color-ring-${color.value})`);
    
    let selectedRing = document.querySelector(`.color-picker .ring[data-color="${color.value}"]`)
    if (selectedRing) {
        selectedRing.classList.add('selected');
        selectedRing.classList.remove('unselected');
    }
};

let currentColor = null;

// Ensure the DOM is fully loaded before adding event listeners
document.addEventListener('DOMContentLoaded', () => {
    // Set preference on screen load
    reflectColorPreference();

    // Set to color selected color on load
    currentColor = document.querySelector(`.color-picker .ring.selected`);

    // Add click event listeners to each color ring
    document.querySelectorAll('.color-picker .ring').forEach(ring => {
        ring.addEventListener('click', function() {
            const colorPicked = this.getAttribute('data-color');

            // If color currently selected
            if (currentColor == this) return;

            // If new color picked
            if (currentColor) {
                // Change background of currently selected ring to white
                currentColor.classList.remove('selected');
                currentColor.classList.add('unselected');
            }

            // Set the new color
            currentColor = this;
            currentColor.classList.remove('unselected');
            currentColor.classList.add('selected');

            color.value = colorPicked;
            setColorPreference();
        });
    });

});

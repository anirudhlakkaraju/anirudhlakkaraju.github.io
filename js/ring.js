document.addEventListener('DOMContentLoaded', () => {
    // Function to apply colors based on data-color attribute and theme
    const applyRingColors = () => {
        // Get the current theme (light or dark)
        const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

        // Iterate over each ring
        document.querySelectorAll('.ring').forEach(ring => {
            // Get the data-color attribute value (e.g., r1, r2, etc.)
            const colorType = ring.getAttribute('data-color');

            // Build the CSS variable name based on theme and data-color
            const colorVar = `--color-ring-${colorType}-${currentTheme === 'dark' ? 'dark' : 'light'}`;

            ring.style.setProperty('--color-ring', `var(--color-ring-${colorType})`);
        });
    };

    // Apply colors when the page loads
    applyRingColors();
});


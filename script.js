document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('i');
    const htmlElement = document.documentElement;

    // 1. Check if user has a saved preference, otherwise DEFAULT TO 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // 2. Apply the theme
    applyTheme(currentTheme);

    // 3. Listen for button click
    toggleButton.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        // If current is dark, switch to light, else switch to dark
        let newTheme = (theme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Helper function
    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update Icon logic
        if (theme === 'dark') {
            // In dark mode, show Sun icon (to switch to light)
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            // In light mode, show Moon icon (to switch to dark)
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});
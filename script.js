document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('theme-toggle');
    const icon = toggleButton.querySelector('i');
    const htmlElement = document.documentElement;

    // 1. Check if user already has a preference saved
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    // 2. Apply the saved preference
    applyTheme(currentTheme);

    // 3. Listen for button click
    toggleButton.addEventListener('click', () => {
        let theme = htmlElement.getAttribute('data-theme');
        let newTheme = (theme === 'dark') ? 'light' : 'dark';
        applyTheme(newTheme);
    });

    // Helper function to update DOM and Storage
    function applyTheme(theme) {
        htmlElement.setAttribute('data-theme', theme);
        localStorage.setItem('theme', theme);
        
        // Update Icon (Moon for Light Mode, Sun for Dark Mode)
        if (theme === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }
});
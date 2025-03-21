function applyDarkMode() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

// Initial check
applyDarkMode();

// Listen for changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyDarkMode);

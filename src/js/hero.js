document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('[data-theme-hero]');
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    const themeTexts = document.querySelectorAll('[data-theme-text]');
    const themeRedBtn = document.querySelector('[data-theme-red]');
    const themeGreenBtn = document.querySelector('[data-theme-green]');

    let savedTheme = localStorage.getItem('selectedTheme') || 'theme-red';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        hero.classList.remove('theme-red', 'theme-green');
        themeButtons.forEach(button => button.classList.remove('theme-red', 'theme-green'));
        themeTexts.forEach(text => text.classList.remove('theme-red', 'theme-green'));

        hero.classList.add(theme);
        themeButtons.forEach(button => button.classList.add(theme));
        themeTexts.forEach(text => text.classList.add(theme));

        localStorage.setItem('selectedTheme', theme);
    }

    themeRedBtn.addEventListener('click', () => applyTheme('theme-red'));
    themeGreenBtn.addEventListener('click', () => applyTheme('theme-green'));
});

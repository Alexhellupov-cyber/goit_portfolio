document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('[data-theme-hero]');
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    const themeTexts = document.querySelectorAll('[data-theme-text]');
    const themeRedBtn = document.querySelector('[data-theme-red]');
    const themeGreenBtn = document.querySelector('[data-theme-green]');

    // Отримуємо збережену тему або ставимо red за замовчуванням
    let savedTheme = localStorage.getItem('selectedTheme') || 'theme-red';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        // Видаляємо всі теми перед додаванням нової
        hero.classList.remove('theme-red', 'theme-green');
        themeButtons.forEach(button => button.classList.remove('theme-red', 'theme-green'));
        themeTexts.forEach(text => text.classList.remove('theme-red', 'theme-green'));

        // Додаємо нову тему
        hero.classList.add(theme);
        themeButtons.forEach(button => button.classList.add(theme));
        themeTexts.forEach(text => text.classList.add(theme));

        // Зберігаємо тему в localStorage
        localStorage.setItem('selectedTheme', theme);
    }

    // Кнопки зміни теми
    themeRedBtn.addEventListener('click', () => applyTheme('theme-red'));
    themeGreenBtn.addEventListener('click', () => applyTheme('theme-green'));
});

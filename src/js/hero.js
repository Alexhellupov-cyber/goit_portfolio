document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('[data-theme-hero]');
    const burgMenu = document.querySelector('[data-theme-burg-menu]');
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    const themeTexts = document.querySelectorAll('[data-theme-text]');
    const themeTextsSpan = document.querySelectorAll('[data-theme-text-span]');
    const themeSvgFill = document.querySelectorAll('[data-theme-text-svg]');
    const themeSwiperBg = document.querySelectorAll('[data-theme-swiper-active]');
    const themeRedBtn = document.querySelector('[data-theme-red]');
    const themeGreenBtn = document.querySelector('[data-theme-green]');
    const themeBlueBtn = document.querySelector('[data-theme-blue]');
    const themeOrangeBtn = document.querySelector('[data-theme-orange]');
    const themeDarkGreenBtn = document.querySelector('[data-theme-dark-green]');
    const themeYellowBtn = document.querySelector('[data-theme-yellow]');

    let savedTheme = localStorage.getItem('selectedTheme') || 'theme-red';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        hero.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow');
        burgMenu.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow');
        themeButtons.forEach(button => button.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'));
        themeTexts.forEach(text => text.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'));
        themeTextsSpan.forEach(text => text.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'));
        themeSvgFill.forEach(text => text.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'));
        themeSwiperBg.forEach(text => text.classList.remove('theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'));

        hero.classList.add(theme);
        burgMenu.classList.add(theme);
        themeButtons.forEach(button => button.classList.add(theme));
        themeTexts.forEach(text => text.classList.add(theme));
        themeTextsSpan.forEach(text => text.classList.add(theme));
        themeSvgFill.forEach(text => text.classList.add(theme));
        themeSwiperBg.forEach(text => text.classList.add(theme));

        themeRedBtn.classList.toggle('active-btn-change', theme === 'theme-red');
        themeGreenBtn.classList.toggle('active-btn-change', theme === 'theme-green');
        themeBlueBtn.classList.toggle('active-btn-change', theme === 'theme-blue');
        themeOrangeBtn.classList.toggle('active-btn-change', theme === 'theme-orange');
        themeDarkGreenBtn.classList.toggle('active-btn-change', theme === 'theme-dark-green');
        themeYellowBtn.classList.toggle('active-btn-change', theme === 'theme-yellow');

        localStorage.setItem('selectedTheme', theme);
    }

    themeRedBtn.addEventListener('click', () => applyTheme('theme-red'));
    themeGreenBtn.addEventListener('click', () => applyTheme('theme-green'));
    themeBlueBtn.addEventListener('click', () => applyTheme('theme-blue'));
    themeOrangeBtn.addEventListener('click', () => applyTheme('theme-orange'));
    themeDarkGreenBtn.addEventListener('click', () => applyTheme('theme-dark-green'));
    themeYellowBtn.addEventListener('click', () => applyTheme('theme-yellow'));
});

AOS.init({
    duration: 1300,
    once: false,
    mirror: true,
});

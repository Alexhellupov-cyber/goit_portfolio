document.addEventListener('DOMContentLoaded', () => {
    const hero = document.querySelector('[data-theme-hero]');
    const burgMenu = document.querySelector('[data-theme-burg-menu]');
    const coversSectionAttr = document.querySelector('[data-theme-covers]');
    const themeButtons = document.querySelectorAll('[data-theme-btn]');
    const themeTexts = document.querySelectorAll('[data-theme-text]');
    const themeTextsSpan = document.querySelectorAll('[data-theme-text-span]');
    const themeSvgFill = document.querySelectorAll('[data-theme-text-svg]');
    const themeSwiperBg = document.querySelectorAll('[data-theme-swiper-active]');
    const themeBgUpBtn = document.querySelectorAll('[data-theme-btn-up]');
    const themeRedBtn = document.querySelector('[data-theme-red]');
    const themeGreenBtn = document.querySelector('[data-theme-green]');
    const themeBlueBtn = document.querySelector('[data-theme-blue]');
    const themeOrangeBtn = document.querySelector('[data-theme-orange]');
    const themeDarkGreenBtn = document.querySelector('[data-theme-dark-green]');
    const themeYellowBtn = document.querySelector('[data-theme-yellow]');

    let savedTheme = localStorage.getItem('selectedTheme') || 'theme-red';
    applyTheme(savedTheme);

    function applyTheme(theme) {
        const allThemes = ['theme-red', 'theme-green', 'theme-blue', 'theme-orange', 'theme-dark-green', 'theme-yellow'];

        hero?.classList.remove(...allThemes);
        burgMenu?.classList.remove(...allThemes);
        coversSectionAttr?.classList.remove(...allThemes);

        themeButtons.forEach(button => button.classList.remove(...allThemes));
        themeTexts.forEach(text => text.classList.remove(...allThemes));
        themeTextsSpan.forEach(text => text.classList.remove(...allThemes));
        themeSvgFill.forEach(text => text.classList.remove(...allThemes));
        themeSwiperBg.forEach(text => text.classList.remove(...allThemes));
        themeBgUpBtn.forEach(text => text.classList.remove(...allThemes));

        hero?.classList.add(theme);
        burgMenu?.classList.add(theme);
        coversSectionAttr?.classList.add(theme);

        themeButtons.forEach(button => button.classList.add(theme));
        themeTexts.forEach(text => text.classList.add(theme));
        themeTextsSpan.forEach(text => text.classList.add(theme));
        themeSvgFill.forEach(text => text.classList.add(theme));
        themeSwiperBg.forEach(text => text.classList.add(theme));
        themeBgUpBtn.forEach(text => text.classList.add(theme));

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
    offset: 0,
    duration: 1300,
    once: false,
    mirror: true,
});

    const swiper = new Swiper('.projects-slider', {
        loop: true,
        slidesPerView: 1,
        spaceBetween: 20,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        keyboard: {
            enabled: true,
            onlyInViewport: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
    
    swiper.on('slideChange', function () {
        const prevButton = document.querySelector('.swiper-button-prev');
        const nextButton = document.querySelector('.swiper-button-next');
        
        if (swiper.isBeginning) {
            prevButton.disabled = true;
        } else {
            prevButton.disabled = false;
        }
    
        if (swiper.isEnd) {
            nextButton.disabled = true;
        } else {
            nextButton.disabled = false;
        }
    });

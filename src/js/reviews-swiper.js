import SwiperCore, { Swiper } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation, Keyboard, Mousewheel, Pagination } from 'swiper/modules';

export let swiper = new Swiper('.swiper-container', {
    modules: [Navigation, Keyboard, Mousewheel, Pagination],
    speed: 1000,
    navigation: {
        nextEl: '.review-swiper-button-next',
        prevEl: '.review-swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: true,
    },
    mousewheel: {
        enabled: true,
        eventsTarget: '.swiper-container',
    },
    breakpoints: {
        1440: {
            spaceBetween: 16,
            slidesPerView: 4,
        },
        768: {
            slidesPerView: 2,
        },
        320: {
            slidesPerView: 1,
        },
    },
});
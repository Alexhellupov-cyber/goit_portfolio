import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const swiper = new Swiper('.proj-swiper', {
  modules: [Navigation, Keyboard],
  speed: 500,
  navigation: {
    disabledClass: 'proj-btn-disabled',
    nextEl: '.proj-swiper-button-next',
    prevEl: '.proj-swiper-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  slidesPerView: 1,
  spaceBetween: 20,
  breakpoints: {
    375: {
      slidesPerView: 1,
      spaceBetween: 200,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 390,
    },
    1440: {
      slidesPerView: 1,
      spaceBetween: 1000,
    },
  },
});

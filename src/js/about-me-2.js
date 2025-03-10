import Swiper from 'swiper';
import { Navigation, Keyboard } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/keyboard';

const swiper = new Swiper('.skills', {
  slidesPerView: 2,
  loop: true,
  loopedSlides: 6,
  slidesPerGroup: 1,
  spaceBetween: 0,
  navigation: {
    nextEl: '.btn-next',
  },
  modules: [Navigation, Keyboard],
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },
  mousewheel: {
    enabled: true,
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  watchOverflow: false,
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
    1440: {
      slidesPerView: 6,
    },
  },
});

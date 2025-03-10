import Swiper from 'swiper';
import 'swiper/css';
document.addEventListener('DOMContentLoaded', () => {
  const swiper = new Swiper('.projects-slider', {
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
      768: { slidesPerView: 2 },
      1024: { slidesPerView: 3 },
    },
  });

  console.log('Swiper instance created', swiper);
});
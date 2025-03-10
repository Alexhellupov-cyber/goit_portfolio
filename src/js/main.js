import './js/header';
import './js/hero';
import './js/about-me';
import './js/about-me-2';
import './js/benefits';
import './js/projects';
import './js/faq';
import './js/covers';
import './js/reviews';
import './js/work-together';
import './js/colors';

document.addEventListener('DOMContentLoaded', () => {
    const scrollUpButton = document.getElementById('scrollUp');
    const scrollThreshold = 300;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > scrollThreshold) {
        scrollUpButton.classList.remove('hidden');
      } else {
        scrollUpButton.classList.add('hidden');
      }
    });
  
    scrollUpButton.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    });
  });
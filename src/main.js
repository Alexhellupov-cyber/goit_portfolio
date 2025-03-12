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

// document.addEventListener('DOMContentLoaded', () => {
//   const scrollUpButton = document.getElementById('scrollUp');
//   const scrollThreshold = 300;

//   window.addEventListener('scroll', () => {
//     if (window.scrollY > scrollThreshold) {
//       scrollUpButton.classList.remove('hidden');
//     } else {
//       scrollUpButton.classList.add('hidden');
//     }
//   });

//   scrollUpButton.addEventListener('click', () => {
//     window.scrollTo({
//       top: 0,
//       behavior: 'smooth',
//     });
//   });
// });

function scrollingTopPage() {
  document.addEventListener('DOMContentLoaded', function () {
    const upButton = document.querySelector('.up-btn');

    upButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

      document.body.classList.add('scrolling');
    });

    window.addEventListener('scroll', function () {
      if (window.scrollY > 200) {
        upButton.classList.add('show');
      } else {
        upButton.classList.remove('show');
      }

      if (
        document.body.classList.contains('scrolling') &&
        window.scrollY === 0
      ) {
        document.body.classList.remove('scrolling');
      }
    });
  });
}

scrollingTopPage();

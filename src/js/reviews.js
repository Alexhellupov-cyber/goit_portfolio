import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import axios from 'axios';
import { swiper } from './reviews-swiper';

axios.defaults.baseURL = 'https://portfolio-js.b.goit.study';

const reviewsList = document.querySelector('.reviews-list');

if (!reviewsList) {
  console.error('❌ Element .reviews-list not found!');
}

const getReviews = async () => {
  try {
    const response = await axios.get('/api/reviews');
    return response.data;
  } catch (error) {
    console.error('⚠️ Houston, we have a problem! 🚀 Reviews failed to load:', error);
    return null; // Повертаємо null у разі помилки
  }
};

const createCardTemplate = ({ avatar_url, author, review }) => `
  <li class="reviews-list-item swiper-slide">
    <img
      src="${avatar_url}"
      alt="user-photo"
      onerror="this.src='/img/reviews/profile-photo.png'"
      class="reviews-list-item-icon"
      width="48"
      height="48"
    />
    <h3 class="reviews-list-item-title">${author}</h3>
    <p class="reviews-list-item-text">${review}</p>
  </li>
`;

const getCardInfo = async () => {
  try {
    const cardsData = await getReviews();

    if (cardsData === null) {
      iziToast.show({
        message: `🚨 Error 404: Reviews not found. But we’re looking! 👀`,
        color: 'red',
        position: 'topRight',
      });

      reviewsList.innerHTML = `<li class="error-case">Unfortunately, we can't find any reviews. Try again later.</li>`;
      return;
    }

    if (!cardsData.length) {

      iziToast.show({
        message: `❌ Reviews are currently lost in cyberspace. 🚀`,
        color: 'yellow',
        position: 'topRight',
      });

      reviewsList.innerHTML = `<li class="error-case">There are no reviews yet. Be the first one! 🚀</li>`;
      return;
    }

    const cardsTemplate = cardsData.map(createCardTemplate).join('');
    reviewsList.innerHTML = cardsTemplate;
  } catch (err) {
    console.error('⚠️ Houston, we have a problem! 🚀 Reviews failed to load:', err);

    if (swiper?.disable) swiper.disable();

    iziToast.show({
      message: `🚨 Error 404: Reviews not found. But we’re looking! 👀`,
      color: 'red',
      position: 'topRight',
    });

    reviewsList.innerHTML = `<li class="error-case">Unfortunately, we can't find any reviews. Try again later.</li>`;
  }
};

getCardInfo();
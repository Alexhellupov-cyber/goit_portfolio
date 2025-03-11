import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const BASE_URL = 'https://portfolio-js.b.goit.study/api';

async function postData(obj) {
  const response = await axios.post(`${BASE_URL}/requests`, obj);
  return response.data;
}

// Отримання посилань на DOM-елементи
const form = document.querySelector('#contactForm');
const footerEmailInput = document.querySelector('#email');
const footerCommentInput = document.querySelector('#comments');
const footerSendBtn = document.querySelector('.footer-send-btn');
const footerBackdrop = document.querySelector('.modal-overlay');
const modalWindowHeader = document.querySelector('.modal-title');
const modalWindowText = document.querySelector('.modal-description');
const modalCloseBtn = document.querySelector('.modal-close');

// Збереження позиції прокрутки перед оновленням
window.addEventListener('beforeunload', () => {
  localStorage.setItem('scrollPosition', window.scrollY);
});

// Відновлення даних із localStorage
const formNewState = JSON.parse(localStorage.getItem('savedUserInput')) || {};
if (formNewState.email) footerEmailInput.value = formNewState.email;
if (formNewState.comment) footerCommentInput.value = formNewState.comment;

// Валідація email
function validateEmail() {
  const emailPattern = /^\w+(\.\w+)?@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  return emailPattern.test(footerEmailInput.value.trim());
}

// Валідація коментаря
function validateComment() {
  return footerCommentInput.value.trim().length > 0;
}

// Оновлення стану кнопки "Send"
function updateSendButtonState() {
  footerSendBtn.disabled = !(validateEmail() && validateComment());
}

// Валідація полів і зміна стилів
footerEmailInput.addEventListener('input', () => {
  footerEmailInput.style.borderBottomColor = validateEmail()
    ? '#3CBC81'
    : '#E74A3B';
  updateSendButtonState();
  saveFormState();
});

footerCommentInput.addEventListener('input', () => {
  footerCommentInput.style.borderBottomColor = validateComment()
    ? '#3CBC81'
    : '#E74A3B';
  updateSendButtonState();
  saveFormState();
});

// Збереження введених даних у localStorage
function saveFormState() {
  localStorage.setItem(
    'savedUserInput',
    JSON.stringify({
      email: footerEmailInput.value.trim(),
      comment: footerCommentInput.value.trim(),
    })
  );
}

// Обробка відправки форми
form.addEventListener('submit', async function (evt) {
  evt.preventDefault();
  footerSendBtn.disabled = true;
  footerSendBtn.textContent = 'Sending...';

  const userInfo = {
    email: footerEmailInput.value.trim(),
    comment: footerCommentInput.value.trim(),
  };

  try {
    const response = await postData(userInfo);
    openBackdrop(response.title, response.message);
    iziToast.success({
      title: 'Success',
      message: 'Your request has been submitted.',
    });
    form.reset();
    localStorage.removeItem('savedUserInput');
    updateSendButtonState();
  } catch (error) {
    iziToast.error({
      title: 'Error',
      message: 'Failed to submit. Please, try again.',
    });
  } finally {
    footerSendBtn.disabled = false;
    footerSendBtn.textContent = 'Send';
  }
});

// Відкриття модального вікна
function openBackdrop(title, message) {
  if (!footerBackdrop || !modalWindowHeader || !modalWindowText) {
    return;
  }
  modalWindowHeader.textContent = title;
  modalWindowText.textContent = message;
  footerBackdrop.style.opacity = '1';
  footerBackdrop.classList.add('backdrop-is-open');
  document.body.style.overflow = 'hidden';
  window.addEventListener('keydown', onEscKeyPress);
}

// Закриття модального вікна
function closeBackdrop() {
  if (!footerBackdrop) {
    return;
  }
  footerBackdrop.classList.remove('backdrop-is-open');
  document.body.style.overflow = '';
  window.removeEventListener('keydown', onEscKeyPress);
}

// Обробник натискання Escape
function onEscKeyPress(event) {
  if (event.code === 'Escape') {
    closeBackdrop();
  }
}

modalCloseBtn.addEventListener('click', closeBackdrop);
footerBackdrop.addEventListener('click', event => {
  if (event.target === footerBackdrop) closeBackdrop();
});

document.addEventListener('keydown', onEscKeyPress);

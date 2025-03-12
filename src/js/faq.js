import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  new Accordion('.accordion-container', {
    showMultiple: true,
    duration: 300,
  });
});

const buttonSvgFaq = document.querySelectorAll('.faq-button');
const faqArrowIcon = document.querySelectorAll('.faq-arrow-icon')

buttonSvgFaq.forEach((button, index) => {
  button.addEventListener('click', function () {
    const icon = faqArrowIcon[index]; 

    if (icon.style.top === '10px') {
      icon.style.top = ''; 
    } else {
      icon.style.top = '10px'; 
    }
  });
});
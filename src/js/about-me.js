import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener('DOMContentLoaded', function () {
  
    new Accordion('.accordion-info-about-me-list', {
      duration: 300,
        showMultiple: true,
      openOnInit: [0],
    });
    
});
 const firstelement = document.querySelector('.first-element-about');
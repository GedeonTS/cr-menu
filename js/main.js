const mobileNavEl = document.getElementById('mobile-nav');
const btnOpenEl = document.querySelector('.menu-bars');
const btnCloseEl = document.querySelector('.close-btn');

btnOpenEl.addEventListener('click', () => {
  mobileNavEl.classList.add('menu-active');
});

btnCloseEl.addEventListener('click', () => {
  mobileNavEl.classList.remove('menu-active');
});
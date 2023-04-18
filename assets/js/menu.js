const menuButton = document.querySelector('#mobile-menu');
const menu = document.querySelector('.menu__list');
const burgerIcon = document.querySelector('.burger-icon');
const closeIcon = document.querySelector('.close-icon');
menuButton.addEventListener('click', () => { menu.classList.toggle('menu-open');menu.classList.toggle('menu-mobile-panel');});
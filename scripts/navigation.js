const menuBtn = document.querySelector('#menu-btn');
const nav = document.querySelector('.navigation');

menuBtn.addEventListener('click', () => {
    nav.classList.toggle('show');
    menuBtn.setAttribute('aria-expanded', nav.classList.contains('show'));
});
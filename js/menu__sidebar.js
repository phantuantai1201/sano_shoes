const navbarBtn = document.querySelector('.navbar__menu');
const navbarMenu = document.querySelector('.navigation__menu');
const closeBtn = document.querySelector('.close__btn');
const searchForm = document.querySelector('.search__form');
const searchBtn = document.querySelector('.search__btn');
const cartBtn = document.querySelector('.cart__icon');
const cartClose = document.querySelector('.close__cart');
const cartList = document.querySelector('.cart__mini');

cartBtn.addEventListener('click', () => cartList.classList.toggle('showcart'));
cartClose.addEventListener('click', () => cartList.classList.remove('showcart'));

navbarBtn.addEventListener('click', function() {
    navbarMenu.classList.toggle('active');
})
closeBtn.addEventListener('click', function() {
    navbarMenu.classList.remove('active')
})



searchBtn.addEventListener('click', function() {
    searchForm.classList.toggle('done');
})

window.addEventListener('scroll', function() {
    searchForm.classList.remove('done');
})

window.addEventListener('scroll', function() {
    navbarMenu.classList.remove('active');
})
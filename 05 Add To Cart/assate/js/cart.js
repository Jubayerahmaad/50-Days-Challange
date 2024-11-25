let iconCart = document.querySelector('.cart-icon');
let closeIcon = document.querySelector('.cart-tap .close');
let body = document.querySelector('body');

// open & close tap 
iconCart.addEventListener('click', () => {
    body.classList.toggle('activeTapCart');
});

closeIcon.addEventListener('click', () => {
    body.classList.toggle('activeTapCart');
});
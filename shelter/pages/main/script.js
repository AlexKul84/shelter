/* hamburger menu */

const hamburger = document.querySelector('.hamburger');
const hamburger_menu = document.querySelector('.hamburger_menu');
const menu_container = document.querySelector('.menu_container');

function toggleMenu() {
    hamburger.classList.toggle('open');
    hamburger_menu.classList.toggle('open');
    menu_container.classList.toggle('open');
}
hamburger.addEventListener('click', toggleMenu);

const navLinks = document.querySelectorAll('.menu_item_link');

function closeMenu(event) {
    if (event.target.classList.contains('menu_item_link')) {
        hamburger.classList.remove('open')
        hamburger_menu.classList.remove('open')
        menu_container.classList.remove('open')
    }
}

navLinks.forEach((el) => el.addEventListener('click', closeMenu));

/* end hamburger menu */

/* slider */

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')
let img = document.querySelector('.pets_slider_content')
let images = document.querySelectorAll('.cart')
let leftInit = 360
let count = 3

let position = 0

prev.onclick = function() {
    position += leftInit*count
    if (position > 0) position = -(images.length - 1)*leftInit
    img.style.left = position + 'px'
}

next.onclick = function() {
    position -= leftInit*count
    // position = Math.max(position, -leftInit * (images.length - count))
    if (position <= -(images.length - 1)*leftInit) position = 0
    img.style.left = position + 'px'
}

/* end slider */
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
let gap = parseInt(window.getComputedStyle(img).columnGap)
let leftInit = (270 + gap)
let count = 3

let position = 0

prev.onclick = function() {
    position += leftInit*count
    if (position > 0) position = -2160
    img.style.left = position + 'px'
}

next.onclick = function() {
    position -= leftInit*count
    // position = Math.max(position, -leftInit * (images.length - count))
    if (position <= -(images.length - 1)*leftInit) position = 0
    img.style.left = position + 'px'
}

/* end slider */

/* popup */

//Jennifer
const jennifer = document.querySelector('.jennifer')
const jennifer_popup = document.querySelector('.popup_wrapper.jennifer_popup')
const jennifer_popup_btn = document.querySelector('.popup_btn_jennifer')

function openPopupJennifer() {
    jennifer_popup.classList.add('open_popup');
}
jennifer.addEventListener('click', openPopupJennifer);

function closePopupJennifer() {
    jennifer_popup.classList.remove('open_popup');
}
jennifer_popup_btn.addEventListener('click', closePopupJennifer);

//Sofia

const sophia = document.querySelector('.sophia')
const sophia_popup = document.querySelector('.popup_wrapper.sophia_popup')
const sophia_popup_btn = document.querySelector('.popup_btn_sofia')

function openPopupSophia() {
    sophia_popup.classList.add('open_popup');
}
sophia.addEventListener('click', openPopupSophia);

function closePopupSophia() {
    sophia_popup.classList.remove('open_popup');
}
sophia_popup_btn.addEventListener('click', closePopupSophia);


/* end popup */
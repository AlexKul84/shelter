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

const html_tag = document.documentElement

//Jennifer
const close_wrapper_jennifer = document.querySelector('.close_wrapper_jennifer')
const jennifer = document.querySelector('.jennifer')
const jennifer_popup = document.querySelector('.popup_wrapper.jennifer_popup')
const jennifer_popup_btn = document.querySelector('.popup_btn_jennifer')

function openPopupJennifer() {
    jennifer_popup.classList.add('open_popup');
    close_wrapper_jennifer.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
jennifer.addEventListener('click', openPopupJennifer);

function closePopupJennifer() {
    jennifer_popup.classList.remove('open_popup');
    close_wrapper_jennifer.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')

}
jennifer_popup_btn.addEventListener('click', closePopupJennifer);
close_wrapper_jennifer.addEventListener('click', closePopupJennifer);

//Sofia
const close_wrapper_sophia = document.querySelector('.close_wrapper_sophia')
const sophia = document.querySelector('.sophia')
const sophia_popup = document.querySelector('.popup_wrapper.sophia_popup')
const sophia_popup_btn = document.querySelector('.popup_btn_sophia')

function openPopupSophia() {
    sophia_popup.classList.add('open_popup');
    close_wrapper_sophia.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
sophia.addEventListener('click', openPopupSophia);

function closePopupSophia() {
    sophia_popup.classList.remove('open_popup');
    close_wrapper_sophia.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
sophia_popup_btn.addEventListener('click', closePopupSophia);
close_wrapper_sophia.addEventListener('click', closePopupSophia);


//woody
const close_wrapper_woody = document.querySelector('.close_wrapper_woody')
const woody = document.querySelector('.woody')
const woody_popup = document.querySelector('.popup_wrapper.woody_popup')
const woody_popup_btn = document.querySelector('.popup_btn_woody')

function openPopupWoody() {
    woody_popup.classList.add('open_popup');
    close_wrapper_woody.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
woody.addEventListener('click', openPopupWoody);

function closePopupWoody() {
    woody_popup.classList.remove('open_popup');
    close_wrapper_woody.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
woody_popup_btn.addEventListener('click', closePopupWoody);
close_wrapper_woody.addEventListener('click', closePopupWoody);

//scarlett
const close_wrapper_scarlett = document.querySelector('.close_wrapper_scarlett')
const scarlett = document.querySelector('.scarlett')
const scarlett_popup = document.querySelector('.popup_wrapper.scarlett_popup')
const scarlett_popup_btn = document.querySelector('.popup_btn_scarlett')

function openPopupScarlett() {
    scarlett_popup.classList.add('open_popup');
    close_wrapper_scarlett.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
scarlett.addEventListener('click', openPopupScarlett);

function closePopupScarlett() {
    scarlett_popup.classList.remove('open_popup');
    close_wrapper_scarlett.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
scarlett_popup_btn.addEventListener('click', closePopupScarlett);
close_wrapper_scarlett.addEventListener('click', closePopupScarlett);

//katrine
const close_wrapper_katrine = document.querySelector('.close_wrapper_katrine')
const katrine = document.querySelector('.katrine')
const katrine_popup = document.querySelector('.popup_wrapper.katrine_popup')
const katrine_popup_btn = document.querySelector('.popup_btn_katrine')

function openPopupKatrine() {
    katrine_popup.classList.add('open_popup');
    close_wrapper_katrine.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
katrine.addEventListener('click', openPopupKatrine);

function closePopupKatrine() {
    katrine_popup.classList.remove('open_popup');
    close_wrapper_katrine.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
katrine_popup_btn.addEventListener('click', closePopupKatrine);
close_wrapper_katrine.addEventListener('click', closePopupKatrine);

//timmy
const close_wrapper_timmy = document.querySelector('.close_wrapper_timmy')
const timmy = document.querySelector('.timmy')
const timmy_popup = document.querySelector('.popup_wrapper.timmy_popup')
const timmy_popup_btn = document.querySelector('.popup_btn_timmy')

function openPopupTimmy() {
    timmy_popup.classList.add('open_popup');
    close_wrapper_timmy.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
timmy.addEventListener('click', openPopupTimmy);

function closePopupTimmy() {
    timmy_popup.classList.remove('open_popup');
    close_wrapper_timmy.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
timmy_popup_btn.addEventListener('click', closePopupTimmy);
close_wrapper_timmy.addEventListener('click', closePopupTimmy);

//freddie
const close_wrapper_freddie = document.querySelector('.close_wrapper_freddie')
const freddie = document.querySelector('.freddie')
const freddie_popup = document.querySelector('.popup_wrapper.freddie_popup')
const freddie_popup_btn = document.querySelector('.popup_btn_freddie')

function openPopupFreddie() {
    freddie_popup.classList.add('open_popup');
    close_wrapper_freddie.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
freddie.addEventListener('click', openPopupFreddie);

function closePopupFreddie() {
    freddie_popup.classList.remove('open_popup');
    close_wrapper_freddie.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
freddie_popup_btn.addEventListener('click', closePopupFreddie);
close_wrapper_freddie.addEventListener('click', closePopupFreddie);

//charly
const close_wrapper_charly = document.querySelector('.close_wrapper_charly')
const charly = document.querySelector('.charly')
const charly_popup = document.querySelector('.popup_wrapper.charly_popup')
const charly_popup_btn = document.querySelector('.popup_btn_charly')

function openPopupCharly() {
    charly_popup.classList.add('open_popup');
    close_wrapper_charly.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
charly.addEventListener('click', openPopupCharly);

function closePopupCharly() {
    charly_popup.classList.remove('open_popup');
    close_wrapper_charly.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
charly_popup_btn.addEventListener('click', closePopupCharly);
close_wrapper_charly.addEventListener('click', closePopupCharly);

//Jennifer1
const close_wrapper_jennifer1 = document.querySelector('.close_wrapper_jennifer1')
const jennifer1 = document.querySelector('.jennifer1')
const jennifer_popup1 = document.querySelector('.popup_wrapper.jennifer_popup1')
const jennifer_popup_btn1 = document.querySelector('.popup_btn_jennifer1')

function openPopupJennifer1() {
    jennifer_popup1.classList.add('open_popup');
    close_wrapper_jennifer1.classList.add('open_popup');
    html_tag.classList.add('open_popup')
}
jennifer1.addEventListener('click', openPopupJennifer1);

function closePopupJennifer1() {
    jennifer_popup1.classList.remove('open_popup');
    close_wrapper_jennifer1.classList.remove('open_popup');
    html_tag.classList.remove('open_popup')
}
jennifer_popup_btn1.addEventListener('click', closePopupJennifer1);
close_wrapper_jennifer1.addEventListener('click', closePopupJennifer1);

/* end popup */
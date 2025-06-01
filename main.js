const menuTrigger = document.querySelector('.menu-trigger');
const menu = document.querySelector('.menu');

menuTrigger.addEventListener('click', function() {
    if (getComputedStyle(menu).opacity === '0') {
        menu.style.opacity = '1';
    } else {
        menu.style.opacity = '0';
    }
});

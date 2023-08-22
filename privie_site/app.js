const mobile = document.getElementsByClassName('mobile-menu')[0];
const nav_items = document.getElementsByClassName('nav-items')[0];

mobile.addEventListener('click', () => {
    nav_items.classList.toggle('active')
})
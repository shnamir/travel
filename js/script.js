let btnMenu = document.querySelector('.btn_menu');
let menu = document.querySelector ('.menu');


btnMenu.addEventListener('click', function() {
    btnMenu.classList.toggle('active');
    menu.classList.toggle('active');
})
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('open');
}

function scrollwindow(){
    window.scrollBy(1800,900);
 }
 function myfun(){
    window.open('http://127.0.0.1:5500/index2.html');
}
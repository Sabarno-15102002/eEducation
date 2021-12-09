burger = document.querySelector('.burger');
navList = document.querySelector('.nav-list');
navbar = document.querySelector('.navbar');
rightNav = document.querySelector('.rightNav');

burger.addEventListener('click',()=>
{
    navList.classList.toggle('v-class-resp');
    rightNav.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
});
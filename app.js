let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');
let searchBar = document.getElementById('js-search-bar');
let inputField = document.getElementById('bar-search');
let flag = false;

navBarToggle.addEventListener('click', function () {
    
    mainNav.classList.toggle('active');
});
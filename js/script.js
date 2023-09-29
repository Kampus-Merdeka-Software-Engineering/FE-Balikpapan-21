// Toogle Class Active
const navbarList = document.querySelector('.navbar-list');


document.querySelector('#hamburger-menu').onclick = () => {
navbarList.classList.toggle('active');
};

//onclick Outside Sidebar
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e){
    if(!hamburger.contains(e.target) && !navbarList.contains(e.target)) {
        navbarList.classList.remove('active');
    }
})
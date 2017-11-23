var hamburgerIcon = document.querySelector(".fa.fa-bars");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navLinks.style.opacity = navOpacity;

}
hamburgerIcon.addEventListener("click", showMenu);
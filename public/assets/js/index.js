var hamburgerIcon = document.querySelector(".fa.fa-bars");
var hamburgerIconBackground = document.querySelector(".hamburgerBackground");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0;
var iconBackgroundColor = "rgba(255,255,255,0.2)";

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navOpacity === 1 ? iconBackgroundColor = "rgba(255,255,255,0.2)" : iconBackgroundColor = "none";
    navOpacity === 1 ? hamburgerIcon.style.transform = "rotate(90deg)" : hamburgerIcon.style.transform = "rotate(0deg)";
    hamburgerIconBackground.style.background = iconBackgroundColor;
    navLinks.style.opacity = navOpacity;
}
hamburgerIcon.addEventListener("click", showMenu);

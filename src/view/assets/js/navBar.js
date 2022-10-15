const hamburgerIcon = document.querySelector(".fa.fa-bars");
const hamburgerIconBackground = document.querySelector(".hamburgerBackground");
const navLinks = document.querySelector(".navigationLinks");

let navOpacity = 0;

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;

    hamburgerIconBackground.style.background = navOpacity === 1 ? "rgba(255,255,255,0.2)" : "none";
    hamburgerIcon.style.transform = navOpacity === 1 ? "rotate(90deg)" : "rotate(0deg)";

    navLinks.style.opacity = navOpacity;
}


hamburgerIcon.addEventListener("click", showMenu);

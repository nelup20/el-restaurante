var hamburgerIcon = document.querySelector(".fa.fa-bars");
var hamburgerIconBackground = document.querySelector(".hamburgerBackground");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0;
var iconBackgroundColor = "rgba(255,255,255,0.2)";
var reservePart = document.querySelector(".reservationPart");
var aboutPart = document.querySelector(".aboutPart");
var firstTwoSpecialities = document.querySelector("#firstTwoSpecialities");
var lastTwoSpecialities = document.querySelector("#lastTwoSpecialities");

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navOpacity === 1 ? iconBackgroundColor = "rgba(255,255,255,0.2)" : iconBackgroundColor = "none";
    navOpacity === 1 ? hamburgerIcon.style.transform = "rotate(90deg)" : hamburgerIcon.style.transform = "rotate(0deg)";
    hamburgerIconBackground.style.background = iconBackgroundColor;
    navLinks.style.opacity = navOpacity;
};

function revealReservation(e){
    setTimeout(function(){
        if(window.pageYOffset >= 860){
            reservePart.style.opacity = 1;
            aboutPart.style.opacity = 1;
        };
        if(window.pageYOffset >= 2800){
            firstTwoSpecialities.style.opacity = 1;
            lastTwoSpecialities.style.opacity = 1;
        }
    }, 150);
};

hamburgerIcon.addEventListener("click", showMenu);
window.addEventListener("scroll", revealReservation)
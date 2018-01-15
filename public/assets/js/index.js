
var reservePart = document.querySelector(".reservationPart");
var aboutPart = document.querySelector(".aboutPart");
var firstTwoSpecialities = document.querySelector("#firstTwoSpecialities");
var lastTwoSpecialities = document.querySelector("#lastTwoSpecialities");

window.onload = function(){
    reservePart.style.opacity = 1;
    setTimeout(function(){
        aboutPart.style.opacity = 1;
    }, 500);
}

function revealReservation(e){
    setTimeout(function(){
        if(window.innerHeight < 900 && window.pageYOffset >= 1400){
            firstTwoSpecialities.style.opacity = 1;
            lastTwoSpecialities.style.opacity = 1;
        };
        if(window.innerHeight > 900 && window.pageYOffset >= 3500){
            firstTwoSpecialities.style.opacity = 1;
            lastTwoSpecialities.style.opacity = 1;
        }
    }, 150);
};

window.addEventListener("scroll", revealReservation)
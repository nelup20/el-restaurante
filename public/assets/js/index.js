
var reservePart = document.querySelector(".reservationPart");
var aboutPart = document.querySelector(".aboutPart");
var firstTwoSpecialities = document.querySelector("#firstTwoSpecialities");
var lastTwoSpecialities = document.querySelector("#lastTwoSpecialities");

function revealReservation(e){
    setTimeout(function(){
        if(window.innerHeight < 900 && window.pageYOffset >= 860){
            reservePart.style.opacity = 1;
            aboutPart.style.opacity = 1;
        };
        if(window.innerHeight < 900 && window.pageYOffset >= 2800){
            firstTwoSpecialities.style.opacity = 1;
            lastTwoSpecialities.style.opacity = 1;
        };
        if(window.innerHeight > 900 && window.pageYOffset >= 900){
            reservePart.style.opacity = 1;
            aboutPart.style.opacity = 1;
        };
        if(window.innerHeight > 900 && window.pageYOffset >= 3500){
            firstTwoSpecialities.style.opacity = 1;
            lastTwoSpecialities.style.opacity = 1;
        }
    }, 150);
};

window.addEventListener("scroll", revealReservation)
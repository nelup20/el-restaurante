
const img1 = document.querySelector("#crew1");
const img2 = document.querySelector("#crew2");
const img3 = document.querySelector("#crew3");

function reveal(){
    setTimeout(function(){
        if(window.pageYOffset >= 250 && window.innerHeight <= 900){
            img1.style.transform = "translateX(0%)";
        }

        if(window.pageYOffset >= 780 && window.innerHeight <= 900){
            img2.style.transform = "translateX(0%)";
        }

        if(window.pageYOffset >= 1350 && window.innerHeight <= 900){
            img3.style.opacity = "1";
        }

        if(window.pageYOffset >= 250 && window.innerHeight > 900){
            img1.style.transform = "translateX(0%)";
        }

        if(window.pageYOffset >= 900 && window.innerHeight > 900){
            img2.style.transform = "translateX(0%)";
        }

        if(window.pageYOffset >= 1450 && window.innerHeight > 900){
            img3.style.opacity = "1";
        }
    }, 500);

}

document.addEventListener("scroll", reveal); 

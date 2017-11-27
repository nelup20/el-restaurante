var hamburgerIcon = document.querySelector(".fa.fa-bars");
var hamburgerIconBackground = document.querySelector(".hamburgerBackground");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0;
var iconBackgroundColor = "rgba(255,255,255,0.2)";
var leftFlag = document.querySelector("#leftFlag");
var rightFlag = document.querySelector("#rightFlag");
var inputFlag = document.querySelector("#inputFlag");
var leftMug = document.querySelector("#leftMug");
var rightMug = document.querySelector("#rightMug");
var inputMug = document.querySelector("#inputMug");

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navOpacity === 1 ? iconBackgroundColor = "rgba(255,255,255,0.2)" : iconBackgroundColor = "none";
    navOpacity === 1 ? hamburgerIcon.style.transform = "rotate(90deg)" : hamburgerIcon.style.transform = "rotate(0deg)";
    hamburgerIconBackground.style.background = iconBackgroundColor;
    navLinks.style.opacity = navOpacity;
};

function addAmount(input){
    input.value >= 25 ? input.value = 25 : input.value++;
    if(input.value < 0){
        input.value = 0;
    }
};
function subtractAmount(input){
    input.value <= 0 ? input.value = 0 : input.value--;
    if(input.value > 25){
        input.value = 25
    }
};

leftFlag.addEventListener("click", function(){
    subtractAmount(inputFlag);
});

rightFlag.addEventListener("click", function(){
    addAmount(inputFlag);
});

leftMug.addEventListener("click", function(){
    subtractAmount(inputMug);
});
rightMug.addEventListener("click", function(){
    addAmount(inputMug);
});

hamburgerIcon.addEventListener("click", showMenu);
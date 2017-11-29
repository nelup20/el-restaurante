var hamburgerIcon = document.querySelector(".fa.fa-bars");
var hamburgerIconBackground = document.querySelector(".hamburgerBackground");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0;
var iconBackgroundColor = "rgba(255,255,255,0.2)";
var inputFlag = document.querySelector("#inputFlag");
var inputMug = document.querySelector("#inputMug");
var btnFlag = document.querySelector("#flagbuyBtn");

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navOpacity === 1 ? iconBackgroundColor = "rgba(255,255,255,0.2)" : iconBackgroundColor = "none";
    navOpacity === 1 ? hamburgerIcon.style.transform = "rotate(90deg)" : hamburgerIcon.style.transform = "rotate(0deg)";
    hamburgerIconBackground.style.background = iconBackgroundColor;
    navLinks.style.opacity = navOpacity;
};


inputFlag.addEventListener("keyup", function(){
    if(inputFlag.value > 25){
        inputFlag.value = 25;
    };
    if(inputFlag.value < 0){
        inputFlag.value = 0;
    }
    btnFlag.textContent = "$" + (inputFlag.value * 0.99).toFixed(2);
});


hamburgerIcon.addEventListener("click", showMenu);
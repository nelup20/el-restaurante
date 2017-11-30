var hamburgerIcon = document.querySelector(".fa.fa-bars");
var hamburgerIconBackground = document.querySelector(".hamburgerBackground");
var navLinks = document.querySelector(".navigationLinks");
var navOpacity = 0;
var iconBackgroundColor = "rgba(255,255,255,0.2)";
var allInputs = document.querySelectorAll("input");


allInputs.forEach(function(i){                                      // Loops through the inputs of each item (it's a nodelist) and declares the button next to it (i.nextElementSibling.firstChild)
    var itemBtn = i.nextElementSibling.firstChild;                  // then it extracts the original/actual price for 1 unit and stores it in a variable. Then we simply add an event listener to the
    var initialPrice = itemBtn.textContent.split("$");              // input itself and make sure the user CANT add more than 25 Units or less than 0. Then the Price in the button updates accordingly
    initialPrice.shift();
    i.addEventListener("keyup", function(){
        if(i.value > 25){
            i.value = 25;
        };
        if(i.value < 0){
            i.value = 0;
        }
        itemBtn.textContent = "$" + (i.value * initialPrice).toFixed(2);
    });
})

function showMenu(){
    navOpacity === 0 ? navOpacity = 1 : navOpacity = 0;
    navOpacity === 1 ? iconBackgroundColor = "rgba(255,255,255,0.2)" : iconBackgroundColor = "none";
    navOpacity === 1 ? hamburgerIcon.style.transform = "rotate(90deg)" : hamburgerIcon.style.transform = "rotate(0deg)";
    hamburgerIconBackground.style.background = iconBackgroundColor;
    navLinks.style.opacity = navOpacity;
};

hamburgerIcon.addEventListener("click", showMenu);
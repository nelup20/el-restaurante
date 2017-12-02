
var allInputs = document.querySelectorAll("input");


allInputs.forEach(function(i){                                      // Loops through the inputs of each item (it's a nodelist) and declares the button next to it (i.nextElementSibling.firstChild)
    var itemBtn = i.nextElementSibling.firstChild;                  // then it extracts the original/actual price for 1 unit and stores it in a variable. Then we simply add an event listener to the
    var initialPrice = itemBtn.textContent.split("$");              // input itself and make sure the user CANT add more than 25 Units or less than 0. Then the Price in the button updates accordingly
    initialPrice.shift();
    function changePrice(){
        if(i.value > 25){
            i.value = 25;
        };
        if(i.value < 0){
            i.value = 0;
        }
        itemBtn.textContent = "$" + (i.value * initialPrice).toFixed(2);
    };
    i.addEventListener("keyup", changePrice);
    i.addEventListener("click", changePrice);
})

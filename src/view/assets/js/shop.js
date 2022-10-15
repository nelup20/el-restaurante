
const inputList = document.querySelectorAll("input");

inputList.forEach(input => {
    const itemBtn = input.nextElementSibling.firstChild;
    const initialPrice = itemBtn.textContent.split("$");

    initialPrice.shift();

    const changePrice = () => {
        if(input.value > 25) input.value = "25";
        if(input.value < 0) input.value = "0";
        itemBtn.textContent = `$${(input.value * initialPrice).toFixed(2)}`;
    }

    input.addEventListener("keyup", changePrice);
    input.addEventListener("click", changePrice);
})

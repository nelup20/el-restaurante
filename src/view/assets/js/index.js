const reservePart = document.querySelector(".reservationPart");
const aboutPart = document.querySelector(".aboutPart");
const firstTwoSpecialities = document.getElementById("firstTwoSpecialities");
const lastTwoSpecialities = document.getElementById("lastTwoSpecialities");
const bookBtn = document.getElementById("book-table-button");
const menu = document.getElementsByClassName("menu")[0];

window.onload = () => {
  reservePart.style.opacity = "1";
  setTimeout(() => aboutPart.style.opacity = "1", 700);
};

reveal = () => {
    setTimeout(function() {
        if (window.innerHeight < 900 && window.pageYOffset >= 1400 ||
            window.innerHeight > 900 && window.pageYOffset >= 3500 ||
            window.innerWidth >= 1920 && window.pageYOffset >= 1200) {
            firstTwoSpecialities.style.opacity = "1";
            lastTwoSpecialities.style.opacity = "1";
        }

        if (window.innerHeight > 700 && window.pageYOffset >= 2300) {
            menu.style.opacity = "1"
            menu.classList.add("menu animated fadeInUp");
        }
    }, 150);
}

bookBtn.addEventListener("click", function(){
    Swal.fire({
        title: 'Sorry!',
        text: 'All tables are full, please try another time',
        type: 'error',
        confirmButtonText: 'Ok'
      })
})

window.addEventListener("scroll", reveal);

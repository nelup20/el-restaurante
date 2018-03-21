var reservePart = document.querySelector(".reservationPart");
var aboutPart = document.querySelector(".aboutPart");
var firstTwoSpecialities = document.getElementById("firstTwoSpecialities");
var lastTwoSpecialities = document.getElementById("lastTwoSpecialities");
var bookBtn = document.getElementById("book-table-button");
var menu = document.getElementsByClassName("menu")[0];
window.onload = function() {
  reservePart.style.opacity = 1;
  setTimeout(function() {
    aboutPart.style.opacity = 1;
  }, 700);
};

function reveal(e) {
  var timeout = setTimeout(function() {
    if (window.innerHeight < 900 && window.pageYOffset >= 1400 || window.innerHeight > 900 && window.pageYOffset >= 3500 || window.innerWidth >= 1920 && window.pageYOffset >= 1200) {
      firstTwoSpecialities.style.opacity = 1;
      lastTwoSpecialities.style.opacity = 1;
    }
    if (window.innerHeight > 700 && window.pageYOffset >= 2300) {
       menu.style.opacity = "1"
       menu.classList = "menu animated fadeInUp";
      }
  }, 150);
}

bookBtn.addEventListener("click", function(){
    swal({
        title: 'Sorry!',
        text: 'All tables are full, please try another time',
        type: 'error',
        confirmButtonText: 'Ok'
      })
})

window.addEventListener("scroll", reveal);

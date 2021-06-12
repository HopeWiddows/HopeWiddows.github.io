/*getting the buttom element */
mybutton = document.getElementById("myBtn");

/* show the button if/when the user scrolls down 20px from the top of the page */
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

/*have the screen jump straight back to the top of the page if the user clicks the button */
function topFunction() {
  document.body.scrollTop = 0; /* for Safari browser*/
  document.documentElement.scrollTop = 0; /* for Chrome, Firefox, IE and Opera browsers */
}
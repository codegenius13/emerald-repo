// HEADER SECTION OF THE WEBPAGE
  // COLLAPSABLE NAV
$(function () { // Same as document .addEventListener("DONContentLoaded"...
    
    // Same as document .querySelector("#navbarToggle").addEventListener("blur"...
    $("#navbarToggle").blur(function (event) {
        var screenWidth = window.innerWidth;
        if (screenWidth < 708) {
            $("#collapsable-nav").collapse('hide');
        }
    });
    window.addEventListener("scroll", function () {
        var header = document.querySelector ("header");
        header.classList.toggle("sticky", window.scrollY > 20)
    });
});
// END COLLAPSABLE NAV
// WHEN THE USER SCROLLS DOWN THE PAGE
 // Get the button
 let mybutton =
 document.getElementById("myBtn")

 // When the user scrolls down 20px from the top of th document show the button
 window.onscroll = function () {
  scrollFunction ()
 };
 function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
      mybutton.style.display = "block"
  }
  else {
      mybutton.style.display = "none"
  }
 }
 // When the user clicks on the button, scroll to the top of the document
 function topFuntion() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
 }
 // END SCROLL SECTION

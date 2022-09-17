// Event handling
//document.addEventListener("DOMContentLoaded")
//function (event) {

function sayHello(event) {
    this.textContent = "Said it";
    var name =
    document.getElementById("name").ariaValueMax;
    var message = " <h2>Hello" + name + "! </h2>";

    document
     .getElementById("content")
     .innerHTML = message;

     if (name === "student") {
        var title =
         document
          .querySelector("#title")
          .textContent;
     title += "Loving it!"
     document
       .querySelector("#title")
       .textContent = title;
     }
    }
    // Unobstructive event binding
    document.querySelector("button")
     .addEventListener("click", sayHello);

    //document.querySelector("body")
    //.addEventListener("mousemove",
    // function (event) {
      //  if (event.shiftKey === true) {
          //  console.log("x: " + event.clientX)
          //  console.log ("y " + event.clientY)
       // }
    // }
    //);
//};

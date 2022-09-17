//Event handling
document.addEventListener("DOMContentLoaded",
function (event) {
    
    //Unobstructive event binding
    document.querySelector("button")
    .addEventListener("click", )
    function name() 
    {
         
    //Call server to get the name
    $ajaxUtils
    .sendGETRequest ("data/name.txt",
    function (request) {
        var name = request.responseText;
        document.querySelector("#content")
        .innerHTML = "<h2>Hello" + name + "! </h2>";
    }
    );

    }
 }

);

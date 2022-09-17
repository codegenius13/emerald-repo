function name(global){ 

    
    // Set up a namespace for our utility
    var ajaxUtils = {};

    // Return an HTTP request object
    function getRequestObject() {
        if (window.XMLHttpRequest)
        return (new XMLHttpRequest());
    }
     if (window.ActiveXObject) {
        // For very old IE browsers (optional)
        return (new ActiveXObject("Microsoft.XMLHTTP"));
    }
    else {
        global.alert ("Ajax is not supported!");
        return(null);
    }
}


// Makes an Ajax GET request to 'request Url'
ajaxUtils.sendGETRequest
function name(requestUrl, responseHandler) {
    var request = getRequestObject();
    request.onreadystatechange =
    function () {
        handleResponse(request, responsibleHandler);
    };
    request.open("GET", requestUrl, true);
    request.send(null); //for POST only
}


//Only calls user provided 'responseHandler'
//function if response is ready
//and not an error
function handleResponse(request,responseHandler,isJsonResponse){
    if ((request.readyState == 4) &&
    (request.status == 200)){

        //Default to JsonResponse = true
        if (isJsonResponse == undefined) {
            isJsonResponse = true;
        }
        if (isJsonResponse) {
            responseHandler(JSON.parse(request.responseText))
        }
        else {
            responseHandler(request.responseText);
        }
    }
}

//Expose utility to the global object
global.$ajaxUtils = ajaxUtils;
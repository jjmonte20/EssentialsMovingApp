// First things first, lets' make the request work once, then we can work on repeating it after getting the info once

// Let's start by getting varibles for what the requests are from the user

var userQuery = $("#userInput").val();

// This value should be whatever the user types, best practice would be to be as specific as possible, but we need 
// to have this autocomplete in case the user mispells the place they're looking for or they look at something that's 
// not super specific


$(".btn").on("click", function(){

    //need to define query url here, so that it is determined when the user presses the button
    var queryUrl = "https://maps.googleapis.com/maps/api/place/textsearch/json?input=" + userQuery + "inputtype=textquery&fields=";

    //need the ajax request
    $.ajax({
        url: queryUrl,
        method: "GET"
    })
        // Then figure out what comes back from the API, first let's console log the result
        .then(function(response) {
            
            // Let's store the data in a variable
            var results = response;
            console.log(results);
        })
})
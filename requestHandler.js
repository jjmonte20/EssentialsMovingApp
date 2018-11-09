// First things first, lets' make the request work once, then we can work on repeating it after getting the info once

// Let's start by getting varibles for what the requests are from the user



$(document.body).on("click", ".btn",function(){

    var userInput = $("#userInput").val().trim();
    // var usrInp = userInput.replace(/ /gi, "+");
    // var btnInput = $(this).attr("data-name");
    var usrInp = userInput.replace(/ /gi, "+");

    console.log(userInput);
    console.log(usrInp);
    var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=gas+stations+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    console.log(queryUrl);

    $.ajax({
        url: queryUrl,
        method: "GET"
    }).then(function(response) {
            //storing response.results into a variable to make it easier on myself
            var myResults = response.results;

            myResults.length = 5;

        for (var i = 0; i < myResults.length; i++){

            // Only take action if the result is less than 4
            // if (myResults[i] < 4) {

            //create a div
            var rDiv = $("<div>");

            //store div address
            var address = myResults[i].formatted_address;

            // create text for the result item's address
            var p = $("<p>").text("Address: " + address);

            // append the paragraph
            rDiv.append(p);

            // append so that the first items on the list show first
            $(".resultsHere").prepend(rDiv);
            // console.log(myResults[i].formatted_address);
            // }
        }
        console.log(myResults);
    });


    //These work, please uncomment 1 additional one to test that the results can show on multiple cards, then uncomment all when we know it works on all of them

    // var userInput = $("#userInput").val().trim();
    // // var usrInp = userInput.replace(/ /gi, "+");
    // // var btnInput = $(this).attr("data-name");
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=hospitals+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    // });
    // var userInput = $("#userInput").val().trim();
    // // var usrInp = userInput.replace(/ /gi, "+");
    // // var btnInput = $(this).attr("data-name");
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=schools+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    // });
    // var userInput = $("#userInput").val().trim();
    // // var usrInp = userInput.replace(/ /gi, "+");
    // // var btnInput = $(this).attr("data-name");
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=grocery+stores+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    // });
    // var userInput = $("#userInput").val().trim();
    // // var usrInp = userInput.replace(/ /gi, "+");
    // // var btnInput = $(this).attr("data-name");
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=post+offices+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
    //     console.log(response);
    // });

    
});

// This value should be whatever the user types, best practice would be to be as specific as possible, but we need 
// to have this autocomplete in case the user mispells the place they're looking for or they look at something that's 
// not super specific

/*
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
*/
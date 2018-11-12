// First things first, lets' make the request work once, then we can work on repeating it after getting the info once

// Let's start by getting varibles for what the requests are from the user



$(document.body).on("click", "#submitButton",function(event){
    
    event.preventDefault();
    var userInput = $("#inputLocation").val().trim();
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
            // console.log(myResults);

            //cutting the results to 5
            myResults.length = 5;
            console.log(myResults);

        i=0;
        function mkCard() {
            console.log(i);
        if (i < 5) {
            console.log("test");
            //create a div
            var rDiv = $("<div>");
            rDiv.attr("id","div"+i)
            //store div address
            var address = myResults[i].formatted_address;
            var plName = myResults[i].name;
            var rTing = myResults[i].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<p>").text(plName);

            var rate = $("<p>").text(rTing);

            if (myResults[i].photos) {
                photoRef = myResults[i].photos[0].photo_reference;
                // console.log("https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc");
                $.ajax({
                    url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                    method: "GET"
                }).then(function(phoResponse, status, xhr){
                   var photoUrl = xhr.getResponseHeader("X-Final-Url");
                   console.log(photoUrl); 

                   placeImg = $("<img>");

                   placeImg.attr("src", photoUrl);

                    rDiv.append(Nm);
                    rDiv.append(p);
                    rDiv.append(rate);
                    rDiv.append(placeImg);

                    $(".gasStations").append(rDiv);
                    i++;
                    mkCard();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                rDiv.append(Nm);
                rDiv.append(p);
                rDiv.append(rate);
                rDiv.append(placeImg);
                $(".gasStations").append(rDiv);
                i++;
                mkCard();
            }
            // use placeholder for else statement

            // append so that the first items on the list show first
            // rDiv.append(p);
            // rDiv.append(placeImg);

            // $(".gasStations").append(rDiv);   
    }      
    }
    mkCard();
    });


    //These work, please uncomment 1 additional one to test that the results can show on multiple cards, then uncomment all when we know it works on all of them

    // var userInput = $("#userInput").val().trim();
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=hospitals+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {

    //     var myResults = response.results;

    //     myResults.length = 5

    //     for (var i = 0; i < myResults.length; i++){

    //         //create a div
    //         var rDiv = $("<div>");

    //         //store div address
    //         var address = myResults[i].formatted_address;

    //         // create text for the result item's address
    //         var p = $("<p>").text("Address: " + address);

    //         // append the paragraph
    //         rDiv.append(p);

    //         // append so that the first items on the list show first
    //         $(".resultsHere").prepend(rDiv);
           
    //     }
    //     console.log(myResults);
    // });


    // var userInput = $("#userInput").val().trim();
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=schools+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
        
    //     var myResults = response.results;

    //     myResults.length = 5

    //     for (var i = 0; i < myResults.length; i++){

    //         //create a div
    //         var rDiv = $("<div>");

    //         //store div address
    //         var address = myResults[i].formatted_address;

    //         // create text for the result item's address
    //         var p = $("<p>").text("Address: " + address);

    //         // append the paragraph
    //         rDiv.append(p);

    //         // append so that the first items on the list show first
    //         $(".resultsHere").prepend(rDiv);
           
    //     }
    //     console.log(myResults);
    // });


    // var userInput = $("#userInput").val().trim(); 
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=grocery+stores+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {

    //     var myResults = response.results;

    //     myResults.length = 5

    //     for (var i = 0; i < myResults.length; i++){

    //         //create a div
    //         var rDiv = $("<div>");

    //         //store div address
    //         var address = myResults[i].formatted_address;

    //         // create text for the result item's address
    //         var p = $("<p>").text("Address: " + address);

    //         // append the paragraph
    //         rDiv.append(p);

    //         // append so that the first items on the list show first
    //         $(".resultsHere").prepend(rDiv);
           
    //     }
    //     console.log(myResults);
    // });


    // var userInput = $("#userInput").val().trim();
    // var usrInp = userInput.replace(/ /gi, "+");

    // console.log(userInput);
    // console.log(usrInp);
    // var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=post+offices+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    // console.log(queryUrl);

    // $.ajax({
    //     url: queryUrl,
    //     method: "GET"
    // }).then(function(response) {
        
    //     var myResults = response.results;

    //     myResults.length = 5

    //     for (var i = 0; i < myResults.length; i++){

    //         //create a div
    //         var rDiv = $("<div>");

    //         //store div address
    //         var address = myResults[i].formatted_address;

    //         // create text for the result item's address
    //         var p = $("<p>").text("Address: " + address);

    //         // append the paragraph
    //         rDiv.append(p);

    //         // append so that the first items on the list show first
    //         $(".resultsHere").prepend(rDiv);
           
    //     }
    //     console.log(myResults);
    // });

// these are the closers for the on click function, do not touch   
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
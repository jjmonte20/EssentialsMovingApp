// First things first, lets' make the request work once, then we can work on repeating it after getting the info once

// Let's start by getting varibles for what the requests are from the user



// $(document.body).on("click", "#submit",function(event)
function cardWork(){
    $("#gasDeck").empty();
    $("#hospitalDeck").empty();
    $("#libraryDeck").empty();
    $("#groceryDeck").empty();
    $("#postofficeDeck").empty();
    
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
            console.log("i"+i);
        if (i < 5) {
            console.log("test");

            //create a div, since the cards need to be formatted, multiple divs are necessary
            var rDiv = $("<div>");
            rDiv.attr("id","div"+i);
            rDiv.attr("class", "location-card d-inline-block");

            //need separate divs for title and image
            var tDiv = $("<div>");

            // giving the title is necessary in case the images are out of order
            tDiv.attr("id","title"+i);
            tDiv.attr("class", "location-title text-center");

            //need a div for address
            var aDiv = $("<div>");

            // giving the address an id in case out of order as well
            aDiv.attr("id", "address"+i);
            aDiv.attr("class", "location-address text-center");

            //need a div for rating
            var rateDiv = $("<div>");

            // id for rating
            rateDiv.attr("id", "rating"+i);
            rateDiv.attr("class", "location-rating text-center");

            //store div address
            var address = myResults[i].formatted_address;
            var plName = myResults[i].name;
            var rTing = myResults[i].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<h4>").text(plName);

            var rate = $("<p>").text("Rating: "+rTing);

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
                   placeImg.attr("height", "250");
                   placeImg.attr("width", "250");

                    
                    tDiv.append(Nm);
                    aDiv.append(p);
                    rateDiv.append(rate);
                    tDiv.append(placeImg);

                    //empty code before it appends
                    var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                    anchor.append(rDiv);

                    // appending the card before it is added to the page
                    $(rDiv).append(tDiv);
                    $(rDiv).append(aDiv);
                    $(rDiv).append(rateDiv);
                    $("#gasDeck").append(anchor);
                    i++;
                    mkCard();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                tDiv.append(Nm);
                aDiv.append(p);
                rateDiv.append(rate);
                tDiv.append(placeImg);

                var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                anchor.append(rDiv);

                $(rDiv).append(tDiv);
                $(rDiv).append(aDiv);
                $(rDiv).append(rateDiv);
                $("#gasDeck").append(anchor);
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


    var userInput = $("#inputLocation").val().trim();
    var usrInp = userInput.replace(/ /gi, "+");

    console.log(userInput);
    console.log(usrInp);
    var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=hospitals+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
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

        j=0;
        function mkCard1() {
            console.log("j" +j);
        if (j < 5) {
            console.log("test");

            //create a div, since the cards need to be formatted, multiple divs are necessary
            var rDiv = $("<div>");
            rDiv.attr("id","div"+j);
            rDiv.attr("class", "location-card d-inline-block");

            //need separate divs for title and image
            var tDiv = $("<div>");

            // giving the title is necessary in case the images are out of order
            tDiv.attr("id","title"+j);
            tDiv.attr("class", "location-title text-center");

            //need a div for address
            var aDiv = $("<div>");

            // giving the address an id in case out of order as well
            aDiv.attr("id", "address"+j);
            aDiv.attr("class", "location-address text-center");

            //need a div for rating
            var rateDiv = $("<div>");

            // id for rating
            rateDiv.attr("id", "rating"+j);
            rateDiv.attr("class", "location-rating text-center");

            //store div address
            var address = myResults[j].formatted_address;
            var plName = myResults[j].name;
            var rTing = myResults[j].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<h4>").text(plName);

            var rate = $("<p>").text("Rating: "+rTing);

            if (myResults[j].photos) {
                photoRef = myResults[j].photos[0].photo_reference;
                // console.log("https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc");
                $.ajax({
                    url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                    method: "GET"
                }).then(function(phoResponse, status, xhr){
                   var photoUrl = xhr.getResponseHeader("X-Final-Url");
                   console.log(photoUrl); 

                   placeImg = $("<img>");

                   placeImg.attr("src", photoUrl);
                   placeImg.attr("height", "250");
                   placeImg.attr("width", "250");

                    tDiv.append(Nm);
                    aDiv.append(p);
                    rateDiv.append(rate);
                    tDiv.append(placeImg);

                    var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                    anchor.append(rDiv);

                    $(rDiv).append(tDiv);
                    $(rDiv).append(aDiv);
                    $(rDiv).append(rateDiv);
                    $("#hospitalDeck").append(anchor);
                    j++;
                    mkCard1();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                tDiv.append(Nm);
                aDiv.append(p);
                rateDiv.append(rate);
                tDiv.append(placeImg);

                var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                anchor.append(rDiv);

                $(rDiv).append(tDiv);
                $(rDiv).append(aDiv);
                $(rDiv).append(rateDiv);
                $("#hospitalDeck").append(anchor);
                j++;
                mkCard1();
            }
            // use placeholder for else statement

            // append so that the first items on the list show first
            // rDiv.append(p);
            // rDiv.append(placeImg);

            // $(".gasStations").append(rDiv);   
    }      
    }
    mkCard1();
    });

    event.preventDefault();
    var userInput = $("#inputLocation").val().trim();
    var usrInp = userInput.replace(/ /gi, "+");

    console.log(userInput);
    console.log(usrInp);
    var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=libraries+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
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

        k=0;
        function mkCard2() {
            console.log("k" +k);
        if (k < 5) {
            console.log("test");

            //create a div, since the cards need to be formatted, multiple divs are necessary
            var rDiv = $("<div>");
            rDiv.attr("id","div"+k);
            rDiv.attr("class", "location-card d-inline-block");

            //need separate divs for title and image
            var tDiv = $("<div>");

            // giving the title is necessary in case the images are out of order
            tDiv.attr("id","title"+k);
            tDiv.attr("class", "location-title text-center");

            //need a div for address
            var aDiv = $("<div>");

            // giving the address an id in case out of order as well
            aDiv.attr("id", "address"+k);
            aDiv.attr("class", "location-address text-center");

            //need a div for rating
            var rateDiv = $("<div>");

            // id for rating
            rateDiv.attr("id", "rating"+k);
            rateDiv.attr("class", "location-rating text-center");

            //store div address
            var address = myResults[k].formatted_address;
            var plName = myResults[k].name;
            var rTing = myResults[k].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<h4>").text(plName);

            var rate = $("<p>").text("Rating: "+rTing);

            if (myResults[k].photos) {
                photoRef = myResults[k].photos[0].photo_reference;
                // console.log("https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc");
                $.ajax({
                    url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                    method: "GET"
                }).then(function(phoResponse, status, xhr){
                   var photoUrl = xhr.getResponseHeader("X-Final-Url");
                   console.log(photoUrl); 

                   placeImg = $("<img>");

                   placeImg.attr("src", photoUrl);
                   placeImg.attr("height", "250");
                   placeImg.attr("width", "250");

                    tDiv.append(Nm);
                    aDiv.append(p);
                    rateDiv.append(rate);
                    tDiv.append(placeImg);

                    var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                    anchor.append(rDiv);

                    $(rDiv).append(tDiv);
                    $(rDiv).append(aDiv);
                    $(rDiv).append(rateDiv);
                    $("#libraryDeck").append(anchor);
                    k++;
                    mkCard2();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                tDiv.append(Nm);
                aDiv.append(p);
                rateDiv.append(rate);
                tDiv.append(placeImg);

                var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                anchor.append(rDiv);

                $(rDiv).append(tDiv);
                $(rDiv).append(aDiv);
                $(rDiv).append(rateDiv);
                $("#libraryDeck").append(anchor);
                k++;
                mkCard2();
            }
            // use placeholder for else statement

            // append so that the first items on the list show first
            // rDiv.append(p);
            // rDiv.append(placeImg);

            // $(".gasStations").append(rDiv);   
    }      
    }
    mkCard2();
    });

    event.preventDefault();
    var userInput = $("#inputLocation").val().trim();
    var usrInp = userInput.replace(/ /gi, "+");

    console.log(userInput);
    console.log(usrInp);
    var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=grocery+stores+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
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

        l=0;
        function mkCard3() {
            console.log("l" +l);
        if (l < 5) {
            console.log("test");

            //create a div, since the cards need to be formatted, multiple divs are necessary
            var rDiv = $("<div>");
            rDiv.attr("id","div"+l);
            rDiv.attr("class", "location-card d-inline-block");

            //need separate divs for title and image
            var tDiv = $("<div>");

            // giving the title is necessary in case the images are out of order
            tDiv.attr("id","title"+l);
            tDiv.attr("class", "location-title text-center");

            //need a div for address
            var aDiv = $("<div>");

            // giving the address an id in case out of order as well
            aDiv.attr("id", "address"+l);
            aDiv.attr("class", "location-address text-center");

            //need a div for rating
            var rateDiv = $("<div>");

            // id for rating
            rateDiv.attr("id", "rating"+l);
            rateDiv.attr("class", "location-rating text-center");

            //store div address
            var address = myResults[l].formatted_address;
            var plName = myResults[l].name;
            var rTing = myResults[l].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<h4>").text(plName);

            var rate = $("<p>").text("Rating: "+rTing);

            if (myResults[l].photos) {
                photoRef = myResults[l].photos[0].photo_reference;
                // console.log("https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc");
                $.ajax({
                    url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                    method: "GET"
                }).then(function(phoResponse, status, xhr){
                   var photoUrl = xhr.getResponseHeader("X-Final-Url");
                   console.log(photoUrl); 

                   placeImg = $("<img>");

                   placeImg.attr("src", photoUrl);
                   placeImg.attr("height", "250");
                   placeImg.attr("width", "250");

                    tDiv.append(Nm);
                    aDiv.append(p);
                    rateDiv.append(rate);
                    tDiv.append(placeImg);

                    var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                    anchor.append(rDiv);

                    $(rDiv).append(tDiv);
                    $(rDiv).append(aDiv);
                    $(rDiv).append(rateDiv);
                    $("#groceryDeck").append(anchor);
                    l++;
                    mkCard3();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                tDiv.append(Nm);
                aDiv.append(p);
                rateDiv.append(rate);
                tDiv.append(placeImg);

                var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                anchor.append(rDiv);

                $(rDiv).append(tDiv);
                $(rDiv).append(aDiv);
                $(rDiv).append(rateDiv);
                $("#groceryDeck").append(anchor);
                l++;
                mkCard3();
            }
            // use placeholder for else statement

            // append so that the first items on the list show first
            // rDiv.append(p);
            // rDiv.append(placeImg);

            // $(".gasStations").append(rDiv);   
    }      
    }
    mkCard3();
    });

    event.preventDefault();
    var userInput = $("#inputLocation").val().trim();
    var usrInp = userInput.replace(/ /gi, "+");

    console.log(userInput);
    console.log(usrInp);
    var queryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=post+offices+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
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

        m=0;
        function mkCard4() {
            console.log("m"+m);
        if (m < 5) {
            console.log("test");

            //create a div, since the cards need to be formatted, multiple divs are necessary
            var rDiv = $("<div>");
            rDiv.attr("id","div"+m);
            rDiv.attr("class", "location-card d-inline-block");

            //need separate divs for title and image
            var tDiv = $("<div>");

            // giving the title is necessary in case the images are out of order
            tDiv.attr("id","title"+m);
            tDiv.attr("class", "location-title text-center");

            //need a div for address
            var aDiv = $("<div>");

            // giving the address an id in case out of order as well
            aDiv.attr("id", "address"+m);
            aDiv.attr("class", "location-address text-center");

            //need a div for rating
            var rateDiv = $("<div>");

            // id for rating
            rateDiv.attr("id", "rating"+m);
            rateDiv.attr("class", "location-rating text-center");

            //store div address
            var address = myResults[m].formatted_address;
            var plName = myResults[m].name;
            var rTing = myResults[m].rating;

            // create text for the result item's address
            var p = $("<p>").text(address);

            // create text for the result item's name
            var Nm = $("<h4>").text(plName);

            var rate = $("<p>").text("Rating: "+rTing);

            if (myResults[m].photos) {
                photoRef = myResults[m].photos[0].photo_reference;
                // console.log("https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxwidth=400&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc");
                $.ajax({
                    url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                    method: "GET"
                }).then(function(phoResponse, status, xhr){
                   var photoUrl = xhr.getResponseHeader("X-Final-Url");
                   console.log(photoUrl); 

                   placeImg = $("<img>");

                   placeImg.attr("src", photoUrl);
                   placeImg.attr("height", "250");
                   placeImg.attr("width", "250");

                    tDiv.append(Nm);
                    aDiv.append(p);
                    rateDiv.append(rate);
                    tDiv.append(placeImg);

                    var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                    anchor.append(rDiv);

                    $(rDiv).append(tDiv);
                    $(rDiv).append(aDiv);
                    $(rDiv).append(rateDiv);
                    $("#postofficeDeck").append(anchor);
                    m++;
                    mkCard4();
                    })
            } else {
                // need a placeholder img
                placeImg = $("<img>");

                placeImg.attr("src", "https://via.placeholder.com/250");

                tDiv.append(Nm);
                aDiv.append(p);
                rateDiv.append(rate);
                tDiv.append(placeImg);

                var anchor = $("<a href='https://www.google.com/maps/search/" + address + "' target='_blank'></a>")
                anchor.append(rDiv);

                $(rDiv).append(tDiv);
                $(rDiv).append(aDiv);
                $(rDiv).append(rateDiv);
                $("#postofficeDeck").append(anchor);
                m++;
                mkCard4();
            }
            // use placeholder for else statement

            // append so that the first items on the list show first
            // rDiv.append(p);
            // rDiv.append(placeImg);

            // $(".gasStations").append(rDiv);   
    }      
    }
    mkCard4();
    });


// these are the closers for the on click function, do not touch   
};

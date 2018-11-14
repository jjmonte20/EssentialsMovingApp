function renderCard(category, searchInfo) {
    console.log("Inside render");
    console.log (searchInfo);

    let deck = "#"+category+"Deck";

    //clearing old deck
    $(deck).html("");

    //for each result we got back, draw a new card.
    for(let i = 0; i<searchInfo.length; i++){
        let place = searchInfo[i];
        let address = place.formatted_address;
        let name = place.name;
        let rating = place.rating;
        let photoUrl = "https://via.placeholder.com/250";
        let url = "";
        
        //creating card
        let newCard = $('<div>');
        newCard.attr('class', 'location-card d-inline-block');

        //creating title
        let newTitle = $('<div>');
        newTitle.attr('class', 'location-tite text-center');
        let newTitleH4 = $('<h4>');
        newTitleH4.text(name);
        let newPhoto = $('<img>');

        //creating address
        let newAddress = $('<div>');
        newAddress.attr('class', 'location-address');
        newAddress.text(address);

        //creating distance
        let newRating = $('<div>');
        newRating.attr('class', 'location0distance text-center');
        newRating.text("Review: "+ rating + "/5");

        //checking for photo and creating src as necessary
        if (place.photos) {
            console.log ("got photos");
            photoRef = place.photos[0].photo_reference;
            console.log (photoRef);
            $.ajax({
                url: "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/photo?maxheight=250&maxwidth=250&photoreference=" + photoRef + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc",
                method: "GET"
            }).then(function(phoResponse, status, xhr){
                console.log("Ajax good: setting photoURL");
                photoUrl = xhr.getResponseHeader("X-Final-Url");
                console.log(photoUrl);

                newPhoto.attr("src", photoUrl);
                newTitle.append(newPhoto);
                console.log ("appended: " + photoUrl + "to newPhoto");
            });
        }
        else{
            photoUrl = "https://via.placeholder.com/250";

            newPhoto.attr("src", photoUrl);
            newTitle.append(newPhoto);
        }

        //creating image
        newPhoto.attr("src", photoUrl);
        console.log (newPhoto);


        //packaging title
        newTitle.prepend(newTitleH4);

        newCard.on
        ('click', function(event){
            console.log("hey....");
        });

        newCard.append(newTitle,newAddress,newRating);

        //card being added to deck
        $(deck).append(newCard);


    }
}

// $(document.body).on("click", "#submit",function(event)
function googleQuery(){
    $("#gasDeck").empty();
    $("#hospitalDeck").empty();
    $("#libraryDeck").empty();
    $("#groceryDeck").empty();
    $("#postofficeDeck").empty();


    //getting user input and formatting it into usable form
    var userInput = $("#inputLocation").val().trim();
    var usrInp = userInput.replace(/ /gi, "+");
    console.log(userInput);
    console.log(usrInp);

    //GASSTATIONS
    
    var gasStationQueryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=gas+stations+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";

    $.ajax({
        url: gasStationQueryUrl,
        method: "GET"
    }).then(function(response) {
        myResponse = response.results;

        //cutting the results to 5
        myResponse.length = 5;
        console.log("Sending response to be rendered");
        renderCard("gas", myResponse);
    });

    //LIBRARY

    var libraryQueryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=library+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    $.ajax({
        url: libraryQueryUrl,
        method: "GET"
    }).then(function(response) {
        myResponse = response.results;
        //cutting the results to 5
        myResponse.length = 5;
        console.log("Sending response to be rendered");
        renderCard("library", myResponse);
    });

    //HOSPITAL

    var hospitalQueryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=hospital+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    $.ajax({
        url: hospitalQueryUrl,
        method: "GET"
    }).then(function(response) {
        myResponse = response.results;
        //cutting the results to 5
        myResponse.length = 5;
        console.log("Sending response to be rendered");
        renderCard("hospital", myResponse);
    });

    //GROCERY

    var groceryQueryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=grocery+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";

    $.ajax({
        url: groceryQueryUrl,
        method: "GET"
    }).then(function(response) {
        myResponse = response.results;

        //cutting the results to 5
        myResponse.length = 5;
        console.log("Sending response to be rendered");
        renderCard("grocery", myResponse);
    });

    //POST OFFICE

    var postofficeQueryUrl = "https://cors-ut-bootcamp.herokuapp.com/https://maps.googleapis.com/maps/api/place/textsearch/json?input=post+office+near+" + usrInp + "&inputtype=textquery&radius=5000&" + "&key=AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
    
    $.ajax({
        url: postofficeQueryUrl,
        method: "GET"
    }).then(function(response) {
        myResponse = response.results;

        //cutting the results to 5
        myResponse.length = 5;
        console.log("Sending response to be rendered");
        renderCard("postoffice", myResponse);
    });
};

function googleTab(address){
    var win = window.open("https://www.google.com/maps/search/"+address, '_blank');
  win.focus();
}

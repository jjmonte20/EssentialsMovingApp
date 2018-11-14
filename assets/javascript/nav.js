var map = null; // set map clear
var marker = null; // set icon of location marker clear

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {   // CREATE GOOGLE MAP
    zoom: 14,   // set zoom of map
    center: {lat: 30.307182, lng: -97.755996} // with location of Austin Texas
  });

  var geocoder = new google.maps.Geocoder();

    $("#submit").on('click', function(event) { // Information on Welcome Bar will change
        if(marker != null) {            // check if there is any marker on map
          marker.setMap(null);          // clear all markers on map
          marker = null;                // set back marker is clear for new location
        }
        event.preventDefault();
        // CALL MAP, TIME, WEATHER, NEWS OF INPUT LOCATION
        geocodeAddress(geocoder, map);

        cardWork();
        document.getElementById('locationView').classList = "";
    });

    $("#search-form").on('submit', function(event) { // Information on Welcome Bar will change
        if(marker != null) {            // check if there is any marker on map
          marker.setMap(null);          // clear all markers on map
          marker = null;                // set back marker is clear for new location
        }
        event.preventDefault();
        // CALL MAP, TIME, WEATHER, NEWS OF INPUT LOCATION
        geocodeAddress(geocoder, map);

        cardWork();
        document.getElementById('locationView').classList = "";
    });

}

document.getElementById("hospitalBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("hospitalDeck").classList.toggle('collapse');
});

document.getElementById("postofficeBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("postofficeDeck").classList.toggle('collapse');
});

document.getElementById("libraryBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("libraryDeck").classList.toggle('collapse');
});
document.getElementById("groceryBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("groceryDeck").classList.toggle('collapse');
});
document.getElementById("gasBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("gasDeck").classList.toggle('collapse');
});




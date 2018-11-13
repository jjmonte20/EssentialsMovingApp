var map = null; // set map clear
var marker = null; // set icon of location marker clear
var latitude = "";
var longitude = "";
var localPosition = "";

// Set the clock from user's local time
var currentDate = new Date;
initLocalClocks(currentDate);

function initMap() {

  map = new google.maps.Map(document.getElementById('map'), {   // CREATE GOOGLE MAP
    zoom: 14,   // set zoom of map
    center: {lat: 30.307182, lng: -97.755996} // with location of Austin Texas
  });

  var geocoder = new google.maps.Geocoder();

  $("#submit").on('click', function() { // Information on Welcome Bar will change
    if(marker != null) {            // check if there is any marker on map
      marker.setMap(null);          // clear all markers on map
      marker = null;                // set back marker is clear for new location
    }
    // CALL MAP, TIME, WEATHER, NEWS OF INPUT LOCATION
    geocodeAddress(geocoder, map);
  });
}

function geocodeAddress(geocoder, resultsMap) {

  var address = $("#inputLocation").val();  // take inputLocation address
  console.log(address);
  $("#welcomeLocation").text(address);  // put name of inputLocation on Welcome Bar
  setWeather(address); // get weather info of inputLocation
  setNews(address); // get headline news of inputLocation

  // *************** GET NEW MARKER ON MAP **************************
  geocoder.geocode({'address': address}, function(results, status) {
    if (status === 'OK') { // if status of map is ok
      var position = results[0].geometry.location
      resultsMap.setCenter(position);  // get inputLocation at center of map
      console.log(position.lat());  // get lat and lgn of inputLocation to save for time zone area later
      console.log(position.lng());
      latitude = position.lat().toString();
      longitude = position.lng().toString();
      localPosition = latitude + "," + longitude;
      console.log("Test position: " + latitude + longitude);
      console.log("Test localPosition: " + localPosition);

      marker = new google.maps.Marker({ // set new marker
        map: resultsMap, // show map
        position: position // points right on inputLocation on map
      });

      setTimeZone(localPosition); // get time zone ID, time zone name, and local time at inputLocation

    } else {
      alert('Geocode was not successful for the following reason: ' + status);
    }
  });

}

// *************** CREATE WEATHER BOX: **************************

function setWeather(address) {
  var APIKey = "166a433c57516f51dfab1f7edaed8413";
  var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + address + "&units=imperial&appid=" + APIKey;
  // Here we run our AJAX call to the OpenWeatherMap API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      console.log(queryURL);       // Log the queryURL
      console.log(response);      // Log the resulting object
      $(".weather").text("Weather Details :");      // Transfer content to HTML
      $(".wind").text("Wind Speed: " + response.wind.speed);
      $(".humidity").text("Humidity: " + response.main.humidity);
      $(".temp").text("Temperature (F) " + response.main.temp);
      console.log("Wind Speed: " + response.wind.speed);       // Log the data in the console as well
      console.log("Humidity: " + response.main.humidity);
      console.log("Temperature (F): " + response.main.temp);
    });
}

// *************** CREATE NEWS BOX: **************************

function setNews(address) {
  var APIKey = "9c6ea1a55df44e4d90d56569c28959e8";
  var queryURL = "https://newsapi.org/v2/everything?q=" + address + "&apiKey=" + APIKey;
  // Here we run our AJAX call to the ABC News API
  $.ajax({
    url: queryURL,
    method: "GET"
  })
      // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      console.log(queryURL);       // Log the queryURL
      console.log(response);      // Log the resulting object
      console.log(response.articles[0].title);
      $(".news").text("Headline news :");     // Transfer content to HTML
      $(".newsTitle1").text(response.articles[0].title);
      $(".newsTitle2").text(response.articles[1].title);
      $(".newsTitle3").text(response.articles[2].title);
    });
}

// *************** SET TIME ZONE: **************************

function setTimeZone(localPosition) {
  var targetDate = new Date(); // Current date/time of user computer
  // Current UTC date/time expressed as seconds since midnight, January 1, 1970 UTC
  var timestamp = targetDate.getTime()/1000 + targetDate.getTimezoneOffset() * 60;

  // Build the URL we need to query the database from Google API
  var APIKey = "AIzaSyCov3eDZmkrwgdqlChL-1PJVDcwaQfpTBc";
  var queryURL = "https://maps.googleapis.com/maps/api/timezone/json?location=" + localPosition + "&timestamp=" + timestamp + "&key=" + APIKey;
  // Run AJAX call to the time zone of location on map
  $.ajax({
    url: queryURL,
    method: "GET"
  })
  // We store all of the retrieved data inside of an object called "response"
    .then(function(response) {
      console.log(queryURL);       // Log the queryURL
      console.log(response);      // Log the resulting object
      $("#timeZoneID").text(response.timeZoneId);      // Transfer content to HTML
      $("#timeZoneName").text(response.timeZoneName);
      console.log(response.timeZoneId);       // Log the data in the console as well
      console.log(response.timeZoneName);
      var timeID = response.timeZoneId;
      var timeLocation = targetDate.toLocaleString('en-US', {timeZone: timeID});
      console.log("Time at input location: " + timeLocation);
      var dateLocation = new Date(timeLocation);
      console.log("Date at input location: " + dateLocation);
      initLocalClocks(dateLocation); // CALL FUNCTIONS TO RUN THE CLOCK
    });
}

// *************** RUN THE CLOCK **************************

// Starts any clocks using the user's local time

function initLocalClocks(dateLocation) {
  var date = dateLocation;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();
  console.log("Today is: " + date + hours + minutes + seconds);

  // Create an object with each hand and it's angle in degrees.
  // We have 360 degrees for the hour hand runs 12 hours, the minute hand runs 60 minutes, and the second hand runs 60 seconds.
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
  // Loop through each of these hands to set their angle
  for (var j = 0; j < hands.length; j++) {
    var elements = document.querySelectorAll('.' + hands[j].hand);
    for (var k = 0; k < elements.length; k++) {
        elements[k].style.webkitTransform = 'rotateZ('+ hands[j].angle +'deg)';
        elements[k].style.transform = 'rotateZ('+ hands[j].angle +'deg)';
        // If this is a minute hand, note the seconds position (to calculate minute position later)
        if (hands[j].hand === 'minutes') {
          elements[k].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}


//Set a timeout for the first minute hand movement (less than 1 minute), then rotate it every minute after that

function setUpMinuteHands() {
  // Find out how far into the minute we are
  var containers = document.querySelectorAll('.minutes-container');
  var secondAngle = containers[0].getAttribute("data-second-angle");
  if (secondAngle > 0) {
    // Set a timeout until the end of the current minute, to move the hand
    var delay = (((360 - secondAngle) / 6) + 0.1) * 1000;
    setTimeout(function() {
      moveMinuteHands(containers);
    }, delay);
  }
}


// Do the first minute's rotation

function moveMinuteHands(containers) {
  for (var i = 0; i < containers.length; i++) {
    containers[i].style.webkitTransform = 'rotateZ(6deg)';
    containers[i].style.transform = 'rotateZ(6deg)';
  }
  // Then continue with a 60 second interval
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 12;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 60000);
}


// Move the second containers

function moveSecondHands() {
  var containers = document.querySelectorAll('.seconds-container');
  setInterval(function() {
    for (var i = 0; i < containers.length; i++) {
      if (containers[i].angle === undefined) {
        containers[i].angle = 6;
      } else {
        containers[i].angle += 6;
      }
      containers[i].style.webkitTransform = 'rotateZ('+ containers[i].angle +'deg)';
      containers[i].style.transform = 'rotateZ('+ containers[i].angle +'deg)';
    }
  }, 1000);
}




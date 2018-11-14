# project1Team2

https://jjmonte20.github.io/project1Team2/


# App Function

This App is designed to provide a snapshot of the "essential" areas found in most cities and towns.  Easy to click cards link back to an interactive map to allow users to get around easily when traveling to a new location.

The App allows the user to search for areas of interest and displays the closest location of five essential categories.  

The five listed categories are common facilities that are heavily relied upon by travelers and local residents:

•	Hospitals
•	Post Offices 
•	Libraries
•	Grocery Stores
•	Gas Stations

For each location a new information card is created for ease of use.  The cards expand and collapse when clicked.

Each time the user enters a search request, the App homepage presents relevant local information:

•	Map
•	Weather
•	Time
•	Headline News
•	Images Associated With Each Category 

# User Benefits and Target Audience 

This application is intended for people who are planning to move or are visiting a new city or town and are in need of a quick reference of important areas while traveling. 
 
The App search results will focus on places that are the absolute essentials.  The selected categories, hospitals, post offices, libraries, grocery stores, and gas stations are frequently visited locations that travelers find indispensible.

Additionally, the App is designed to be compatible with mobile devices.

# Search Requests and API interaction

When the user submits a request, the search will engage the Google Maps API, Google Places API, OpenWeather API, and the News API to provide a comprehensive user experience for the location selected.  

Google Maps responds to an exact geographical location to pinpoint the site on the App’s displayed map.  

The Google Places API produces search results looking at places within a five kilometer radius of the requested location.  Returned search results include:  

•	Facility Name 
•	Facility Address 
•	Google user reviews (ratings are scaled 1 to 5)
  o	(5 rated best and 1 worst; zero reflects that reviews are not available)  

The OpenWeatherMap provides results based on the city or town selected. 

The News API generates local headlines displayed in the Welcome section of the webpage.

# Team Members

Cody Davis: Front-end
Alex Stockton: Front-end 
Thuy Dinh: Back-end
Julian Montejano: Back-end
Abraham Muñoz: Back-end


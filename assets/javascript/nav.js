var map = null; // set map clear
var marker = null; // set icon of location marker clear


$("#search-form").on('submit', function(event) {
    event.preventDefault();
    googleQuery();
    initMap();
    document.getElementById('locationView').classList = "";
    document.getElementById('splashScreen').style.display="none";
});

document.getElementById("submit").addEventListener('click', function(event){
        event.preventDefault();
    googleQuery();
    initMap();
    document.getElementById('locationView').classList = "";
    document.getElementById('splashScreen').style.display="none";    
});


document.getElementById("hospitalBar").addEventListener('click', function(event){
        document.getElementById("hospitalDeck").classList.toggle('accordian-fold');
});

document.getElementById("postofficeBar").addEventListener('click', function(event){
        document.getElementById("postofficeDeck").classList.toggle('accordian-fold');
});

document.getElementById("libraryBar").addEventListener('click', function(event){
        document.getElementById("libraryDeck").classList.toggle('accordian-fold');
});
document.getElementById("groceryBar").addEventListener('click', function(event){
        document.getElementById("groceryDeck").classList.toggle('accordian-fold');
});
document.getElementById("gasBar").addEventListener('click', function(event){
    console.log(event);
        console.log ("bar touched");
        document.getElementById("gasDeck").classList.toggle('collapse');
});



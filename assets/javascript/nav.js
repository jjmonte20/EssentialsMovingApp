
$("#search-form").on('submit', function(event) {
    event.preventDefault();
    googleQuery();
    initMap();

    initLocalClocks(currentDate);
    document.getElementById('locationView').classList = "";
    document.getElementById('splashScreen').style.display = "none";

});

document.getElementById("submit").addEventListener('click', function(event){
    event.preventDefault();
    googleQuery();
    initMap();

    initLocalClocks(currentDate);
    document.getElementById('locationView').classList = "";
    document.getElementById('splashScreen').style.display = "none";

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
        document.getElementById("gasDeck").classList.toggle('accordian-fold');

});

document.getElementById("newsBar").addEventListener('click', function(){
    document.getElementBy('newsDeck').classList.toggle('accordian-fold');
});

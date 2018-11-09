document.addEventListener('click', function(event){
    console.log("click!")
    console.log(event.target);
    if ('btn-hospital'==event.target.id){
        console.log ("bar touched");
        document.getElementById("hospitalDeck").classList.toggle('collapse');
    }
});
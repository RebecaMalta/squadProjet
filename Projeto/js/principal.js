$(document).ready(function(){ 
 
} ); 

function addTeams(){
    window.open("./addTeams.html","_blank")
}

function getTeams(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-football-v1.p.rapidapi.com/v2/teams/league/2",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "75e9d93146msh0b9e1bb7312e5ddp10d79ajsnbba64f81f089",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}

function getPlayers(){
    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-football-v1.p.rapidapi.com/v2/players/player/253",
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "75e9d93146msh0b9e1bb7312e5ddp10d79ajsnbba64f81f089",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        console.log(response);
    });
}
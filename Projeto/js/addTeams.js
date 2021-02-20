$(document).ready(function(){ 
    new Sortable(document.getElementById('order-left'),{
        group: 'shared',
        animation: 150,
        ghostClass: 'bg-info'
    })
    
    new Sortable(document.getElementById('order-right'),{
        group: 'shared',
        animation: 150,
        ghostClass: 'text-info'
    })

    $("input").tagsinput('items')
  
} ); 

function getPlayers(obj){
    var searchValue = $(obj).val();

    const settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api-football-v1.p.rapidapi.com/v2/players/search/"+searchValue,
        "method": "GET",
        "headers": {
            "x-rapidapi-key": "75e9d93146msh0b9e1bb7312e5ddp10d79ajsnbba64f81f089",
            "x-rapidapi-host": "api-football-v1.p.rapidapi.com"
        }
    };
    
    $.ajax(settings).done(function (response) {
        var contador = 10;
        var html = "";

        if(response.api.players.length > 0){
            if(response.api.players.length < 10){
                contador = response.api.players.length;    
            }

           for(var i=0; i<contador; i++){
                var player_id = response.api.players[i].player_id;
                var player_firstname = response.api.players[i].firstname;
                var player_age = response.api.players[i].birth_date;
                var player_nacionality = response.api.players[i].nationality;

                if(player_firstname != "" && player_firstname != null){
                    var iniciais = player_firstname.split(" ");

                    if(iniciais.length >= 2){
                        iniciais = iniciais[0].substr(0,1) + iniciais[1].substr(0,1);
                    }else{
                        iniciais = player_firstname.substr(0,1);
                    }

                    

                    html += `           <div  class="list-group-item text-secondary">
                                            <div class="row">
                                                <div class="col-sm-6">
                                                    <label>Nome: </label>
                                                    <label>${player_firstname}</label>
                                                </div>
                                                <div class="col-sm-6">
                                                    <label>Age: </label>
                                                    <label>${player_age}</label>
                                                </div>
                                            </div>
                                            <div class="row">
                                                <label>Nacionality: </label>
                                                <label>${player_nacionality}</label>
                                            </div>
                                            <div>
                                                <span class="hidden">${player_id}</span>
                                                <span class="hidden">${iniciais}</span>
                                            </div>
                                        </div> `

                }
            }
        }

        $("#order-right").html(html);
    });
}
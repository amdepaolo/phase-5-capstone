import React from "react";

function GameCard({game}){

    function handleJoin(){
        fetch('/games/'+game.id+'/players', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then(r => r.json())
          .then(r => console.log(r))
    }

    return (
        <div>
            <h4>{game.game_name}</h4>
            <h5>Hosted by {game.host.name}</h5>
            <p>Ending in {game.days_to_end} days</p>
            <button onClick={handleJoin}>Join Game?</button>
        </div>
    )
}

export default GameCard;
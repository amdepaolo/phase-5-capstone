import React from "react";
import { useDispatch } from "react-redux";
import { playerAdded } from "../features/playSlice";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function GameCard({game}){

    const dispatch = useDispatch()

    function handleJoin(){
        fetch('/games/'+game.id+'/players', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
          }).then(r => r.json())
          .then(r => dispatch(playerAdded(r)))
    }

    const button = game.joined? <Link to={`/games/${game.id}`}>Play</Link>: <button onClick={handleJoin}>Join Game?</button>

    return (
        <div>
            <h4>{game.game_name}</h4>
            <h5>Hosted by {game.host.name}</h5>
            <p>Ending in {game.days_to_end} days</p>
            {button}
        </div>
    )
}

export default GameCard;
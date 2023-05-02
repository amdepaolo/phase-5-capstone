import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { gamesAdded } from "../features/gamesSlice";
import { useHistory } from "react-router-dom";

function HostGame(){
    const [gameName, setGameName] = useState('')
    const dispatch = useDispatch();
    const history = useHistory();

    function handleSubmit(e){
        e.preventDefault();
        fetch('/games', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({game_name: gameName}),
          }).then(r => r.json())
          .then(r => {
            const id = r.id;
            dispatch(gamesAdded(r))
            history.push('/games/'+id)
    }) 
    }

    return(
        <div>
            <h2>Host A Game!</h2>
            <form onSubmit={handleSubmit}>
                <p>Give your game a fun and memorable name so your friends can find it</p>
                <label>Game Name: </label>
                <input
                    type="text"
                    id="gameName"
                    value={gameName}
                    onChange={e => setGameName(e.target.value)}
                />
                <input type="submit" value="Host Game"/>
            </form>
        </div>
    )
}

export default HostGame
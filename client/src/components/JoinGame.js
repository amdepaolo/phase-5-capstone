import React, {useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../features/gamesSlice";

function JoinGame(){
    const games = useSelector(state => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames())
    },[])

    const listOfGames = games.map(game => <li>{game.game_name}</li>)

    return (
        <div>
            <h2>Join A Game</h2>
            {listOfGames}
        </div>
    )
}

export default JoinGame
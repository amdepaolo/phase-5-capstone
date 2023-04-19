import React, {useEffect} from "react";
import GameCard from "./GameCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../features/gamesSlice";

function JoinGame(){
    const games = useSelector(state => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames())
    },[])

    const gameCards = games.map(game => <GameCard game={game} key={game.id}/>)

    return (
        <div>
            <h2>Join A Game</h2>
            {gameCards}
        </div>
    )
}

export default JoinGame
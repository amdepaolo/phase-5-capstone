import React, {useEffect} from "react";
import GameCard from "./GameCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchGames } from "../features/gamesSlice";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";

function JoinGame(){
    const games = useSelector(state => state.games)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchGames())
    },[])

    const gameCards = games.map(game => <Grid xs={4}><GameCard game={game} key={game.id}/></Grid>)

    return (
        <Container>
            <Grid container>
                {gameCards}
            </Grid>
        </Container>
    )
}

export default JoinGame
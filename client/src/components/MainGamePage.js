import React, {useState, useEffect} from "react";
import QuestionCard from "./QuestionCard";
import QuestionVote from "./QuestionVote";
import QuestionResults from "./QuestionResults";
import QuestionSubmit from "./QuestionSubmit";
import { Tabs, Tab, Button } from '@mui/material';
import {useSelector, useDispatch} from "react-redux"
import { useParams, useHistory } from "react-router-dom";
import { gameLoaded } from "../features/playSlice";
import { gamesRemoved, gamesUserLeft } from "../features/gamesSlice";
import { Link } from "react-router-dom";
import QuestionSuperlatives from "./QuestionSuperlatives";
import ResultsPage from "./ResultsPage";
import GameSocket from "./GameSocket";

function MainGamePage(){
    const game = useSelector(state => state.play)
    const {questions} = game
    const [selectedQ, setSelectedQ] = useState(null)
    const [tabValue, setTabValue] = useState(1)
    const params = useParams();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(r => {if(r.ok){
            r.json()
            .then(r => dispatch(gameLoaded(r)))
        } else {
            window.alert("Game not found")
        }})}, [])

    const currentQuestion =  questions.find(q => q.id === selectedQ)
    const questionCards = questions.map(question => {
        return(
            <QuestionCard 
                question={question} 
                key={question.id}
                handleClick ={setSelectedQ}
            />
        )
    })

    function leaveGame(){
        if(window.confirm("Leave Game? All your votes and submissions will be removed")){
            fetch('/games/'+game.id+'/players/'+game.user_player.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }})
                .then(r => {if (r.ok){
                    dispatch(gamesUserLeft(game.id))
                    history.push('/')}})
    }}

    function deleteGame(){ 
        if(window.confirm("Delete Game? This will remove the entire game, including other players submissions")){
            fetch('/games/'+game.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json"
                }})
                .then(r => {if (r.ok){
                    dispatch(gamesRemoved(game.id))
                    history.push('/')
                }})

    }}

    const leaveButton = <Button onClick={leaveGame}>Leave Game</Button>
    const deleteButton = <Button onClick={deleteGame}>Delete This Game</Button>


    return(
        <div>
            <GameSocket gameId={game.id}/>
            <h1>{game.game_name}</h1>
            <h2>Hosted by {game.user_hosting? "you": game.host.name}</h2>
            {game.user_hosting? deleteButton: leaveButton}
            <Tabs value={tabValue}>
                <Tab label="Submit" onClick={()=> setTabValue(0)} value={0}/>
                <Tab label="Vote" onClick={()=> setTabValue(1)} value={1}/>
                <Tab  label="Results" onClick={()=> setTabValue(2)} value={2}/>
            </Tabs>
            <div hidden={tabValue !== 0}>
                <QuestionSubmit game={game}/>
            </div>
            <div hidden={tabValue !== 1}>
                <h2> Ponder and Vote! </h2>
                <p>Look at the choices your other players have provided</p>
                {questionCards}
                {selectedQ? <QuestionVote question={currentQuestion}/>: ''}
                {selectedQ? <QuestionResults question={currentQuestion}/>: ''}
            </div>
            <div hidden={tabValue !== 2} value="Results">
                <h2>Results</h2>
                <ResultsPage />
                <QuestionSuperlatives game={game} />
            </div>
            <Link to='/'>Back Home</Link>
        </div>
    )
}

export default MainGamePage

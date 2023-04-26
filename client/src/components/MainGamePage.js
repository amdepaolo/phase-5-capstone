import React, {useState, useEffect} from "react";
import QuestionCard from "./QuestionCard";
import QuestionVote from "./QuestionVote";
import QuestionResults from "./QuestionResults";
import QuestionSubmit from "./QuestionSubmit";
import { Tabs, Tab } from '@mui/material';
import {useSelector, useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import { gameLoaded } from "../features/playSlice";
import { Link } from "react-router-dom";

function MainGamePage(){
    const game = useSelector(state => state.play)
    const {questions} = game
    const [selectedId, setSelectedId] = useState()
    const params = useParams();
    const dispatch = useDispatch();
    const [tabValue, setTabValue] = useState("Vote")

    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(r => r.json())
        .then(r => dispatch(gameLoaded(r)))
    },[])

    const questionCards = questions.map(question => {
        return(
            <QuestionCard 
                question={question} 
                key={question.id}
                handleClick ={setSelectedId}
            />
        )
    })

    const currentQuestion =  questions.find(q => q.id === selectedId)


    return(
        <div>
            <Tabs>
                <Tab label="Submit" onClick={()=> setTabValue("Submit")}/>
                <Tab label="Vote" onClick={()=> setTabValue("Vote")}/>
                <Tab  label="Results" onClick={()=> setTabValue("Results")}/>
            </Tabs>
            <div hidden={tabValue !== "Submit"}>
                <QuestionSubmit game={game}/>
            </div>
            <div hidden={tabValue !== "Vote"}>
                <h2> Ponder and Vote! </h2>
                <p>Look at the choices your other players have provided</p>
                {questionCards}
                {currentQuestion? <QuestionVote question={currentQuestion}/>: ''}
            </div>
            <div hidden={tabValue !== "Results"} value="Results">
                <h2>Results</h2>
                {questionCards}
                {currentQuestion? <QuestionResults question={currentQuestion}/>: ''}
            </div>
            <Link to='/'>Back to games</Link>
        </div>
    )
}

export default MainGamePage

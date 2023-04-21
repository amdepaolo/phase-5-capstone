import React, {useState, useEffect} from "react";
import QuestionCard from "./QuestionCard";
import QuestionVote from "./QuestionVote";
import {useSelector, useDispatch} from "react-redux"
import { useParams } from "react-router-dom";
import { questionsAdded } from "../features/playSlice";

function MainQuestionPage(){
    const questions = useSelector(state => state.play.questions)
    const [selectedId, setSelectedId] = useState()
    const params = useParams();
    const dispatch = useDispatch();
    console.log(selectedId )

    useEffect(()=>{
        fetch(`/games/${params.id}`)
        .then(r => r.json())
        .then(r => dispatch(questionsAdded(r.questions)))
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
            <h2> Ponder and Vote! </h2>
            <p>Look at the choices your other players have provided</p>
            {questionCards}
            {currentQuestion? <QuestionVote question={currentQuestion}/>: ''}
        </div>
    )
}

export default MainQuestionPage

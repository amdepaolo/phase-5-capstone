import React from "react";
import { useDispatch } from "react-redux";
import { questionUpdated } from "../features/playSlice";

function QuestionVote({question}){
    const dispatch = useDispatch()

    function vote(choice){
        fetch('/games/'+question.game_id+'/questions/'+question.id+'/vote', {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({choice: choice}),
          }).then(r => {if(r.ok){
            r.json()
            .then(r => dispatch(questionUpdated(r)))
        }}) 
    }

    return(
        <div className="question-vote">
            <h3>Would You Rather...</h3>
            <span>
                <button className="question-vote" onClick={()=>vote("left")}>{question.left_choice}</button>
                <span>  OR... </span> 
                <button className="question-vote" onClick={()=>vote("right")}>{question.right_choice}</button>
            </span>
        </div>
    )
}

export default QuestionVote
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
        <div>
            <h3>Would You Rather...</h3>
            <span>
                <button onClick={()=>vote("left")}><h4>{question.left_choice}</h4></button>
                <h4>OR...</h4>
                <button onClick={()=>vote("right")}><h4>{question.right_choice}</h4></button>
            </span>
        </div>
    )
}

export default QuestionVote
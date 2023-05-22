import React from "react";
import { useDispatch } from "react-redux";
import { questionUpdated, voteUpdated } from "../features/playSlice";

function QuestionVote({question, userVote}){
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
            .then(r => {
                dispatch(questionUpdated(r.question))
                dispatch(voteUpdated(r.vote))
            })
        }}) 
    }

    return(
        <div className="question-vote">
            <h3>Would You Rather...</h3>
            <span>
                <button className={userVote && userVote.choice==="left"? "vote-selected": "vote-unselected"} onClick={()=>vote("left")}>{question.left_choice}</button>
                <span>  OR... </span> 
                <button className={userVote && userVote.choice==="right"? "vote-selected": "vote-unselected"} onClick={()=>vote("right")}>{question.right_choice}</button>
            </span>
        </div>
    )
}

export default QuestionVote
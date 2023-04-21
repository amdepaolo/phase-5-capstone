import React from "react";

function QuestionVote({question}){

    function vote(choice){
        console.log(choice)
    }

    return(
        <div>
            <h3>Would You Rather...</h3>
            <button onClick={()=>vote("left")}><h4>{question.left_choice}</h4></button>
            <h4>OR...</h4>
            <button onClick={()=>vote("right")}><h4>{question.right_choice}</h4></button>
        </div>
    )
}

export default QuestionVote
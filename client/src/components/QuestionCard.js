import React from "react";

function QuestionCard({question, handleClick}){

    return (
        <div onClick={()=>handleClick(question.id)}>
            <p>{question.left_choice} or {question.right_choice}</p>
            <p> submitted by {question.submitted_by}</p>
        </div>
    )
}

export default QuestionCard
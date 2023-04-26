import React from "react";

function QuestionCard({question, handleClick}){

    return (
        <div onClick={()=>handleClick(question.id)}>
            <p><b>{question.left_choice}</b> or <b>{question.right_choice}</b></p>
            <p> submitted by {question.submitted_by}</p>
        </div>
    )
}

export default QuestionCard
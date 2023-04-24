import React from "react";

function QuestionResults({question}){

    function votePercentage(votes){
       const percent = (votes / question.total_votes )* 100
       if (percent === NaN){
        return `0 %`
       }
       else return percent + ` %`
    }

    return(
        <div>
            <h4>Results for {question.submitted_by}'s submission</h4>
            <h5>{question.left_choice}: {votePercentage(question.left_votes)}</h5>
            <h5>{question.right_choice}: {votePercentage(question.right_votes)}</h5>
            <p>The group has spoken: They would rather {question.winner === "left"? question.left_choice: question.right_choice}</p>
        </div>
    )
}

export default QuestionResults
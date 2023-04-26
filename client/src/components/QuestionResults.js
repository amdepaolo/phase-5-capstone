import React from "react";

function QuestionResults({question}){

    function votePercentage(votes){
       const percent = (votes / question.total_votes )* 100
       if (Number.isNaN(percent)){
        return `0 %`
       }
       else return percent + ` %`
    }

    let winnerText;
    switch(question.winner){
        case "left":
            winnerText = `The group has spoken: They would rather` + question.left_choice
            break;
        case "right":
            winnerText = `The group has spoken: They would rather` + question.right_choice
            break;
        default:
            winnerText = `It's a TIE!`
            break;
    }

    return(
        <div>
            <h4>Results for {question.submitted_by}'s submission</h4>
            <h5>{question.left_choice}: {votePercentage(question.left_votes)}</h5>
            <h5>{question.right_choice}: {votePercentage(question.right_votes)}</h5>
            <p>{winnerText}</p>
        </div>
    )
}

export default QuestionResults
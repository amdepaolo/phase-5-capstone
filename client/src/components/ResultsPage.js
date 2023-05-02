import React from "react";
import QuestionResults from "./QuestionResults";
import { useSelector } from "react-redux";

function ResultsPage(){
    const game = useSelector(state => state.play);
    const {questions, funniest_q, most_pondered_q} = game 
    const resultsList = questions.map(q => <QuestionResults question={q} key={q.id} />)

    const funniestText = funniest_q? <h4>{funniest_q.left_choice} or {funniest_q.right_choice}</h4>: "No Winner Yet"
    const ponderedText = most_pondered_q? <h4>{most_pondered_q.left_choice} or {most_pondered_q.right_choice}</h4>: "No Winner Yet"

    return(
        <div>
            <h2>Top Submissions</h2>
            <h3>Funniest:</h3>
            {funniestText}
            
            <h3>Most Ponderable:</h3>
            {ponderedText}
            <h2>Vote Results:</h2>
            {resultsList}
        </div>
    )
}

export default ResultsPage
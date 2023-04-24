import React from "react";
import QuestionCard from "./QuestionCard";
import QuestionResults from "./QuestionResults";
import { useSelector } from "react-redux";

function ResultsPage(){
    const questions = useSelector(state => state.play.questions);
    const resultsList = questions.map(q => <QuestionResults question={q} key={q.id} />)

    return(
        <div>
            {resultsList}
        </div>
    )
}

export default ResultsPage
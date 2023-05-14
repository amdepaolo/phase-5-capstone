import React from "react";
import QuestionResults from "./QuestionResults";
import { useSelector } from "react-redux";
import Grid from '@mui/material/Unstable_Grid2';
import Container from "@mui/material/Container";

function ResultsPage(){
    const game = useSelector(state => state.play);
    const {questions, funniest_q, most_pondered_q} = game 
    const resultsList = questions.map(q => <QuestionResults question={q} key={q.id} />)

    const funniestText = funniest_q? <h4>{funniest_q.left_choice} or {funniest_q.right_choice}</h4>: "No Winner Yet"
    const ponderedText = most_pondered_q? <h4>{most_pondered_q.left_choice} or {most_pondered_q.right_choice}</h4>: "No Winner Yet"

    return(

        <Container>
            <Grid container spacing={1}>
                <Grid xs={3}>
                    <h3>Funniest:</h3>
                    {funniestText}
                </Grid>
                <Grid xs={3}>
                    <h3>Most Ponderable:</h3>
                    {ponderedText}
                </Grid>
                <Grid xs={6}>
                    <h2>Vote Results:</h2>
                    {resultsList}
                </Grid>
            </Grid>
        </Container>
    )
}

export default ResultsPage
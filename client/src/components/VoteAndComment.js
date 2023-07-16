import React from "react";
import QuestionVote from "./QuestionVote";
import CreateComment from "./CreateComment";
// import QuestionComments from "./QuestionComments";
import Grid from '@mui/material/Unstable_Grid2';

function VoteAndComment({question, player}){  
    const currentQVote = player.votes.find(vote => vote.question_id === question.id)

    return(
        <Grid container spacing={1}>
            <Grid xs={12}>
                <QuestionVote question={question} userVote={currentQVote}/>
            </Grid>
            <Grid xs={6}>
                <CreateComment 
                    favoring="left"
                    questionId={question.id}
                    gameId={question.game_id}
                    playerId={player.id}
                /> 
            </Grid>
            <Grid xs={6}>
                <CreateComment 
                    favoring="right"
                    questionId={question.id}
                    gameId={question.game_id}
                    playerId={player.id}
                /> 
            </Grid>
        </Grid>
    )
}

export default VoteAndComment
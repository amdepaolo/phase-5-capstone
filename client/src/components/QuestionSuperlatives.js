import React, {useState} from "react";
import { Select, MenuItem, Button  } from "@mui/material"
import Grid from '@mui/material/Unstable_Grid2';
import { useSelector } from "react-redux";

function QuestionSuperlatives(){
    const game = useSelector(state => state.play)
    const [superlativeVote, setSuperlativeVote] = useState({funniest_vote: 0, ponderable_vote: 0})
    const {questions, user_player} = game
    const questionsMinusUser = questions.filter(q => q.player_id !== user_player.id)

    function funniestChange(e){
        const newSuperlativeVote = {...superlativeVote, funniest_vote: e.target.value}
        setSuperlativeVote(newSuperlativeVote)
    }

    function ponderableChange(e){
        const newSuperlativeVote = {...superlativeVote, ponderable_vote: e.target.value}
        setSuperlativeVote(newSuperlativeVote)
    }

    function saveChoices(){
        fetch('/games/'+game.id+'/players/'+user_player.id, {
                method: "PATCH",
                headers: {
                  "Content-Type": "application/json"
                },
                body: JSON.stringify(superlativeVote)
        }).then(r=> r.json()).then(r => console.log(r))

    }

    const choices = questionsMinusUser.map(q => <MenuItem value={q.id} key={q.id}>{q.left_choice} or {q.right_choice}</MenuItem>)


    return(
        <Grid container spacing={1}>
            <Grid xs={9}>
                <h2>Pick your favorites:</h2>
                <p>From the "Would You Rathers" your other players have submitted pick the your favorites in each of the two categories. <b>Note: You can't pick your own submission.</b></p>
            </Grid>
            <Grid xs={4}>
                <h3>Funniest:</h3>
                <p>Easy enough to explain. Of the submissions provided, pick the one that made you laugh the hardest</p>
                <Select 
                    value={superlativeVote.funniest_vote}
                    label="Funniest"
                    onChange={funniestChange}
                    autoWidth
                >
                    <MenuItem value={0}> Funniest </MenuItem>
                    {choices}
                </Select>
            </Grid>
            <Grid xs={2}>
                <Button onClick={saveChoices}>Save Choices</Button>
            </Grid>
            <Grid xs={4}>
                <h3>Most Ponderable:</h3>
                <p>For this category, pick the submission that made you really stop and consider your options</p>
                <Select 
                    value={superlativeVote.ponderable_vote}
                    label="Ponderable"
                    onChange={ponderableChange}
                    autoWidth
                >
                    <MenuItem value={0}> Ponderable </MenuItem>
                    {choices}
                </Select>
            </Grid>
        </Grid>
    )
}

export default QuestionSuperlatives
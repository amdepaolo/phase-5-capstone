import React, {useState} from "react";
import { Select, MenuItem, Button,  } from "@mui/material"

function QuestionSuperlatives({game}){
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
        <div>
            <h2>Pick your favorites:</h2>
            <p>From the "Would You Rathers" your other players have submitted pick the your favorites in each of the two categories. <b>Note: You can't pick your own submission, so don't even try.</b></p>
            <h3>Funniest:</h3>
            <p>Easy enough to explain. Of the submissions provided, pick the one that made you laugh the hardest</p>
            <Select 
                value={superlativeVote.funniest_vote}
                label="Funniest"
                onChange={funniestChange}
            >
                <MenuItem value={0}> Funniest </MenuItem>
                {choices}
            </Select>
            <h3>Most Ponderable:</h3>
            <p>For this category, pick the submission that made you really stop and consider your options</p>
            <Select 
                value={superlativeVote.ponderable_vote}
                label="Ponderable"
                onChange={ponderableChange}
            >
                <MenuItem value={0}> Ponderable </MenuItem>
                {choices}
            </Select>
            <Button onClick={saveChoices}>Save Choices</Button>
        </div>
    )
}

export default QuestionSuperlatives
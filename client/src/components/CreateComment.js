import React from "react";
import { useDispatch } from "react-redux";
import { commentAdded } from "../features/playSlice";
import { useState } from "react";

function CreateComment({favoring, questionId, gameId, playerId}){
    const [textContent, setTextContent] = useState('');
    const dispatch = useDispatch()

    function submitComment(e){
        e.preventDefault();
        const commentObject = {
            player_id: playerId,
            favoring: favoring,
            content: textContent
        }
        fetch('/games/'+gameId+'/questions/'+questionId+'/comment', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(commentObject)
          }).then(r => r.json())
          .then(r => dispatch(commentAdded(r)))
          e.target.reset()
    }

    return(
        <form onSubmit={submitComment}>
            <input onChange={e=> setTextContent(e.target.value)} type="text"></input>
            <input type="submit" label="Comment"></input>
        </form>
    )
}

export default CreateComment;
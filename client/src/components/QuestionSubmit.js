import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { questionAdded } from "../features/playSlice";

function QuestionSubmit({game}){
   const dispatch = useDispatch()
   const [leftChoice, setLeftChoice] = useState('')
   const [rightChoice, setRightChoice] = useState('')
   const userAlreadySubmitted = (!!game.user_player && game.questions.some(q => q.player_id === game.user_player.id))

   function errorAlert(errorObject){
    let errorText =''
    for (const key in errorObject) {
        errorText +=`${key} error: ${errorObject[key].join(",")} \n`
      }
    window.alert(errorText)
    }

   function handleSubmit(e){
       e.preventDefault();
       const questionObj = {left_choice: leftChoice, right_choice: rightChoice, player_id: game.user_player.id};
       fetch('/games/'+game.id+'/questions', {
           method: "POST",
           headers: {
             "Content-Type": "application/json"
           },
           body: JSON.stringify(questionObj),
         }).then (r => {if(r.ok){
           r.json()
           .then(r => dispatch(questionAdded(r)
           ))}else{
                r.json().then(r=> errorAlert(r.errors))
           }})
   }

   if (!game.user_player){
       return(
           <div>
               <h2>You're not a part of this game</h2>
               <p>Please join the game to submit</p>
           </div>
       )
   }

   else if (userAlreadySubmitted){
       return (
           <div>
               <h2>You've Submitted Your Conundrum</h2>
               <p>Vote on it and other player's submissions in the vote tab</p>
           </div>
       )
   }

   return (
       <div>
           <h2> Time to be Rather Clever!</h2>
           <p>Come up with two choices for your friends to ponder!</p>
           <form onSubmit={handleSubmit}>
               <h3>Would You Rather...</h3>
               <input
                   type="text" 
                   onChange={e => setLeftChoice(e.target.value)}
                   value={leftChoice}
                   id="left-choice"
               />
               <label>  or... </label>
               <input
                   type="text" 
                   onChange={e => setRightChoice(e.target.value)}
                   value={rightChoice}
                   id="right-choice"
               />
               <input type="submit" value="SUBMIT"/>
           </form>

       </div>
   )
}

export default QuestionSubmit
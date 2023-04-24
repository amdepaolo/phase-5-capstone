 import React, {useState} from "react";
 import { useDispatch } from "react-redux";
 import { questionAdded } from "../features/playSlice";

 function QuestionSubmit({game}){
    const dispatch = useDispatch()
    const [leftChoice, setLeftChoice] = useState('')
    const [rightChoice, setRightChoice] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        const questionObj = {left_choice: leftChoice, right_choice: rightChoice};
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
                r.json().then(r => console.log(r))
            }})
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
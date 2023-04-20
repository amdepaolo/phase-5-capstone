 import React, {useState} from "react";

 function QuestionSubmit({player}){

    const [leftChoice, setLeftChoice] = useState('')
    const [rightChoice, setRightChoice] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        const questionObj = {left_choice: leftChoice, right_choice: rightChoice};
        fetch('/games/'+player.game_id+'/questions', {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(questionObj),
          }).then(r => r.json())
          .then(r => dispatch(gamesAdded(r)))
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
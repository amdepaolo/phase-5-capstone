import React from "react";
import { Link } from "react-router-dom";

function AboutTheGame(){

    return(
        <div>
            <h2>Welcome to Rather Clever</h2>
            <p>
                Rather Clever is a fun way to waste time, ponder some tough choices, and maybe have a little laugh. It's a little like playing "Would You Rather?" while hanging out with friends, but from your computer. Here's how to play:
            </p>
            <h3>Join or Host A Game</h3>
            <p> You can choose to <Link to='/join'>join a game</Link> that someone else is hosting, or <Link to='/host'>create a game</Link> of your own that others can join</p>
            <h3>Submit Your Choices</h3>
            <p> Come up with the two options for a "Would you rather..." scenario that the other players in the game to mull over.</p>
            <h3>Vote</h3>
            <p>Look at submissions and think over the choices presented to you. Vote on the option that you would rather take</p>
            <h3>Pick your Favorite Submissions</h3>
            <p>There are special awards for the "Funniest" and "Most Ponderable" submission. Be sure to pick and save your favorites for each category.</p>

        </div>
    )
}

export default AboutTheGame
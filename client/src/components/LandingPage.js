import React, {useState} from "react";
import Login from "./Login";
import SignUp from "./SignUp";

function LandingPage(){
    const[existingAccount, setExistingAccount] = useState(false)

    function swapForm(){
        setExistingAccount(!existingAccount)
    }
    
   return (
    <div>
        <h1>Rather Clever!</h1>
        {existingAccount? <Login swapForm={swapForm}/>:<SignUp swapForm={swapForm}/>}
    </div>
   )

}

export default LandingPage
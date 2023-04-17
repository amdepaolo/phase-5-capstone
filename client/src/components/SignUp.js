import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { userAdded } from "../features/usersSlice";

function SignUp({swapForm}){
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmation, setConfirmation] = useState('')
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault()
        const newUserObj = { email: email, name: name, password: password, password_confirmation: confirmation};
        fetch('/users', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserObj),
          })
        .then(r => {if (r.ok){
            r.json().then(dispatch(userAdded(r)))
          } else {window.alert("Sign-up Error. Check entered information")}
        })
    }

    return(
        <div>
            <h2>Sign-Up:</h2>
            <form onSubmit={handleSubmit}>
                <label><b>Name: </b></label>
                <input 
                    type='text' 
                    value={name} 
                    onChange={e => setName(e.target.value)} 
                    placeholder="First Name"></input>
                <label><b>Email: </b></label>
                <input 
                    type='text'
                    value={email} 
                    onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                <label><b>Password: </b></label>    
                <input 
                    type='password' 
                    value={password} 
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Password"></input>
                <input 
                    type='password' 
                    value={confirmation}
                    onChange={e => setConfirmation(e.target.value)} 
                    placeholder="Confirm Password"></input>
                <input type='submit' value='Create User'></input>
                <button onClick={swapForm}>Log in to existing account</button>
            </form>
        </div>
    )
}

export default SignUp
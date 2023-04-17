import React, {useState} from 'react'
import { useDispatch } from 'react-redux'
import { userAdded } from '../features/usersSlice'

function Login( {swapForm}){
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch();

    function handleSubmit(e){
        e.preventDefault()
        fetch('/login', {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email: email, password: password }),
          })
          .then(r => {if (r.ok){
            r.json().then(r => dispatch(userAdded(r)))
          }})
    }

    return (
        <div>
            <h2>Log-in</h2>
            <form onSubmit={handleSubmit}>
                <label><b>Email: </b></label>
                <input  
                    type='text' 
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder='email'></input>
                <label><b>Password: </b></label>
                <input
                    type='password'
                    value={password}
                    id='password'
                    onChange={e => setPassword(e.target.value)}
                    placeholder='password'></input>
                <input type='submit' value='Log-In'></input>
                <button onClick={swapForm}>Create a new account</button>
            </form>
        </div>
    )
}

export default Login
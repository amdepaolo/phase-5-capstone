import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { userAdded, userRemoved } from "../features/usersSlice";

function UpdateUser({user}){
    const [name, setName] = useState('')
    const dispatch = useDispatch()

    function nameChangeSubmit(e){
        e.preventDefault();
        fetch('/users/'+user.id, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({name: name})
          }).then(r => {
            if(r.ok){
                r.json().then(r => dispatch(userAdded(r)))
            } else {window.alert('error processing request')}
          })
    }

    function handleDelete(){
        if(window.confirm("Delete User? You'll have to create a new user to continue using the app.")){
            fetch('/users/'+user.id, {
                method: "DELETE",
                headers: {
                  "Content-Type": "application/json",
                }})
                .then(r => {if (r.ok){
                   dispatch(userRemoved())
                }})
        }
    }

    return(
        <form onSubmit={nameChangeSubmit}>
            <label>Change Name?</label>
            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <input type="submit" value="Save Name Change"/>
            <label>Delete User?</label>
            <button on onClick={handleDelete}>Delete User</button>
        </form>
    )
}

export default UpdateUser
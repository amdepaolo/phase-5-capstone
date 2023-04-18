import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { userRemoved, userAdded } from "./features/usersSlice";
import LandingPage from "./components/LandingPage";
import HostGame from "./components/HostGame";
import JoinGame from "./components/JoinGame";

function App() {
  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch('/me')
    .then(r => r.json())
    .then(r => dispatch(userAdded(r)))
  }, [])

  function handleLogout(){
    fetch('/logout', {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }})
    .then(r => {if(r.ok){dispatch(userRemoved())}})
  }

  if (!user.id){ return <LandingPage/>}

  return (
    <div className="App">
      <h1>Rather Clever</h1>
      <p>Welcome {user.name}</p>
      <button onClick={handleLogout}>Log Out</button>
      <HostGame />
      <JoinGame />
    </div>
  );
}

export default App;

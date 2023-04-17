import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { userRemoved, userAdded } from "./features/usersSlice";
import LandingPage from "./components/LandingPage";

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

  return (
    <div className="App">
      {user.id? <p>Welcome {user.name}</p>:<LandingPage />}
      <button onClick={handleLogout}>Log Out</button>
    </div>
  );
}

export default App;

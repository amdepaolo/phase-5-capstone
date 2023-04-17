import React from "react";
import {useSelector, useDispatch} from "react-redux"
import { userAdded } from "./features/usersSlice";

function App() {

  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  function handleClick(){
    dispatch(userAdded({name: "hank"}))
  }

  return (
    <div className="App">
      <p>{user? user.name: "no User"}</p>
      
      <p>Hello World!</p>
      <button onClick={handleClick}>click me</button>
    </div>
  );
}

export default App;

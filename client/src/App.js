import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import { userAdded } from "./features/usersSlice";
import LandingPage from "./components/LandingPage";
import HostGame from "./components/HostGame";
import JoinGame from "./components/JoinGame";
import {Route, Switch} from "react-router-dom"
import MainGamePage from "./components/MainGamePage";
import UserProfile from "./components/UserProfile";
import NavBar from "./components/NavBar";
import AboutTheGame from "./components/AboutTheGame";

function App() {
  const user = useSelector(state => state.users)
  const dispatch = useDispatch()

  useEffect(()=>{
    fetch('/me')
    .then(r => r.json())
    .then(r => dispatch(userAdded(r)))
  }, [])


  if (!user.id){ return <LandingPage/>}

  return (
    <div className="App">
      <NavBar />
      <h1>Rather Clever</h1>
      <Switch>
        <Route exact path = '/'>
          <UserProfile />
        </Route>
        <Route path = '/host'>
          <HostGame />
        </Route>
        <Route path = '/join'>
          <JoinGame />
        </Route>
        <Route path = '/about'>
          <AboutTheGame />
        </Route>
        <Route path = '/games/:id'>
          <MainGamePage />
        </Route>
      </Switch>
    </div>
  );

}

export default App;


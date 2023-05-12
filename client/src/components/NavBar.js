import React from "react";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userRemoved } from "../features/usersSlice";

function NavBar(){
    const dispatch = useDispatch();

    function handleLogout(){
        fetch('/logout', {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          }})
        .then(r => {if(r.ok){dispatch(userRemoved())}})
      }

    return(
        <div id="navBar">
            <NavLink to="/">
                Home 
            </NavLink>
            <NavLink to="/join">
                Join a Game
            </NavLink>
            <NavLink to="/host">
                Host a Game
            </NavLink>
            <NavLink to="/about">
                How to Play
            </NavLink>
            <NavLink to="/" onClick={handleLogout}>
                Log Out
            </NavLink>
        </div>
    )
}

export default NavBar
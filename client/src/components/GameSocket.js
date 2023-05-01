import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionUpdated } from "../features/playSlice";
import ActionCable from 'actioncable'


function GameSocket({gameId}){
    const [socketMessage, setSocketMessage] = useState('...')
    const dispatch = useDispatch()

    const cable = ActionCable.createConsumer("ws://localhost:3000/cable")

    cable.subscriptions.create({ channel: "GamesChannel", room: gameId }, {
        connected: function() {
          setSocketMessage("connected 🟢");
        },
        disconnected: function() {
          setSocketMessage("disconnected");
        },
        received: function (received_data) {
          dispatch(questionUpdated(received_data))
        }
      })

    return(
        <span>{socketMessage}</span>
    )
}

export default GameSocket
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionAdded, questionUpdated } from "../features/playSlice";
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
          console.log("disconnected")
          setSocketMessage("disconnected");
        },
        received: function(received_data) {
          setSocketMessage("connected 🟢")
          switch (received_data.type){
            case "question updated":
              dispatch(questionUpdated(received_data.question))
              break;
            case "question added":
              dispatch(questionAdded(received_data.question))
              break;
            default:
              console.log(received_data)
              break;
          }
        }
      })

    return(
        <span>{socketMessage}</span>
    )
}

export default GameSocket
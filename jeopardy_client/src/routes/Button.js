import { useLocation } from "react-router";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";
import axios from "axios"

export default function Button() {
    const {state} = useLocation()
    console.log(state);
    const {id} = state;
    const {user} = state;
    console.log("user is " + user)
    console.log("id is " + id);
    const client = new W3CWebSocket('ws://127.0.0.1:8000');
    useEffect(() => {
        client.onopen = () => {
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
          console.log(message);
        };  
      })
    const [pressed, setPressed] = useState(false);
    const [result, setResult] = useState("");

    // const buzzer = () => {
    //     if (!pressed) {
    //         setPressed(true);
    //     axios.post('http://localhost:5000/player', {
    //         name: user
    //     })
    //     .then(function (response) {
    //         console.log(response);
    //         setResult(response.data);
    //     })
    //     .catch(function(error) {
    //         console.log(error);
    //     });
    // } else {
    //     setResult("Already pressed");
    // }
    // }
    const buzzer = () => {
        client.send(JSON.stringify(state))
    }
    return (
        <div> 
            <button onClick = {buzzer}>Buzz</button>
            <div>
                {/* {`${result}`} */}
            </div>
        </div>
    );
}
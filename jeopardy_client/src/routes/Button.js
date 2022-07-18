import { useLocation } from "react-router";
import React, { useState } from 'react';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";

export default function Button() {
    const {state} = useLocation()
    const {id} = state;
    const {user} = state;
    const client = new W3CWebSocket('ws://127.0.0.1:8000');
    useEffect(() => {
        client.onopen = () => {
          var joinMsg = {"type": "join", "player":state}
          client.send(JSON.stringify(joinMsg));
          console.log('WebSocket Client Connected');
        };
        client.onmessage = (message) => {
          console.log(message.data);
        };  
      })


    // const [pressed, setPressed] = useState(false);
    // const [result, setResult] = useState("");

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
    

    // buzzer should contact the server and attempt to log an entry for competition 
    const buzzer = () => {
        var message = {"type": "buzz", "player": state}
        client.send(JSON.stringify(message))
        
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
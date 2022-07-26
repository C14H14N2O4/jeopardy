import { useLocation } from "react-router";
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
          var signal = JSON.parse(message.data);
          if (signal.type === "congratulations") {
            console.log(signal.content);
          } else if (signal.type === "err") {
            console.log(signal.content);
          } else if (signal.type === "winner") {
            console.log("The winner is " + signal.content);
          }
        };  
      }) 
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
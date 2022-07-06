import { connection, w3cwebsocket as W3CWebSocket } from 'websocket';
import { useEffect } from 'react';

export default function WebTest() {
  
  const client = new W3CWebSocket('ws://127.0.0.1:8000');



  useEffect(() => {
    client.onopen = () => {
      console.log('WebSocket Client Connected');
    };
    client.onmessage = (message) => {
      console.log(message.data);
    };
  })

  const testBuzz = () => {
    client.send("test")
  }


  return (
    <div>
      <button onClick = {testBuzz}>Buzz</button> 
      Test
    </div>
  )
}
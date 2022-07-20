import React, { useState } from 'react';
import { useEffect } from 'react';
import { w3cwebsocket as W3CWebSocket } from "websocket";


export default function Moderator() {
    const client = new W3CWebSocket('ws://127.0.0.1:8000');
    useEffect(() => {
        client.onopen = () => {
            console.log('Websocket Client Connected');
        };
        client.onmessage = (message) => {
            console.log(message.data);
        };
    })

    const start = () => {
        var message = {"type": "start"}
        client.send(JSON.stringify(message))
    }

    const reset = () => {
        var message = {"type": "reset"}
        client.send(JSON.stringify(message))
    }

    return (
        <div> 
            <button onClick = {start}>
                Start
            </button>
           <button onClick = {reset}>
                Reset
           </button>
        </div>
    );
}
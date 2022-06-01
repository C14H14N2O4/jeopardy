import { useLocation } from "react-router";
import React, { useState } from 'react';
import axios from "axios"

export default function Button() {
    const {state} = useLocation()
    const {user} = state;
    const [pressed, setPressed] = useState(false);
    const [result, setResult] = useState("");
    const buzzer = () => {
        if (!pressed) {
            setPressed(true);
        axios.post('http://localhost:5000/player', {
            name: user
        })
        .then(function (response) {
            console.log(response);
            setResult(response.data);
        })
        .catch(function(error) {
            console.log(error);
        });
    } else {
        setResult("Already pressed");
    }
    }
    return (
        <div> 
            <button onClick = {buzzer}>Buzz</button>
            <div>
                {`${result}`}
            </div>
        </div>
    );
}
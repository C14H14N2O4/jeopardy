import { useLocation } from "react-router";
import axios from "axios"

export default function Button() {
    const {state} = useLocation()
    const {user} = state;
    const buzzer = () => {
        fetch("http://localhost:5000", {
            mode: 'no-cors'
        })
        .then(res => res)
        .then(
            (result) => {
            console.log(result);
        });
    }
    return (
        <div> 
            <button onClick = {buzzer}>Buzz</button>
        </div>
    );
}
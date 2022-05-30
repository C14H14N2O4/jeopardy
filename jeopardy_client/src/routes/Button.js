import { useLocation } from "react-router";
import axios from "axios"

export default function Button() {
    const {state} = useLocation()
    const {user} = state;
    // const buzzer = () => {
    //     fetch("http://localhost:5000", {
    //         method: 'POST',
    //         body: {user}
    //     })
    //     .then(res => res)
    //     .then(
    //         (result) => {
    //         console.log(result.body);
    //     });
    // }

    const buzzer = () => {
        axios.post('http://localhost:5000', {
            name: user
        })
        .then(function (response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    return (
        <div> 
            <button onClick = {buzzer}>Buzz</button>
        </div>
    );
}
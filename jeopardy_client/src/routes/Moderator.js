import axios from "axios";

export default function Moderator() {
    const reset = () => {
        axios.post('http://localhost:5000/reset', {
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
    const start = () => {
        axios.post('http://localhost:5000/start', {
        })
        .then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
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
import { useLocation } from "react-router";

export default function Button() {
    const {state} = useLocation()
    const {user} = state;
    return (
        <div> 
            {user}
        </div>
    );
}
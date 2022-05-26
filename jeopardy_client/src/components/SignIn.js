import React, { useState } from 'react';
import { useNavigate } from 'react-router';

export default function SignIn() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [redirect, setRedirect] = useState(false);
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(user);
        navigate('/button', {state: {user: user}});
    }
    return (
            <form onSubmit = {handleSubmit}>
                <label>Username:
                <input 
                    type="text" 
                    id = "userName" 
                    name = "userName"
                    onChange = {e => setUser(e.target.value)}
                    />
                    </label>
                <input type = "submit" value = "Submit"/>
            </form>
    )
}
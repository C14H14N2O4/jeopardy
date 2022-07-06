import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import {v4 as uuidv4 } from 'uuid';

export default function SignIn() {
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [id, setId] = useState(uuidv4());
    const [redirect, setRedirect] = useState(false);
    function handleSubmit(evt) {
        evt.preventDefault();
        navigate('/button', {state: {id: id, user: user}});
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
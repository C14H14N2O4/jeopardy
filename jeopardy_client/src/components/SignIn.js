import React, { useState } from 'react';

export default function SignIn() {
    const [user, setUser] = useState("");
    function handleSubmit(evt) {
        evt.preventDefault();
        console.log(user);
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
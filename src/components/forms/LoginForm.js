import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './BookForm.css';

async function loginUser(credentials) {
    return fetch('https://bookkeeperdb.herokuapp.com/auth/users/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function LoginForm({ setToken }) {
    const [userName, setUserName] = useState();
    const [password, setPassword] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            password
        });
        setToken(token);
        window.location.reload();
    }

    return(
        <form onSubmit={handleSubmit} className="book-form">
            <label>
                Username:
                <input type="text" onChange={event => setUserName(event.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" onChange={event => setPassword(event.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
};

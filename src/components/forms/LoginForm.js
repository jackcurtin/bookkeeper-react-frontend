import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accountForm.css';
import { useHistory } from 'react-router-dom';

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

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            userName,
            password
        });
        setToken(token.jwt);
        history.push("/");
        window.location.reload();
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="account-form">
            <label>
                Username:
                <input type="text" onChange={event => setUserName(event.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" onChange={event => setPassword(event.target.value)}/>
            </label>
            <input classname="submit-button" type="submit" value="Submit"/>
        </form>
        </div>
    )
}

LoginForm.propTypes = {
    setToken: PropTypes.func.isRequired
};

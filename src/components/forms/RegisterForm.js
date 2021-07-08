import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './accountForm.css'
import { useHistory } from 'react-router-dom';
import loginUser from './LoginForm';


async function createUser(credentials) {
    return fetch('https://bookkeeperdb.herokuapp.com/auth/users/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

export default function RegisterForm({ setToken }) {
    const [userName, setUserName] = useState();
    const [emailAddress, setEmail] = useState();
    const [password, setPassword] = useState();

    const history = useHistory();

    const handleSubmit = async e => {
        e.preventDefault();
        const createConf = await createUser({
            userName,
            emailAddress,
            password
        })
        history.push("/login");
    }

    return(
        <div className="form-container">
            <form onSubmit={handleSubmit} className="account-form register-form">
            <label>
                Username:
                <input type="text" onChange={event => setUserName(event.target.value)}/>
            </label>
            <label>
                Email Address:
                <input type="text" onChange={event => setEmail(event.target.value)}/>
            </label>
            <label>
                Password:
                <input type="password" onChange={event => setPassword(event.target.value)}/>
            </label>
            <input type="submit" value="Submit"/>
        </form>
        </div>
    )
}

RegisterForm.propTypes = {
    setToken: PropTypes.func.isRequired
};

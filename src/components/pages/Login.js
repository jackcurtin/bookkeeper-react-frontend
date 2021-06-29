import React, {useState} from "react";
import "../../App.css"
import LoginForm from "../forms/LoginForm";

export default function Login() {
    const [token, setToken] = useState();
    return (
        <>
            <h1 className="login">LOGIN</h1>
            <LoginForm setToken={setToken}/>
        </>
    )
}

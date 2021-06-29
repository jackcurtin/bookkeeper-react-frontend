import React, {useState} from "react";
import "../../App.css"
import LoginForm from "../forms/LoginForm";
import useToken from "../useToken";

export default function Login() {
    const { token, setToken } = useToken()
    return (
        <>
            <h1 className="login">LOGIN</h1>
            <LoginForm
                setToken={setToken}/>
        </>
    )
}

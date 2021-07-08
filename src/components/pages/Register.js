import React, {useState} from "react";
import "../../App.css"
import LoginForm from "../forms/LoginForm";
import useToken from "../useToken";

export default function Register() {
    const { token, setToken } = useToken()
    return (
        <>
            <h1 className="register">Create an Account</h1>
            <LoginForm
                setToken={setToken}/>
        </>
    )
}
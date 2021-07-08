import React, {useState} from "react";
import "../../App.css"
import RegisterForm from "../forms/RegisterForm";
import useToken from "../useToken";

export default function Register() {
    const { token, setToken } = useToken()
    return (
        <>
            <h1 className="register">Create an Account</h1>
            <RegisterForm
                setToken={setToken}/>
        </>
    )
}
import React, {useState} from "react";
import "../../App.css"
import RegisterForm from "../forms/RegisterForm";
import useToken from "../useToken";

export default function Register() {
    const { token, setToken } = useToken()
    return (
        <>
        <div className="register">
        <h1>REGISTER</h1>
            <RegisterForm
                setToken={setToken}/>
        </div>
        </>
    )
}
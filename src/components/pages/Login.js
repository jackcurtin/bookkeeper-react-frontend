import React, {useState} from "react";
import "../../App.css"
import LoginForm from "../forms/LoginForm";

function setToken(userToken){
    sessionStorage.setItem('token', JSON.stringify(userToken));
}

function getToken(userToken){

}

export default function Login() {
    const token = getToken();
    return (
        <>
            <h1 className="login">LOGIN</h1>
            <LoginForm setToken={setToken}/>
        </>
    )
}

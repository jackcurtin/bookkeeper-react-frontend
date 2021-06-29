import useToken from "../useToken";
import LoginForm from "../forms/LoginForm";
import React from "react";

export default function Logout() {
    localStorage.clear();
    return (
        <>
            <h1 className="login">Thanks, see you again soon!</h1>
        </>
    )
}

import React from "react";

export default function Logout() {
    if (localStorage.token){
        localStorage.clear();
        window.location.reload();
    }
    return (
        <>
            <h1 className="login">See you next time!</h1>
        </>
    )
}

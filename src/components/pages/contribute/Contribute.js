import React from "react";
import "../../../App.css"
import BookForm from "../../forms/BookForm";
import "./Contribute.css"

export default function Contribute() {
    return (
        <>
            <h1 className="contribute">CONTRIBUTE</h1>
            <div className="contribute-forms">
                <BookForm />
            </div>
        </>)
}

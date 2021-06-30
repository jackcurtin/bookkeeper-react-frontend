import React from "react";
import "../../../App.css"
import BookForm from "../../forms/book/BookForm";
import "./Contribute.css"
import AuthorForm from "../../forms/AuthorForm";

export default function Contribute() {
    return (
        <>
            <h1 className="contribute">CONTRIBUTE</h1>
            <div className="contribute-forms">
                <BookForm />
                <div className="author-genre-publisher-forms">
                    <AuthorForm />
                </div>
            </div>
        </>)
}

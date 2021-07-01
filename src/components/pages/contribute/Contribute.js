import React from "react";
import "../../../App.css"
import BookForm from "../../forms/book/BookForm";
import "./Contribute.css"
import AuthorForm from "../../forms/AuthorForm";
import GenreForm from "../../forms/GenreForm";
import PublisherForm from "../../forms/PublisherForm";

export default function Contribute() {
    return (
        <>
            <h1 className="contribute">CONTRIBUTE</h1>
            <div className="contribute-forms">
                <BookForm />
                <div className="author-genre-publisher-forms">
                    <AuthorForm />
                    <GenreForm />
                    <PublisherForm />
                </div>
            </div>
        </>)
}

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
                <div className="contribute-top-row">
                    <div className="contribution-guidelines">
                        <h2>Contribution Guidelines</h2>
                        <p className="contribution-text">
                            Thanks for helping us expand our currently modest database! To help you
                            understand how this data works together, please read through the following
                            bulletpoints if this is your first time submitting.
                            <ul className="contribution-bullets">
                                <li>
                                    All books must utilize and author, genre, and publisher entry that already
                                    exists in the database. If they are currently not included in our database,
                                    you must make an entry to the corresponding author/genre/publisher that 
                                    is missing.
                                </li>
                                <li>
                                    There are no duplicates allowed in the database, limited by the respective title/name.
                                </li>
                                {/* <li>
                                    The ISBN is used to pull a corresponding book cover from the Google Books API. However,
                                    the entries are restricted by Book Title, not ISBN as to avoid a multitude of different book
                                    editions. This is to ensure the database remains concise, as the purpose of this app is to 
                                    log and share reading habits rather than collections.;
                                </li> */}
                            </ul>
                        </p>
                    </div>
                    <BookForm />
                </div>
                <div className="author-genre-publisher-forms">
                    <AuthorForm />
                    <GenreForm />
                    <PublisherForm />
                </div>
            </div>
        </>)
}

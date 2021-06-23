import React from "react";
import LibraryBookCards from "./LibraryBookCards";
import "./Library.css";


function LibraryBooks(props) {
    return (
        <React.Fragment>
            <h1 className="library-cat-heading">All Books</h1>
            <LibraryBookCards/>
        </React.Fragment>
    )
}

export default LibraryBooks;

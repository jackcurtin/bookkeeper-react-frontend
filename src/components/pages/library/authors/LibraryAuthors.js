import React from "react";
import LibraryBookCards from "../books/LibraryBookCards";
import "../Library.css";
import LibraryAuthorCards from "./LibraryAuthorCards";


function LibraryAuthors(props) {
    return (
        <React.Fragment>
            <h1 className="library-cat-heading">All Authors</h1>
            <LibraryAuthorCards/>
        </React.Fragment>
    )
}

export default LibraryAuthors;

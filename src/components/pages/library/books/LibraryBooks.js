import React from "react";
import LibraryBookCards from "./LibraryBookCards";
import "../Library.css";
import { useParams } from 'react-router-dom';


function LibraryBooks(props) {
    const { category } = useParams();
    return (
        <React.Fragment>
            <h1 className="library-cat-heading">All {category}</h1>
            <LibraryBookCards
                category = {category}
            />)
        </React.Fragment >
    )
}

export default LibraryBooks;

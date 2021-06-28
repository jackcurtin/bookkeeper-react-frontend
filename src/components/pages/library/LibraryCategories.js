import React from "react";
import LibraryCards from "./LibraryCards";
import "./Library.css";
import { useParams } from 'react-router-dom';


function LibraryCategories(props) {
    const { category } = useParams();
    return (
        <React.Fragment>
            <h1 className="library-cat-heading">All {category}</h1>
            <LibraryCards
                category = {category}
            />)
        </React.Fragment >
    )
}

export default LibraryCategories;

import React, {Fragment} from "react";
import "../../App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LibraryBooks from "./library/books/LibraryBooks";
import LibraryHome from "./library/LibraryHome";
import LibraryAuthors from "./library/authors/LibraryAuthors";
export default function Library() {
    return (
        <Fragment>
            <switch>
                <Route path="/library" exact component={LibraryHome}/>
                <Route path="/library/:category" component = {LibraryBooks}/>
            </switch>
        </Fragment>
    )
}

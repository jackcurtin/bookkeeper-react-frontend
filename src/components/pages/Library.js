import React, {Fragment} from "react";
import "../../App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LibraryBooks from "./library/LibraryBooks";
import LibraryHome from "./library/LibraryHome";
export default function Library() {
    return (
        <Fragment>
            <switch>
                <Route path="/library" exact component={LibraryHome}/>
                <Route path="/library/books" component = {LibraryBooks}/>
            </switch>
        </Fragment>
    )
}

import React, {Fragment} from "react";
import "../../App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import LibraryCategories from "./library/LibraryCategories";
import LibraryHome from "./library/LibraryHome";
export default function Library() {
    return (
        <Fragment>
            <switch>
                <Route path="/library" exact component={LibraryHome}/>
                <Route path="/library/:category" component = {LibraryCategories}/>
            </switch>
        </Fragment>
    )
}

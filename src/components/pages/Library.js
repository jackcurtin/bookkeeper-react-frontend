import React, {Fragment} from "react";
import "../../App.css"
import Cards from "../cards/Cards";

export default function Library() {
    return (
        <Fragment>
            <h1 className="library">LIBRARY</h1>
            <Cards/>
        </Fragment>
    )
}

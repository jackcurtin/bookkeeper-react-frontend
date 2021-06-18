import React, {Fragment} from "react";
import CategoryCards from "../../cards/CategoryCards";

export default function LibraryHome() {
    return (
        <Fragment>
            <div className="library">
                <h1>LIBRARY</h1>
                <CategoryCards/>
            </div>
        </Fragment>
    )
}

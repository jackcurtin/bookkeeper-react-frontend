import React from 'react';
import {Link} from "react-router-dom";


function LibraryItemCard(props) {
    return (
        <React.Fragment>
            <li className="library-item-card">
                <div className="library-item-card-content">
                    <h3 className="library-item-card-head">
                        {props.head}
                    </h3>
                    <h4 className="library-item-card-cat1">{props.cat1}</h4>
                    <h4 className="library-item-card-cat2">{props.cat2}</h4>
                    <h4 className="library-item-card-cat3">{props.cat3}</h4>
                </div>
            </li>
        </React.Fragment>
    );
}

export default LibraryItemCard;

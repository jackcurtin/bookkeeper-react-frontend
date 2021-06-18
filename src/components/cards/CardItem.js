import React from 'react';
import {Link} from "react-router-dom";


function CardItem(props) {
    return (
        <React.Fragment>
            <li className="cards-item">
                <Link className="cards-item-link" to={props.path}>
                    <h3 className="cards-item-title">
                        {props.category} <i className={props.icon}></i>
                    </h3>
                </Link>
            </li>
        </React.Fragment>
    );
}

export default CardItem;

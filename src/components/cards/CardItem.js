import React from 'react';
import {Link} from "react-router-dom";


function CardItem(props) {
    return (
        <React.Fragment>
            <li className="cards-item">
                <Link className="cards-item-link" to={props.path}>
                    <figure className="cards-item-label" data-category={props.category}>
                        <i className={props.icon}></i>
                    </figure>
                    <div className="cards__item__title">
                        <h3 className="cards-item-title-text">{props.category}</h3>
                    </div>
                </Link>
            </li>
        </React.Fragment>
    );
}

export default CardItem;

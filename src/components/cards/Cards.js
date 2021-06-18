import React from "react";
import CardItem from "./CardItem";

function Cards(props) {
    return (
        <div className="cards">
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem
                        category="Books"
                        icon="fas fa-book-open"
                        path="/library/books">
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards;

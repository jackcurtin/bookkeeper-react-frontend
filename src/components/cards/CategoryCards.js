import React from "react";
import CardItem from "./CardItem";
import "./CategoryCards.css"

function CategoryCards(props) {
    return (
        <div className="cards">
            <div className="cards-container">
                <div className="cards-wrapper">
                    <ul className="cards-items">
                        <CardItem className="cards-item"
                                  category="Books"
                                  icon="fas fa-book-open"
                                  path="/library/books">
                        </CardItem>
                        <CardItem className="cards-item"
                                  category="Authors"
                                  icon="fas fa-user"
                                  path="/library/authors">
                        </CardItem>
                        <CardItem className="cards-item"
                                  category="Genres"
                                  icon="fas fa-archive"
                                  path="/library/genres">
                        </CardItem>
                        <CardItem className="cards-item"
                                  category="Publishers"
                                  icon="fas fa-industry"
                                  path="/library/publishers">
                        </CardItem>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CategoryCards;

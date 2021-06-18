import React from "react";
import LibraryItemCard from "./LibraryItemCard";

function LibraryBookCards(props) {
    return (
        <div className="library-book-cards">
            <div className="library-book-cards-container">
                <div className="library-book-cards-wrapper">
                    <ul className="library-book-cards-items">
                        <LibraryItemCard className="library-book-cards-item"
                                  head="Blood Meridian"
                                  cat1="Cormac McCarthy"
                                  cat2="Western"
                                  cat3="Random House">
                        </LibraryItemCard>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default LibraryBookCards;

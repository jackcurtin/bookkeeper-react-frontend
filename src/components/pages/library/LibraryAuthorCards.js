import React, {useEffect, useState} from "react";
import LibraryItemCard from "./LibraryItemCard";
import "./LibraryCards.css"

function LibraryAuthorCards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        fetch("https://bookkeeperdb.herokuapp.com/api/authors")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setAuthors(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="library-cards">
                <div className="library-cards-container">
                    <div className="library-cards-wrapper">
                        <ul className="library-cards-items">
                            {authors.map(author => (
                                <LibraryItemCard className="library-cards-items"
                                                 head={`${author.firstName} ${author.lastName}`}
                                                 cat1={`Nationality: ${author.nationality}`}
                                                 cat2={`Age: ${author.age}`}>
                                </LibraryItemCard>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LibraryAuthorCards;

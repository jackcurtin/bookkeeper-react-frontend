import React, {useEffect, useState} from "react";
import LibraryItemCard from "./LibraryItemCard";
import "./LibraryCards.css"

function LibraryBookCards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch("https://bookkeeperdb.herokuapp.com/api/books")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setBooks(result);
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
                            {books.map(book => (
                                <LibraryItemCard className="library-cards-items"
                                                 head={book.title}
                                                 cat1={`${book.author.firstName} ${book.author.lastName}`}
                                                 cat2={`${book.genre.name}`}
                                                 cat3={`${book.publisher.name}`}>
                                </LibraryItemCard>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LibraryBookCards;

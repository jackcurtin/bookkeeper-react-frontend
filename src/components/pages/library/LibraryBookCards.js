import React, {useEffect, useState} from "react";
import LibraryItemCard from "./LibraryItemCard";
import "./LibraryBookCards.css"

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
            <div className="library-book-cards">
                <div className="library-book-cards-container">
                    <div className="library-book-cards-wrapper">
                        <ul className="library-book-cards-items">
                            {books.map(book=> (
                                <LibraryItemCard className="library-book-cards-items"
                                                 head={book.title}
                                                 cat1={`${book.author.firstName} ${book.author.lastName}`}
                                                 cat2={`${book.genre.name}`}
                                                 cat3={`${book.publisher.name}`}>
                                </LibraryItemCard>
                            ))}
                            {/*<LibraryItemCard className="library-book-cards-item"*/}
                            {/*          head="Blood Meridian"*/}
                            {/*          cat1="Cormac McCarthy"*/}
                            {/*          cat2="Western"*/}
                            {/*          cat3="Random House">*/}
                            {/*</LibraryItemCard>*/}
                            {/*<LibraryItemCard className="library-book-cards-item"*/}
                            {/*                 head="A Wizard of Earthsea"*/}
                            {/*                 cat1="Ursula K. LeGuin"*/}
                            {/*                 cat2="Fantasy"*/}
                            {/*                 cat3="Bantam Books">*/}
                            {/*</LibraryItemCard>*/}
                            {/*<LibraryItemCard className="library-book-cards-item"*/}
                            {/*                 head="A Wild Sheep Chase"*/}
                            {/*                 cat1="Haruki Murakami"*/}
                            {/*                 cat2="Mystery"*/}
                            {/*                 cat3="Vintage Books">*/}
                            {/*</LibraryItemCard>*/}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default LibraryBookCards;

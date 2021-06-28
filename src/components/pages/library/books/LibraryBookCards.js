import React, {useEffect, useState} from "react";
import LibraryItemCard from "../LibraryItemCard";
import "../LibraryCards.css"

function LibraryBookCards(props) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [data, setData] = useState([]);

    useEffect(() => {
        console.log(props.category)
        fetch(`https://bookkeeperdb.herokuapp.com/api/${props.category}`)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
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
    } else if (props.category === "books") {
        return (
            <div className="library-cards">
                <div className="library-cards-container">
                    <div className="library-cards-wrapper">
                        <ul className="library-cards-items">
                            {
                                data.map(item => (
                                <LibraryItemCard className="library-cards-items"
                                                 head={item.title}
                                                 cat1={`${item.author.firstName} ${item.author.lastName}`}
                                                 cat2={item.genre.name}
                                                 cat3={item.publisher.name}>
                                </LibraryItemCard>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else if (props.category === "authors") {
        return (
            <div className="library-cards">
                <div className="library-cards-container">
                    <div className="library-cards-wrapper">
                        <ul className="library-cards-items">
                            {
                                data.map(item => (
                                    <LibraryItemCard className="library-cards-items"
                                                     head={`${item.firstName} ${item.lastName}`}
                                                     cat1={item.nationality}>
                                    </LibraryItemCard>
                                ))}
                        </ul>
                    </div>
                </div>
            </div>
        )
    } else {
        return (
            <div className="library-cards">
                <div className="library-cards-container">
                    <div className="library-cards-wrapper">
                        <ul className="library-cards-items">
                            {
                                data.map(item => (
                                    <LibraryItemCard className="library-cards-items"
                                                     head={item.name}>
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

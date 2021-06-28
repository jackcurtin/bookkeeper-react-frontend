import React from "react";
import './BookForm.css'

class BookForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            value: '',
            authors: [],
            genres: [],
            publishers: [],
            error: null,
            authorsLoaded: false,
            genresLoaded: false,
            publishersLoaded: false
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('The following was submitted: ' + this.state.value);
        event.preventDefault();
    }

    componentDidMount() {
        fetch("https://bookkeeperdb.herokuapp.com/api/authors")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        authorsLoaded: true,
                        authors: result
                    });
                },
                (error) => {
                    this.setState({
                        authorsLoaded: true,
                        error
                    });
                }
            )
        fetch("https://bookkeeperdb.herokuapp.com/api/genres")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        genresLoaded: true,
                        genres: result
                    });
                },
                (error) => {
                    this.setState({
                        genresLoaded: true,
                        error
                    });
                }
            )
        fetch("https://bookkeeperdb.herokuapp.com/api/publishers")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        publishersLoaded: true,
                        publishers: result
                    });
                },
                (error) => {
                    this.setState({
                        publishersLoaded: true,
                        error
                    });
                }
            )

    }

    render() {
        const { error, authors, genres, publishers } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="book-form">
                    <label>
                        Title:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Author:
                        <select>
                            {
                                authors.map(author => (
                                    <option value={`${author.firstName} ${author.lastName}`}>
                                        {`${author.firstName} ${author.lastName}`}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label>
                        Genre:
                        <select>
                            {
                                genres.map(genre => (
                                    <option value={genre.name}>
                                        {genre.name}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <label>
                        Publisher:
                        <select>
                            {
                                publishers.map(publisher => (
                                    <option value={publisher.name}>
                                        {publisher.name}
                                    </option>
                                ))
                            }
                        </select>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            );
        }
    }
}

export default BookForm;

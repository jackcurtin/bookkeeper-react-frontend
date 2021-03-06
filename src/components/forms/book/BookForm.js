import React from "react";
import './BookForm.css'
import submitForm from "../submitForm";

class BookForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            authors: [],
            genres: [],
            publishers: [],
            error: null,
            authorsLoaded: false,
            genresLoaded: false,
            publishersLoaded: false,
            bookTitle: '',
            authorInput: '',
            genreInput: '',
            publisherInput: '',
            synopsisInput: '',
            pageCountInput: '',
            isbnInput: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        const formFields = {
            title: this.state.bookTitle,
            synopsis: this.state.synopsisInput,
            pageCount: parseInt(this.state.pageCountInput),
            isbn: parseInt(this.state.isbnInput),
            genre_name: this.state.genreInput,
            author_first_name: this.state.authorInput.slice(0, this.state.authorInput.indexOf(" ")),
            author_last_name: this.state.authorInput.slice(this.state.authorInput.indexOf(" "))
                .slice(1),
            publisher_name: this.state.publisherInput
        }
        submitForm("https://bookkeeperdb.herokuapp.com/api/books/add", formFields)
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
                    <h2>Add a Book</h2>
                    <div className="book-form-fields">
                    <input
                        name="bookTitle"
                        type="text"
                        value={this.state.bookTitle}
                        placeholder="Title"
                        onChange={this.handleChange} 
                        className="book-form-input"
                    />
                    <input
                        name="pageCountInput"
                        type="text"
                        placeholder="Page Count"
                        value={this.state.pageCountInput}
                        onChange={this.handleChange}
                        className="book-form-input" 
                    />
                    <select name="authorInput"
                    onChange={this.handleChange}
                    className="book-form-select">
                        <option value={null}>Author</option>
                        {
                            authors.map(author => (
                                <option value={`${author.firstName} ${author.lastName}`}>
                                    {`${author.firstName} ${author.lastName}`}
                                </option>
                            ))
                        }
                    </select>
                    <input
                        name="isbnInput"
                        type="text"
                        placeholder="ISBN"
                        value={this.state.isbnInput}
                        onChange={this.handleChange}
                        className="book-form-input" />
                    <select name= "genreInput"
                    onChange={this.handleChange}
                    className="book-form-select">
                        <option value={null}>Genre</option>
                        {
                            genres.map(genre => (
                                <option value={genre.name}>{genre.name}</option>
                            ))
                        }
                    </select>
                    <textarea
                        name="synopsisInput"
                        placeholder="Synopsis"
                        value={this.state.synopsisInput}
                        onChange={this.handleChange}
                        className="book-form-input book-form-synopsis" />
                    <select name="publisherInput"
                    onChange={this.handleChange}
                    className="book-form-select">
                        <option value={null}>Publisher</option>
                        {
                            publishers.map(publisher => (
                                <option
                                    value={publisher.name}>
                                    {publisher.name}
                                </option>
                            ))
                        }
                    </select>
                    </div>
                <input type="submit" value="Submit" className="book-form-submit"/>
                </form>
            );
        }
    }
}

export default BookForm;

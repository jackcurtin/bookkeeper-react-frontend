import {Component} from "react";
import submitForm from "./submitForm";
import "./categoryField.css"

class GenreForm extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            description: '',
            error: null
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
        event.preventDefault()
        const formFields ={
            name: this.state.name,
            description: this.state.description,
        }
        submitForm("https://bookkeeperdb.herokuapp.com/api/genres/add", formFields)
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="category-form">
                    <h2>Add a Genre</h2>
                    <input
                        name="name"
                        type="text"
                        placeholder="Name"
                        value={this.state.name}
                        onChange={this.handleChange} />
                    <input
                        name="description"
                        type="text"
                        placeholder="Description"
                        value={this.state.description}
                        onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
            );
        }
    }
}

export default GenreForm;

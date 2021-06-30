import {Component} from "react";
import submitForm from "./submitForm";
import "./categoryField.css"

class AuthorForm extends Component {
    constructor(props) {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            nationality: '',
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
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            age: parseInt(this.state.age),
            nationality: this.state.nationality
        }
        submitForm("https://bookkeeperdb.herokuapp.com/api/authors/add", formFields)
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="category-form">
                    <h2>Add an Author to our Database</h2>
                    <label>
                        First Name:
                        <input
                            name="firstName"
                            type="text"
                            value={this.state.firstName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Last Name:
                        <input
                            name="lastName"
                            type="text"
                            value={this.state.lastName}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Age (as of today):
                        <input
                            name="age"
                            type="text"
                            value={this.state.age}
                            onChange={this.handleChange} />
                    </label>
                    <label>
                        Nationality:
                        <input
                            name="nationality"
                            type="text"
                            value={this.state.nationality}
                            onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            );
        }
    }
}

export default AuthorForm;

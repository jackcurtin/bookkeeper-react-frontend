import {Component} from "react";
import submitForm from "./submitForm";
import "./categoryField.css"

class PublisherForm extends Component {
    constructor(props) {
        super();
        this.state = {
            name: '',
            address: '',
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
            address: this.state.address,
        }
        submitForm("https://bookkeeperdb.herokuapp.com/api/publishers/add", formFields)
    }

    render() {
        const { error } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else {
            return (
                <form onSubmit={this.handleSubmit} className="category-form">
                    <h2>Add a Publisher</h2>
                        <input
                            name="name"
                            type="text"
                            placeholder="Name"
                            value={this.state.name}
                            onChange={this.handleChange} />
                        <input
                            name="address"
                            type="text"
                            placeholder="Address"
                            value={this.state.address}
                            onChange={this.handleChange} />
                    <input type="submit" value="Submit"/>
                </form>
            );
        }
    }
}

export default PublisherForm;

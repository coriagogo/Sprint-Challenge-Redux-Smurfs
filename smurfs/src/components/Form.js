import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state = {
            name: '',
            age: '',
            height: ''
        };
    }

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    formSubmit = e => {
        e.preventDefault();
        const { name, age, height } = this.state;
        this.props.handleAddSmurf({ name, age, height });
        this.setState({ 
            name: '',
            age: '',
            height: '' 
        });
    };

    render() {
        const { name, age, height } = this.state;
        return (
            <form className="smurf-form" onSubmit={this.formSubmit}>
                <input
                    type="text"
                    value={name}
                    name="name"
                    placeholder="Smurf Name..."
                    onChange={this.handleChanges}
                />
                <input
                    type="text"
                    value={age}
                    name="age"
                    placeholder="Smurf Age..."
                    onChange={this.handleChanges}
                />
                <input
                    type="text"
                    value={height}
                    name="height"
                    placeholder="Smurf Height..."
                    onChange={this.handleChanges}
                />
                <button type="submit">{this.props.title}</button>
            </form>
        );
    }
}

export default Form;
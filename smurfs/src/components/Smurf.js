import React from 'react';

class Smurf extends React.Component {
    state = {
        name: this.props.smurf.name,
        age: this.props.smurf.age,
        height: this.props.smurf.height,
        id: this.props.smurf.id,
        edit: false
    };

    handleChanges = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    handleEditSmurf = () => {
        this.setState({ edit: true });
    };

    updateSmurf = e => {
        e.preventDefault();
        const { name, age, height, id } = this.state;
        this.props.handleUpdateSmurf({ id, name, age, height });
        this.setState({ edit: false });
    };

    render() {
        const { name, age, height, id, edit } = this.state;
        const { handleDeleteSmurf } = this.props;
        return (
            <div className="smurf-card">
                {edit ? (
                    <React.Fragment>
                        <input 
                            value={name} 
                            name="name"                            
                            onChange={this.handleChanges}
                        />
                        <input
                            value={age}
                            name="age"                            
                            onChange={this.handleChanges}
                        />
                        <input
                            value={height}
                            name="height"                            
                            onChange={this.handleChanges}
                        />
                        <button className="btn-edit" onClick={this.updateSmurf}>
                            Update
                        </button>
                    </React.Fragment>
                ) : (
                    <React.Fragment>
                        <h3>{name}</h3>
                        <p>{age}</p>
                        <p>{height}</p>
                        <button className="btn-remove" onClick={() => handleDeleteSmurf(id)}>
                            Remove
                        </button>
                        <button className="btn-edit" onClick={this.handleEditSmurf}>
                            Edit
                        </button>
                    </React.Fragment>                
                    
                )}
            </div>
        );
    }
}

export default Smurf;
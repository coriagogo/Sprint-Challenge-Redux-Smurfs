import React from 'react';
import Smurf from './Smurf';

class SmurfList extends React.Component {
    render() {
        return (
            <div className="smurf-wrap">
                <h1>Smurf Village</h1>
                {this.props.smurfs.map(smurf => (
                    <Smurf
                        smurf={smurf}
                        key={smurf.name}
                        handleDeleteSmurf={this.props.handleDeleteSmurf}
                        handleUpdateSmurf={this.props.handleUpdateSmurf}
                    />
                ))}
            </div>
        )
    }
}

export default SmurfList;
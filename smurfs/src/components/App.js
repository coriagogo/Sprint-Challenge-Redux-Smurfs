import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getSmurfs, addSmurf, deleteSmurf, updateSmurf } from '../actions';

import Form from './Form';
import SmurfList from './SmurfList';
import './App.css';
/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      age: '',
      height: ''
    }
  }

  componentDidMount() {
    this.props.getSmurfs();
  }

  handleAddSmurf = ({ name, age, height }) => {
    this.props.addSmurf({ name, age, height });
  };

  handleUpdateSmurf = ({ id, name, age, height }) => {
    this.props.updateSmurf({ id, name, age, height });
  };

  handleDeleteSmurf = id => {
    this.props.deleteSmurf(id);
  };
  
  render() {
    return (
      <div className="App">
        {this.props.updatingSmurf ? (
          <Form handleUpdateSmurf={this.handleUpdateSmurf} title="Update Smurf" />
        ) : (
          <Form handleAddSmurf={this.handleAddSmurf} title="Add Smurf" />
        )}
        {this.props.fetchingSmurfs ? (
          <div>Loading Smurfy Goodness...</div>
        ) : (
          <SmurfList
            smurfs={this.props.smurfs}
            handleDeleteSmurf={this.handleDeleteSmurf}
            handleUpdateSmurf={this.handleUpdateSmurf}
          />
        )}     
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs,
    updatingSmurf: state.updatingSmurf
  }
}

export default connect(
  mapStateToProps,
  { getSmurfs, addSmurf, deleteSmurf, updateSmurf }
)(App);

/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  GET_SMURFS,
  GET_SMURFS_SUCCESS,
  GET_SMURFS_FAILURE,
  ADD_SMURFS,
  ADD_SMURFS_SUCCESS,
  ADD_SMURFS_FAILURE,
  UPDATE_SMURFS,
  UPDATE_SMURFS_SUCCESS,
  UPDATE_SMURFS_FAILURE,
  DELETE_SMURFS,
  DELETE_SMURFS_SUCCESS,
  DELETE_SMURFS_FAILURE,
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const reducer = (state = initialState, action) => {
   switch(action.type)
 }


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

/*
  Be sure to import in all of the action types from `../actions`
*/

import {
  FETCHING_SMURF,
  FETCHING_SMURF_SUCCESS,  
  ADDING_SMURF,
  ADDING_SMURF_SUCCESS,
  DELETING_SMURF,
  SMURF_DELETED,  
} from '../actions';


//  Your initial/default state for this project could *Although does not have to* look a lot like this
const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   deletingSmurf: false,
   error: null
 }

const reducer = (state = initialState, action) => {
   switch(action.type) {
     case FETCHING_SMURF:
      return {
        ...state,
        fetchingSmurfs: true
      };
    case FETCHING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        fetchingSmurfs: false
      };    
    case ADDING_SMURF:
      return {
        ...state,
        addingSmurf: true
      };
    case ADDING_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        addingSmurf: false
      };        
    case DELETING_SMURF:
      return {
        ...state,
        deletingSmurf: true
      };
    case SMURF_DELETED:
      return {
        ...state,
        smurfs: action.payload,
        deletingSmurf: false
      };
    default: 
      return state;
   }
 }

 export default reducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/

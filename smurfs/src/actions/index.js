import axios from 'axios';
export const FETCHING_SMURF = "FETCHING_SMURF";
export const FETCHING_SMURF_SUCCESS = "FETCHING_SMURF_SUCCESS";
export const ADDING_SMURF = "ADDING_SMURF";
export const ADDING_SMURF_SUCCESS = "ADDING_SMURF_SUCCESS";
export const DELETING_SMURF = " DELETING_SMURF ";
export const SMURF_DELETED = "SMURF_DELETED "


/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const getSmurfs = () => dispatch => {
  dispatch({type: FETCHING_SMURF});
  axios
  .get(
    'http://localhost:3333/smurfs/'
  )
  .then(res => dispatch({type: FETCHING_SMURF_SUCCESS, payload: res.data}))
  .catch(err => console.log(err));
}

export const addNewSmurf = (smurf) => dispatch => {
  dispatch({type: ADDING_SMURF});
  axios
  .post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    dispatch({type: ADDING_SMURF_SUCCESS, payload: res.data});
  })
  .catch(err => console.log(err));
}

export const deleteSmurf = (id) => dispatch => {
  dispatch({ type: DELETING_SMURF});
  axios
  .delete(`http://localhost:3333/smurfs/${id}`)
  .then(res => {
    dispatch({type: SMURF_DELETED,  payload: res.data}, {params: {id: id}});
  })
  .catch(err => console.log(err));

}


import axios from "axios";
export const GET_SMURF = "GET_SMURF";
export const GET_SUCCESS = "GET_SUCCESS";
export const GET_FAIL = "GET_FAIL";
export const ADD_SMURF = "ADD_SMURF";
export const ADD_SUCCESS = "ADD_SUCCESS";
export const ADD_FAIL = "ADD_FAIL";
export const DELETING_SMURFS = 'DELETING_SMURFS';
export const DELETING_SMURFS_SUCCESS = 'DELETING_SMURFS_SUCCESS';
export const DELETING_SMURFS_FAILURE = 'DELETING_SMURFS_FAILURE';

export const getSmurf = () => dispatch => {
  dispatch({ type: GET_SMURF, payload: "Build the village" });
  axios
    .get("http://localhost:3333/smurfs")
    .then(res => 
      dispatch({ type: GET_SUCCESS, payload: res.data })
    )
    .catch(err => {
      dispatch({
        type: GET_FAIL,
        payload: err.response
      });
    });
};

export const addSmurf = smurf => dispatch => {
  dispatch({ type: ADD_SMURF, payload: "Add to the village" });
  axios
    .post("http://localhost:3333/smurfs", smurf)
    .then(res => {
      dispatch({ type: ADD_SUCCESS, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ADD_FAIL,
        payload: err.response
      });
    });
};

export const deleteSmurf = (id) => dispatch => {

    dispatch({ type: DELETING_SMURFS });
  
    axios
      .delete(`http://localhost:3333/smurfs/${id}`)
      .then(response => {
        dispatch({ type: DELETING_SMURFS_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: DELETING_SMURFS_FAILURE, payload: error });
    });
  };
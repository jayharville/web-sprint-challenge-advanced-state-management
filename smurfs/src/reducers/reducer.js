import {
    GET_SMURF,
    GET_SUCCESS,
    GET_FAIL,
    ADD_SMURF,
    ADD_SUCCESS,
    ADD_FAIL
    // DELETING_SMURFS,
    // DELETING_SMURFS_SUCCESS,
    // DELETING_SMURFS_FAILURE
  } from "../reducers/action";
  
  const initialState = {
    messge: "",
    smurfs: []
  };
  
  export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case GET_SMURF:
        return { ...state, message: action.payload };
      case GET_SUCCESS:
        return { message: "", smurfs: action.payload };
      case GET_FAIL:
        return { ...state, message: action.payload };
      case ADD_SMURF:
        return { ...state, message: action.payload };
      case ADD_SUCCESS:
        return { message: "Smurf added", smurfs: action.payload };
      case ADD_FAIL:
        return { ...state, message: action.payload };
    //   case DELETING_SMURFS:
    //     return {...state,deletingSmurf:true,}
    //   case DELETING_SMURFS_SUCCESS:
    //     return {...state,smurfs:action.payload,deletingSmurf:false}
    //   case DELETING_SMURFS_FAILURE:
    //     return {...state,deletingSmurf:false}
      default:
        return state;
    }
  };

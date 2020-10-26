import React, { useEffect } from "react";
import "./App.css";
import { connect } from "react-redux";
import Smurfs from "./Smurfs";
import SmurfForm from "./SmurfForm";
// import { getSmurf } from "../reducers/action";
import { getSmurf } from "../reducers/action";

const App = ({ message, getSmurf }) => {
  useEffect(() => {
    getSmurf();
  }, [getSmurf]);

  return (
    <div className="App">
      <h1>SMURFS! W/Redux</h1>
      <h2>{message}</h2>
      <Smurfs />
      <SmurfForm />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    message: state.message,
    smurfs: state.smurfs
  };
};

export default connect(
  mapStateToProps,
  { getSmurf }
)(App);
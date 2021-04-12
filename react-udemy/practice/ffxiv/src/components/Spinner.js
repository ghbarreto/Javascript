import React from "react";

const Spinner = props => {
  return (
    <div
      className="ui active dimmer"
      style={{ marginTop: "20vh", height: "300px" }}
    >
      <div className="ui large text loader">{props.title}</div>
      <p></p>
    </div>
  );
};
Spinner.defaultProps = {
  title: "Loading",
};

export default Spinner;

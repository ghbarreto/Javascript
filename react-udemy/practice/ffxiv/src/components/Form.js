import React from "react";
import "./Form.css";

const Form = ({ title, value }) => {
  return (
    <div className="ui form">
      <form>
        <label className="label">{title}</label>
        <div className="ui search">
          <div className="ui icon input">
            <input
              className="prompt"
              id="name"
              name="name"
              type="text"
              onChange={e => value(e.target.value)}
            />
            <i className="search icon"></i>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;

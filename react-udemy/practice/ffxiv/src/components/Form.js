import React from "react";

const Form = ({ title, onNameChange }) => {
  return (
    <form onSubmit={onNameChange}>
      <label>
        {title}:
        <br />
        <input id="name" name="name" type="text" />
        <button type="submit">Search</button>
      </label>
    </form>
  );
};

export default Form;

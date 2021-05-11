import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = ({
  title,
  value,
  options = [],
  selection,
  placeholder,
  additionalButton,
  dcServers,
}) => {
  console.log(additionalButton);
  const displayOptions = () => {
    // Display servers
    return Object.keys(options).map(option => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );
    });
  };

  const displayDatacenter = () => {
    return Object.keys(additionalButton).map(e => {
      return (
        <option key={additionalButton} value={additionalButton}>
          {additionalButton}
        </option>
      );
    });
  };

  return (
    <div className="center">
      <div className="ui right action left icon input">
        <i className="search icon"></i>
        <input
          type="text"
          placeholder={placeholder}
          onChange={e => value(e.target.value)}
        />
        <select
          className="ui selection dropdown"
          onChange={selection}
          onClick={e => dcServers(e.target.value)}
        >
          <option value=" " selected>
            {title}
          </option>
          {displayOptions()}
        </select>
        {additionalButton ? (
          <select>{displayDatacenter()}</select>
        ) : (
          <div> </div>
        )}
      </div>
    </div>
  );
};

export default Form;

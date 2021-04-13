import React from "react";
import "./Form.css";

const Form = ({ title, value, options = [], selection, placeholder }) => {
  const displayOptions = () => {
    // Display servers
    return Object.keys(options).map(option => {
      return (
        <option key={option} value={option}>
          {option}
        </option>
      );

      // Display datacenters
      // return options[option].map(i => {
      //   return (
      //     <option key={i} value={i}>
      //       {i}
      //     </option>
      //   );
      // });
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
        <select className="ui selection dropdown" onChange={selection}>
          <option value=" " selected>
            {title}
          </option>
          {displayOptions()}
        </select>
      </div>
    </div>
  );
};

export default Form;

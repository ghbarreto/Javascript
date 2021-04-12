import React from "react";
import "./Form.css";
import { ServerList } from "./ServerList";

const Form = ({ title, value, options = [], selection }) => {
  const displayOptions = () => {
    return Object.keys(options).map(option => {
      return options[option].map(i => {
        return (
          <option key={i} value={i}>
            {i}
          </option>
        );
      });
    });
  };

  return (
    <div className="center">
      <div class="ui right action left icon input">
        <i class="search icon"></i>
        <input
          type="text"
          placeholder={title}
          onChange={e => value(e.target.value)}
        />
        <select class="ui selection dropdown" onChange={selection}>
          {displayOptions()}
        </select>
      </div>
    </div>
  );
};

export default Form;

// return (
//   <div className="center">
//     <div class="ui right action left icon input">
//       <i class="search icon"></i>
//       <input type="text" placeholder={title} />
//       <select class="ui selection dropdown">
//         <i class="dropdown icon"></i>
//         {options.map(option) {
//         }}
//         <option value="">Server</option>
//       </select>
//     </div>
//   </div>

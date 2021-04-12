import React from "react";
import "./Form.css";
import { ServerList } from "./ServerList";

const Form = ({ title, value, options = [] }) => {
  console.log(options);
  // return options.map(option => {
  return (
    <div className="center">
      <div class="ui right action left icon input">
        <i class="search icon"></i>
        <input
          type="text"
          placeholder={title}
          onChange={e => (value = e.target.value)}
        />
        <select class="ui selection dropdown">
          <i class="dropdown icon"></i>
          <option value=""></option>
        </select>
      </div>
    </div>
  );
  // })();
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

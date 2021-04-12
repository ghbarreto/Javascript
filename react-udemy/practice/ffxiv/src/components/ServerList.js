import React, { useEffect, useState } from "react";
import xiv from "../api/axios";
import "./ServerList.css";
import { serverList } from "./helpers/helper";

const ServerList = props => {
  const [servers, setServer] = useState([]);

  const fetchServerList = async () => {
    const request = await xiv.get("/servers/dc");
    const response = request.data;
    setServer(response);
  };

  useEffect(() => {
    fetchServerList();
  }, []);

  return <div></div>;
};

export default ServerList;

// Displaying the server info and databases
// return Object.keys(servers).map(server => {
//   return (
//     <div
//       key={server}
//       className="ui pointing dropdown link simple item eight column row"
//     >
//       <span id={server} className="text ">
//         {server}
//       </span>

//       <i className="dropdown  icon"></i>
//       <div className="menu">
//         <div className="header">Servers</div>
//         <div className="divider"></div>
//         {servers[server].map(i => {
//           return (
//             <div key={i} className="item">
//               {i}
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// });

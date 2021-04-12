import React, { useEffect, useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CharacterDetail from "./CharacterDetail";
import GetCharacter from "./GetCharacter";
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";
import ServerList from "./ServerList";

const App = () => {
  const [character, setCharacter] = useState("");
  const [serverChoice, setServerChoice] = useState([]);
  const [serv, setServ] = useState([]);

  const nameChoice = name => {
    const getValue = name;
    setCharacter(getValue);
  };

  const getServers = servers => {
    setServ(servers);
  };

  const selection = server => {
    setServerChoice(server.target.value);
  };

  return (
    <BrowserRouter>
      <div>
        <Header />
        <h1 />
        <Route path="/character/details/:id" component={CharacterDetail} />
        <Route path="/" exact component={Home} />
        <Route path="/character/search" exact>
          <ServerList servers={getServers} />
          <Form
            title="Character Search"
            value={nameChoice}
            options={serv}
            selection={selection}
          />
          <GetCharacter name={character} server={serverChoice} />
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;

// <div class="ui right action left icon input">
//   <i class="search icon"></i>
//   <input type="text" placeholder="Search">
//   <div class="ui basic floating dropdown button">
//     <div class="text">This Page</div>
//     <i class="dropdown icon"></i>
//     <div class="menu">
//       <div class="item">This Organization</div>
//       <div class="item">Entire Site</div>
//     </div>
//   </div>
// </div>

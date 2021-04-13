import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CharacterDetail from "./character/CharacterDetail";
import GetCharacter from "./character/GetCharacter";
import Form from "./Form";
import Header from "./Header";
import Home from "./Home";
import ServerList from "./server/ServerList";
import MarketBoardDisplay from "./marketboard/MarketBoardDisplay";
import MarketBoard from "./marketboard/MarketBoard";

const App = () => {
  const [character, setCharacter] = useState("");
  const [serverChoice, setServerChoice] = useState([]);
  const [serv, setServ] = useState([]);

  const nameChoice = name => {
    setCharacter(name);
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
        <Route exact path="/" component={Home}></Route>
        <Route exact exact path="/marketboard" component={MarketBoard}></Route>
        <Route
          exact
          path="/marketboard/:id"
          component={MarketBoardDisplay}
        ></Route>
        <Route path="/character/details/:id" component={CharacterDetail} />
        <Route path="/character/search">
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

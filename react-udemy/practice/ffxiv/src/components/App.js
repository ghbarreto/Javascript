import React, { useState } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CharacterDetail from "./CharacterDetail";
import GetCharacter from "./GetCharacter";
import Form from "./Form";
import ServerList from "./ServerList";

const App = () => {
  const [character, setCharacter] = useState("");

  const nameChoice = name => {
    const getValue = name;
    setCharacter(getValue);
  };

  return (
    <BrowserRouter>
      <div>
        <div className="ui compact  menu">
          <ServerList />
        </div>
        <h1 />
        <Route
          path="/character/details/:id"
          exact
          component={CharacterDetail}
        />
        <Route path="/" exact>
          <Form title="Character Search" value={nameChoice} />
          <div className="render">
            <GetCharacter name={character} />
          </div>
        </Route>
      </div>
    </BrowserRouter>
  );
};

export default App;

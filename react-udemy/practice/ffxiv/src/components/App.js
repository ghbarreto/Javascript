import React, { useState } from "react";
import GetCharacter from "./GetCharacter";
import DisplayInformation from "./DisplayInformation";
import Form from "./Form";
import ServerList from "./ServerList";

const App = () => {
  const [character, setCharacter] = useState("");

  const nameChoice = (name) => {
    const getValue = name.target.name.value;
    name.preventDefault();
    setCharacter(getValue);
    console.log(getValue);
  };

  return (
    <div>
      <div className="ui compact  menu">
        <ServerList /></div>
      <Form title="Lookup Character" onNameChange={nameChoice} />
      <GetCharacter name={character} />
    </div>
  );
};

export default App;

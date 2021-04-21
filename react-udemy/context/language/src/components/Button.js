import React from "react";
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends React.Component {
  // how to connect context (contextType is a special name, dont change it)
  // static translates to Button.contextType = LanguageContext
  static contextType = LanguageContext;
  renderSubmit(language) {
    return language === "english" ? "Submit" : "Voorleggen";
  }

  render() {
    return (
      <ColorContext.Consumer>
        {color => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {({ language }) => this.renderSubmit(language)}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
  }
}

export default Button;

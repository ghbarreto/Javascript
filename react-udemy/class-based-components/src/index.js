import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Loader from "./Loader";

class App extends React.Component {
  //* Constructor is not necessary to initialize react
  constructor(props) {
    // ? Good place to do the state initialization.
    // ! super needs to be called
    super(props);

    this.state = { lat: null, errorMessage: "" };
    //* state = { lat: null, errorMessage: '' };
    // ? the code above is equivalent to the constructor this.state
    // ? to make it work just remove the constructor and the super() methods
  }

  componentDidMount() {
    // ? perfect location to do initial data loading for the component
    // ! it only gets invoked one time
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      // ! To update the state object we use setstate
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  componentDidUpdate() {
    // ? gets called every time the setState is updated
    // ? like when a user gets different data in network
    console.log("My component was updated");
  }

  componentWillUnmount() {
    // ? good place to remove components from the screen :)
  }

  renderContent() {
    // ? Helper function
    // ? conditionals always inside the helper function
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>;
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />;
    }

    return <Loader message="Please accept location request" />;
  }

  //! React says we have to define render
  render() {
    // ? return some jsx, nothing else
    return <div className="border red">{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));

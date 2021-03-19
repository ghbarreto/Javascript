// Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Create a react component
const App = () => {
    const buttonText = { text: 'click ae!' };
    const style = { backgroundColor: 'blue', color: 'white' };
    
    return (
        <div>
            <label className="name" htmlFor="name">Enter Name:</label>
            <input id="name" type="text"/>
            <button style={style}>
                {buttonText.text}
            </button>
        </div>
    );
};

// Take the react component and show it on the screen
ReactDOM.render(
    <App />, 
    document.querySelector('#root') 
);
// Reloading the file
if (module.hot) {
    module.hot.accept();
}
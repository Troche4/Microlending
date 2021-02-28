import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import logo from './lendLogo.svg';
import Button from "./components/Button";

function App() {
  return (
      <div className="container">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <div className="businessName">LEND</div>
        </div>
        <div className="header">
          <Button onClick={() => {console.log("You Clicked on Me!") }}
                  type = "button"
                  buttonStyle="btn--primary--outline"
                  buttonSize="btn--small"
          >Sign In</Button>
        </div>
        <div className="sidebar">
          <h1>
            Effortlessly lend money to the entrepreneurs who need it.
          </h1>
          <h3>
            We make it easy for you to lend money where you want it to go.
          </h3>
        </div>
        <div className="content"></div>
        <div className="footer"></div>

      </div>
  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
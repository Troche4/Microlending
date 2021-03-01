import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import {
  BrowserRouter as Router,
    Route,
} from "react-router-dom";

import Home from "./components/Home";

function App() {
  return (
      <Router>
          <Route exact path="/">
              <Home />
          </Route>
      </Router>

  );
}

export default App;
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
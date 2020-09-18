import React from "react";
import logo from "./logo.svg";
import "./App.css";
import SimpleBottomNavigation from "./Components/simpleBottomNavigation";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/main">Lets Get Started</Link>
        <Route path="/main" component={SimpleBottomNavigation}></Route>
      </div>
    </Router>
  );
}

export default App;

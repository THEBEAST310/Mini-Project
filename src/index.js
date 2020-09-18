import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import SimpleBottomNavigation from "./Components/simpleBottomNavigation";
import * as serviceWorker from "./serviceWorker";
// import MyComponent from "./Components/swipeable";
// import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <SimpleBottomNavigation />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

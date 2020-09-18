import React, { Component } from "react";
import Swipeable from "react-swipeable-views";
import { BrowserRouter as Router } from "react-router-dom";
// import SimpleBottomNavigation from "./simpleBottomNavigation";
import { Redirect } from "react-router";
import Button from "@material-ui/core/Button";

class DemoSimple extends Component {
  styles = {
    slide: {
      padding: 15,
      minHeight: 100,
      color: "#d5f4e6",
    },
    slide1: {
      backgroundColor: "#92a8d1",
    },
    slide2: {
      backgroundColor: "#80ced6",
    },
    slide3: {
      backgroundColor: "#74992e",
    },
    slide4: {
      backgroundColor: "#f18973",
    },
  };
  handleOnClick = () => {
    this.setState({ redirect: true });
  };
  state = {
    redirect: false,
  };
  // <Link to="/main">Swipeable Component</Link>
  //       <Switch>
  //         <Route exact component={SimpleBottomNavigation} path="/main"></Route>
  //       </Switch>
  render() {
    if (this.state.redirect) {
      return (
        <div>
          {/* <Route path="/" component={DemoSimple} /> */}
          <Redirect push to="/" />
          {window.location.reload(false)}
        </div>
      );
    }
    return (
      <Router>
        <Swipeable enableMouseEvents>
          <div style={Object.assign({}, this.styles.slide, this.styles.slide1)}>
            1st Slide
          </div>
          <div style={Object.assign({}, this.styles.slide, this.styles.slide2)}>
            2nd Slide
          </div>
          <div style={Object.assign({}, this.styles.slide, this.styles.slide3)}>
            3rd Slide
          </div>
          <div style={Object.assign({}, this.styles.slide, this.styles.slide4)}>
            4th Slide
          </div>
        </Swipeable>
        <Button onClick={this.handleOnClick}>Swipeable Component</Button>
      </Router>
    );
  }
}

export default DemoSimple;

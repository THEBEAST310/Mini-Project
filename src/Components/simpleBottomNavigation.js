import React, { Component } from "react";
// import { makeStyles } from "@material-ui/core/styles";
// import BottomNavigation from "@material-ui/core/BottomNavigation";
// import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import { Route } from "react-router-dom";
import Button from "@material-ui/core/Button";
import DemoSimple from "./swipeable";
import { Redirect } from "react-router";
// import styles from "./styles.css";
export default class SimpleBottomNavigation extends Component {
  // useStyles = makeStyles({
  //   root: {
  //     padding: 1000,
  //     width: 500,
  //   },
  // });
  handleOnClick = () => {
    this.setState({ redirect: true });
  };
  state = {
    redirect: false,
  };
  // <Router>
  //   <div className={this.useStyles().root}>
  //     <Link to="/swipe">Swipeable Component</Link>
  //     {/* <Link to="/">Swipeable Component 2</Link> */}
  //     {/* <Switch> */}
  //     {/* <Route path="/swipe" /> */}
  //     {/* </Switch> */}
  //   </div>
  // </Router>
  render() {
    if (this.state.redirect) {
      return (
        <div>
          <Route exact path="/swipe" component={DemoSimple} />
          <Redirect push to="/swipe" />
        </div>
      );
    }

    return (
      <div className={styles.btn}>
        <Button onClick={this.handleOnClick}>Swipeable Component</Button>
      </div>
    );
  }
}

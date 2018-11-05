import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Navbar from "./components/Navigation/Navbar";
import UserNavigation from "./components/Navigation/UserNavigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ErrorModal from "./components/Modals/errorModal";

import { errorServices } from "./_services/errorServices";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displaySignup: false,
      displayLogin: false
    };
  }
  clearError = () => {
    this.props.dispatch(errorServices.clearError());
  };

  displaySignup = () => {
    this.setState({
      displaySignup: !this.state.displaySignup
    });
  };
  displayLogin = () => {
    this.setState({
      displayLogin: !this.state.displayLogin
    });
  };
  render() {
    console.log(this.props);
    return (
      <Router>
        <div>
          {this.props.error !== "" ? (
            <ErrorModal error={this.props.error} closeModal={this.clearError} />
          ) : null}
          {this.state.displaySignup ? (
            <Signup closeSignup={this.displaySignup} />
          ) : null}
          {this.state.displayLogin ? (
            <Login closeLogin={this.displayLogin} />
          ) : null}
          <Navbar />
          <UserNavigation
            closeSignup={this.displaySignup}
            closeLogin={this.displayLogin}
          />
          <div>
            <Route component={Home} exact path="/" />
          </div>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error.error
  };
}

export default connect(mapStateToProps)(App);

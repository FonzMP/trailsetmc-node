import React, { Component } from "react";
import { Switch } from "react-router";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import "./App.css";

import Navbar from "./components/Navigation/Navbar";
import UserNavigation from "./components/Navigation/UserNavigation";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import ErrorModal from "./components/Modals/errorModal";
import UserPage from "./components/User/UserPage";

import { errorServices } from "./_services/errorServices";
import { userServices } from "./_services/userServices";

class App extends Component {
  constructor() {
    super();
    this.state = {
      displaySignup: false,
      displayLogin: false
    };
  }

  componentDidMount() {
    const id = localStorage.getItem("userId");
    if (id) {
      this.props.dispatch(userServices.setUser(id));
    }
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
          <Switch>
            <Route component={Home} exact path="/" />
            <Route component={UserPage} exact path="/user" />
          </Switch>
        </div>
      </Router>
    );
  }
}

function mapStateToProps(state) {
  return {
    error: state.error.error,
    user: state.user.user
  };
}

export default connect(mapStateToProps)(App);

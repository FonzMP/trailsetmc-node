import React, { Component } from "react";

class UserNavigation extends Component {
  closeSignup = () => {
    this.props.closeSignup();
  };
  closeLogin = () => {
    this.props.closeLogin();
  };
  render() {
    return (
      <div className="navigation user-navigation">
        <button className="nav-link" onClick={this.closeSignup}>
          Signup
        </button>
        <button className="nav-link" onClick={this.closeLogin}>
          Login
        </button>
      </div>
    );
  }
}

export default UserNavigation;

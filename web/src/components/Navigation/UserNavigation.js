import React, { Component } from "react";
import { connect } from "react-redux";

import { userServices } from "../../_services/userServices";

class UserNavigation extends Component {
  closeSignup = () => {
    this.props.closeSignup();
  };
  closeLogin = () => {
    this.props.closeLogin();
  };

  logout = () => {
    this.props.dispatch(userServices.logoutUser());
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
        <button className="nav-link" onClick={this.logout}>
          Logout
        </button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(UserNavigation);

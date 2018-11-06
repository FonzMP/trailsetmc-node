import React, { Component } from "react";
import { connect } from "react-redux";

import { userServices } from "../_services/userServices";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }

    this.closeLogin();
  };

  closeLogin = () => {
    this.props.closeLogin();
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.dispatch(userServices.loginUser(this.state));
  };

  handleOnChange = e => {
    this.setState({
      [e.target.id]:
        e.target.type === "Number" ? parseInt(e.target.value) : e.target.value
    });
  };

  render() {
    return (
      <div className="modal-backing">
        <div className="modal" ref={node => (this.node = node)}>
          <h1>Login: </h1>
          <p>Please login below: </p>
          <form onSubmit={this.formSubmit}>
            <label>Username: </label>
            <input
              id="username"
              type="text"
              onChange={this.handleOnChange}
              value={this.state.username}
              placeholder="username"
            />
            <label>Password: </label>
            <input
              id="password"
              type="password"
              onChange={this.handleOnChange}
              value={this.state.password}
              placeholder="password"
            />
            <button>Submit</button>
            <button onClick={this.closeLogin}>Close</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Login);

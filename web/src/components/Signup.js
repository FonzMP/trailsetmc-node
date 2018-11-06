import React, { Component } from "react";
import { connect } from "react-redux";

import { userServices } from "../_services/userServices";

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      telephone: "",
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
    this.closeSignup();
  };

  closeSignup = () => {
    this.props.closeSignup();
  };

  formSubmit = e => {
    e.preventDefault();
    this.props.dispatch(userServices.signupUser(this.state));
    this.setState({
      name: "",
      email: "",
      telephone: "",
      username: "",
      password: ""
    });
    this.props.closeSignup();
  };

  handleOnChange = e => {
    this.setState({
      [e.target.id]:
        e.target.type === "Number" ? parseInt(e.target.value) : e.target.value
    });
  };

  render() {
    let isEnabled =
      this.state.name.length > 0 &&
      this.state.email.length > 0 &&
      this.state.telephone.length > 0 &&
      this.state.username.length > 0 &&
      this.state.password.length > 0 &&
      this.state.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);

    return (
      <div className="modal-backing">
        <div className="modal" ref={node => (this.node = node)}>
          <h1>Signup</h1>
          <p>Please fill out the information below: </p>
          <form onSubmit={this.formSubmit}>
            <label>Name: </label>
            <input
              id="name"
              type="text"
              onChange={this.handleOnChange}
              value={this.state.name}
              placeholder="name"
            />
            <label>Email: </label>
            <input
              id="email"
              type="email"
              onChange={this.handleOnChange}
              value={this.state.email}
              placeholder="email"
            />
            <label>Phone: </label>
            <input
              id="telephone"
              type="tel"
              onChange={this.handleOnChange}
              value={this.state.phone}
              placeholder="phone"
            />
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
            <button type="submit" disabled={!isEnabled}>
              Signup
            </button>
            <button onClick={this.closeSignup}>Close</button>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps)(Signup);

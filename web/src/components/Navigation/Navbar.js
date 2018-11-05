import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  closeSignup = () => {
    this.props.closeSignup();
  };

  render() {
    return (
      <div className="navigation">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <button className="nav-link" onClick={this.closeSignup}>
          Signup
        </button>
      </div>
    );
  }
}

export default Navbar;

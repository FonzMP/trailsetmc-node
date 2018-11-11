import React, { Component } from "react";

import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div className="navigation">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/user">
          User
        </Link>
      </div>
    );
  }
}

export default Navbar;

import React, { Component } from "react";
import { connect } from "react-redux";

import StartRideButton from "../Rides/Buttons/StartRideButton";

class UserPage extends Component {
  render() {
    console.log(this.props.user);
    return (
      <div className="container">
        <h1>
          Welcome {this.props.user.username}
          ...
        </h1>
        <h3>Previous Rides</h3>
        <p className="previous-rides-list">Previous Rides Here...</p>

        <h4>Start a Ride</h4>
        <StartRideButton />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { user: state.user.user };
}

export default connect(mapStateToProps)(UserPage);

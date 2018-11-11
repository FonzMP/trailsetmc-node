import React, { Component } from "react";

class StartRideButton extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      active: false
    };
  }

  startTimer = e => {
    e.preventDefault();
    this.setState({ active: true });
    this.intervalId = setInterval(this.timer, 1000);
  };

  stopTimer = e => {
    e.preventDefault();
    this.setState({ currentTime: this.state.currentTime, active: false });
    clearInterval(this.intervalId);
  };

  timer = () => {
    this.setState({
      currentTime: this.state.currentTime + 1
    });
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    console.log(this.state);
    return (
      <div>
        {this.state.active ? (
          <button onClick={this.stopTimer}>Stop Ride</button>
        ) : (
          <button onClick={this.startTimer}>Start Ride</button>
        )}
      </div>
    );
  }
}

export default StartRideButton;

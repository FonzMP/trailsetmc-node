import React, { Component } from "react";

class StartRideButton extends Component {
  constructor() {
    super();
    this.state = {
      currentTime: 0,
      active: false,
      points: [],
      currentPosition: null
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

  pushPoint = position => {
    const points = this.state.points;
    let currentPosition = {};
    currentPosition.lat = position.coords.latitude;
    currentPosition.long = position.coords.longitude;
    points.push(currentPosition);
    this.setState({
      currentTime: this.state.currentTime + 1,
      points: points,
      currentPosition: currentPosition
    });
  };

  timer = () => {
    this.getPosition();
  };

  getPosition = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.pushPoint(position);
      });
    } else {
      this.setState({
        lat: null,
        long: null
      });
    }
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
        <h3>Ride Details</h3>
        <p>Ride timer: {this.state.currentTime}</p>
        <div>
          {this.state.currentPosition === null ? (
            "Location tracking...."
          ) : (
            <div>
              <p>Your current location is: </p>
              <p>Lat: {this.state.currentPosition.lat}</p>
              <p>Long: {this.state.currentPosition.long}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default StartRideButton;

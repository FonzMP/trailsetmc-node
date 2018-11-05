import React, { Component } from "react";

class Modal extends Component {
  close = () => {
    this.props.closeModal();
  };
  render() {
    return (
      <div className="modal-backing">
        <div className="modal">
          <div className="modal-container">
            <p>Sorry, we experienced the following errors</p>
            <p>{this.props.error}</p>
            <button onClick={this.close}>Close</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Modal;

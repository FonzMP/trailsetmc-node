import React, { Component } from "react";

class Modal extends Component {
  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  close = () => {
    this.props.closeModal();
  };

  handleClick = e => {
    if (this.node.contains(e.target)) {
      return;
    }
    this.close();
  };

  render() {
    return (
      <div className="modal-backing">
        <div className="modal" ref={node => (this.node = node)}>
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

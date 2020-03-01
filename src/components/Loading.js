import React, { Component } from "react";

class Loading extends Component {
  render() {
    return (
      <div>
        <div className="d-flex justify-content-center up">
          <div
            className="spinner-border text-danger"
            style={{ width: "3rem", height: "3rem" }}
            role="status"
          >
            <span className="sr-only"></span>
          </div>
          <div
            className="spinner-border text-warning"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
          <div
            className="spinner-border text-info"
            role="status"
            style={{ width: "3rem", height: "3rem" }}
          >
            <span className="sr-only">Loading...</span>
          </div>
          <h2>Loading</h2>
        </div>
      </div>
    );
  }
}

export default Loading;

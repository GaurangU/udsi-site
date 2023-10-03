import React, { Component } from "react";
import "./splash.css";

class Splash extends Component {
  render() {
    return (
      <div className="page">
        {/* <div className="header"></div> */}
        <div className="body">
          <div className="title">
            <title className="top">Urdhav Shakti</title>
            <title className="under">Innovations Private Limited</title>
          </div>
          <div className="comment">COMING SOON</div>
        </div>
        <div className="footer">
          <div className="hazard-background"></div>
        </div>
      </div>
    );
  }
}

export default Splash;

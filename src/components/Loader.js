import React, { Component } from "react";
import loading from "./loading.gif";

export default class Loader extends Component {
  render() {
    return (
      <div>
        {/* <div className="spinner-border text-dark" role="status">
          <span className="visually-hidden">Loading...</span>
        </div> */}
        <div className="text-center">
          <div className="spinner-border text-dark" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          {/* <img src={loading} alt="loading" /> */}
        </div>
      </div>
    );
  }
}

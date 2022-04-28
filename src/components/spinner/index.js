import React from "react";
import "./style.scss"

function Spinner() {
  return (
    <div className="spinner wrapper">
      <div className="spinner">
        <div className="ui active dimmer">
          <div className="ui text loader">Loading</div>
        </div>
      </div>
    </div>
  );
}

export default Spinner;

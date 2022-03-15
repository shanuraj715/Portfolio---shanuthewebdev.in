import React from "react";
import "./heading.css";
import logo from "../../assets/images/logo-xs.png";

function Heading(props) {
  return (
    <div className="container">
      <div className="heading justify-center">
        <img src={logo} alt="" />
        <p style={{color: props.color || 'black'}}>{props.children}</p>
      </div>
    </div>
  );
}

export default Heading;

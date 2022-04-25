import React from "react";
import Logo from "../../assets/logo.svg";
import "./style.scss";

function Header() {
  return (
    <div className="header-wrapper">
      <img src={Logo} alt="come on" />
    </div>
  );
}

export default Header;

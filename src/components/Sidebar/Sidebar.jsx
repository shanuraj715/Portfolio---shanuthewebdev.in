import React from "react";
import Logo from '../../assets/images/shanuthewebdev-sky.png'

import './sidebar.css'

function Header() {
  return <div className="sidebar">
    <div className="sidebar-logo">
      <img src={Logo} alt="" className="sidebar-img" />  
    </div>  
  </div>;
}

export default Header;

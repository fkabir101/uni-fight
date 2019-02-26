import React from "react";
import RenderNavbar from "./navButtons"

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-light" id="header">
        <div className="container row" id="header">
          <span className="col-3" id="title">Uni-Fight</span>
          
          <div className="col-7 container" id="navButtons"><RenderNavbar /></div>
          
        </div>
      </div>
    </div>
  )
};

export default Header;
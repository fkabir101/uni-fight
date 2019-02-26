import React from "react";
import RenderNavbar from "./navButtons"

function Header() {
  return (
    <div>
      <div className="jumbotron jumbotron-fluid bg-dark text-light" id="header">
        <div className="container">
          {/* <div className="col-1"></div> */}
          <span id="title">Uni-Fight</span>
          {/* <div className="col-7"></div> */}
          <div><RenderNavbar /></div>
          
        </div>
      </div>
    </div>
  )
};

export default Header;
import React from "react";

//const localUser = sessionStorage.getItem("userName");
const localUser = "admin";

function RenderNavbar() {
  console.log("localUser: " + localUser);

  if (localUser === "null" || localUser === null || localUser === undefined) {
    console.log("User is logged out");
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">View Events</a>
          </li>
          <li className="nav-item">
            <a className="nav-link login" href="/login">Login</a>
          </li>
        </ul>
      </div>
    );
  }
  else {
    console.log("User is logged in");
    return (
      <div>
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/events">View Events</a>
          </li>

          {/* <li className="nav-item">
            <a className="nav-link user" href="/">Users</a>
          </li> */}
          {/* <li>
          <div className="dropdown show">
            <a className="nav-item dropdown" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</a>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
              <a className="dropdown-item" href="/user">User Page</a>
              <a className="dropdown-item" href="/create">Create Event</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </div>
          </li> */}
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Dropdown button</button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="/user">Your Page</a>
              <a className="dropdown-item" href="/create">Create Event</a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="/login">Logout</a>
            </div>
          </div>
        </ul>
      </div>
    )
  }
};

export default RenderNavbar;
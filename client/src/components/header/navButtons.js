<<<<<<< HEAD
import React from "react";
import CssSwitcher from "../themeswitcher/cssSwitcher";

const localUser = sessionStorage.getItem("userName");
//const localUser = "admin";

function RenderNavbar() {
  console.log("localUser: " + localUser);

  if (localUser === "null" || localUser === null || localUser === undefined) {
    console.log("User is logged out");
    return (
      <div>
        <ul className="nav justify-content-end">
        <li className="nav-item">
            <a className="btn btn-secondary" href="/login">Login</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/events">View Events</a>
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
        <li>
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</button>

            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" id="userLink" href="/user">Your Page</a>
              <a className="dropdown-item" id="createLink" href="/create">Create Event</a>
              <div className="dropdown-divider"></div>
              <button className="dropdown-item" id="logoutLink">Logout</button>
            </div>
          </div>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="btn btn-secondary" href="/events">View Events</a>
          </li>
        </ul>
      </div>
    )
=======


import React, { Component } from "react";
//import {Redirect} from "react-router-dom";
import API from "../../utils/api";

class RenderNavbar extends Component {
  logout = (e) => {
    e.preventDefault();
    API
      .logout()
      .then(res => {
        console.log(res.data);
        
        this.props.loginCheck();

        this.setState({isLoggedIn: false});
        localStorage.clear();
        //this.props.history.replace('/login');
       // return <Redirect to="/login"/>

      })
      .catch(err => console.log(err));
  };

  

  render() {
    console.log("user logged in", this.props.isLoggedIn);
    // If user isn't logged in, don't let them see this page
    if (this.props.isLoggedIn === false) {
      // console.log("User is logged out");
      // console.log(this.state.isLoggedIn);
      return (
        <div>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="btn btn-secondary" href="/login">Login</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-secondary" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-secondary" href="/events">View Events</a>
            </li>
          </ul>
        </div>
      );
    }
    else {
      // console.log("User is logged in");
      //console.log(this.state.isLoggedIn);
      // <h1>You Made it to the main page {this.state.isLoggedIn.username}!</h1>
      return (
        <div>
          <ul className="nav justify-content-end">
            <li>
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">User</button>

                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" id="userLink" href="/user">Your Page</a>
                  <a className="dropdown-item" id="createLink" href="/create">Create Event</a>
                  <div className="dropdown-divider"></div>
                  <button className="dropdown-item" id="logoutLink" onClick={this.logout}>Logout</button>
                </div>
              </div>
            </li>
            <li className="nav-item">
              <a className="btn btn-secondary" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-secondary" href="/events">View Events</a>
            </li>
          </ul>
        </div>
      )
    }
>>>>>>> 12c7c920d6dca275cfd7d1f4768d537f35ba5174
  }
}


export default RenderNavbar;
import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/api";
import { withRouter } from 'react-router';

class SignUpForum extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    })
  }

  // Method to register a new user
  register = (e) => {
    e.preventDefault();
    if (this.state.confirmPassword === this.state.password) {
      API
        .register({ username: this.state.username, email: this.state.email, password: this.state.password })
        .then(res => {
          console.log(res.data);

          sessionStorage.setItem("user", res.data.username);
          sessionStorage.setItem("email", res.data.email);
          sessionStorage.setItem("id", res.data._id);
          window.location.reload();
          this.props.history.push('/');
        })
        .catch(err => console.log(err.response.data));
    }

    else {
      alert("Passwords did not match, please try again");
    }

  }




  render() {
    if (this.state.success) {
      //if(this.state.success) {
      return <Redirect to="/" />
      //this.props.history.push('/')
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Pick a Username" />
              {/* <small id="usernameHelp" className="form-text text-muted">Enter your username</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Enter Your Email" />
              {/* <small id="emailHelp" className="form-text text-muted">Enter your Email</small> */}
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Enter a Password"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                name="confirmPassword"
                value={this.state.confirmPassword}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Re-Enter Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.register}>Sign Up!</button>
          </form>

        </div>
      </div>
    )
  }
}

export default withRouter(SignUpForum);
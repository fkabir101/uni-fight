// import React, {Component} from "react";
// import InputField from "../form/inputfield";
// import Button from "../button"

// class SignUpForum extends Component {
//   constructor() {
//     super();
//     this.state = {
//       userName: "",
//       email: "",
//       password: ""
//     };
//     this.updateValue = this.updateValue.bind(this);
//   }
//   updateValue(event) {
//     this.setState({ [event.target.id]: event.target.value });
    
//   }
//   render() {

//     return (
//       <div><InputField
//       fieldName="Choose a Username"
//       id="userName"
//       onChangeValue={this.updateValue}
//        />

//        <InputField
//        fieldName="Choose a Password"
//        id="password"
//        onChangeValue={this.updateValue}
//         />

// <InputField
//        fieldName="Enter your Email"
//        id="email"
//        onChangeValue={this.updateValue}
//         />

//         <br/>

//         <Button
//              name="Submit"
//              color="primary"
//             clickFunction={this.onClickFunction}
//            />
        
//         </div>       
//     )
//   }
// }



// export default SignUpForum;

import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import API from "../../utils/api";

class SignUpForum extends Component {
  state = {
    success: false,
    username: "",
    email: "",
    password: ""
  }
  
  handleInputChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name] : value
    })
  }

  // Method to register a new user
  register = (e) => {
    e.preventDefault();
    API
      .register({ username: this.state.username, email:this.state.email, password: this.state.password })
      .then(res => {
        console.log(res.data);
        sessionStorage.setItem("userName", res.data.username);
        sessionStorage.setItem("email", res.data.email);
        this.setState({ success: res.data })

      })
      .catch(err => console.log(err.response.data));
  }

  render() {
    // If Signup was a success, take them to the Login page
    if (this.state.success) {
      return <Redirect to="/" />
      //this.props.history.push('/')
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <form>
            <h3>Sign Up!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="R`); DROP TABLE Users; --" />
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="email">email</label>
              <input
                type="text"
                name="email"
                value={this.state.email}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="hadouken@sftp.com" />
              <small id="emailHelp" className="form-text text-muted">Enter your Email</small>
              </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="D@ddyzH0m3"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.register}>Sign Up!</button>
          </form>

        </div>
      </div>
    )
  }
}

export default SignUpForum;
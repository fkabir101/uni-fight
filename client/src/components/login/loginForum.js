//import React, {Component} from "react";

// function LoginForum() {
//   return (
//     <div>
//       <form>
//         <div className="form-group">
//           <label htmlFor="username">Username</label>
//           <input type="userName" className="form-control" id="usernameInput" aria-describedby="usernameHelp" placeholder="Not_Null"></input>
//         </div>
//         <div className="form-group">
//           <label htmlFor="exampleInputPassword1">Password</label>
//           <input type="password" className="form-control" id="loginPassword" placeholder="D@ddyzH0m3"></input>
//         </div>
//         <button type="submit" className="btn btn-primary" id="loginSubmit">Login</button>
//       </form>
//     </div>
//   )
// };

//export default LoginForum;

// export default class Login extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       email : '',
//       password: ''
//     };
//   }

//   handleInputChange = (event) => {
//     const { value, name } = event.target;
//     this.setState({
//       [name]: value
//     });
//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     fetch('/api/authenticate', {
//       method: 'POST',
//       body: JSON.stringify(this.state),
//       headers: {
//         'Content-Type': 'application/json'
//       }
//     })
//     .then(res => {
//       if (res.status === 200) {
//         this.props.history.push('/');
//       } else {
//         const error = new Error(res.error);
//         throw error;
//       }
//     })
//     .catch(err => {
//       console.error(err);
//       alert('Error logging in please try again');
//     });
//   }

//   render() {
//     return (
//       <form onSubmit={this.onSubmit}>
//         <h1>Login Below!</h1>
//         <input
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           value={this.state.email}
//           onChange={this.handleInputChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Enter password"
//           value={this.state.password}
//           onChange={this.handleInputChange}
//           required
//         />
//         <input type="submit" value="Submit"/>
//       </form>
//     );
//   }
// }

//export default LoginForum;

import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";

class LoginForum extends Component {
  state = {
    isLoggedIn: false,
    username: "",
    password: ""
  }

  handleInputChange = e => {
    const { name, value } = e.target;

    this.setState({
      [name]: value
    })
  }

  // Method to handle user login, should redirect to main page when done
  login = (e) => {
    e.preventDefault();
    API
      .login({username: this.state.username, password: this.state.password})
      .then(res => {
        console.log(res.data);
        this.setState({isLoggedIn: res.data})

      })
      .catch(err => console.log(err.response));
  }

  render() {
    // If user is logged in, take them to main page
    if (this.state.isLoggedIn) {
      return <Redirect to="/"/>
    }

    return (
      <div className="container my-5">
        <div className="row justify-content-center">
          <form>
            <h3>Login!</h3>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                name="username"
                value={this.state.username}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Username"/>
              <small id="usernameHelp" className="form-text text-muted">Enter your username</small>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={this.state.password}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Password"
              />
            </div>

            <button type="submit" className="btn btn-success" onClick={this.login}>Login</button>
          </form>

        </div>
      </div>
    )
  }
}

export default LoginForum;
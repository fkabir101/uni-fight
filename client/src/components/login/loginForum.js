import React, {Component} from "react";

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

export default class LoginForum extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userName : '',
      password: ''
    };
  }
  handleInputChange = (event) => {
    const { value, name } = event.target;
    this.setState({
      [name]: value
    });
  }
  onSubmit = (event) => {
    event.preventDefault();
    alert('Authentication coming soon!');
  }
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <h1>Login Below!</h1>
        <input
          type="userName"
          name="userName"
          placeholder="Enter userName"
          value={this.state.userName}
          onChange={this.handleInputChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={this.state.password}
          onChange={this.handleInputChange}
          required
        />
       <input type="submit" value="Submit"/>
      </form>
    );
  }
}

//export default LoginForum;
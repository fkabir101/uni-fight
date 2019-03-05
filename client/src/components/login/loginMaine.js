import React from "react";
import LoginForum from "./loginForum";
import SignUpForum from "./signupForum";

function Login() {
  return (
    <div>
      <div className="row">
      <div className="container xs-col-12 col-md-6">
      <div className="jumbotron" id="SignUpJumbo">
      <div className="text-center">
          <h1>Sign Up</h1>
        </div>
        <hr className="my-4"></hr>
          <SignUpForum />
      </div>
      </div>

      <br />

    <div className="container xs-col-12 col-md-6">
      <div className="jumbotron" id="LoginJumbo">
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <hr className="my-4"></hr>
          <LoginForum />
      </div>
      </div>
      
      </div>
    </div>
  )
};


export default Login;
import React from "react";
import LoginForum from "./loginForum";
import SignUpForum from "./signupForum";

function Login() {
  return (
    <div>
      <div className="jumbotron">
        <div className="text-center">
          <h1>Login</h1>
        </div>
        <hr class="my-4"></hr>
          <LoginForum />
      </div>
      <br />
      <div className="jumbotron">
      <div className="text-center">
          <h1>Sign Up</h1>
        </div>
        <hr class="my-4"></hr>
          <SignUpForum />

      
      </div>
    </div>
  )
};


export default Login;
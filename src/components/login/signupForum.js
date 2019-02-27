import React from "react";

function SignUpForum() {
  return (
    <div>
      <form>
        <div class="form-group">
          <label for="username">Username</label>
          <input type="email" class="form-control" id="usernameInput" aria-describedby="usernameHelp" placeholder="Not_Null"></input>
        </div>

        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>
          <small id="emailHelp" class="form-text text-muted">We'll never sell your email ...unless we get paid.</small>
        </div>

        <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="loginPassword" placeholder="D@ddyzH0m3"></input>
        </div>
        <button type="submit" class="btn btn-primary" id="loginSubmit">Login</button>
      </form>
    </div>
  )
};

export default SignUpForum;
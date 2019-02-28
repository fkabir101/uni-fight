import React from "react";

function LoginForum() {
  return (
    <div>
      <form>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="email" className="form-control" id="usernameInput" aria-describedby="usernameHelp" placeholder="Not_Null"></input>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="loginPassword" placeholder="D@ddyzH0m3"></input>
        </div>
        <button type="submit" className="btn btn-primary" id="loginSubmit">Login</button>
      </form>
    </div>
  )
};

export default LoginForum;
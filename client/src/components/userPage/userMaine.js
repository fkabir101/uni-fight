import React from "react";
//import RUSure from "./areYouSure"

function UserPage () {
  return(
    <div>
        <div className = "row" id="rowJumbo">
          <div className = "jumbotron col-3" id="actionCard">
          <h5>Actions</h5>
          <hr className="my-4"></hr>
          <div className="row rowUserBtn">
          <button type="button" className="btn btn-info col-12" id="userInfoBtn">User Info</button>
          <button type="button" className="btn btn-light col-12" id="partEventBtn">Participating Events</button>
          <button type="button" className="btn btn-dark col-12" id="ownEventBtn">Owned Events</button>
</div>

          </div>

          <div className = "jumbotron col-8" id="userJumbo">
          <h2 id="usernameDiv">Username</h2>
          <h2 id="emailDiv">Email</h2>
          <hr className="my-4"></hr>
          <button type="button" className="btn btn-danger" id="partEventBtn">Delete Account</button>
          {/* <RUSure /> */}
          </div>
        </div>
      </div>
  )
};

export default UserPage
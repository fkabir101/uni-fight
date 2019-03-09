import React, {Component} from "react";
import ModalComponent from "../modal";
import CssSwitcher from "../themeswitcher/cssSwitcher";
import { withRouter } from 'react-router';
import { Redirect } from "react-router-dom";


//console.log("Username", sessionStorage.getItem("user"));

class UserPage extends Component {

  OwnedEvents() {
  
   console.log(sessionStorage.getItem("id"));
      this.props.hisory.push('/events/');
    
    
    //${sessionStorage.getItem("id")}
    } 

render() {
  return (
    <div>
      <div className="row" id="rowJumbo">
        <div className="jumbotron col-3" id="actionCard">
          <h5>Actions</h5>
          <hr className="my-4"></hr>
          <div className="row rowUserBtn">
            <button type="button" className="btn btn-info col-12" id="userInfoBtn">User Info</button>
            <button type="button" className="btn btn-light col-12" id="partEventBtn">Participating Events</button>
            <button type="button" className="btn btn-dark col-12" id="ownEventBtn" onClick={this.OwnedEvents}>Owned Events</button>
          </div>

        </div>

        <div className="jumbotron col-8" id="userJumbo">
          <h2>Hey, {sessionStorage.getItem("user")} you made it to the user page!</h2>
          <h4>Your email is {sessionStorage.getItem("email")}</h4>
          <hr className="my-4"></hr>

          <ModalComponent
            btnName="DeleteAccount"
            title="Delete Account"
            msg="Are you sure you want to delete your account?"
            negative="No! DON'T Delete My Acount"
            affirmative="Yes! Delete My Account."
            primColor="danger"
            secColor="secondary" />
          <CssSwitcher />


        </div>
      </div>
    </div>
  )
}
}

export default withRouter(UserPage);
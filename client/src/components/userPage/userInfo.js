import React, { Component } from "react";
import ModalComponent from "../modal";
import CssSwitcher from "../themeswitcher/cssSwitcher";
import { withRouter } from 'react-router';


class UserInfo extends Component {

  render() {
    return (
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
    )
  }
} //class UserInfo

export default withRouter(UserInfo);

import React, {Component} from "react";
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
//import api from "../../utils/api";
import UserInfo from "./userInfo";
import ParticipatingEvents from "./participatingEvents";
import OwnedEvents from "./ownedEvents";

//import {Redirect} from "react-router-dom";

//console.log("Username", sessionStorage.getItem("user"));

class UserPage extends Component {
  UserPage = () => {
    this.props.history.push('/user');
  }

  OwnedEvents = () => {
    this.props.history.push('/user/owned');
  } 

  parEvents = () => {
    this.props.history.push('/user/participating');
  }

render() {
  return (
      <div>
      <div className="row" id="rowJumbo">
        <div className="jumbotron col-3" id="actionCard">
          <h5>Actions</h5>
          <hr className="my-4"></hr>
          <div className="row rowUserBtn">
            <button type="button" className="btn btn-info col-12" id="userInfoBtn" onClick={this.UserPage}>User Info</button>
            <button type="button" className="btn btn-light col-12" id="partEventBtn" onClick={this.parEvents}>Participating Events</button>
            <button type="button" className="btn btn-dark col-12" id="ownEventBtn" onClick={this.OwnedEvents}>Owned Events</button>
          </div>

          <div className = "jumbotron col-8" id="userJumbo">
          <hr className="my-4"></hr>

          <ModalComponent
          btnName= "DeleteAccount"
          title= "Delete Account"
          msg= "Are you sure you want to delete your account?"
          negative= "No! DON'T Delete My Acount"
          affirmative= "Yes! Delete My Account."
          primColor="danger"
          secColor= "secondary" />
          <CssSwitcher/>

          
          </div>
        </div>

     <Switch>
      <Route exact path="/user/" render={() => <UserInfo /> } />
      <Route exact path={`${this.props.match.url}/owned`} render={() => <OwnedEvents />} />
      <Route exact path={`${this.props.match.url}/participating`} render={() => <ParticipatingEvents />} />  
    </Switch>
     
      </div>

      {/* <Route exact path="/events/:userid" component={SingleEventPage}/> */}

      </div>
  ) //render
}
}

export default withRouter(UserPage);
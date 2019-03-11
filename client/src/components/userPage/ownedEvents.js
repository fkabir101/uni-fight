import React, { Component } from "react";
import Wrapper from "../Wrapper/index";
import ExpandedEventCard from "../Events/expandedevents";
import API from '../../utils/api'

class OwnedEvents extends Component {
  state = {
    Events: []
  };

    componentDidMount = () => {

      API.getEvents()
        .then(res =>)
    }

  render () {
    return (
      
        <div className="jumbotron col-8" id="userJumbo">
        <h1>Hi from Owned Events Page!</h1>

        



        </div>
    
    )
  }

}//class owned Events

export default OwnedEvents;
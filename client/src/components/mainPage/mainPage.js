import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Wrapper from "../Wrapper/index";
import EventCard from "../EventCards/EventCard";
import API from '../../utils/api';


class MainPage extends Component {
  state = {
    Events: []
  };

  componentDidMount = () => {
    API.getEvents()
      .then(res => this.setState({
        Events: res.data
      }))
    //  .then(console.log(this.state.Events))
      .catch(err => console.log(err));
  }
  clickCard = (event) =>{
    this.props.history.push(`/events/${event.target.id}`)
  }
  render() {
    return (
      <Wrapper>
        {this.state.Events.length ? this.state.Events.reverse().map(eventData => {
          return (
            <EventCard
              key={eventData._id}
              id={eventData._id}
              name={eventData.name}
              location={eventData.location}
              creator={eventData.creator}
              start={eventData.start}
              end={eventData.end}
              clickFunction = {this.clickCard}
            />
          );
        }): ""}
      </Wrapper>
    );
  }
}

export default withRouter(MainPage);

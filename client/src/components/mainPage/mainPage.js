import React, { Component } from 'react';
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
      .then(console.log(this.state.Events))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Wrapper>
        {this.state.Events.length ? this.state.Events.map(eventData => {
          return (
            <EventCard
              key={eventData.id}
              name={eventData.name}
              location={eventData.location}
              creator={eventData.creator}
              start={eventData.start}
              end={eventData.end}
            />
          );
        }): ""}
      </Wrapper>
    );
  }
}

export default MainPage;

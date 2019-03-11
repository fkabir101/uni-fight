import React, { Component } from 'react';
import Wrapper from "../Wrapper/index";
import ExpandedEventCard from "./expandedevents";
import API from '../../utils/api';


class EventsPage extends Component {
  state = {
    Events: []
  };

  componentDidMount = () => {

    API.getEvents()
      .then(res => this.setState({
        Events: res.data

      }))
      .catch(err => console.log(err));
  }
  render() {
    return (
      <Wrapper>
        {this.state.Events.length ? this.state.Events.map(eventData => {
          return (
            <ExpandedEventCard
              key={eventData.id}
              name={eventData.name}
              location={eventData.location}
              info={eventData.info}
              category={eventData.category}
              creator={eventData.creator}
              start={eventData.start}
              end={eventData.end}
            />
          );
        }) : ""}
      </Wrapper>
    );
  }
}

export default EventsPage;

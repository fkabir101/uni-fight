import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';
import Wrapper from "../Wrapper/index";
import EventCard from "../EventCards/EventCard";
import API from '../../utils/api';
import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";




class MainPage extends Component {
  state = {
    Events: [],
    responsive :   {
      0: {
          items: 1
      },
      1024: {
          items: 3
      }
  }
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
    if (this.state.Events.length === 0) {
      return <div>Nothing To Show</div>
    }

    
    return (
        <AliceCarousel responsive ={this.state.responsive }>
        {this.state.Events.length ? this.state.Events.reverse().map(eventData => {
      return (
        <EventCard
          key={eventData._id}
          name={eventData.name}
          location={eventData.location}
          creator={eventData.creator}
          start={eventData.start}
          end={eventData.end}
        />
      );
    }): []}
        </AliceCarousel >
    );
  }
}

export default withRouter(MainPage);

import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import Wrapper from "../Wrapper/index";
import ExpandedEventCard from "../Events/expandedevents";
import API from "../../utils/api"

class ParticipatingEvents extends Component {
  state = {
    events:[]
  }
  clickCard = (event) =>{
    this.props.history.push(`/events/${event.target.id}`)
  }
  
  componentDidMount() {
    API
    //finds particpants route goes to utils/api
    .findPart().then(res =>{
        this.setState({events: res.data})
      })
      .catch(err =>{
        console.log(err)
      })
    }

  render () {
    return (
      
        <div className="jumbotron col-8" id="userJumbo">
        <h3>Events You Signed Up For</h3>
       
        <Wrapper>
          {this.state.events !== 0 ? 
          (this.state.events.map(event =>
            <ExpandedEventCard
              key={event._id}
              id={event._id}
              clickFunction = {this.clickCard}
              name={event.name}
              location={event.location}
              info={event.description}
              category={event.category}
              start={event.start}
              end={event.end}
            /> 
          )):
            (<p></p>)
          }
        </Wrapper>
        
        </div>
    
    )
  }

}//class Participating Events

export default withRouter(ParticipatingEvents);
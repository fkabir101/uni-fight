import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Wrapper from "../Wrapper/index";
import ExpandedEventCard from "../Events/expandedevents";
import API from "../../utils/api"
import ThemeSaver from "../themeswitcher/themeSaver";



class OwnedEvents extends Component {
  state = {
    events: [],
    savedTheme: "/styles/defaultstyle.css"

  }
  clickCard = (event) => {
    this.props.history.push(`/events/${event.target.id}`)
  }

  componentDidMount() {
    const CreatorID = sessionStorage.getItem("id");
    const searchObject = {
      creator: CreatorID
    }
    const cachedTheme = JSON.parse(localStorage.getItem("cachedTheme"));
    this.setState({
      savedTheme: cachedTheme
    })
    API.search(searchObject)
      .then(res => {
        this.setState({ events: res.data })
      })
      .catch(err => {
        console.log(err)
      })

  }

  render() {

    return (
      <div className="jumbotron col-8" id="userJumbo">
        <h3>Events You Have Created</h3>
        <hr className="my-4"></hr>
        <Wrapper>
          <ThemeSaver stylePath={this.state.savedTheme} />
          {this.state.events !== 0 ?
            (this.state.events.map(event =>
              <ExpandedEventCard
                key={event._id}
                id={event._id}
                clickFunction={this.clickCard}
                name={event.name}
                location={event.location}
                info={event.description}
                category={event.category}
                start={event.start}
                end={event.end}
              />
            )) :
            (<p></p>)
          }
        </Wrapper>




      </div>

    )
  }

}//class owned Events

export default withRouter(OwnedEvents);
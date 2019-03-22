import React, { Component } from 'react';
import API from "../utils/api";
import Button from "../components/button"
import ReactPlayer from 'react-player'
import ThemeSaver from "../components/themeswitcher/themeSaver";


class SingleEventPage extends Component {
  state = {
    categorys: [],
    description: "",
    limit: 0,
    location: "",
    name: "",
    start: "",
    end: "",
    venue: "",
    attendNum: 0,
    streamLink: "",
    savedTheme: "/styles/defaultstyle.css"

  };
  componentDidMount = () => {
    const cachedTheme = JSON.parse(localStorage.getItem("cachedTheme"));
    this.setState({
      savedTheme: cachedTheme
    })
    API.getEventById(this.props.match.params.id)
      .then(res => this.setState({
        categorys: res.data.category,
        description: res.data.description,
        limit: res.data.limit,
        location: res.data.location,
        name: res.data.name,
        start: res.data.start,
        end: res.data.end,
        venue: res.data.venue,
        attendNum: res.data.attendees.length,
        streamLink: res.data.streamLink
      }))
      .then(() => {

      })
      .catch(error => console.log(error))
  }
  onClickFunction = () => {
    if (sessionStorage.getItem("id") !== null) {
      const attendObject = {
        userId: sessionStorage.getItem("id"),
        eventId: this.props.match.params.id
      }
      API.attend(attendObject)
        .then(res => this.setState({
          attendNum: res.data.attendees.length,
        }))
        .catch(err => console.log(err));
    }
  }
  render() {
    return (
      <React.Fragment>
        <ThemeSaver stylePath={this.state.savedTheme} />

        <div className="container border border-dark">
          <div className="jumbotron bg-light text-dark text-center ">
            <h1 className="display-4"><strong><u>{this.state.name}</u></strong></h1>
            {this.state.categorys.map(category => (
              <h2 className="d-inline-block m-2" key={category}>{category}</h2>
            ))}
            <h4>{this.state.venue} in {this.state.location}</h4>
            {sessionStorage.getItem("id") !== null ?
              (
                <Button
                  name="Join"
                  color="danger"
                  clickFunction={this.onClickFunction}
                />
              ) :
              (<p></p>)
            }
          </div>
          <p className="text-center">Attendants: {this.state.attendNum}/{this.state.limit}</p>
          <p>{this.state.description}</p>
          {this.state.streamLink.includes("https") ?
            (<ReactPlayer url={this.state.streamLink} />) :
            (<p></p>)
          }
        </div>
        </React.Fragment>)
    
  }
}

export default SingleEventPage;
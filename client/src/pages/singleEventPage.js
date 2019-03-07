import React, {Component} from 'react';
import API from "../utils/api";
import Button from "../components/button"
import ReactPlayer from 'react-player'

// 5c7ff9079bbb861570ddb03d use this address for test without twitch
// 5c8143515d426908b8e8a524 use this address for test with twitch
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
  };
  componentDidMount = () =>{
    //(res => this.setState({ eventObject: res.data }))
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
      .then(() =>{

      })
      .catch(error => console.log(error))
  }
  render(){
    
    return(
      <div className = "container border border-dark">
        <div className = "jumbotron bg-dark text-light text-center ">
          <h1 className = "display-4"><strong><u>{this.state.name}</u></strong></h1>
          {this.state.categorys.map(category => (
            <h2 className = "d-inline-block m-2" key={category}>{category}</h2>
          ))}
          <h4>{this.state.venue} in {this.state.location}</h4>
          <Button
            name="Join"
            color="danger"
          />
        </div>
        <p className = "text-center">Attendants: {this.state.attendNum}/{this.state.limit}</p>
        <p>{this.state.description}</p>
        {this.state.streamLink.includes("https") ? 
          (<ReactPlayer url={this.state.streamLink}/>) : 
          (<p></p>)
        }
      </div>
    )
  }
}

export default SingleEventPage;
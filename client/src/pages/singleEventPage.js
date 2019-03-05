import React, {Component} from 'react';
import API from "../utils/API";
//"5c7ec69d666ad52d0c7505aa"
class SingleEventPage extends Component {
  state = {
    eventObject: {}
  }
  componentDidMount(){
    //(res => this.setState({ eventObject: res.data }))
    API.getEventById(this.props.match.params.id)
      .then(res => console.log(res.data))
  }
  render(){
    return(
      <h1>HI</h1>
    )
  }
}

export default SingleEventPage;
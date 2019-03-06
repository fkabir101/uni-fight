import React, {Component} from 'react';
import API from "../utils/api";
//5c7ff9079bbb861570ddb03d use this adress for test
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
    attendNum: 0
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
        attendNum: res.data.attendees.length
      }))
      .then(() =>console.log(this.state))
      .catch(error => console.log(error))
  }
  render(){
    return(
      <div className = "container">
        <h1>{this.state.name}</h1>
         {this.state.categorys.map(category => (
            <p key={category}>{category}</p>
          ))}
      </div>
    )
  }
}
/*
{category: Array(4), attendees: Array(0), start: Array(1), end: Array(1), _id: "5c7f08c29291872674fbbdfa", …}
category: (4) ["Street Fighter 5", "Tekken 7", "Super Smash Bros. Ultimate", "Dragon Ball Fighterz"]
description: "Its evo needs no introduction"
limit: 10000
location: "NV"
name: "Evo 2019"
start: ["2019-07-12T04:00:00.000Z"]
venue: "Mandalay Bay "
__v: 0
_id: "5c7f08c29291872674fbbdfa"
__proto__: Object

*/
export default SingleEventPage;

import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

import InputField from './inputfield'
import SelectField from "./selectField";
import CheckBox from "./checkbox";
import CalenderComponent from "./calender"
import Button from "../button"
import Moment from "moment";

import locations from "./locations.json"
import categorys from "./category.json"

import API from "../../utils/api";

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      venue: "",
      limit: "",
      start:"",
      startUnix: 0,
      end:"",
      category:[],
      location:"",
      streamLink:"",
      creator:""
    };
  }
  componentDidMount(){
    this.setState({creator:sessionStorage.getItem("id")})
  }
  updateValue = event =>{
    this.setState({[event.target.id]: event.target.value});
  }
  getCheckBoxValue = event =>{
    if(!this.state.category.includes(event.target.value)){
      this.setState({category: [...this.state.category, event.target.value]});
    }
    else{
      const categoryTempArray = this.state.category
      for( let i = 0; i < categoryTempArray.length-1; i++){ 
        if ( categoryTempArray[i] === event.target.value) {
          categoryTempArray.splice(i, 1); 
        }
     }
     this.setState({category: categoryTempArray});
    }
  }
  getDate = (value, type) =>{
    let date = String(value);
    date = date.slice(0, 15);
    if(type === "start"){
      const unixTime=Moment(date, "ddd MMM DD YYYY").format("X");
      this.setState({[type] : date, startUnix:unixTime});
    }
    else{
      this.setState({[type] : date});
    }
  }

  onClickFunction = ()=>{
    API.createEvent(this.state)
      .then(res => {
        this.props.history.push('/')
      })
      .catch(error => console.log(error))
    
  }

  render(){

    return (
      <div className="container">
        <form onSubmit = {this.onClickFunction}>
          <InputField 
            fieldName="Event Name"
            id="name"
            type="text"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Description"
            size= "large"
            type="text"
            id="description"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Venue"
            id="venue"
            type="text"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Max Participants"
            id="limit"
            type="number"
            onChangeValue = {this.updateValue}
          />
          <SelectField 
            fieldName="Location"
            id="location" 
            options={locations}
            onChangeValue = {this.updateValue}
          />
          <label>Categories:</label> <br/>
          {categorys.map(category => (
            <CheckBox 
              key={category.name}
              fieldName={category.name}
              onChangeValue = {this.getCheckBoxValue}
            />
          ))}
          <br/>
          <br/>
          <div className = "row">
            <div className = "col-6">
              <p>Start Date: </p>
              <CalenderComponent
              id="start"
              onChangeValue = {this.getDate}
              />
            </div>
            <div className = "col-6">
              <p>End Date: </p>
              <CalenderComponent
              id="end"
              onChangeValue = {this.getDate}
              />
            </div>
          </div>
          <br/>
          <InputField 
            fieldName="Stream Link (leave empty if none)"
            id="streamLink"
            type="url"
            onChangeValue = {this.updateValue}
          />
          <Button 
            name="Submit" 
            color="primary"
            clickFunction = {this.onClickFunction}
          />
        </form>
      </div>
    )
  }
}

export default withRouter(Form);


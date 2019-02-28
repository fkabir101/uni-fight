import React, { Component } from 'react';
import InputField from './inputfield'
import SelectField from "./selectField";
import CheckBox from "./checkbox";
import CalenderComponent from "./calender"
import Button from "../button"

import locations from "./locations.json"
import categorys from "./category.json"

class Form extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      description: "",
      venue: "",
      limit: "",
      start:"",
      end:"",
      category:[],
      location:""
    };
    this.updateValue = this.updateValue.bind(this);
    this.getDate = this.getDate.bind(this);
    this.onClickFunction = this.onClickFunction.bind(this);
    this.getCheckBoxValue = this.getCheckBoxValue.bind(this);
  }

  updateValue(event){
    this.setState({[event.target.id]: event.target.value});
  }
  getCheckBoxValue(event){
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
  getDate(value, type){
    this.setState({[type] : value})
  }
  onClickFunction(){
    console.log(this.state);
  }

  render(){

    return (
      <div className="container">
        <form>
          <InputField 
            fieldName="Event Name"
            id="name"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Description"
            type= "large"
            id="description"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Venue"
            id="venue"
            onChangeValue = {this.updateValue}
          />
          <InputField 
            fieldName="Max Participants"
            id="limit"
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

export default Form;


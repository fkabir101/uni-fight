import React, { Component } from 'react';
import InputField from './inputfield'
import SelectField from "./selectField";
import CheckBox from "./checkbox";
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
      limit: ""
    };
    this.updateValue = this.updateValue.bind(this);
  }

  updateValue(event){
    this.setState({[event.target.id]: event.target.value});
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
          <SelectField fieldName="Location" options={locations}/>
          <label>Categorys:</label> <br/>
          {categorys.map(category => (
            <CheckBox key={category.name}fieldName={category.name}/>
          ))}
          <br/>
          <Button name="Submit" color="primary"/>
        </form>
      </div>
    )
  }
}

export default Form;
import React, { Component } from 'react';
import InputField from './inputfield'
import SelectField from "./selectField";
import CheckBox from "./checkbox";
import Button from "../button"

import locations from "./locations.json"
import categorys from "./category.json"

class Form extends Component {
  render(){
    return (
      <div className="container">
        <form>
          <InputField fieldName="Event Name"id="name"/>
          <InputField fieldName="Description"type= "large"id="description"/>
          <InputField fieldName="Venue"id="venue"/>
          <InputField fieldName="Max Participants"id="limit"/>
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
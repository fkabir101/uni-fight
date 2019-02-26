import React, { Component } from 'react';
import InputField from './inputfield'
import SelectField from "./selectField";
import CheckBox from "./checkbox";

import locations from "./locations.json"

class Form extends Component {
  render(){
    return (
      <div className="container">
        <form>
          <InputField fieldName="Event Name"/>
          <InputField fieldName="Description"type= "large"/>
          <InputField fieldName="Venue"/>
          <SelectField fieldName="Location" options={locations}/>
          <div className="row">
            <CheckBox fieldName="Street Fighter"/>
            <CheckBox fieldName="Tekken"/>
          </div>
        </form>
      </div>
    )
  }
}

export default Form;
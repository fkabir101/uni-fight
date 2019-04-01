import React, {Component} from 'react';
import SelectField from "../form/selectField"
import InputField from '../form/inputfield'
import CheckBox from '../form/checkbox'
import CalenderComponent from "../form/calender"
import Moment from 'moment'

import locations from '../form/locations.json'
import categorys from '../form/category.json'

class Edit extends Component {
  state = {
    currentEditField: "",
    updatedValue: "",
    editOptions: [
      {
        option: "name"
      },
      {
        option: "description"
      },
      {
        option: "venue"
      },
      {
        option: "limit"
      },
      {
        option: "start"
      },
      {
        option: "end"
      },
      {
        option: "category"
      },
      {
        option: "location"
      },
      {
        option: "streamLink"
      },
    ],
    categoryOption: categorys,
    locationOption: locations,
  }
  updateValue = event => {
    this.setState({currentEditField: event.target.value})
  }
  getEdit = event =>{
    this.setState({updateValue: event.target.value})
  }
  render(){
    return(
      <div className="jumbotron col-8" id="userJumbo">
        <SelectField
          fieldName = "Field to Edit"
          id = "editOption"
          default="Edit Field"
          options={this.state.editOptions}
          onChangeValue = {this.updateValue}
        />
      {(() =>{
          switch(this.state.currentEditField){
            case 'name':
              return <div>
                <InputField
                  fieldName="Name:"
                  id="name"
                  type="text"
                  onChangeValue={this.getEdit}
                />
              </div>
            case 'description':
            return <div>
              <InputField 
                fieldName="Description"
                size= "large"
                type="text"
                id="description"
                onChangeValue = {this.updateValue}
              />
            </div>
            case 'venue':
            return <div>
              <InputField 
                fieldName="Venue"
                id="venue"
                type="text"
                onChangeValue = {this.updateValue}
              />
            </div>
            case 'limit':
            return <div>
              <InputField 
                fieldName="Max Participants"
                id="limit"
                type="number"
                onChangeValue = {this.updateValue}
              />
            </div>
            case 'category':
            return <div>
              <label>Categories:</label> <br/>
                {categorys.map(category => (
                  <CheckBox 
                    key={category.option}
                    fieldName={category.option}
                    onChangeValue = {this.getCheckBoxValue}
                  />
                ))}
                </div>
            case 'location':
            return <div>
              <SelectField 
                fieldName="Location"
                id="location"
                default="Location"
                options={this.state.locationOption}
                onChangeValue = {this.getSearch}
              />
            </div>
            case 'location':
            return <div>
              <InputField 
                fieldName="Stream Link (leave empty if none)"
                id="streamLink"
                type="url"
                onChangeValue = {this.updateValue}
              />
            </div>
            default:
              return null;
          }
        })()}
      </div>
    )
  }
}

export default Edit;
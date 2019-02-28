import React, {Component} from 'react';

class SelectField extends Component{
  render(){
    return(
      <div className="form-group">
        <label>{`${this.props.fieldName}: `}</label> <br/>
        <select id = {this.props.id}className="custom-slect" onChange = {this.props.onChangeValue}>
          <option defaultValue>Location</option>
          {this.props.options.map(option => (
            <option 
              key={option.option} 
              value={option.option}>
              {option.option}
            </option>
        ))}
        </select>
      </div>
    )
  }
}


export default SelectField;
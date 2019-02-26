import React from 'react';

function SelectField(prop){
  return(
    <div className="form-group">
      <label>{prop.fieldName}</label>
      <select className="custom-slect">
        <option defaultValue>Location</option>
        {prop.options.map(option => (
          <option value={option.option}>{option.option}</option>
      ))}
      </select>
    </div>
  )
}


export default SelectField;
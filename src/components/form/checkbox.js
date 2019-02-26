import React from 'react';

function CheckBox(prop){
  return(
    <label>
    {prop.fieldName}
    <input
      name="isGoing"
      value={prop.fieldName}
      type="checkbox"/>
  </label>
  )
}


export default CheckBox;
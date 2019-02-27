import React from 'react';

function CheckBox(prop){
  return(
    <div className="form-check custom-control-inline">
      <label>
        {`${prop.fieldName} `}
        <input
          value= {prop.fieldName}
          type="checkbox"/>
      </label>
    </div>
  )
}


export default CheckBox;
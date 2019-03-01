import React from 'react';

function CheckBox(props){
    return(
      <div className="form-check custom-control-inline">
        <label>
          {`${props.fieldName} `}
          <input
            value= {props.fieldName}
            type="checkbox"
            onChange={props.onChangeValue}
            />
        </label>
      </div>
    )
}


export default CheckBox;
import React from 'react';

function InputField(prop) {
  if(prop.type === "large"){
    return(
      <div className="form-group">
        <label>{`${prop.fieldName}:`}</label>
        <textarea  id={prop.id} rows="4" cols="90" type="text" className="form-control"></textarea>
      </div>      
    )
  }
  else{
    return(
      <div className="form-group">
        <label>{`${prop.fieldName}:`}</label>
        <input id={prop.id} type="text" className="form-control"></input>
      </div>
    );
  }
}

export default InputField;
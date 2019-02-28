import React, { Component } from 'react';

class InputField extends Component {


  render(){
    if(this.props.type === "large"){
      return(
        <div className="form-group">
          <label>{`${this.props.fieldName}:`}</label>
          <textarea  id={this.props.id} rows="4" cols="90" type="text" className="form-control" onBlur ={this.props.onChangeValue}></textarea>
        </div>      
      )
    }
    else{
      return(
        <div className="form-group">
          <label>{`${this.props.fieldName}:`}</label>
          <input id={this.props.id} type="text" className="form-control" onBlur ={this.props.onChangeValue}></input>
        </div>
      );
    }
  }
}
export default InputField;
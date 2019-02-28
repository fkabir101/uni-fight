import React, { Component } from 'react';

class CheckBox extends Component{
  render(){
    return(
      <div className="form-check custom-control-inline">
        <label>
          {`${this.props.fieldName} `}
          <input
            value= {this.props.fieldName}
            type="checkbox"
            onChange={this.props.onChangeValue}
            />
        </label>
      </div>
    )
  }
}


export default CheckBox;
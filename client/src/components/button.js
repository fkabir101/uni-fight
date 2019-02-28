import React, { Component } from 'react';

class Button extends Component {
  render(){
    return(
      <button 
        id={this.props.name}
        type="button"
        className={`btn btn-${this.props.color}`}
        onClick={this.props.clickFunction}>
        {this.props.name}
      </button>
    )
  }
}

export default Button;
import React from 'react';

function Button (props){
    return(
      <button 
        id={props.name}
        type="button"
        className={`btn btn-${props.color}`}
        onClick={props.clickFunction}>
        {props.name}
      </button>
    )
}

export default Button;
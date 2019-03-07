import React, {Component} from 'react';
//import "../../../../node_modules/bootswatch/dist/cyborg/bootstrap.min.css"


class  CssSwitcher extends Component{
    state ={

    }
    handleButtonClick = () =>{
      this.setState({stylePath: './node_modules/bootswatch/dist/cyborg/bootstrap.min.css'});
      console.log(this.state.stylePath);        
    }
    render(){
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" onClick={this.handleButtonClick}>Click to update stylesheet</button>
            </div>
        )
    }
};

export default CssSwitcher;


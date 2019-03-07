import React, { Component } from 'react';


class CssSwitcher extends Component {
    state = {
        stylePath: '/styles/defaultstyle.css'
    }
    handleButtonClick = () => {
        this.setState({ stylePath: "/styles/materia/bootstrap.css" });
        console.log(this.state.stylePath);
    }
    render() {
        return (
            <div>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
                <button type="button" onClick={this.handleButtonClick}>Click to update stylesheet</button>
            </div>


        )
    }
};

export default CssSwitcher;


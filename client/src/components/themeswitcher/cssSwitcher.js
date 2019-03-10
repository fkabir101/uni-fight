import React, { Component } from 'react';
import Button from "../button";
import ThemeSaver from "../themeswitcher/themeSaver";

const styles = [
    'materia',
    'flatly',
    'cerulean',
    'cosmo',
    'cyborg',
    'darkly',
    'journal',
    'litera',
    'lumen',
    'lux',
    'minty',
    'pulse',
    'sandstone',
    'simplex',
    'sketchy',
    'slate',
    'solar',
    'spacelab',
    'superhero',
    'united',
    'yeti'
];
class CssSwitcher extends Component {
    state = {
        selected: styles[0],
        styles: styles,
        stylePath: '/styles/defaultstyle.css'
    }
    handleButtonClick = (event) => {
        const { name, value } = event.target;

        // get selected style
        const stylePicked = this.state.styles.find(style => style === value);

        this.setState({
            selected: stylePicked,
            stylePath: `/styles/${stylePicked}/bootstrap.css`
        });
        
    }

    handleThemeSave = () => {
        const cachedTheme = this.state.stylePath;
        localStorage.setItem("cachedTheme", JSON.stringify(cachedTheme));
    }

    render() {
        return (
            <React.Fragment>
               <ThemeSaver stylePath={this.state.stylePath}/> 
                <select name="selected" onChange={this.handleButtonClick} className="form-control">
                    {styles.map(style => {
                        return (
                            <option key={style} value={style}>{style}</option>
                        )
                    })}
                </select>
                <Button
                    name="Submit"
                    color="Secondary"
                    clickFunction=
                    {this.handleThemeSave}
                />
            </React.Fragment>
        )
    }
};

export default CssSwitcher;


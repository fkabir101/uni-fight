import React, { Component } from 'react';
import Button from "../button";
import API from '../../utils/api';

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

    handleThemeSubmit = () => {
        API.saveTheme(this.state)
            .then(res => {
                console.log(res.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                <link rel="stylesheet" type="text/css" href={this.state.stylePath} />
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
                    {this.handleThemeSubmit}
                />
            </React.Fragment>
        )
    }
};

export default CssSwitcher;


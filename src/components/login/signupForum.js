import React, {Component} from "react";
import InputField from "../form/inputfield";
import Button from "../button"

class SignUpForum extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      email: "",
      password: ""
    };
    this.updateValue = this.updateValue.bind(this);
  }
  updateValue(event) {
    this.setState({ [event.target.id]: event.target.value });
    
  }
  render() {

    return (
      <div><InputField
      fieldName="Choose a Username"
      id="userName"
      onChangeValue={this.updateValue}
       />

       <InputField
       fieldName="Choose a Password"
       id="password"
       onChangeValue={this.updateValue}
        />

<InputField
       fieldName="Enter your Email"
       id="email"
       onChangeValue={this.updateValue}
        />

        <br/>

        <Button
             name="Submit"
             color="primary"
            clickFunction={this.onClickFunction}
           />
        
        </div>       
    )
  }
}



export default SignUpForum;
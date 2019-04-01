import React, {Component} from "react";
import Button from "../button"
import Categories from "../form/category.json"

class ExpandedEventCard extends Component {
  state = {
    images : []
  };
  componentDidMount(){
    const imageRefs = [];
    for(let i = 0; i < Categories.length; i++){
      for(let j =0; j < this.props.category.length; j++){
        if(Categories[i].option === this.props.category[j]){
          imageRefs.push(Categories[i].logoRef)
        }
      }
    }
    this.setState({images: imageRefs});
  }
  render(){
    console.log(this.state.images);
    return (
        <div className="card col-12">
          <div className="content">
            <ul>
              <li>
                <strong>Name:</strong> {this.props.name}
              </li>
              <li>
                <strong>Location:</strong> {this.props.location}
              </li>
              <li>
                <strong>Event Info:</strong> {this.props.info}
              </li>
              <li>
                <strong>Categories:</strong> 
                <br></br>
                {this.state.images.map((image, i) => (
                  <img key={i} src={image} alt="Italian Trulli" height="100" width="200"/>
                ))}
              </li>
              <li>
                <strong>Start Date:</strong> {this.props.start}
                <strong>End Date:</strong> {this.props.end}
              </li>
            </ul>
          </div>
          <Button
            name="Get More Info"
            color= "success"
            id = {this.props.id}
            clickFunction = {this.props.clickFunction}
          />
        </div>
    
    );
  }
}


export default ExpandedEventCard;

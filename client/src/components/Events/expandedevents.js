import React from "react";
import Button from "../button"


function ExpandedEventCard(props) {
    return (
      <div className="card col-12">
        <div className="content">
          <ul>
            <li>
              <strong>Name:</strong> {props.name}
            </li>
            <li>
              <strong>Location:</strong> {props.location}
            </li>
            <li>
              <strong>Event Info:</strong> {props.info}
            </li>
            <li>
              <strong>Categories:</strong> {props.category}
            </li>
            <li>
              <strong>Start Date:</strong> {props.start}
              <strong>End Date:</strong> {props.end}
            </li>
          </ul>
        </div>
        <Button
          name="Get More Info"
          color= "success"
          id = {props.id}
          clickFunction = {props.clickFunction}
        />
      </div>
  
  );
}


export default ExpandedEventCard;

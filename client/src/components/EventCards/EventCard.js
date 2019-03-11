import React from "react";
import "./style.css";

function EventCard(props) {
 

  return (
    <div className="card">
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Location:</strong> {props.location}
          </li>
          <li>
            <strong>Start Time:</strong> {props.start}
            <br/>
            <strong>End Time:</strong> {props.end}
          </li>
        </ul>
      </div>
    </div>

  );
}


export default EventCard;

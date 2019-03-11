import React from "react";
import "./style.css";

function EventCard(props) {
  // console.log(props);

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
            <strong>Creator:</strong> {props.creator}
          </li>
          <li>
            <strong>Start Time:</strong> {props.start}
            <n/>
            <strong>End Time:</strong> {props.end}
          </li>
          <strong>Start Time:</strong> {props.start}
        </ul>
      </div>
    </div>

  );
}


export default EventCard;

import React from "react";


function ExpandedEventCard(props) {
  console.log(props);

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
        </ul>
      </div>
    </div>

  );
}


export default ExpandedEventCard;

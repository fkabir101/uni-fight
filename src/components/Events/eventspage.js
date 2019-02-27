import React from 'react';
import Wrapper from "../Wrapper/index";
import ExpandedEventCard from "../Events/expandedevents";
import trashData from "../../trashData.json";


function EventsPage() {
  return (
    <Wrapper>
      {trashData.map(eventData => {
            console.log(eventData);

        return (
          <ExpandedEventCard
            key={eventData.id}
            name={eventData.eventName}
            location={eventData.eventLocation}
            info={eventData.eventInfo}
          />
        );
      })}
    </Wrapper>
  );
}

export default EventsPage;

import React from 'react';
import Wrapper from "../Wrapper/index";
import EventCard from "../EventCards/EventCard";
import trashData from "../../trashData.json";


function MainPage() {
  return (
    <Wrapper>
      {trashData.map(eventData => {
        return (
          <EventCard
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

export default MainPage;

import React from 'react';
import Wrapper from "../Wrapper/index";
import EventCard from "../EventCards/EventCard";
import trashData from "../../trashData.json";
import CssSwitcher from "../themeswitcher/cssSwitcher";



function MainPage() {
  return (
    <Wrapper>
      <CssSwitcher/>
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

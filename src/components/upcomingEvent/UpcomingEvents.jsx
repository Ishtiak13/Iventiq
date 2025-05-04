import React, { use, useEffect, useState } from "react";
import EventCard from "../ui/EventCard";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);

  return <div className="my-24 max-w-7xl mx-auto">
<h2 className="md:text-4xl text-2xl text-center font-semibold">Upcoming Events</h2>
<p className="my-4 text-center text-accent">
Stay ahead with the latest events happening across BRAC University. <br />From tech talks to cultural fests, there's always something exciting on the way!
</p>
{events.map(event => <EventCard key={event.id} event={event}></EventCard>)}
  </div>;
};

export default UpcomingEvents;

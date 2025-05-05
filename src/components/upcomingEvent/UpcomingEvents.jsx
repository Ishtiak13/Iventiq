import React, { useEffect, useState } from "react";
import EventCard from "../ui/EventCard";

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [view, setView] = useState(false);
  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => setEvents(data));
  }, []);
  return (
    <div id="upcoming" className="my-24 max-w-7xl mx-auto">
      <h2 className="md:text-4xl text-2xl text-center font-semibold">
        Upcoming Events
      </h2>
      <p className="my-4 text-center text-accent">
        Stay ahead with the latest events happening across BRAC University.{" "}
        <br />
        From tech talks to cultural fests, there's always something exciting on
        the way!
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-12">
        {view
          ? events.map((event) => (
              <EventCard key={event.id} event={event}></EventCard>
            ))
          : events
              .slice(0, 6)
              .map((event) => (
                <EventCard key={event.id} event={event}></EventCard>
              ))}
      </div>
      <div className="flex justify-center">
        <button
          onClick={() => {
            setView(!view),
              view &&
                window.scrollTo({
                  top: 750,
                  behavior: "smooth",
                });
          }}
          className="btn btn-primary text-white rounded-full "
        >
          {view ? "View Less" : "View More"}
        </button>
      </div>
    </div>
  );
};

export default UpcomingEvents;

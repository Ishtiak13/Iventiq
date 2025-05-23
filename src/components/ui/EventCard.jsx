import React from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";

import { Link } from "react-router";

const EventCard = ({ event }) => {
  return (
    <div className="hover:scale-102 duration-500">
      <div className="card h-full hover:bg-base-200 bg-base-300 flex hover:shadow-lg ">
        <figure className="w-full">
          <img
            src={event.thumbnail}
            alt={event.name}
            className="rounded-xl h-50 w-full object-cover hover:scale-105 duration-500"
          />
        </figure>
        <div className="card-body text-left ">
          <h2 className="card-title ">{event.name}</h2>
          <div className="badge badge-outline badge-accent cursor-default">
            {event.category}
          </div>
          <div className="text-accent flex items-center gap-2">
            {" "}
            <BiCalendarEvent className="h-full" /> {event.date}{" "}
          </div>
          <div className="text-accent flex items-center gap-2">
            {" "}
            <GrMapLocation className="h-full" /> {event.location}{" "}
          </div>
          <p className="text-accent">
            {event.description.split(" ").slice(0, 20).join(" ") + "..."}
          </p>
          <p className="text-accent text-lg">
            Entry Fee:{" "}
            <span className="font-bold">&#2547;{event.entry_fee}</span>
          </p>
          <div className="card-actions w-full">
            <Link
              to={`/event-details/${event.id}`}
              className="btn btn-primary text-base-100 w-full"
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;

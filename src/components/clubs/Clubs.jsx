import React, { use } from "react";
import Marquee from "react-fast-marquee";
import ClubCard from "../ui/clubCard";
const clubsPromise = fetch("/clubs.json").then((res) => res.json());

const Clubs = () => {
  const clubsData = use(clubsPromise);
  return (
    <div className="my-24">
      <h2 className="md:text-4xl text-2xl text-center font-semibold">
        Our Event Creators
      </h2>
      <p className="my-4 text-center text-accent">
        Explore the BRACU clubs and student bodies behind your favorite campus
        events.
      </p>
      <div>
        <Marquee pauseOnHover={true} autoFill={true} className="bg-base-300 py-4">
          {clubsData.slice(0,5).map((club) => (
            <ClubCard key={club.id} club={club}></ClubCard>
          ))}
        </Marquee>
        <Marquee pauseOnHover={true} autoFill={true} direction="right" className="bg-base-300 py-4" >
          {clubsData.slice(5,10).map((club) => (
            <ClubCard key={club.id} club={club}></ClubCard>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default Clubs;

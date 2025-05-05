import React from "react";
import CountUp from "react-countup";
import CountUpCard from "../ui/CountUpCard";

const Status = () => {
  return (
    <div className="py-12 bg-gray-100 rounded-2xl">
      <h2 className="md:text-4xl text-2xl font-bold text-center">
        Event Impact Tracker
      </h2>
      <div className="text-accent">
        <div className="sm:flex sm:justify-center">
          <CountUpCard name={"Total Attendees"} number={3000}></CountUpCard>
          <CountUpCard name={"Volunteer Hours"} number={500}></CountUpCard>
        </div>
        <div className="sm:flex sm:justify-center">
          <CountUpCard
            name={"Environmental Impact"}
            number={2000}
            postText="Bottle Saved"
          ></CountUpCard>
          <CountUpCard
            name={"Social Media Engagement"}
            number={20000}
            postText="Reached"
          ></CountUpCard>
          <CountUpCard
            name={"Event Satisfaction Rate"}
            number={95}
            symbol="%"
            postText="Positive Feedback"
          ></CountUpCard>
        </div>
      </div>
    </div>
  );
};

export default Status;

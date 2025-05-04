import React from "react";
import CountUp from "react-countup";
import CountUpCard from "../ui/CountUpCard";

const Status = () => {
  return (
    <div>
      <section className="py-12 bg-gray-100 rounded-2xl">
        <h2 className="md:text-4xl text-2xl font-bold text-center">
          Event Impact Tracker
        </h2>
        <div className="flex justify-center mt-6 space-x-12 text-accent">
          <CountUpCard name={"Total Attendance"} number={"4000"}></CountUpCard>
          <CountUpCard name={"Volunteer Hours"} number={"500"}></CountUpCard>
        </div>

        <div className="mt-8 flex justify-center space-x-12 text-accent">
          <CountUpCard
            name={"Environmental Impact"}
            number={"2000"}
            postText="Bottles Saved"
          ></CountUpCard>
          <CountUpCard
            name={"Environmental Impact"}
            number={"10000"}
            postText="Reached"
          ></CountUpCard>
          <CountUpCard
            name={"Event Satisfaction Rate"}
            number={"95"}
            postText="Positive Feedback"
            symbol={"%"}
          ></CountUpCard>
        </div>

        <div className="mt-12 text-center text-accent">
          <p className="text-xl">
            Stay tuned for more upcoming impact numbers!
          </p>
        </div>
      </section>
    </div>
  );
};

export default Status;

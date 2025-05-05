import React from "react";
import CountUp from "react-countup";

const CountUpCard = ({ name, number, symbol = "+", postText = "" }) => {
  return (
    <div className="text-center justify-self-center m-6">
      <p className="text-2xl font-semibold">{name}</p>
      <h3 className="text-4xl font-bold">
        <CountUp
          end={number}
          duration={3}
          delay={0.5}
          enableScrollSpy
          scrollSpyOnce
        ></CountUp>
        {symbol}{" "}
      </h3>
      <p className="text-xl">{postText}</p>
    </div>
  );
};

export default CountUpCard;

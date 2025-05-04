import React from 'react';
import CountUp from 'react-countup';

const CountUpCard = ({name,number, symbol='+', postText=''}) => {
    return (
        <div>
            <h3><div className="text-center">
            <p className="text-2xl font-semibold">{name}</p>
            <h3 className="text-4xl font-bold"><CountUp end={number} duration={3} delay={.5} enableScrollSpy scrollSpyOnce></CountUp>{symbol} {postText}</h3>
          </div></h3>
        </div>
    );
};

export default CountUpCard;
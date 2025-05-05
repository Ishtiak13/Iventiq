import React from 'react';

const ClubCard = ({club}) => {
    return (
        <div className='flex flex-col justify-center items-center w-40 text-center rounded-2xl hover:scale-105 duration-500'>
            <a target='_blank' href={club.link}><img className='h-20 rounded-full hover:shadow-2xl hover:scale-101 duration-300' src={club.logo} alt={club.name} /></a>
            {/* <h3 className='text-accent'>{club.name}</h3> */}
        </div>
    );
};

export default ClubCard;
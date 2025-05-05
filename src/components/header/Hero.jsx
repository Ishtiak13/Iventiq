import React, {  use } from 'react';

import SlidesCard from '../ui/SlidesCard';
const data= fetch('/slides.json').then(res=>res.json())

const Hero = () => {
    const slidesData = use(data)
  return (
    <div  className="carousel w-full rounded-2xl">
     {slidesData.map(slideData=><SlidesCard key={slideData.id} slideData={slideData}></SlidesCard>)}
     
    </div>
  );
};

export default Hero;

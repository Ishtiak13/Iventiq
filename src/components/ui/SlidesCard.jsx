import React from "react";
import { BsCalendar2Event } from "react-icons/bs";
import { GrLocationPin } from "react-icons/gr";
import { Link } from "react-router";

const SlidesCard = ({ slideData }) => {
  const {
    id,
    leftSlide,
    rightSlide,
    tag,
    title,
    subtitle,
    description,
    location,
    date,
    image,
  } = slideData;
  return (
    <div id={id} className="carousel-item relative w-full">
      <div className="relative flex flex-col-reverse py-16 lg:pt-0 lg:flex-col lg:pb-0 w-full">
        <div className="inset-y-0 top-0 right-0 z-0 w-full max-w-xl px-4 mx-auto md:px-0 lg:pr-0 lg:mb-0 lg:mx-0 lg:w-7/12 lg:max-w-full lg:absolute xl:px-0">
          <svg
            className="absolute left-0 hidden h-full text-white transform -translate-x-1/2 lg:block"
            viewBox="0 0 100 100"
            fill="currentColor"
            preserveAspectRatio="none slice"
          >
            <path d="M50 0H100L50 100H0L50 0Z" />
          </svg>
          <img
            className="object-cover w-full h-56 rounded shadow-lg lg:rounded-none lg:shadow-none md:h-96 lg:h-full"
            src={image}
            alt={location}
          />
        </div>
        <div className="relative flex flex-col items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
          <div className="mb-16 lg:my-40 lg:max-w-lg lg:pr-5">
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              {tag}
            </p>
            <h2 className="mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              {title}
            </h2>
            <h3 className="italic text-xl text-accent font-bold">
              {subtitle}
            </h3>
            <p className="pr-5 mb-5 text-base text-gray-700 md:text-lg">
              {description}
            </p>
            <div className="flex items-center gap-4 my-4">
              <button className="flex gap-2 items-center text-accent p-2 border border-accent rounded-xl hover:shadow">
                <GrLocationPin />
               {location}
              </button>
              <button className="flex items-center gap-2 text-accent p-2 border border-accent rounded-xl hover:shadow">
                <BsCalendar2Event />
                {date}
              </button>
            </div>
            <div className="flex items-center gap-4">
              <Link className="btn bg-base-300 border-none">Learn more</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute left-5 right-5 top-[55%] md:top-1/2 flex -translate-y-1/2 transform justify-between">
        <a href={"#"+leftSlide} className="btn btn-circle">
          ❮
        </a>
        <a href={"#"+rightSlide} className="btn btn-circle">
          ❯
        </a>
      </div>
    </div>
  );
};

export default SlidesCard;

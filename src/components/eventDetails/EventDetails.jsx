import React, { useState } from "react";
import { BiCalendarEvent } from "react-icons/bi";
import { GrMapLocation } from "react-icons/gr";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { useLoaderData, useParams } from "react-router";
import NoDataFound from "../../pages/error/NoDataFound";

const EventDetails = () => {
  const [reserved, setReserved] = useState(false);

  const data = useLoaderData();
  const { eventId } = useParams();
  const activeEvent = data.find((event) => event.id == eventId);
  if (!activeEvent){
    return <NoDataFound></NoDataFound>
  }

  const handleReserve = (e) => {
    e.preventDefault();
    setReserved(true);
  };

  return (
    <>
    <title>{activeEvent.name}</title>
      <div className="w-11/12 mx-auto max-w-7xl card lg:card-side bg-base-200 shadow-sm text-accent my-10">
        <figure className="lg:w-1/2">
          <img
            className="w-full hover:scale-110 duration-500 object-cover"
            src={activeEvent.thumbnail}
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-3xl">{activeEvent.name}</h2>
          <div className="flex flex-col md:flex-row md:gap-6">
            <div className="text-accent flex items-center gap-2">
              {" "}
              <BiCalendarEvent className="h-full" /> {activeEvent.date}{" "}
            </div>
            <div className="text-accent flex items-center gap-2">
              {" "}
              <GrMapLocation className="h-full" /> {activeEvent.location}{" "}
            </div>
          </div>
          <p className="text-lg">{activeEvent.description}</p>
          <div className="my-3">
            <p className="text-accent text-lg">
              Entry Fee:{" "}
              <span className="font-bold text-2xl">
                &#2547;{activeEvent.entry_fee}
              </span>
            </p>
          </div>
        </div>
      </div>
      {!reserved ? (
        <div className="my-16 space-y-4 max-w-2xl mx-auto bg-base-200 p-12 shadow-xl">
          <h2 className="text-2xl font-semibold text-center mb-4 ">
            Reserve Your Seat Now
          </h2>
          <form onSubmit={handleReserve} className=" text-accent">
            <div className="mb-1 sm:mb-2">
              <label
                htmlFor="firstName"
                className="inline-block mb-1 font-medium"
              >
                Name
              </label>
              <input
                placeholder="Enter your name"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="firstName"
                name="firstName"
              />
            </div>
            <div className="mb-1 sm:mb-2">
              <label htmlFor="email" className="inline-block mb-1 font-medium">
                E-mail
              </label>
              <input
                placeholder="iventiq@example.org"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
                id="email"
                name="email"
              />
            </div>
            <button type="submit" className="btn btn-primary text-white w-full">
              Sign Up
            </button>
          </form>
        </div>
      ) : (
        <div className="my-16 space-y-4 max-w-2xl mx-auto bg-base-200  p-12 shadow-xl">
          <div className="badge badge-success py-6 w-full">
            <IoCheckmarkCircleOutline size={32} />
            Success! You're in! <br /> We've reserved your seat — yay! Get ready
            to enjoy the event.
          </div>
          <button onClick={()=>setReserved(false)} className="btn btn-primary text-white w-full">
            One More? Let's Go!
          </button>
        </div>
      )}
    </>
  );
};

export default EventDetails;

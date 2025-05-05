import React, { useState } from 'react';
import eventImg from '../../assets/event.png'

const CreateEvent = () => {
    const [isSubmit, setIsSubmit]=useState(false)
 
    const handleEvent =(e)=>{
        e.preventDefault()
        setIsSubmit(true)
    }


    return (
        <div className='my-12'>
            <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-100 dark:text-gray-800">
	<div className="flex flex-col justify-between">
		<div className="space-y-2">
			<h2 className="text-4xl font-bold leading-tight lg:text-5xl">Ready to Launch Your Event!</h2>
			<p className="">Fill in the details below to get your event published.</p>
		</div>
		<img src={eventImg} alt="" className="p-6" />
	</div>
	{isSubmit ? (
  <div className="flex shadow-md gap-6 rounded-lg overflow-hidden divide-x max-w-2xl bg-base-300">
    <div className="flex flex-1 flex-col p-4 border-l-8 border-primary">
      <span className="text-2xl font-semibold text-accent"> Submission Successful!</span>
      <span className=" text-gray-600">Thank you for submitting your event. Our team will get back to you shortly.</span>
      <hr className="my-2" />
      <h3 className="font-medium text-xl italic ">For urgent queries, reach out to us:</h3>
      <div  className='flex flex-col gap-4 my-4'>
      <p className='badge badge-ghost badge-lg'>Email: <a href="mailto:contact@iventiq.com" className="text-primary underline">contact@iventiq.com</a></p>
      <p className='badge badge-ghost badge-lg'>Phone: <span className="text-primary">+880 1099 237339</span></p>
      </div>
    </div>
    <div />
  </div>
) : (
  <form onSubmit={handleEvent} className="space-y-6 text-accent">
    <div>
      <label htmlFor="fullName" className="text-sm">Full Name</label>
      <input
        id="fullName"
        name="fullName"
        type="text"
        placeholder="Enter your full name"
        required
        className="w-full p-3 rounded outline-primary border bg-white"
      />
    </div>
    <div>
      <label htmlFor="email" className="text-sm">Email Address</label>
      <input
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        required
        className="w-full p-3 rounded outline-primary border bg-white"
      />
    </div>
    <div>
      <label htmlFor="eventName" className="text-sm">Event Title</label>
      <input
        id="eventName"
        name="eventName"
        type="text"
        placeholder="Give your event a name"
        required
        className="w-full p-3 rounded outline-primary border bg-white"
      />
    </div>
    <div>
      <label htmlFor="banner" className="text-sm">Event Banner (optional)</label>
      <input
        id="banner"
        name="banner"
        type="file"
        accept="image/*"
        className="w-full p-3 rounded outline-primary border bg-white"
      />
    </div>
    <div className="flex flex-col sm:flex-row gap-4">
      <div className="flex-1">
        <label htmlFor="eventDate" className="text-sm">Event Date</label>
        <input
          id="eventDate"
          name="eventDate"
          type="date"
          required
          className="w-full p-3 rounded outline-primary border bg-white"
        />
      </div>
      <div className="flex-1">
        <label htmlFor="eventLocation" className="text-sm">Event Location</label>
        <input
          id="eventLocation"
          name="eventLocation"
          type="text"
          placeholder="Enter event location"
          required
          className="w-full p-3 rounded outline-primary border bg-white"
        />
      </div>
    </div>
    <div>
      <label htmlFor="details" className="text-sm">Event Description</label>
      <textarea
        id="details"
        name="details"
        placeholder="Provide a brief overview of your event"
        rows="3"
        required
        className="w-full p-3 rounded outline-primary border bg-white"
      ></textarea>
    </div>
    <button
      type="submit"
      className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded bg-primary text-white hover:bg-primary/90 transition"
    >
      Submit Event
    </button>
  </form>
)}


</div>
        </div>
    );
};

export default CreateEvent;
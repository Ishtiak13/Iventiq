import React from "react";

const About = () => {
  return (
    <section className="max-w-7xl mx-auto text-accent space-y-4 p-4">
      <h1 className="text-3xl">Welcome to <strong>Iventiq!</strong></h1>
      <p>
        Iventiq is your go-to platform for exploring, managing, and creating all
        the exciting campus events happening at your university—all in one
        friendly space!
      </p>
      <h2 className="text-xl font-bold"> Why We're Here</h2>
      <article>
        <p>
          We know that universities are buzzing with incredible activities—from
          tech meetups and career fairs to art shows and sports tournaments. But
          keeping up with everything can feel a bit overwhelming. That's where
          we come in! <br />
          Our mission is to gather all university event listings in one spot so
          that you can easily stay in the loop and not miss out on amazing
          opportunities to learn, connect, and have fun!
        </p>
      </article>
      <h2 className="text-xl font-bold">What You Can Do on Iventiq </h2>
      <ul>
        <li>
          <span className="font-bold">Browse Events:</span>
          <p>
            Check out upcoming events by category, club, or department that
            interest you.
          </p>
        </li>
        <li>
          <span className="font-bold">Register with Ease: </span>
          <p>
            Sign up for events with just a click—no more hunting for random
            Google Forms or stressing about deadlines!
          </p>
        </li>
        <li>
        <span className="font-bold">Create Your Own Event:</span>
          <p>
            Whether you're part of a club or organizing a special session, use
            Iventiq to design your event, add all the details, upload a cool
            banner, and start accepting signups.
          </p>
        </li>
        <li>
          <span className="font-bold">Connect with Organizers:</span>
          <p>
            Have questions or need updates? Reach out to event organizers
            directly for more information.
          </p>
        </li>
      </ul>
      <h2 className="text-xl font-bold">Who's Invited? </h2>
      <ul>
        <li >
          - Students eager to make the most out of their university experience.
        </li>
        <li>
          - Clubs and societies excited to share their activities with everyone.
        </li>
        <li>
          - University departments looking for an easy and clean platform for
          seminars or guest lectures.
        </li>
        <li>
          - Organizers who want a hassle-free way to manage attendees and event
          details!
        </li>
      </ul>
      <h2 className="text-xl font-bold">Our Vision</h2>
      <p>
        We believe that campus life should be about more than just classes—it's
        about experiences, creativity, collaboration, and personal growth. At
        Iventiq, we're here to connect you with these amazing experiences,
        helping every event find its perfect audience while ensuring that every
        student discovers something fun to be a part of!
        <br />
        <span className="font-bold italic">Join us and dive into all that campus life has to offer!</span>
      </p>
    </section>
  );
};

export default About;

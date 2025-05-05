import React, { Suspense } from "react";
import Hero from "../../components/header/Hero";
import Loading from "../../components/ui/Loading";
import UpcomingEvents from "../../components/upcomingEvent/UpcomingEvents";
import Status from "../../components/header/Status";
import Clubs from "../../components/clubs/Clubs";

const Home = () => {
  return (
    <div >
      <Suspense fallback={<Loading></Loading>}>
        <Hero />
      </Suspense>
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <UpcomingEvents />
        </Suspense>
      </section>
      <section >
        <Suspense fallback={<Loading></Loading>}>
          <Clubs />
        </Suspense>
      </section> 
      <section className="w-11/12 mx-auto">
        <Status />
      </section>
      
    </div>
  );
};

export default Home;

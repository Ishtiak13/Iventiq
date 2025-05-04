import React, { Suspense } from "react";
import Hero from "../../components/header/Hero";
import Loading from "../../components/ui/Loading";
import UpcomingEvents from "../../components/upcomingEvent/UpcomingEvents";
import Status from "../../components/header/Status";

const Home = () => {
  return (
    <div className="w-11/12 mx-auto">
      <Suspense fallback={<Loading></Loading>}>
        <Hero />
      </Suspense>
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <UpcomingEvents />
        </Suspense>
      </section>
      <section>
        <Status/> 
      </section>
    </div>
  );
};

export default Home;

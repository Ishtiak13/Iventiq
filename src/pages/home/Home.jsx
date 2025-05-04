import React, { Suspense } from "react";
import Hero from "../../components/header/Hero";
import Loading from "../../components/ui/Loading";
import UpcomingEvents from "../../components/upcomingEvent/UpcomingEvents";

const Home = () => {
  return (
    <div>
      <Suspense fallback={<Loading></Loading>}>
        <Hero />
      </Suspense>
      <section>
        <Suspense fallback={<Loading></Loading>}>
          <UpcomingEvents />
        </Suspense>
      </section>
    </div>
  );
};

export default Home;

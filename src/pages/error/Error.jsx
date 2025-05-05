import React from "react";
import { Link } from "react-router";

const Error = () => {
  return (
    <section className="flex items-center h-screen">
        <title>Error</title>
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-md text-center">
          <h3 className="mb-8 font-extrabold text-9xl text-accent">
            <span className="sr-only">Error</span>404
          </h3>
          <p className="text-2xl font-semibold text-accent md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 dark:text-gray-600">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link
            rel="noopener noreferrer"
            to={"/"}
            className="btn btn-primary text-lg text-white"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;

import React from "react";
import { Link } from "react-router";

const NoDataFound = () => {
  return (
    <section className="flex items-center h-full sm:p-16 dark:bg-gray-50 dark:text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8 space-y-8 text-center sm:max-w-md">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-32 h-32 text-gray-400"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M21 21l-6-6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle
            cx="10"
            cy="10"
            r="6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h2 className="text-3xl font-semibold">No Data Found</h2>
        <p className="text-sm text-gray-600">
          We couldn't find anything matching your request. Try adjusting your
          search or check back later.
        </p>
        <Link
          to="/"
          className="px-6 py-2 font-medium rounded bg-primary text-white hover:bg-primary/90 transition"
        >
          Back to Homepage
        </Link>
      </div>
    </section>
  );
};

export default NoDataFound;

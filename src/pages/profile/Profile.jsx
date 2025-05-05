import React, { use } from "react";
import { AuthContext } from "../../providers/AuthProvider";

const Profile = () => {
  const { user, updateInfo } = use(AuthContext);

  const updateName = (e) => {
    // e.preventDefault();
    const displayName = e.target.name.value;

    updateInfo({
      displayName,
      photoURL: user.photoURL,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const updatePhoto = (e) => {
    // e.preventDefault();
    const photoURL = e.target.photoURL.value;

    updateInfo({
      displayName: user.displayName,
      photoURL,
    })
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <>
      <div className="flex flex-col justify-center  place-self-center max-w-7xl w-full p-6 shadow-md rounded-xl sm:px-12 bg-base-200 my-8">
        <img
          src={user.photoURL}
          alt=""
          className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
        />
        <div className="space-y-4 text-center divide-y dark:divide-gray-300">
          <div className="my-2 space-y-1">
            <h2 className="text-xl font-semibold sm:text-2xl">
              {user.displayName}
            </h2>
            <p className="px-5 text-accent">{user.email}</p>
            <hr />
            <p className="px-5 text-accent">
              Account Created: {user.metadata.creationTime}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center  place-self-center max-w-7xl w-full p-6 shadow-md rounded-xl sm:px-12 bg-base-200 my-9 text-accent gap-6">
        <form onSubmit={updateName}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="name" className="inline-block mb-1 font-medium">
              Update Your Name
            </label>
            <input
              placeholder="Enter your name"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="name"
              name="name"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
        <form onSubmit={updatePhoto}>
          <div className="mb-1 sm:mb-2">
            <label htmlFor="photoURL" className="inline-block mb-1 font-medium">
              Update Your Photo
            </label>
            <input
              placeholder="Your photo URL"
              required
              type="text"
              className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
              id="photoURL"
              name="photoURL"
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </form>
      </div>
    </>
  );
};

export default Profile;

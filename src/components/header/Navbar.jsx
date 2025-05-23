import React, { use } from "react";
import { FaUserCircle } from "react-icons/fa";
import { Link, NavLink } from "react-router";
import logo from "../../assets/Logo.png";
import { AuthContext } from "../../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.code);
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink to={"/"}>Home</NavLink>
      </li>
      <li>
        <NavLink to={"/my-profile"}>My Profile</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to={"/create-event"}>Create Event</NavLink>
        </li>
      )}
      <li>
        <NavLink to={"/about"}>About</NavLink>
      </li>
    </>
  );
  return (
    <nav className="navbar text-accent">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <Link to={'/'}>
          <img className="h-10" src={logo} alt="iventiq logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-2">{navLinks}</ul>
      </div>
      <div className="navbar-end gap-4">
        <div className="avatar relative group">
          <div className="ring-primary ring-offset-base-100 w-7 rounded-full ring-2 ring-offset-2 ">
            {user?.photoURL ? (
              <Link to={'/my-profile'} ><img className="object-cover" src={user.photoURL} /></Link>
            ) : (
              <FaUserCircle className=" w-full h-full" />
            )}
          </div>
          {user?.displayName && (
            <p className="absolute md:-left-36 -left-20 top-8 hidden group-hover:flex bg-base-300 text-accent text-lg rounded-xl z-10  py-1 px-2 border border-primary font-bold">
              {user.displayName}
            </p>
          )}
        </div>
        {user ? (
          <button
            onClick={handleSignOut}
            className="btn btn-primary text-base-200"
          >
            Sign Out
          </button>
        ) : (
          <Link to={"/sign-in"} className="btn btn-primary text-base-200">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

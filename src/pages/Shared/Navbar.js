import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";

const Navbar = () => {
  const [user] = useAuthState(auth);
  const menuItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/appointment">Appointment</Link>
      </li>
      <li>
        <Link to="/doctors">Doctors</Link>
      </li>
      {user && (
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      )}
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/contact">Contact</Link>
      </li>
      {user ? (
        <button
          onClick={() => {
            signOut(auth);
            localStorage.removeItem("accessToken");
          }}
        >
          Logout
        </button>
      ) : (
        <li>
          <Link to="/login" className="">
            Login
          </Link>
        </li>
      )}
    </>
  );
  return (
    <>
      <div className="navbar container mx-auto mt-3">
        <div className="navbar-start lg:mx-auto">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-2xl">
            Doctors Portal
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <div className="navbar-end lg:flex">
          <h1
            className="btn btn-sm md:btn-md btn-outline border-none rounded-none px-3 md:px-6 bg-gradient-to-r from-blue-400 to-blue-500  text-white hover:bg-gradient-to-r
           hover:from-blue-500 hover:to-blue-400 "
          >
            Hotline- 09865
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;

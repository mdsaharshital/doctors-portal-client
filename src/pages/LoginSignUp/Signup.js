import React from "react";
import { Link } from "react-router-dom";
import SocialSignIn from "../Shared/SocialSignIn";

const Signup = () => {
  const handleSignUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);
    e.target.reset();
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  w-80 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Signup!</h2>
          <form
            onSubmit={handleSignUp}
            className="mt-10 grid grid-cols-1 justify-items-center gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value={"Submit"}
              className="input input-bordered w-full max-w-xs bg-gradient-to-r from-secondary to-primary text-white border-none cursor-pointer"
            />
          </form>
          <p className="text-center">
            Already have an account?{" "}
            <Link className="text-blue-400" to="/login">
              Login now
            </Link>
          </p>
          <SocialSignIn />
        </div>
      </div>
    </div>
  );
};

export default Signup;

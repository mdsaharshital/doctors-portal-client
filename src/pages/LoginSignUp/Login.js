import React from "react";
import { Link } from "react-router-dom";
import SocialSignIn from "../Shared/SocialSignIn";

const Login = () => {
  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    e.target.reset();
  };
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  w-80 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title justify-center">Login!</h2>
          <form
            onSubmit={handleSignin}
            className="mt-10 grid grid-cols-1 justify-items-center gap-3"
          >
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
            Don't have any account?{" "}
            <Link className="text-blue-400" to="/signup">
              Sign up now
            </Link>
          </p>
          <SocialSignIn />
        </div>
      </div>
    </div>
  );
};

export default Login;

import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import SocialSignIn from "../Shared/SocialSignIn";
import auth from "../../firebase.init";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Loading from "../Shared/Loading";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => {
    signInWithEmailAndPassword(data.email, data.password);
  };
  // signin related works
  useEffect(() => {
    if (user) {
      navigate(from, { replace: true });
    }
  }, [user, navigate, from]);

  let signInError;
  if (error) {
    signInError = (
      <p className="text-red-500">
        <span>{error?.message}</span>
      </p>
    );
  }
  if (loading) return <Loading />;
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="card  w-96 lg:w-96 bg-base-100 shadow-xl">
        <div className="card-body ">
          <h2 className="card-title justify-center">Login!</h2>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is Required",
                },
                pattern: {
                  value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                  message: "Provide a valid email",
                },
              })}
              type="email"
              placeholder="Your email"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.email?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
              {errors.email?.type === "pattern" && (
                <span className="label-text-alt text-red-500">
                  {errors.email.message}
                </span>
              )}
            </label>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input
              {...register("password", {
                required: {
                  value: true,
                  message: "Password is Required",
                },
                minLength: {
                  value: 6,
                  message: "Password must be atleast 6 character or longer",
                },
              })}
              type="password"
              placeholder="Your password"
              className="input input-bordered w-full max-w-xs"
            />
            <label className="label">
              {errors.password?.type === "required" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
              {errors.password?.type === "minLength" && (
                <span className="label-text-alt text-red-500">
                  {errors.password.message}
                </span>
              )}
            </label>
            {signInError}
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="submit"
              className="w-full max-w-xs btn"
              value="Login"
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

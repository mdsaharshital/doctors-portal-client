import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import Loading from "./Loading";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  if (user) {
    navigate(from, { replace: true });
  }
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <>
      <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline">
        Sign in With Google
      </button>
      {error && (
        <p className="text-red-500">
          <small>{error?.message}</small>
        </p>
      )}
    </>
  );
};

export default SocialSignIn;

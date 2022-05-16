import React, { useEffect } from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import useToken from "../../hooks/useToken";
import Loading from "./Loading";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const [token] = useToken(user?.user);
  const navigate = useNavigate();
  const location = useLocation();
  let from = location?.state?.from?.pathname || "/";
  // signin related works
  useEffect(() => {
    if (token) {
      navigate(from, { replace: true });
    }
  }, [token, navigate, from]);

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

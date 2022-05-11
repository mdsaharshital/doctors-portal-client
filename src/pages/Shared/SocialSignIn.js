import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";

const SocialSignIn = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  if (user) {
    console.log(user);
  }
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <>
      <div className="divider">OR</div>
      <button onClick={() => signInWithGoogle()} className="btn btn-outline">
        Sign in With Google
      </button>
      {error && <p>{error?.message}</p>}
    </>
  );
};

export default SocialSignIn;

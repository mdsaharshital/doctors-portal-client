import React from "react";
import chair from "../../../src/assets/images/chair.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const Banner = () => {
  return (
    <div className="hero min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-sm md:max-w-lg rounded-lg shadow-2xl"
          alt="chairimage"
        />
        <div>
          <h1 className="text-5xl font-bold my-5">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <PrimaryBtn>Get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;

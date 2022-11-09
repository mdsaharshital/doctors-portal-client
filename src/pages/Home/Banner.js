import React from "react";
import heroImg from "../../../src/assets/images/hero-img-2.jpg";
import bg from "../../../src/assets/images/bg.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const Banner = () => {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="container mx-auto hero min-h-[70vh]"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={heroImg}
          className="max-w-80 md:max-w-2xl rounded-lg shadow-xl mx-auto block"
          alt="chairimage"
        />
        <div>
          <h1 className="text-5xl font-bold my-5">
            Your New Smile Starts Here
          </h1>
          <p className="py-6">
            Dentisty is Great. We give you the most beautiful look in the world.
          </p>
          <PrimaryBtn>Get started</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Banner;

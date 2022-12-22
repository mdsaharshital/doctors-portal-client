import React from "react";
import banner from "../../assets/images/new/banner_img.png";
import bannerBG from "../../assets/images/new/banner_bg.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const Banner = () => {
  return (
    <div style={{ background: `url(${bannerBG})` }}>
      <div className="container mx-auto hero min-h-[80vh]">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={banner}
            className="max-w-80 md:max-w-2xl rounded-lg mx-auto block"
            alt="chairimage"
          />
          <div>
            <small className="font-bold">We Are Here For Your Care</small>
            <h1 className="text-5xl font-bold my-5">
              Your New Smile Starts Here
            </h1>
            <p className="py-6">
              Dentisty is Great. We give you the most beautiful look in the
              world.
            </p>
            <PrimaryBtn>Get started</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

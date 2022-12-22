import React from "react";
import baby from "../../assets/images/treatment.png";
import PrimaryBtn from "../../components/PrimaryBtn";
import bannerBG from "../../assets/images/new/about_bg.png";

const Execptional = () => {
  return (
    <div
      className=""
      style={{
        background: `url(${bannerBG})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container mx-auto hero min-h-screen md:px-24">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={baby}
            className="max-w-80 md:max-w-sm rounded-lg shadow-2xl mx-auto block"
            alt="expectional"
          />
          <div className="md:pl-16">
            <h1 className="text-5xl font-bold">
              Exceptional Dental Care, on Your Terms
            </h1>
            <p className="py-6">
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsumis that it has a more-or-less normal
              distribution of letters,as opposed to using 'Content here, content
              here', making it look like readable English. Many desktop
              publishing packages and web page.
            </p>
            <PrimaryBtn>Book Now</PrimaryBtn>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Execptional;

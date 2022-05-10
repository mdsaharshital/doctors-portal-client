import React from "react";
import baby from "../../assets/images/treatment.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const Execptional = () => {
  return (
    <div className="px-12 hero min-h-screen md:px-24">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={baby}
          className="max-w-sm rounded-lg shadow-2xl"
          alt="expectional"
        />
        <div className="">
          <h1 className="text-5xl font-bold">
            Exceptional Dental Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page.
          </p>
          <PrimaryBtn>Book Now</PrimaryBtn>
        </div>
      </div>
    </div>
  );
};

export default Execptional;

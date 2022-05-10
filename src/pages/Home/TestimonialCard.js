import React from "react";

const TestimonialCard = ({ review }) => {
  const { desc, name, img, location } = review;
  return (
    <div className="card w-80 bg-base-100 shadow-xl py-5 mx-auto">
      <div className="card-body">
        <p>{desc}</p>
      </div>
      <div className="flex items-center ">
        <div className="avatar px-10 ">
          <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 ">
            <img src={img} alt="person" />
          </div>
        </div>
        <div className="">
          <h1 className="font-bold ">{name}</h1>
          <h1 className="font-bold text-gray-500">{location}</h1>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;

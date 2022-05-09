import React from "react";

const OurServicesCart = ({ info }) => {
  const { img, title, desc } = info;
  return (
    <div className="card w-80 bg-base-100 shadow-xl mx-auto">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default OurServicesCart;

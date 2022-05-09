import React from "react";

const InfoCard = ({ info }) => {
  const { img, desc, title, bgColor } = info;
  return (
    <div
      className={`card lg:card-side w-80 ${bgColor} shadow-xl text-white mx-auto`}
    >
      <figure className="px-3 pt-4">
        <img src={img} alt="Album" className="w-15" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default InfoCard;

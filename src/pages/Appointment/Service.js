import React from "react";

const Service = ({ service }) => {
  const { name, slots } = service;
  return (
    <div className="card lg:max-w-80 shadow-xl">
      <div className="card-body text-center">
        <h2 className="card-title justify-center text-secondary">{name}</h2>
        <p>
          {slots.length ? (
            <span>{slots[0]}</span>
          ) : (
            <span className="text-red-500">Try another day</span>
          )}
        </p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions justify-center">
          <button className="btn btn-secondary text-white uppercase my-3">
            Book appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default Service;

import React from "react";

const Service = ({ service, setTreatment }) => {
  const { name, slots, price } = service;
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
        <p>
          <small>Price: ${price}</small>
        </p>
        <div className="card-actions justify-center">
          <label
            onClick={() => setTreatment(service)}
            disabled={!slots.length}
            htmlFor="booking-modal"
            className="btn bg-gradient-to-r from-secondary to-primary border-0 text-white uppercase my-3"
          >
            Book appointment
          </label>
        </div>
      </div>
    </div>
  );
};

export default Service;

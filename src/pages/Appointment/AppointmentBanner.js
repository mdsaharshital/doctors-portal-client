import React from "react";
import chair from "../../../src/assets/images/chair.png";
import bg from "../../../src/assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="container mx-auto hero min-h-screen"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={chair}
          className="max-w-80 md:max-w-lg rounded-lg shadow-2xl mx-auto block md:ml-12"
          alt="chairimage"
        />
        <div className="mt-10">
          <DayPicker
            styles={{
              caption: { color: "#19D3AE" },
            }}
            mode="single"
            selected={date}
            onSelect={setDate}
          />
          ;
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

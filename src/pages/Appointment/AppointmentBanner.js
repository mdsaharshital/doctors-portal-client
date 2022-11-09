import React from "react";
import newBg from "../../../src/assets/images/appointment-cover.jpg";
import bg from "../../../src/assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

const AppointmentBanner = ({ date, setDate }) => {
  return (
    <div
      style={{ background: `url(${bg})` }}
      className="container mx-auto hero min-h-[60vh]"
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src={newBg}
          className="max-w-80 md:max-w-2xl rounded-md shadow-2xl mx-auto block md:ml-12"
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
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

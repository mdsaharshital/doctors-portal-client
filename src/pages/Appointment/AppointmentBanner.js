import React, { useState } from "react";
import chair from "../../../src/assets/images/chair.png";
import bg from "../../../src/assets/images/bg.png";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";

const AppointmentBanner = () => {
  const [selected, setSelected] = useState(new Date());
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
        <div>
          <DayPicker mode="single" selected={selected} onSelect={setSelected} />
          ;<p>You picked {format(selected, "PP")}.</p>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBanner;

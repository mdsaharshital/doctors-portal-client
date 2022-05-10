import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [services, setServices] = useState([]);
  const [treatment, setTreatment] = useState(null);
  useEffect(() => {
    fetch("services.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div className="my-20">
      <h4 className="text-center text-secondary text-xl font-bold">
        Available Appointments on {format(date, "PP")}.
      </h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {services.map((service) => (
          <Service
            key={service._id}
            setTreatment={setTreatment}
            service={service}
          />
        ))}
      </div>

      {treatment && (
        <BookingModal
          date={format(date, "PP")}
          treatment={treatment}
          setTreatment={setTreatment}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

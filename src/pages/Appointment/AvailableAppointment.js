import { format } from "date-fns";
import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";
// http://localhost:5000-/
//

const AvailableAppointment = ({ date }) => {
  const formatedDate = format(date, "PP");
  const [treatment, setTreatment] = useState(null);
  const {
    data: services,
    isLoading,
    refetch,
  } = useQuery(["available", formatedDate], () =>
    fetch(
      `https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/available?date=${formatedDate}`
    ).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="my-20">
      <h4 className="text-center text-secondary text-xl font-bold">
        Available Appointments on {format(date, "PP")}.
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-5">
        {services.data?.map((service) => (
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
          refetch={refetch}
        ></BookingModal>
      )}
    </div>
  );
};

export default AvailableAppointment;

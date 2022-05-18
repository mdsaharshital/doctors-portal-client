import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";

const Payment = () => {
  const { id } = useParams();
  const url = `http://localhost:5000/payment/${id}`;
  const { data: appointment, isLoading } = useQuery(["booking", id], () =>
    fetch(url, {
      method: "GET",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => res.json())
  );
  if (isLoading) {
    return <Loading />;
  }
  const { treatmentName, date, slot, price, patientName } = appointment;
  return (
    <div>
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div class="card w-80 bg-base-100 shadow-md">
          <div class="card-body">
            <h2 class="text-secondary font-bold">Hello, {patientName}</h2>
            <h2 class="text-xl">Pay for {date}</h2>
            <p>
              Your appointment on : {date} at {slot}
            </p>
            <p>
              <small>Please, Pay ${price}</small>
            </p>
          </div>
        </div>
        <div className="mt-10">
          <h2>Hello {treatmentName}</h2>
        </div>
      </div>
    </div>
  );
};

export default Payment;

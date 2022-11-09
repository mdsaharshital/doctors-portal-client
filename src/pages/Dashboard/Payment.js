import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(`${process.env.REACT_APP_PAYMENT_KEY}`);

const Payment = () => {
  const { id } = useParams();
  const url = `https://doctors-portal-server-bdatfzui1-mdsaharshital.vercel.app/payment/${id}`;
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
        <div className="max-w-80 md:max-w-lg rounded-lg shadow-xl mx-auto block">
          <div className="card-body">
            <h2 className="text-secondary font-bold">Hello, {patientName}</h2>
            <h2 className="text-xl">Pay before {date}</h2>
            <p>
              <small>
                {" "}
                Your appointment on : {date} at {slot} for{" "}
                <span className="text-secondary font-bold">
                  {treatmentName}
                </span>
              </small>
            </p>
            <p>
              <small>
                Amount:{" "}
                <span className="text-secondary font-bold text-xl">
                  {" "}
                  ${price}
                </span>
              </small>
            </p>
          </div>
        </div>
        <div className="md:w-1/2 w-full rounded-lg shadow-2xl mx-auto block p-5 mt-14">
          <Elements stripe={stripePromise}>
            <CheckoutForm appointment={appointment} />
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default Payment;

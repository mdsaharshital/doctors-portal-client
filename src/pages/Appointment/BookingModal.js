import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from "react-toastify";

const BookingModal = ({ treatment, date, setTreatment, refetch }) => {
  const { _id, name, slots, price } = treatment;
  const [user] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      treatmentId: _id,
      treatmentName: name,
      date,
      price,
      slot: e.target.slot.value,
      patientName: user.displayName,
      patientEmail: user.email,
      phone: e.target.number.value,
    };
    fetch("https://doctors-portal-server.up.railway.app/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.success) {
          toast.error(
            `You already have an appointment on ${data.doExist.date} at ${data.doExist.slot}`
          );
        } else {
          toast.success(data.message);
        }
        refetch();
        setTreatment(null);
      });
    console.log(booking);
  };
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg">
            Booking for : <span className="text-secondary"> {name}</span>
          </h3>
          <form
            onSubmit={handleSubmit}
            className="mt-10 grid grid-cols-1 justify-items-center gap-3"
          >
            <input
              type="text"
              value={date}
              disabled
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot) => (
                <option key={slot} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              value={user?.displayName}
              disabled
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              value={user?.email}
              disabled
              placeholder="Email Address"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="number"
              name="number"
              placeholder="Phone number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              className="btn btn-secondary text-white w-full max-w-xs"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;

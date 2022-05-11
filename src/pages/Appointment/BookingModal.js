import React from "react";

const BookingModal = ({ treatment, date, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const handleSubmit = (e) => {
    e.preventDefault();
    const myBokkings = {
      _id,
      treatmentName: name,
      slot: e.target.slot.value,
      name: e.target.name.value,
      email: e.target.email.value,
      number: e.target.number.value,
    };
    // }
    // const slot = e.target.slot.value;
    // const name = e.target.name.value;
    // const email = e.target.email.value;
    // const number = e.target.number.value;
    console.log(myBokkings);
    setTreatment(null);
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
              placeholder="Your name"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
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

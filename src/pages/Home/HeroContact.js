import React from "react";
import contact from "../../assets/images/appointment.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const HeroContact = () => {
  return (
    <div
      className="my-16 p-10 rounded"
      style={{
        background: `url(${contact})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <h1 className="pt-4  text-center font-bold text-primary uppercase">
        Conact us
      </h1>
      <h1 className="mb-6 text-white text-center text-4xl font-bold">
        Stay connected with us
      </h1>
      <form className="block ">
        <input
          type="email"
          placeholder="Type email here"
          className="input block my-3 mx-auto w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Subject"
          className="input block my-3 mx-auto w-full max-w-xs"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered input-lg w-full max-w-xs block mx-auto mb-5"
        />
        <input
          type="submit"
          value="Submit"
          className="btn bg-gradient-to-r from-secondary to-primary text-white border-none block mx-auto"
        />
      </form>
    </div>
  );
};

export default HeroContact;

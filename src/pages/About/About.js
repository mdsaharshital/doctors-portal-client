import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl my-3 font-bold">Doctors portal</h1>
      <p className="my-2">
        This is a website to book an appointment and see through doctors and
        give review of services. <br />
      </p>
      <p>
        <span className="font-bold">
          {" "}
          This website got tons of features like:
        </span>
        <br />
        - login and account creation <br />- personalized dashboard <br />- see
        my appointments,dates and pay for it <br />- appoint a slot on available
        date
        <br />- give review of service after appointment from a admin side:{" "}
        <br />- can monitor paitents activity <br />- can make one admin <br />-
        add and manage doctors(delete one) <br />
      </p>
      <p className="my-2">
        <span className="font-bold">Upcoming features:</span> <br />-
        personalized doctors dashboard
        <br />- their patient count and revenew estimation <br />- profile
        review <br />- personal profile of doctors and patient <br />-
        prescription for an appointment to particular patient(download it){" "}
        <br />
      </p>
      <p className="my-2">
        <span className="font-bold">Technology used:</span> <br />- React.js
        <br />- react router <br />- tailwind css <br />- daisyUI <br />-
        node.js(express.js) <br />- mongoDB <br /> Stay tune ! <br />
      </p>
    </div>
  );
};

export default About;

import React from "react";
import doctor from "../../assets/images/doctor.png";
import appointment from "../../assets/images/appointment.png";
import PrimaryBtn from "../../components/PrimaryBtn";

const HomeAppointment = () => {
  return (
    <section
      style={{ background: `url(${appointment})` }}
      className="flex justify-center items-center my-12 "
    >
      <div className="flex-1 mt-[-120px] hidden lg:block">
        <img src={doctor} alt="" />
      </div>
      <div className="flex-1 p-6">
        <h1 className="my-2 font-bold text-primary uppercase">Appointment</h1>
        <h1 className="my-4 text-4xl font-bold text-white">
          Make an appointment Today
        </h1>
        <p className="my-2 text-white">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsumis that it has a more-or-less normal distribution of
          letters,as opposed to using 'Content here, content here', making it
          look like readable English. Many desktop publishing packages and web
          page
        </p>
        <PrimaryBtn>Make Appointment</PrimaryBtn>
      </div>
    </section>
  );
};

export default HomeAppointment;

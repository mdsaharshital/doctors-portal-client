import React from "react";
import Banner from "./Banner";
import Execptional from "./Execptional";
import HeroContact from "./HeroContact";
import HomeAppointment from "./HomeAppointment";
import Info from "./Info";
import OurServices from "./OurServices";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div className="">
      <Banner />
      <Info />
      <OurServices />
      <Execptional />
      <HomeAppointment />
      <Testimonial />
      <HeroContact />
    </div>
  );
};

export default Home;

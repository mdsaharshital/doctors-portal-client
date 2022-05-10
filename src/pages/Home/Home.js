import React from "react";
import Banner from "./Banner";
import Execptional from "./Execptional";
import HomeAppointment from "./HomeAppointment";
import Info from "./Info";
import OurServices from "./OurServices";

const Home = () => {
  return (
    <div className="px-12">
      <Banner />
      <Info />
      <OurServices />
      <Execptional />
      <HomeAppointment />
    </div>
  );
};

export default Home;

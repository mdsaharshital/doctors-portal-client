import React from "react";
import OurServicesCart from "./OurServicesCart";
import fluoride from "../../assets/images/fluoride.png";
import cavity from "../../assets/images/cavity.png";
import whitening from "../../assets/images/whitening.png";

const OurServices = () => {
  const infos = [
    {
      id: 1,
      img: fluoride,
      title: "Fluoride Treatment",
      desc: "Lorem Ipsum is simply dummy text of the price",
    },
    {
      id: 2,
      img: cavity,
      title: "Cavity Filling",
      desc: "Lorem Ipsum is simply dummy text of the price",
    },
    {
      id: 3,
      img: whitening,
      title: "Teeth Whitening",
      desc: "Lorem Ipsum is simply dummy text of the price",
    },
  ];
  return (
    <div className="container mx-auto my-10">
      <div className="text-center my-10">
        <h1 className="text-primary  font-bold  uppercase">Our services</h1>
        <h1 className="text-2xl ">Services we provide</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {infos.map((info) => (
          <OurServicesCart key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default OurServices;

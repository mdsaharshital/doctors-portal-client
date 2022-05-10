import React from "react";
import InfoCard from "./InfoCard";
import clock from "../../assets/icons/clock.svg";
import marker from "../../assets/icons/marker.svg";
import phone from "../../assets/icons/phone.svg";

const Info = () => {
  const infos = [
    {
      id: 1,
      img: clock,
      title: "Opening Hour",
      desc: "Lorem Ipsum is simply dummy text of the price",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
    {
      id: 2,
      img: marker,
      title: "Visit our location",
      desc: "Brooklyn, NY 10036, United States",
      bgColor: "bg-accent",
    },
    {
      id: 3,
      img: phone,
      title: "Contact Us now",
      desc: "+8801826635551",
      bgColor: "bg-gradient-to-r from-secondary to-primary",
    },
  ];
  return (
    <div className="my-20 w-100 container mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {infos.map((info) => (
          <InfoCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Info;

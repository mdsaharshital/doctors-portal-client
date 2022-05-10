import React from "react";
import person1 from "../../assets/images/people1.png";
import person2 from "../../assets/images/people2.png";
import person3 from "../../assets/images/people3.png";
import quote from "../../assets/icons/quote.svg";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  const infos = [
    {
      id: 1,
      img: person1,
      name: "Winson Herry",
      desc: "Lorem Ipsum is simply dummy text of the price.Lorem Ipsum is simply dummy text of the price",
      location: "California",
    },
    {
      id: 2,
      img: person2,
      name: "Emma Watson",
      desc: "Lorem Ipsum is simply dummy text of the price.Lorem Ipsum is simply dummy text of the price",
      location: "California",
    },
    {
      id: 3,
      img: person3,
      name: "Will Smith",
      desc: "Lorem Ipsum is simply dummy text of the price.Lorem Ipsum is simply dummy text of the price",
      location: "California",
    },
  ];
  return (
    <div
      className="my-20"
      style={{
        background: `url(${quote})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right top",
        backgroundSize: "192px",
      }}
    >
      <h1 className="my-2 font-bold text-primary uppercase">Testimonial</h1>
      <h1 className="my-4 text-4xl font-bold">What our Patients says</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-32">
        {infos.map((info) => (
          <TestimonialCard key={info.id} info={info} />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;

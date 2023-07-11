import React from "react";

interface props {
  name: string;
  image: string;
  speciality: string;
  description: string;
}
const DoctorCard = (props: props) => {
  return (
    <a
      className="group transition-all duration-300 shadow-normal group-hover:shadow-2xl hover:scale-[.98] rounded-2xl overflow-hidden"
      href="#"
    >
      <div className="overflow-clip">
        <img
          className="trainsition-all duration-300 group-hover:scale-110"
          src={props.image}
        />
      </div>
      <div className="flex flex-col gap-2 bg-white p-8 select-none">
        <p className="text-2xl font-bold text-dark group-hover:text-accent">
          {props.name}
        </p>
        <p className="text-primary font-xl uppercase font-medium">
          {props.speciality}
        </p>
        <p className="p-muted font-medium text-lg">{props.description}</p>
      </div>
    </a>
  );
};

export default DoctorCard;

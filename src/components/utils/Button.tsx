import React from "react";
interface props {
  type?: "primary" | "clear";
  value: string;
  size?: "narmal" | "lg";
}
const Button = (props: props) => {
  return (
    <button
      className={`bg-accent transition-transform duration-500 text-base font-bold shadow-normal rounded-full 
      leading-none px-8 py-4 hover:scale-105 ${
        props.type === "primary" ? "bg-accent text-white" : "bg-white text-dark"
      } ${props.size === "lg" ? "px-10 py-6 " : ""}`}
    >
      {props.value}
    </button>
  );
};

export default Button;

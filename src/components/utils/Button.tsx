import { icons } from "antd/es/image/PreviewGroup";
import React, { ReactNode } from "react";
interface props {
  type?: "primary" | "clear";
  value: string | ReactNode;
  size?: "narmal" | "lg";
  icon?: ReactNode | undefined;
}
const Button = (props: props) => {
  return (
    <button
      className={`bg-accent transition-transform duration-500 text-base font-bold shadow-normal rounded-full 
      leading-none px-8 py-4 hover:scale-105 ${
        props.type === "primary" ? "bg-accent text-white" : "bg-white text-dark"
      } ${props.size === "lg" ? "px-10 py-6" : ""}`}
    >
      {icons != undefined ? (
        <div className="inline-flex items-center gap-2">
          <div className="text-3xl">{props.icon}</div>
          <div>{props.value}</div>
        </div>
      ) : (
        props.value
      )}
    </button>
  );
};

export default Button;

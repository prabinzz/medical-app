import React, { PropsWithChildren } from "react";
import Button from "./Button";
interface props extends PropsWithChildren {
  img: string;
  className?: string;
  overflow?: boolean;
}
const FlexDisplay = (props: props) => {
  return (
    <div className={`w-full ${props.className}`}>
      <div className="container grid gap-12 grid-cols-2 mx-auto py-36 items-center">
        <div
          className={`relative ${
            props.overflow ? "w-[120%] -translate-x-[20%]" : ""
          }`}
        >
          <img src={props.img} />
        </div>
        <div className="flex gap-4 flex-col ">
          {/* Left Section */}
          {props.children}
        </div>
      </div>
    </div>
  );
};

export default FlexDisplay;

import React, { PropsWithChildren } from "react";
import Button from "./Button";
interface props extends PropsWithChildren {
  img: string;
  className?: string;
  overflow?: boolean;
}
const FlexDisplay = (props: props) => {
  return (
    <div className={`w-full relative ${props.className}`}>
      <img
        className="absolute right-40 top-20"
        src="https://assets.website-files.com/60271d0221637de15a54a030/602c43338c6d63dcea5c2d4c_shape-about-story-hospital-template.svg"
      />
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

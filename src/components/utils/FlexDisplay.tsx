import React, { PropsWithChildren } from "react";
import Button from "./Button";
interface props extends PropsWithChildren {}
const FlexDisplay = (props: props) => {
  return (
    <div className="w-full">
      <div className="container grid gap-12 grid-cols-2 mx-auto py-36 items-center">
        <div className="flex-1">
          <img src="img/display_art3.svg" />
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

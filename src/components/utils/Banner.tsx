import React from "react";
import Button from "./Button";

const Banner: React.FC = () => {
  return (
    <div className="relative container mx-auto overflow-clip">
      <img
        className="absolute  top-0 right-0 translate-x-32 -translate-y-12"
        src="img/bg_art2.svg"
      />
      <img
        className="absolute top-0 left-0 scale-150 -translate-x-8 translate-y-12"
        src="img/bg_art2.svg"
      />
      <img
        className="absolute top-0 right-[50%] translate-x-1/2 -translate-y-1/2"
        src="img/bg_art2.svg"
      />
      <div
        className="font-black z-40 text-white bg-primary flex gap-8 
      rounded-[4rem] flex-col items-center p-12 py-16"
      >
        <h1 className="text-4xl leading-normal text-center w-[50%]">
          Download our app and get a free medical appointment
        </h1>
        <div className="flex gap-8">
          <Button type="primary" size="lg" value="Download the App" />
          <Button size="lg" value="View Pricing" />
        </div>
      </div>
    </div>
  );
};

export default Banner;

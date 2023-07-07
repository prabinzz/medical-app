import React from "react";
import NavBar from "../NavBar";
import Button from "../utils/Button";

const HeroSection = () => {
  return (
    <div className="w-full overflow-y-clip">
      <div className="container min-h-[900px] relative mx-auto">
        {/* background */}

        <div className="absolute bottom-0 -z-10 left-[50%] bg-primary rounded-bl-[14rem] h-screen w-full"></div>
        {/* Navigation Bar */}
        <NavBar bgType="dark" />
        {/* Two section */}
        <div className="grid grid-cols-2 items-center min-h-full">
          <div className="flex gap-3 flex-col mr-12">
            {/* Left Section */}
            <img
              className="absolute -z-10 bottom-0 left-[-200px]"
              src="img/bg_art1.svg"
            />
            <div className="text-primary text-lg font-medium">HOSPITAL APP</div>
            <h1 className="text-dark font-bold text-6xl leading-[1.1] mb-4">
              An hospital that lives in your pocket
            </h1>
            <p className="text-lg leading-normal text-muted mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna,
              tortor pulvinar dolor rhoncus sit. Tristique sit eros, luctus quam
              dignissim. Enim elementum, feugiat id vitae in.
            </p>
            <div className="flex gap-8">
              {/* Buttons */}
              <Button size="lg" type="primary" value="Download the App" />
              <Button size="lg" value="Learn More" />
            </div>
          </div>
          <div className="mt-14">
            <img className="scale-105" src="img/display_art1.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

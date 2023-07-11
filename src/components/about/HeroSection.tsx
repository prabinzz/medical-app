import React from "react";
import Button from "../utils/Button";

const HeroSection = () => {
  return (
    <div className="relative">
      <img
        className="absolute scale-[.6] -z-10 top-[100px] left-[-100px]"
        src="img/bg_art1.svg"
      />
      <img
        className="absolute scale-[.7] -z-10 bottom-0 right-[-200px]"
        src="img/bg_art1.svg"
      />
      <div className="absolute w-full h-[400px] rounded-tr-[8rem] bottom-0 right-[20%] -z-10 bg-primary" />
      <div className="container mx-auto">
        <div className="flex gap-2 items-center text-center max-w-4xl mx-auto mt-20 flex-col">
          <div className="action-header">HOSPITAL APP</div>
          <h1 className="text-dark font-bold text-6xl leading-[1.1] mb-4">
            Our mission is to make healthcare more accessible
          </h1>
          <p className="p-muted mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit urna,
            tortor pulvinar dolor rhoncus sit. Tristique sit eros, luctus quam
            dignissim. Enim elementum, feugiat id vitae in.
          </p>
          <div>
            <Button size="lg" type="primary" value="Our Story" />
            <Button className="ml-4" size="lg" value="Join our Team" />
          </div>
          <div className="mt-12">
            <img
              src="https://assets.website-files.com/60271d0221637de15a54a030/602c1e7c32bd8f79ae6c899e_image-about-hero-hospital-template.svg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

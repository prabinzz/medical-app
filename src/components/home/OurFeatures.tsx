import React from "react";
import Button from "../utils/Button";

const OurFeatures = () => {
  return (
    <div className="relative overflow-clip">
      {/* Babkground Bar */}
      <div className=" absolute bottom-0 left-0 -z-10 w-screen h-[60vh] bg-gray-100"></div>
      {/* Background floating arts */}
      <img
        className="absolute top-24 -left-52 scale-75 rotate-12"
        src="img/bg_art1.svg"
      />
      <img
        className="absolute bottom-0 -right-52 scale-[.60]"
        src="img/bg_art1.svg"
      />

      <div className="container mx-auto py-32 mt-40 pb-52 flex flex-col">
        <p className="action-header mb-4">OUR FEATURES</p>
        <div className="flex justify-between">
          <div className="gap-8 max-w-[53%]">
            <h2 className="header-2 mr-56 mb-8">
              Great reasons to download MedicApp X
            </h2>
            <p className="p-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tincidunt sed vitae lom elementum
              sapien. In amet sapien.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start">
            {/* Features */}
            <div className="flex items-center gap-4">
              <img className="inline-block" src="img/check.svg" />
              <p className="inline-block font-medium text-xl text-dark">
                24/7 Medical Consultation
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img className="inline-block" src="img/check.svg" />
              <p className="inline-block font-medium text-xl text-dark">
                Ongoing Healthcare Help & Support
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img className="inline-block" src="img/check.svg" />
              <p className="inline-block font-medium text-xl text-dark">
                Doctors Experts in the Industry
              </p>
            </div>
          </div>
        </div>
        {/* Image with buttons */}
        <div className="mx-auto mt-24">
          <img src="img/display_art4.svg" />
          <div className="flex justify-center gap-8 mt-12">
            <Button type="primary" size="lg" value="Download the App" />
            <Button size="lg" value="Learn More" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFeatures;

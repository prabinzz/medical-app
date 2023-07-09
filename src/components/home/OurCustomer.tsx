import React from "react";
import Button from "../utils/Button";
import TestemonyCard from "./TestemonyCard";
const OurCustomer = () => {
  return (
    <div className="w-ful relative">
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 -z-10">
        <img src="img/bg_art1.svg" />
      </div>
      <div className="container mx-auto py-36">
        <div className="flex gap-16">
          {/* Left section */}
          <div className="flex flex-col gap-16">
            <div className="mb-8">
              <p className="action-header mb-4">OUR CUSTOMERS</p>
              <h2 className="header-2 mb-8">
                Don't take our word for it. See what our customers say.
              </h2>
              <Button type="primary" size="lg" value="Download the App" />
            </div>
            <TestemonyCard
              profile="img/profile3.svg"
              title="The doctors are great"
              name="SOPHIE MOORE"
              year="2018"
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tinciduntil sed vitae elementum
              sapien. In amet ”
            </TestemonyCard>
          </div>
          <div className="flex flex-col gap-16">
            {/* Right section */}
            <TestemonyCard
              profile="img/profile1.svg"
              title="The best app for medical appointments"
              name="ANDREW MILLER"
              year="2017"
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tinciduntil sed vitae elementum
              sapien. In amet ”
            </TestemonyCard>
            <TestemonyCard
              profile="img/profile2.svg"
              title="The next-gen medical app"
              name="JOHN CARTER"
              year="2020"
            >
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Posuere
              dignissim aliquam interdum id tinciduntil sed vitae elementum
              sapien. In amet ”
            </TestemonyCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurCustomer;

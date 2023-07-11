import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OurDoctors from "@/components/about/OurDoctors";
import FlexDisplay from "@/components/utils/FlexDisplay";
import FlexDisplayReversed from "@/components/utils/FlexDispalyReversed";
import OurValues from "@/components/about/OurValues";
import HeroSection from "@/components/about/HeroSection";

const about: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto font-primary">
        <NavBar bgType="light" />
      </div>
      <HeroSection />
      <FlexDisplayReversed
        overflow={true}
        img="https://assets.website-files.com/60271d0221637de15a54a030/602c2f92604cfa05235a67e8_image-story-hospital-template.svg"
      >
        <div className="action-header">OUR STORY</div>
        <h1 className="header-2">
          MedicApp started in 2016 with one big mission behind.
        </h1>
        <p className="p-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quam
          risus pretium, adipiscing volutpat. Fermentum lobortis vestibulum quam
          posuere lectus convallis sit tempor habitant. Turpis nec ut
          consectetur nisi, nisl a ut.
        </p>
        <p className="p-muted mt-4">
          Tempor eu a commodo, sagittis sem orci. Nunc duis vestibulum, at elit
          sed quis. Orci lectus sollicitudin non placerat ac. Lectus commodo
          volutpat, enim, turpis. Ut elementum commodo ipsum commodo quis.
          Tempus.
        </p>
      </FlexDisplayReversed>
      <FlexDisplay
        className="bg-gray-100"
        overflow={true}
        img="https://assets.website-files.com/60271d0221637de15a54a030/602c315d2bc4a7ebb47d5af5_image-mission-hospital-template.svg"
      >
        <div className="action-header">OUR MISSION</div>
        <h1 className="header-2">
          We are in the mission of making healthcare more accessible
        </h1>
        <p className="p-muted">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium quam
          risus pretium, adipiscing volutpat. Fermentum lobortis vestibulum quam
          posuere lectus convallis sit tempor habitant. Turpis nec ut
          consectetur nisi, nisl a ut.
        </p>
        <p className="p-muted mt-4">
          Tempor eu a commodo, sagittis sem orci. Nunc duis vestibulum, at elit
          sed quis. Orci lectus sollicitudin non placerat ac. Lectus commodo
          volutpat, enim, turpis. Ut elementum commodo ipsum commodo quis.
          Tempus.
        </p>
      </FlexDisplay>
      <OurValues />
      <OurDoctors />
      <Footer />
    </div>
  );
};

export default about;

import React from "react";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";
import OurDoctors from "@/components/about/OurDoctors";

const about: React.FC = () => {
  return (
    <div>
      <div className="container mx-auto font-primary">
        <NavBar bgType="light" />
      </div>
      <OurDoctors />
      <Footer />
    </div>
  );
};

export default about;

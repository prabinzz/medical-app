import React from "react";
import Navbar from "@/components/NavBar";
import { Button } from "antd";
import CustomServiceDownload from "./CustomServiceDownload";
import ServiceSection from "./ServiceSection";

const CustomService = () => {
  return (
    <>
      <div className="z-10 ">
        <Navbar bgType="light" />
      </div>
      <div>
        <CustomServiceDownload />
      </div>
      <div className="mt-12">
        <ServiceSection />
      </div>
    </>
  );
};

export default CustomService;

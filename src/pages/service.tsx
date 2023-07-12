import Footer from "@/components/Footer";
import CustomService from "@/components/ServiceComponent/CustomService";
import React from "react";

const service = () => {
  return (
    <>
      <div className="flex container mx-auto flex-col min-h-screen">
        <div className="flex-1 pb-64">
          <div>
            <CustomService />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default service;

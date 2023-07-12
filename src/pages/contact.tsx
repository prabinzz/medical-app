import Contact from "@/components/ContactComponent/CustomContact";
import CustomFAQ from "@/components/ContactComponent/CustomFAQ";
import DownloadApp from "@/components/utils/DownloadApp";
import Footer from "@/components/Footer";
import React from "react";

const ContactPage = () => {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1 pb-0">
          <div className="">
            <Contact />
          </div>
          <div className="grid bg-gray-100 place-items-center mt-[10rem] pt-[10rem] pb-56">
            <CustomFAQ />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ContactPage;

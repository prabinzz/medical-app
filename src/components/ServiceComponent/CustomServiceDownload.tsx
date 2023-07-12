import React from "react";
import { Button } from "antd";

const CustomServiceDownload = () => {
  return (
    <div className="mt-[8rem] ">
      <p className="text-2xl text-blue-400 font-bold">OUR SERVICES</p>
      <div className="flex justify-between items-center w-[100%]">
        <div>
          <h1 className="flex w-[50rem] text-[65px] text-blue-950 font-black ">
            Medical specialities available in MedicApp X
          </h1>
        </div>
        <div className="mt-10">
          <Button
            type="primary"
            danger
            className="mt-[5rem] ml-[3rem] h-[4rem] w-[13rem] border border-red-500 rounded-[10rem] text-[20px] font-bold hover:scale-110 transform transition-transform duration-300"
          >
            Download the App
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CustomServiceDownload;

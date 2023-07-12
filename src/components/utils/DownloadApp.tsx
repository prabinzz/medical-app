import React from "react";
import { Card, Button } from "antd";

const DownloadApp = () => {
  return (
    <div>
      <Card className="bg-blue-400 rounded-[2rem] w-[85rem]">
        <div className="flex py-[4rem] justify-between">
          <div className="text-[36px] w-[50rem] font-bold text-white px-6">
            Download our app and get a free medical appointment
          </div>
          <div className="flex space-x-4">
            <Button
              type="primary"
              danger
              className="h-[4rem] w-[13rem] border border-red-500 rounded-[10rem] text-[20px] font-bold hover:scale-110 transform transition-transform duration-300"
            >
              Download the App
            </Button>
            <Button
              type="default"
              className="bg-white h-[4rem] w-[10rem] border border-white rounded-[10rem] text-[20px] hover:scale-110 transform transition-transform duration-300"
            >
              View Pricing
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default DownloadApp;

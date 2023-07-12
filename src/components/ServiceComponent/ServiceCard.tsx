import React from "react";
import { Card } from "antd";

const ServiceCard = (props) => {
  const { title, image, paragraph, number } = props;
  return (
    <div>
      <Card className="w-full hover:scale-105 transition-transform rounded-2xl duration-300 shadow-normal">
        <img src={image} alt="image" />
        <div className="flex ">
          <p className="py-8 text-[30px] font-bold mr-auto text-blue-900">
            {title}
          </p>
          <p className="py-8 text-[30px] font-bold m-auto text-blue-500">
            {number}
          </p>
        </div>
        <p className="text-gray-500 text-[20px] h-[10rem]">{paragraph}</p>
      </Card>
    </div>
  );
};

export default ServiceCard;

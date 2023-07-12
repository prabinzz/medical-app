import React from "react";
import { Card } from "antd";

const TabCard = ({ title }) => {
  return (
    <Card
      className="m-8 hover:scale-105 transition-transform duration-300"
      bordered={false}
      style={{ width: 400, height: 400 }}
    >
      <h1 className="m-[40%] font-bold text-xl font-primary text-blue-900">{title}</h1>
    </Card>
  );
};

export default TabCard;

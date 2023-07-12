import React from "react";
import { PlusOutlined } from "@ant-design/icons";

const CustomFAQ = () => {
  const FaQ = [
    "Can I invite team members to my Hospital app account?",
    "What is the cost for an appointment?",
    "What experience do your doctors have?",
    "Do you offer discounts for students?",
    "What medical specialties do you have?",
    "Does the app have an Android version?",
  ];

  const leftFaQ = FaQ.slice(0, 3); // Get the first three questions
  const rightFaQ = FaQ.slice(3, 6); // Get the last three questions

  return (
    <>
      <div className="text-blue-400 font-bold text-2xl">FAQs</div>
      <div className="my-8 text-6xl font-extrabold m-4 text-blue-900">
        Frequently Asked Questions
      </div>
      <div className="flex py-4">
        <div className="px-4 m-4 w-[40rem]">
          {leftFaQ.map((question, index) => (
            <p
              key={index}
              className="flex py-8 text-[25px] font-extrabold m-4 text-blue-900"
            >
              <span className="text-red-500 text-3xl mr-4">
                {" "}
                <PlusOutlined />{" "}
              </span>{" "}
              {question}
            </p>
          ))}
        </div>
        <div className="px-5 m-4 w-[40rem]">
          {rightFaQ.map((question, index) => (
            <p
              key={index}
              className="flex py-8 text-[25px] font-extrabold m-4 text-blue-900"
            >
              <span className="text-red-500 text-3xl mr-4">
                {" "}
                <PlusOutlined />{" "}
              </span>{" "}
              {question}
            </p>
          ))}
        </div>
      </div>
    </>
  );
};

export default CustomFAQ;

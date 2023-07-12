import React from "react";
import { Input, Form } from "antd";


type CustomSelectionInputProps = {
  title: string;
  message: string;
  placeholder: string;
};

const CustomInputContact = (props: CustomSelectionInputProps) => {
  return (
    <>
      <div className="ml-[1rem] mt-[1rem] font-primary">
        <p className="font-extrabold m-4 text-[20px] text-blue-900">{props.title}</p>
        <Form.Item
          rules={[
            {
              required: true,
              message: props.message,
            },
          ]}
        >
          <Input
            placeholder={props.placeholder}
            className="w-[16rem] border border-gray-300 rounded-[5rem] h-[4rem] text-gray-500 text-[20px] font-medium hover:border-red-300 focus:border-red-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-400 focus:border-red-500"
            size="large"
          />
        </Form.Item>
      </div>
    </>
  );
};

export default CustomInputContact;

import "animate.css";
import CustomInputContact from "./CustomInputContact";
import Navbar from "@/components/NavBar";
import React, { useEffect } from "react";
import { Button, Form } from "antd";
import CustomContactInfo from "./CustomContactInfo";

const Contact = () => {
  return (
    <div className={`flex text-blue-950 `}>
      <div className="w-[50%] mt-[25px] ml-[10px]">
        <div className="absolute top-0 left-0 z-10 w-[calc(100vw_-_4rem)] mx-8 ">
          <Navbar />
        </div>
        <div>
          <h1 className="flex text-[65px] ml-[1.5rem] mt-[10rem] text-blue-950 font-black">
            Get in touch today!
          </h1>
        </div>
        <div className="text-gray-500 ml-[1.5rem] text-[20px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. ex ullam nemo
          sed ipsam delectus nam? This is the contact page.
        </div>
        <Form className="bg-white-200">
          <div className="flex ml-[1rem] mt-[8rem]">
            <CustomInputContact
              title="Name"
              placeholder="Full Name"
              message="Please enter your username"
            />
            <CustomInputContact
              title="Email"
              placeholder="email@example.com"
              message="Please enter your email"
            />
          </div>
          <div>
            <div className="flex ml-[1rem]">
              <CustomInputContact
                title="Phone Number"
                placeholder="(123)-840 3987"
                message="Please enter your username"
              />
              <CustomInputContact
                title="Subject"
                placeholder="Ex. Support"
                message="Please enter your email"
              />
            </div>
          </div>
          <div className="">
            <form className="ml-[2rem]">
              <p className="font-extrabold font-primary m-4 text-[20px] text-blue-900">
                Message Area
              </p>
              <textarea
                className="font-primary text-[20px] ml-2 border border-gray-300 w-[460px] h-[171px] rounded-[15px] hover:border-red-300 focus:border-red-400 focus:outline-none 
                        focus:ring-2 focus:ring-red-400 focus:border-red-500"
                placeholder="Do you have any message for us?"
              ></textarea>
            </form>
          </div>
          <div className="flex">
            <Button
              type="primary"
              danger
              className="h-[4rem] w-[16rem] border border-red-500 rounded-[10rem] text-[20px] font-bold mt-[4rem] ml-[2rem] hover:scale-110 transform transition-transform duration-300"
            >
              Submit message
            </Button>
          </div>
        </Form>
      </div>
      <div className="relative rounded-bl-[180px] bg-blue-500 ml-auto w-[46%] h-[50rem]">
        <img
          src="https://assets.website-files.com/60271d0221637de15a54a030/602ef1c3195bbd140cd83dba_image-contact-hospital-template.svg"
          alt="Left Side Image"
          className="w-full h-full mt-[8rem] ml-[2rem]"
        />
        <div className="">
          <CustomContactInfo />
        </div>
      </div>
    </div>
  );
};

export default Contact;

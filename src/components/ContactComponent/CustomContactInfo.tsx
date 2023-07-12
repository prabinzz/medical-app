import React from "react";

const CustomContactInfo = () => {
  return (
    <>
      <div className="mb-10">
        <div className="relative flex m-10">
          <img
            src="https://assets.website-files.com/60271d0221637de15a54a030/602ef61a834abb7fc70637ef_icon-1-contact-hospital-template.svg"
            alt=""
          />
          <div className="px-4 text-gray-500">
            <p style={{ fontSize: "30px" }}>
              601 4th St #103
              <br />
              San Francisco, California(CA), 94107
            </p>
          </div>
        </div>
        <div className="relative flex m-10">
          <img
            src="https://assets.website-files.com/60271d0221637de15a54a030/602ef61a4f880716ffe98093_icon-2-contact-hospital-template.svg"
            alt=""
          />
          <div className="px-4 text-gray-500">
            <p style={{ fontSize: "30px" }}>contact@hospital.com</p>
          </div>
        </div>
        <div className="relative flex m-10">
          <img
            src="https://assets.website-files.com/60271d0221637de15a54a030/602ef61bbdca9f27881cfb94_icon-3-contact-hospital-template.svg"
            alt=""
          />
          <div className="px-4 text-gray-500">
            <p style={{ fontSize: "30px" }}>(415) 800 - 7135</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default CustomContactInfo;

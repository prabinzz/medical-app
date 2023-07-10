import React from "react";

const Contact = () => {
  return (
    <div>
      <p className="text-xl font-bold text-dark mb-6">Contact</p>
      <div className="flex flex-col font-medium text-xl gap-4 text-muted">
        <div className="flex items-center">
          <img
            className="inline-block mr-2 h-8"
            src="https://assets.website-files.com/60271d0221637de15a54a030/602b1092eb7c570f8e332230_icon-1-footer-contact-hospital-template.svg"
            alt=""
          />
          <span>level9tech@gmail.com</span>
        </div>
        <div className="flex items-center">
          <img
            className="inline-block mr-2 h-8"
            src="https://assets.website-files.com/60271d0221637de15a54a030/602b109327b0738fabbf95b8_icon-2-footer-contact-hospital-template.svg"
            alt=""
          />
          <span>9815000431</span>
        </div>
        <div className="flex justify-start items-start">
          <img
            className="inline-block mr-2 h-8"
            src="https://assets.website-files.com/60271d0221637de15a54a030/602b1092a1aa03a0d0eccc74_icon-3-footer-contact-hospital-template.svg"
            alt=""
          />
          <span>Broadcast Drive Charlotte NC 28202, USA</span>
        </div>
      </div>
    </div>
  );
};

export default Contact;

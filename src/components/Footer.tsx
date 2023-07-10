import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
  FaApple,
  FaGooglePlay,
} from "react-icons/fa6";
import SocialMediaLink from "./utils/SocialMediaLink";
import Button from "./utils/Button";
import PageLinks from "./utils/PageLinks";
import Contact from "./utils/Contact";
import Banner from "./utils/Banner";

const Footer = () => {
  return (
    <div className="relative">
      <div className="w-full -translate-y-[40%]">
        <Banner direction="horizental" />
      </div>
      <div className="container mx-auto">
        {/* Main Footer section */}
        <div className="grid grid-cols-12 gap-8 mb-32">
          <div className="col-span-4 flex flex-col gap-4">
            <div>
              <img className="h-12" src="img/logo.svg" />
            </div>
            <p className="p-muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit risus
              egest.
            </p>
            <div className="flex gap-2 mt-4">
              {" "}
              {/* Buttons */}
              <Button icon={<FaApple />} type="primary" value="Apple Store" />
              <Button
                icon={<FaGooglePlay />}
                type="primary"
                value="Google Play"
              />
            </div>
          </div>

          {/* Links */}
          <div className="col-span-5">
            <PageLinks />
          </div>
          <div className="col-span-3">
            <Contact />
          </div>
        </div>
        {/* End Main footer section */}
        <hr /> {/* Horizental devider} */}
        <div className="flex justify-between my-8">
          <div className="p-muted text-xl">
            {/* Copyright Text */}
            Copyright © Level9 Tech X Designed by
            <a
              className="text-primary underline"
              href="mailto:prabinparajuli92@gmail.com"
            >
              {" "}
              Prabin{" "}
            </a>
            - Powered by Next.js
          </div>
          <div className="flex gap-4">
            {/* Socialmedia Logos */}
            <SocialMediaLink
              link="https://facebook.com"
              logo={<FaFacebookF />}
            />
            <SocialMediaLink link="https://twitter.com" logo={<FaTwitter />} />
            <SocialMediaLink
              link="https://instagram.com"
              logo={<FaInstagram />}
            />
            <SocialMediaLink
              link="https://linkedin.com"
              logo={<FaLinkedinIn />}
            />
            <SocialMediaLink link="https://youtube.com" logo={<FaYoutube />} />
            <SocialMediaLink
              link="https://telegram.com"
              logo={<FaTelegram />}
            />
            <SocialMediaLink
              link="https://whatsapp.com"
              logo={<FaWhatsapp />}
            />
          </div>
        </div>
        {/* End Copyright section*/}
      </div>
    </div>
  );
};

export default Footer;

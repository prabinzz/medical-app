import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa6";
import SocialMediaLink from "./utils/SocialMediaLink";

const Footer = () => {
  return (
    <div>
      <div className="container mx-auto">
        <hr /> {/* Horizental devider} */}
        <div className="flex justify-between my-8">
          <div className="p-muted text-xl">
            {/* Copyright Text */}
            Copyright © Level9 Tech X Designed by
            <a
              className="text-primary underline"
              href="mailto:prabinparajuli92@gmail.com"
            >
              Prabin
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

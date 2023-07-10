import React, { ReactNode } from "react";

interface props {
  logo: ReactNode;
  link: string;
}
const SocialMediaLink = (props: props) => {
  return (
    <a
      className="inline-block text-white bg-primary p-2 rounded-full hover:bg-accent transition-colors duration-300 text-lg"
      href={props.link}
    >
      {props.logo}
    </a>
  );
};

export default SocialMediaLink;

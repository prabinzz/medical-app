import Link from "next/link";
import React from "react";
import Button from "./utils/Button";

// props type
interface props {
  bgType?: "dark" | "light";
}

const NavBar = (props: props) => {
  return (
    <div
      className="flex transition-colors duration-300 justify-between py-2 lg:py-8 items-center 
    text-dark text-xl leading-none font-medium"
    >
      <div className="flex gap-8 grow">
        <img src="img/logo.svg" />
        <div className="flex items-center gap-8 py-8">
          <Link className="hover:text-accent" href="/">
            Home
          </Link>
          <Link className="hover:text-accent" href="/about">
            About
          </Link>
          <Link className="hover:text-accent" href="/">
            Pages
          </Link>
          <Link className="hover:text-accent" href="/">
            Services
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-8">
        <Link
          className={`hover:text-accent ${
            props.bgType == "light" ? "text-dark" : "text-white"
          }`}
          href="/"
        >
          Contact
        </Link>
        <Button value="Subscribe" type="primary" />
      </div>
    </div>
  );
};

export default NavBar;

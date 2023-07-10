import React from "react";
interface props {
  title: string;
  href: string;
}
const NavLink = (props: props) => {
  return (
    <a
      className="text-xl py-1 font-medium text-muted transition-all hover:text-accent hover:translate-x-4"
      href={props.href}
    >
      {props.title}
    </a>
  );
};

export default NavLink;

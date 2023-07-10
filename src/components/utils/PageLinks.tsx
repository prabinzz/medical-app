import React from "react";
import NavLink from "./NavLink";

const PageLinks = () => {
  return (
    <div className="grid grid-cols-2 gap-3">
      <div>
        <p className="text-xl font-bold text-dark mb-6">Menu</p>
        <div className="flex gap-3">
          <div className="flex flex-col gap-4">
            <NavLink href="#" title="Home" />
            <NavLink href="#" title="About" />
            <NavLink href="#" title="Services" />
            <NavLink href="#" title="Blog" />
            <NavLink href="#" title="Blog Post" />
            <NavLink href="#" title="Contact" />
          </div>
          <div className="flex flex-col gap-4">
            <NavLink href="#" title="Plans" />
            <NavLink href="#" title="Plans Single" />
            <NavLink href="#" title="Team" />
            <NavLink href="#" title="Team Single" />
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl font-bold text-dark mb-6">Utitlity Pages</p>
        <div className="flex flex-col gap-4">
          <NavLink href="#" title="Style Guide" />
          <NavLink href="#" title="Password Protected" />
          <NavLink href="#" title="404 Not Found" />
          <NavLink href="#" title="Start Here" />
          <NavLink href="#" title="Licenses" />
          <NavLink href="#" title="Changelog" />
        </div>
      </div>
    </div>
  );
};

export default PageLinks;

import React from "react";
import IconCard from "../utils/IconCard";

const OurValues = () => {
  return (
    <div>
      <div className="container py-52 mx-auto flex flex-col">
        <div className="flex flex-col gap-3 mb-12">
          <p className="action-header">OUR VALUES</p>
          <h2 className="header-2 max-w-sm">
            {" "}
            The core values that shape our culture
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <IconCard
            icon="https://assets.website-files.com/60271d0221637de15a54a030/617d89b49644b98256e36b8c_icon-1-values-hospital-template.svg"
            title="Empathy"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              viverra turpis proin nisl elit. Viverra lom tristique
            </p>
          </IconCard>
          <IconCard
            icon="https://assets.website-files.com/60271d0221637de15a54a030/617d89b55325938d015c0402_icon-2-values-hospital-template.svg"
            title="Responsability"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              viverra turpis proin nisl elit. Viverra lom tristique
            </p>
          </IconCard>
          <IconCard
            icon="https://assets.website-files.com/60271d0221637de15a54a030/617d89b451d44765c7833f83_icon-3-values-hospital-template.svg"
            title="Care & Service"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              viverra turpis proin nisl elit. Viverra lom tristique
            </p>
          </IconCard>
          <IconCard
            icon="https://assets.website-files.com/60271d0221637de15a54a030/617d89b5ca2e118228df0b3c_icon-4-values-hospital-template.svg"
            title="Accessibility"
          >
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Consequat
              viverra turpis proin nisl elit. Viverra lom tristique
            </p>
          </IconCard>
        </div>
      </div>
    </div>
  );
};

export default OurValues;

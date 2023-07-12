import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceSection = () => {
  return (
    <div>
      <div className="grid gap-8 grid-cols-3">
        <ServiceCard
          title="Cardiology"
          number="01"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d89b451d44765c7833f83_icon-3-values-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
        <ServiceCard
          title="Orthopedics"
          number="02"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d885f8656fa45098d5db1_icon-2-service-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
        <ServiceCard
          title="Gastroenterology"
          number="03"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d885faf32ca18509a53ca_icon-3-service-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
        <ServiceCard
          title="Padiatric"
          number="04"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d885faf32ca9bfb9a53cb_icon-4-service-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
        <ServiceCard
          title="Ophthalmology"
          number="05"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d885fdd239c56a426549b_icon-5-service-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
        <ServiceCard
          title="Pulmonology"
          number="06"
          image="https://assets.website-files.com/60271d0221637de15a54a030/617d885f1b0e081e27077b5a_icon-6-service-hospital-template.svg"
          paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod urna faucibus nunc etiam nulla aliquam."
        />
      </div>
    </div>
  );
};

export default ServiceSection;

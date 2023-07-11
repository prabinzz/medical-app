import React from "react";
import ResourceCard from "./ResourceCard";

const ResourceCenter = () => {
  return (
    <div className="pt-36 pb-36 bg-gray-100 w-full">
      <div className="flex flex-col gap-2 w-[600px] text-center mx-auto">
        <p className="action-header uppercase">Resource Center</p>
        <h2 className="header-2 font-black leading-normal">
          Browse our latest articles on healthcare & wellness
        </h2>
      </div>
      <div className="container mx-auto mt-8">
        <div className="flex gap-8">
          <ResourceCard
            title="How to choose the right pediatrician:  7 things to consider"
            date="September 1, 2022"
            link="#"
            tag="Health"
            icons="https://assets.website-files.com/60271d0221637d97a254a066/602d554c1722cd2f81e2f2f4_image-6-blog-article-hospital-template-p-800.png"
          />
          <ResourceCard
            title="Allergies? Common cold? Flu? or COVID-19? How to differentiate each of them"
            date="September 1, 2022"
            link="#"
            tag="Resource"
            icons="https://assets.website-files.com/60271d0221637d97a254a066/602d5541ddb7e95212ff89fc_image-5-blog-article-hospital-template.png"
          />
        </div>
      </div>
    </div>
  );
};

export default ResourceCenter;

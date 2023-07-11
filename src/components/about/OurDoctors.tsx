import React from "react";
import Button from "../utils/Button";
import DoctorCard from "../utils/DoctorCard";

const OurDoctors = () => {
  return (
    <div className="pt-36 pb-64 relative bg-gray-100 w-full">
      <div className="absolute left-0 top-[30%]">
        <img src="https://assets.website-files.com/60271d0221637de15a54a030/602c4703389883ed70addef1_shape-1-about-team-hospital-template.svg" />
      </div>
      <div className="container mx-auto flex flex-col gap-4 justify-center">
        <p className="action-header uppercase">Our Doctors</p>
        <div className="flex justify-between items-end">
          <p className="header-2 max-w-[500px]">
            The team of great doctors behind Hospital
          </p>
          <div>
            <Button size="lg" value="View Doctors" />
          </div>
        </div>
        <div className="grid z-10 grid-cols-4 gap-8 mt-8">
          <DoctorCard
            image="https://assets.website-files.com/60271d0221637d97a254a066/602af52693e8e37ae168de37_image-8-team-hospital-template.png"
            name="Dr. Melissa Graham"
            speciality="Cardiologist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <DoctorCard
            image="https://assets.website-files.com/60271d0221637d97a254a066/602af506cb15dd535f30d524_image-7-team-hospital-template.png"
            name="Dr. John Carter"
            speciality="Pediatrician"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <DoctorCard
            image="https://assets.website-files.com/60271d0221637d97a254a066/602af4e50803a439af178a45_image-6-team-hospital-template.png"
            name="Dr. Ella Lawrence"
            speciality="Pulmonologist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
          <DoctorCard
            image="https://assets.website-files.com/60271d0221637d97a254a066/602af4afd22f7637280e0c4a_image-5-team-hospital-template.png"
            name="Dr. Joan Peterson"
            speciality="Gastroenterologist"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. "
          />
        </div>
      </div>
    </div>
  );
};

export default OurDoctors;

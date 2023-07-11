import React from "react";
interface props {
  title: string;
  date: string;
  tag: string;
  link: string;
  icons: string;
}
const ResourceCard = (props: props) => {
  return (
    <a className="w-full group" href={props.link}>
      <div className="bg-primary min-h-[400px] rounded-[2rem] overflow-clip -z-10">
        <img
          className="-z-10 transition-all duration-300 group-hover:scale-110"
          src={props.icons}
        />
      </div>
      <div className="p-8 mx-8 transition-all duration-300 text-xl shadow-normal rounded-[2rem] z-10 -translate-y-36 group-hover:-translate-y-40 bg-white">
        <p className="font-bold text-dark text-2xl group-hover:text-accent">
          {props.title}
        </p>
        <hr className="my-8" />
        <div className="flex justify-between">
          <div className="text-muted">{props.date}</div>
          <div className="bg-accent px-4 py-2 rounded-full text-white">
            {props.tag}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ResourceCard;

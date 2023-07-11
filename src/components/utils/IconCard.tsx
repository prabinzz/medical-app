import React, { PropsWithChildren } from "react";
interface props extends PropsWithChildren {
  title: string;
  icon: string;
}
const IconCard = (props: props) => {
  return (
    <div className="flex p-10 gap-8 shadow-normal bg-white rounded-[2rem] items-start justify-start">
      <img src={props.icon} />
      <div className="flex gap-4 flex-col">
        <p className="text-[26px] font-bold text-dark">{props.title}</p>
        <hr />
        <div className="p-muted">{props.children}</div>
      </div>
    </div>
  );
};

export default IconCard;

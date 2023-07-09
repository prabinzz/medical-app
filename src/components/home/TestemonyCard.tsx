import React from "react";
import { PropsWithChildren } from "react";
interface props extends PropsWithChildren {
  profile: string;
  title: string;
  name: string;
  year: string;
}
const TestemonyCard = (props: props) => {
  return (
    <div className="w-full rounded-3xl shadow-lg bg-white p-8">
      <div className="flex flex-col gap-4">
        <div>
          <img className="h-12" src="img/stars.svg" />
        </div>
        <h4 className="text-2xl font-bold text-dark">{props.title}</h4>
        <p className="p-muted">{props.children}</p>
        <hr className="my-4" />
        <div className="flex relative -left-16 items-center gap-4">
          <img className="rounded-full" src={props.profile} />
          <div>
            <p className="font-bold text-dark text-lg uppercase">
              {props.name}
            </p>
            <p className="p-muted">Patient Since {props.year}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestemonyCard;

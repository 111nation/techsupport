import type { ReactNode } from "react";
import "./Services.css";

interface ServiceProps {
  heading?: string;
  children?: ReactNode;
}

function Service(props: ServiceProps) {
  return (
    <div className="">
      <p className="font-bold">{props.heading}</p>
      {props.children}
    </div>
  );
}

function Services() {
  return (
    <div className="services text-[#efefef] pl-10 py-7.5">
      <h1 className="font-extrabold text-2xl">Services</h1>
      <div className="grid grid-cols-2 gap-4 w-[100%] lg:w-[60%] sm:grid-cols-4 my-5">
        <Service heading="Software Issues">
          Problem not fixed? You will receive a refund!
        </Service>
        <Service heading="Programming">
          → Linux <br />
          → VS code <br />
        </Service>
        <Service heading="Computer Lessons">
          → Gain computer confidence. <br />→ Better your computer skills
        </Service>
        <Service heading="Learn Software">
          → LTSpice <br /> → MS Word <br /> → PowerPoint <br /> → And More{" "}
          <br />
        </Service>
      </div>
    </div>
  );
}

export default Services;

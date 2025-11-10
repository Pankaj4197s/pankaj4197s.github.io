import { motion } from "framer-motion";
import React from "react";
import ArrowIcon from "../Icons/ArrowIcon";
import FRI from "./Descriptions/FRI";
import Humsafar from "./Descriptions/Humsafar";
import JPMCJob from "./Descriptions/JPMCJob";
import JPMCJobI from "./Descriptions/JPMCJobI";
import JPMCJobII from "./Descriptions/JPMCJobII";
import Retailio from "./Descriptions/Retailio";
import UCRStudentAssistant from "./Descriptions/UCRStudentAssistant";
export default function WhereIHaveWorked() {
  React.useRef<HTMLDivElement>(null);
// ? INFORMATIONAL control the green position using px,
  // ? INFORMATIONAL the default value of barRef's class should be at the beginning translate-y-[0px]
  const GetDescription = () => {
    switch (DescriptionJob) {
      case "UCR":
        return <UCRStudentAssistant />;
      case "JPMCJob":
        return <JPMCJob />;
      case "JPMCJobI":
        return <JPMCJobI />;
      case "JPMCJobII":
        return <JPMCJobII />;
      case "Humsafar":
        return <Humsafar />;
      case "Retailio":
        return <Retailio />;
      case "FRI":
        return <FRI />;
    }
  };
  const [DescriptionJob, setDescriptionJob] = React.useState("UCR");
  return (
    <div
      data-aos="fade-up"
      className="flex flex-col items-center justify-center py-24 space-y-12 bg-AAprimary"
    >
      {/* // ? Title "Where I've Worked" */}
      <section className="flex flex-row items-center">
        <div className="flex flex-row items-center">
          <ArrowIcon
            className={"flex-none h-4 md:h-6 w-4 md:w-5 text-AAsecondary"}
          />
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl">
            {" "}
            02.
          </span>
        </div>

        <span className="text-gray-200 opacity-85 font-bold tracking-wider text-lg md:text-2xl px-3">
          Where I&apos;ve Worked
        </span>
        <div className="bg-gray-400 h-[0.2px] w-16 sm:w-44 md:w-80"></div>
      </section>
      {/* // ? Where I've Worked Content section */}
      <section
        className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0
      justify-center md:justify-center items-center md:items-start "
      >
        {/* // ? Left side of Where I've Worked, contains the bar and name of companies */}
        <CompaniesBar setDescriptionJob={setDescriptionJob} />
        {/* // ? Description for The job */}
        {GetDescription()}
      </section>
    </div>
  );
}

const CompaniesBar = (props: any) => {
  const [barPosition, setBarPosition] = React.useState<number>(0);
  const [barAbovePosition, setBarAbovePosition] = React.useState<number>(0);
  const [activeIndex, setActiveIndex] = React.useState<number>(0);
  const barHolderRef = React.useRef<HTMLDivElement>(null);
  const indicatorRef = React.useRef<HTMLDivElement>(null);
  const buttonRefs = React.useRef<(HTMLButtonElement | null)[]>([]);

  const companies: Array<{ name: string; key: string }> = [
    { name: "UCR CS Dept – Student Assistant", key: "UCR" },
    { name: "JP Morgan Chase & Co. — Software Engineer II", key: "JPMCJobII" },
    { name: "JP Morgan Chase & Co. — Software Engineer I", key: "JPMCJobI" },
    { name: "The Humsafar Trust", key: "Humsafar" },
    { name: "Retailio", key: "Retailio" },
    { name: "Forest Research Department, Government of Rajasthan", key: "FRI" },
  ];

  React.useLayoutEffect(() => {
    const holder = barHolderRef.current;
    const indicator = indicatorRef.current;
    const btn = buttonRefs.current[activeIndex];
    if (!holder || !indicator || !btn) return;
    const holderRect = holder.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();
    const indicatorHeight = indicator.getBoundingClientRect().height || 0;
    const y =
      btnRect.top +
      btnRect.height / 2 -
      holderRect.top -
      indicatorHeight / 2;
    setBarPosition(y);
    // Mobile horizontal underline segment (approximate, matches previous 128px steps)
    setBarAbovePosition(activeIndex * 128 + 1);
  }, [activeIndex]);

  return (
    <div
      id="WhereIhaveWorkedSection"
      className=" flex flex-col md:flex-row  w-screen md:w-auto 
      overflow-auto scrollbar-hide md:overflow-hidden pb-4 md:pb-0 justify-start
       sm:justify-center items-start sm:items-center"
    >
      {/* // ? left bar Holder */}
      <div
        ref={barHolderRef}
        className=" hidden md:block bg-gray-500 relative h-0.5 w-34 md:h-80 translate-y-1 md:w-0.5  
        rounded md:order-1 order-2  "
      >
        {/* // ? animated left bar */}
        <motion.div
          animate={{ y: barPosition }}
          // ref={barRef}
          ref={indicatorRef}
          className={`absolute w-10 h-0.5 md:w-0.5 md:h-16 rounded bg-AAsecondary `}
        ></motion.div>
      </div>
      {/* // ? Companies name as buttons */}
      <div className="flex flex-col md:order-2 order-1 space-y-1 pl-8 md:pl-0 ">
        <div className="flex flex-row md:flex-col">
          {companies.map((c, i) => (
            <button
              key={c.key}
              ref={(el) => (buttonRefs.current[i] = el)}
              onClick={() => {
                setActiveIndex(i);
                props.setDescriptionJob(c.key);
              }}
              className={`flex-none sm:text-sm text-xs text-center md:text-left  hover:text-AAsecondary
             hover:bg-ResumeButtonHover rounded  font-mono  
             py-3 md:pl-6 md:px-4 md:w-44 w-32 duration-500
             ${i === activeIndex ? "bg-ResumeButtonHover text-AAsecondary" : "text-gray-500"}`}
            >
              {c.name}
            </button>
          ))}
        </div>
        <div className="block md:hidden w-[760px] h-0.5 rounded bg-gray-500">
          <motion.div
            animate={{ x: barAbovePosition }}
            className="w-[128px] h-0.5 rounded bg-AAsecondary"
          ></motion.div>
        </div>
      </div>
    </div>
  );
};

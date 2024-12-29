import { BackgroundBeams } from "@/components/ui/background-beams";
import React from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import ShimmerButton from "@/components/ui/shimmer-button";
import { FaDownload } from "react-icons/fa6";

const HeroSection = () => {
  const words = [
    {
      text: "hey, ",
    },
    {
      text: "i'am ",
    },
    {
      text: "a ",
    },

    {
      text: "mern stack developer ",
      className: " text-blue-500",
    },
  ];

  return (
    <div className="max-h-[44rem] w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      <div className="max-w-2xl mx-auto p-4 ">
        <div className="flex flex-col items-center justify-center md:h-[40rem] h-[26rem]  ">
          <TypewriterEffectSmooth words={words} />
          <p className="text-neutral-400 max-w-lg mx-auto my-2 text-2xl  text-center relative z-10">
            I'm a MernStack Developer and here is my portfolio website. Here
            you'll learn about myself as a MernStack Developer.
          </p>

          <ShimmerButton className="shadow-2xl mt-4 flex gap-3">
            <span className="whitespace-pre-wrap text-center  text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg">
              My Resume
            </span>
            <FaDownload />
          </ShimmerButton>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
};

export default HeroSection;

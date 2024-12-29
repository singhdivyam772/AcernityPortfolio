import React from "react";
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";

const SkillSection = () => {
  return (
    <div>
      <div className="md:px-20 px-4 pb-20 pt-8 ">
        <p className=" text-blue-500 lg:text-4xl text-xl md:pl-14 lg:py-4 lg:font-semibold">
          Tech Stack
        </p>
        <div className="relative flex h-[350px]  w-full flex-col items-center justify-center overflow-hidden  bg-background md:shadow-xl">
          <Marquee pauseOnHover className="[--duration:20s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.label} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover className="[--duration:20s] py-2">
            {secondRow.map((review) => (
              <ReviewCard key={review.label} {...review} />
            ))}
          </Marquee>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3  bg-gradient-to-r from-black dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3  bg-gradient-to-l from-black dark:from-background"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillSection;

const ReviewCard = ({ img, label }) => {
  return (
    <figure
      className={cn(
        "relative w-56 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "border-gray-50/[.1] bg-gray-50/[.10] hover:bg-gray-50/[.15]"
      )}
    >
      <div className="flex flex-col justify-center items-center gap-2">
        <img className="rounded-full" width="82" height="82" alt="" src={img} />

        <blockquote className="mt-2 text-sm text-white">{label}</blockquote>
      </div>
    </figure>
  );
};

const reviews = [
  {
    label: "HTML",
    img: "https://cdn-icons-png.flaticon.com/128/143/143655.png",
  },
  {
    label: "Javascript",
    img: "https://cdn-icons-png.flaticon.com/128/1199/1199124.png",
  },
  {
    label: "CSS",
    img: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
  },
  {
    label: "Typescript",
    img: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  },
  {
    label: "Tailwind",
    img: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    label: "React",
    img: "https://icon.icepanel.io/Technology/svg/React.svg",
  },
  {
    label: "Vite",
    img: "https://icon.icepanel.io/Technology/svg/Vite.js.svg",
  },
  {
    label: "Nodejs",
    img: "https://icon.icepanel.io/Technology/svg/Node.js.svg",
  },
  {
    label: "Redux",
    img: "https://icon.icepanel.io/Technology/svg/Redux.svg",
  },
  {
    label: "Nodemon",
    img: "https://icon.icepanel.io/Technology/svg/Nodemon.svg",
  },
  {
    label: "Material UI",
    img: "https://icon.icepanel.io/Technology/svg/Material-UI.svg",
  },
  {
    label: "MongoDb",
    img: "https://icon.icepanel.io/Technology/svg/MongoDB.svg",
  },
  {
    label: "Ant Design",
    img: "https://icon.icepanel.io/Technology/svg/Ant-Design.svg",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

import React from "react";

import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { FaLink } from "react-icons/fa";

const content = [
  {
    title: "Dream Den",
    link: (
      <a
        href="https://app.dreamden.ai"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        <FaLink />
      </a>
    ),
    description: `I contributed to a user module and superadmin CRM in a React project using Ant Design. The user module 
enables image uploads of home or office interiors and provides design improvement suggestions, utilizing Axios and 
React Query for API requests.`,
    content: (
      <div className="h-full w-full bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1735479961/dreamden_oeeczn.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Dream Den demo"
        />
      </div>
    ),
  },
  {
    title: "Drone Service Center",
    link: (
      <a
        href="https://www.droneservicecenter.in/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500"
      >
        <FaLink />
      </a>
    ),
    description: `I revamped the Drone Service Center project using NextJS and Tailwind CSS, enhancing its 
        performance and making it more lightweight compared to its previous version, which was built with React and simple 
        CSS.`,
    content: (
      <div className="h-full w-full flex items-center justify-center text-white">
        <img
          src="https://res.cloudinary.com/drj0uehgx/image/upload/v1735480160/droneservicecenter_l1dugk.png"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="Drone Service Center demo"
        />
      </div>
    ),
  },
];

const ProjectSection = () => {
  return (
    <div className="md:px-20 px-4 pb-20 pt-8">
      <p className="text-blue-500 lg:text-4xl text-xl md:pl-14 lg:py-6 py-4 lg:font-semibold">
        Experience
      </p>
      <StickyScroll content={content} />
    </div>
  );
};

export default ProjectSection;

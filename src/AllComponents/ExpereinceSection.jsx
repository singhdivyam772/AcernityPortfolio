import React from "react";

import { twMerge } from "tailwind-merge";

export function ExperienceSection() {
  return (
    <div className="md:px-20 px-4 pb-20 pt-8">
      <p className="text-blue-500 lg:text-4xl text-xl md:pl-14 lg:py-4 lg:font-semibold">
        Experience
      </p>
      <div className="w-full min-h-[20rem] mx-auto flex lg:flex-row flex-col justify-around pt-4 relative">
        {dummyContent.map((item, index) => (
          <div
            key={`content-${index}`}
            className="mb-10 lg:w-[40%] border-2 border-blue-500 p-6 shadow-xl shadow-blue-400"
          >
            <p className={twMerge("text-xl mb-4 text-white lg:py-6 py-4")}>
              {item.title}
            </p>

            <div className="text-sm prose prose-sm dark:prose-invert">
              {item?.image && (
                <img
                  src={item.image}
                  alt="blog thumbnail"
                  height="400"
                  width="400"
                  className="rounded-lg mb-10 object-contain"
                />
              )}
              {item.description}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const dummyContent = [
  {
    title:
      "Synergy Labs Technology Pvt. Ltd. (May 2024 – October 2024) Trainee",
    description: (
      <p className="text-white">
        <span className=" font-bold underline text-lg">Dream Den:</span>
        {"  "}
        Developed a user module and superadmin CRM using Ant Design. The user
        module facilitates image uploads of home or office interiors and
        provides interior design improvement suggestions, utilizing Axios and
        React Query for API requests.
        <br /> <span className=" font-bold underline text-lg">
          IPSAA ERP:
        </span>{" "}
        Built and maintained a standalone React project from scratch. Leveraged
        Material-UI for responsive design, React Query for efficient API
        handling, and react-router-dom for seamless navigation, enhancing both
        user experience and performance.
      </p>
    ),
    image:
      "https://static.wixstatic.com/media/107c22_1d62a6a69e9d41cabfe7b6c785ef6142~mv2.png/v1/fill/w_475,h_475,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/before.png",
  },
  {
    title:
      "Indian Robotics Solution (IRS) (November 2023 – March 2024) INTERNSHIP",
    description: (
      <>
        <p className="text-white">
          <span className=" font-bold underline text-lg">ERP PROJECT:</span>{" "}
          Focused on inventory management and R&D project tracking modules,
          built from scratch using ReactJS and Material-UI. Utilized Redux for
          state management and RTK Query for seamless API interactions across
          the ERP system.
        </p>
        <p className="text-white">
          <span className=" font-bold underline text-lg">HR PROJECT: </span>{" "}
          Contributed to employee management features, integrating Aadhaar-based
          details and OTP verification through APIs. Built using ReactJS and
          styled with Tailwind CSS for a responsive and visually appealing
          interface.
        </p>
      </>
    ),
    image:
      "https://indianroboticssolution.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fz7h0zeety%2FIndian%2520Robotics%2520Solution%2FIRS-Images%2FIRSLogo.png%3FupdatedAt%3D1718085269333&w=64&q=75",
  },
];

import React from "react";

import { twMerge } from "tailwind-merge";

export function ExpereinceSection() {
  return (
    <div className="md:px-20 px-4 pb-20 pt-8 ">
      <p className=" text-white lg:text-4xl text-xl md:pl-14 lg:py-4 lg:font-semibold">
        Expreicne
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

            <div className="text-sm  prose prose-sm dark:prose-invert">
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
      "Synergy Labs Technology Pvt. Ltd. (May 2024 – October 2024) Trainee ",
    description: (
      <p className=" text-white">
        Sit duis est minim proident non nisi velit non consectetur. Esse
        adipisicing laboris consectetur enim ipsum reprehenderit eu deserunt
        Lorem ut aliqua anim do. Duis cupidatat qui irure cupidatat incididunt
        incididunt enim magna id est qui sunt fugiat. Laboris do duis pariatur
        fugiat Lorem aute sit ullamco. Qui deserunt non reprehenderit dolore
        nisi velit exercitation Lorem qui do enim culpa. Aliqua eiusmod in
        occaecat reprehenderit laborum nostrud fugiat voluptate do Lorem culpa
        officia sint labore. Tempor consectetur excepteur ut fugiat veniam
        commodo et labore dolore commodo pariatur.
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
        <p className=" text-white">
          Ex irure dolore veniam ex velit non aute nisi labore ipsum occaecat
          deserunt cupidatat aute. Enim cillum dolor et nulla sunt exercitation
          non voluptate qui aliquip esse tempor. Ullamco ut sunt consectetur
          sint qui qui do do qui do. Labore laborum culpa magna reprehenderit ea
          velit id esse adipisicing deserunt amet dolore. Ipsum occaecat veniam
          commodo proident aliqua id ad deserunt dolor aliquip duis veniam sunt.
        </p>
        <p className=" text-white">
          In dolore veniam excepteur eu est et sunt velit. Ipsum sint esse
          veniam fugiat esse qui sint ad sunt reprehenderit do qui proident
          reprehenderit. Laborum exercitation aliqua reprehenderit ea sint
          cillum ut mollit.
        </p>
      </>
    ),

    image:
      "https://indianroboticssolution.com/_next/image?url=https%3A%2F%2Fik.imagekit.io%2Fz7h0zeety%2FIndian%2520Robotics%2520Solution%2FIRS-Images%2FIRSLogo.png%3FupdatedAt%3D1718085269333&w=64&q=75",
  },
];

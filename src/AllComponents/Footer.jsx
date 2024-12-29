import React from "react";

const sections = [
  {
    title: "Company",
    links: [
      { label: "About", url: "#" },
      { label: "Careers", url: "#" },
    ],
  },
  {
    title: "Help Center",
    links: [
      { label: "Support", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms of Use", url: "#" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "iOS", url: "#" },
      { label: "Android", url: "#" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", url: "https://facebook.com", icon: <svg>...</svg> },
  { name: "Twitter", url: "https://twitter.com", icon: <svg>...</svg> },
];

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-800 to-black min-h-[20rem]">
      <div className="mx-auto w-full text-white max-w-screen-xl px-8">
        <div className="grid grid-cols-2 gap-8 py-6 lg:py-8 md:grid-cols-4">
          {sections.map((section, index) => (
            <div key={index}>
              <h2 className="mb-6 text-sm font-bold text-white uppercase">
                {section.title}
              </h2>
              {/* {section.links && (
                <ul>
                  {section.links.map((link, i) => (
                    <li key={i} className="mb-2">
                      <a
                        href={link.url}
                        className="text-sm text-white hover:text-pink-500"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )} */}
            </div>
          ))}
        </div>

        <div className=" py-6 md:flex md:items-start md:justify-between">
          <span className="text-sm text-white sm:text-center">
            © Copyright 2024. Made by Divyam Singh
          </span>
          <div className="flex sm:justify-center md:mt-0 space-x-5 rtl:space-x-reverse">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                className="text-white hover:text-pink-500 hover:scale-110 transition-transform"
              >
                {social.icon}
                <span className="sr-only">{social.name}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

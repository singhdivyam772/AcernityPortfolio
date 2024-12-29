"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/ui/navbar-menu";
import { cn } from "@/lib/utils";

export function NavbarDemo() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }) {
  const [active, setActive] = useState(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 max-w-2xl mx-auto z-50", className)}
    >
      <Menu setActive={setActive}>
        {navData?.map((data) => (
          <MenuItem
            key={data.id}
            setActive={setActive}
            active={active}
            item={data.mainNav}
          >
            {data.subMenu &&
              data.subMenu.length > 0 && ( // Only render submenu if it exists and has items
                <div className="flex flex-col space-y-4 text-sm">
                  {data.subMenu?.map((subData) => (
                    <HoveredLink
                      className={`text-neutral-200 ${
                        data.subMenu ? "hover:text-blue-500" : ""
                      } `}
                      key={subData.id}
                      href={subData.subLink}
                    >
                      {subData.name}
                    </HoveredLink>
                  ))}
                </div>
              )}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

const navData = [
  {
    id: 0,
    mainNav: "Home",
    mainLink: "/",
  },
  {
    id: 1,
    mainNav: "About Me",
    mainLink: "/",
    subMenu: [
      {
        id: 0,
        name: "Experience",
        subLink: "/",
      },
      {
        id: 1,
        name: "Projects",
        subLink: "/",
      },
      {
        id: 3,
        name: "Tech Stack",
        subLink: "/",
      },
      {
        id: 4,
        name: "Contact Us",
        subLink: "/",
      },
    ],
  },
  // {
  //   id: 2,
  //   mainNav: "Blogs",
  //   mainLink: "/",
  //   subMenu: [], // Empty submenu
  // },
];

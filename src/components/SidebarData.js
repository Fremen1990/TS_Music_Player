import React from "react";
import * as FaIcons from "react-icons/fa";
import * as IoIcons from "react-icons/io";
import * as AiIcons from "react-icons/ai";

export const SidebarData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Login",
    path: "/login",
    icon: <IoIcons.IoMdLogIn />,
    cName: "nav-text",
  },
  {
    title: "Find Music",
    path: "/findmusic",
    icon: <FaIcons.FaMusic />,
    cName: "nav-text",
  },
  {
    title: "Layouts",
    path: "/layouts",
    icon: <FaIcons.FaBorderStyle />,
    cName: "nav-text",
  },
];

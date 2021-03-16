import React, { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as GrIcons from "react-icons/gr";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";
import "./Navbar.css";
import { IconContext } from "react-icons/lib";
// import { HamburgerMenu } from "./HamburgerMenu";
import "./HamburgerMenu.css";

function Navbar() {
  const [sidebar, setSitebar] = useState(false);

  const showSidebar = () => {
    setSitebar(!sidebar);
    console.log("sidebar status:", sidebar);
  };

  return (
    <>
      <IconContext.Provider value={{ color: "green" }}>
        <div className="navbar">
          <Link to="#" className="menu-bars">
            {/* <FaIcons.FaBars onClick={showSidebar} /> */}
            {/* <HamburgerMenu onClick={showSidebar} /> */}

            <div
              onClick={showSidebar}
              className={sidebar ? "menu-btn open" : "menu-btn"}
            >
              <div className="menu-btn__burger"></div>
            </div>
          </Link>
        </div>

        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
          <ul onClick={showSidebar} className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <GrIcons.GrClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span className="nav-bar-span">{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </IconContext.Provider>
    </>
  );
}
export default Navbar;

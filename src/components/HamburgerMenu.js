import React, { useState } from "react";
import "./SongListItem.css";
import "./HamburgerMenu.css";

export function HamburgerMenu() {
  const [isHamburgerOpen, sethamburgerOpenClose] = useState(false);

  function handleHamburgerMenu() {
    if (isHamburgerOpen) {
      sethamburgerOpenClose((prevState) => !prevState);
    }
    if (!isHamburgerOpen) {
      sethamburgerOpenClose((prevState) => !prevState);
    }
  }

  return (
    <>
      <div
        onClick={handleHamburgerMenu}
        className={isHamburgerOpen ? "menu-btn open" : "menu-btn"}
      >
        <div className="menu-btn__burger"></div>
      </div>
    </>
  );
}

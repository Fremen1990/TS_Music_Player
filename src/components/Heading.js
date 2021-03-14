import React from "react";
import "./Heading.css";


export function Heading({ title }) {
  return (
    <h1>
      {title}
      <span role="img" aria-label="sheep">
        🎧
      </span>
    </h1>
  );
}

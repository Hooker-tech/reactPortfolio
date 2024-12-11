import React from "react";
import "./title.css";

const Title = ({ header, subheader, description }) => {
  return (
    <>
      <h1 id="head">{header}</h1>
      <h2>{subheader}</h2>
      <h3>{description}</h3>
    </>
  );
};

export default Title;

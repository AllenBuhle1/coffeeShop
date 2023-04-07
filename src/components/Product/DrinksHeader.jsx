import React from "react";
import style from "./DrinksHeader.module.css";

const DrinksHeader = () => {
  return (
    <div className={style.header}>
      <span className={style.bgShade}>&nbsp;</span>
      <h1 className={style.title}>Cool Drinks</h1>
    </div>
  );
};

export default DrinksHeader;

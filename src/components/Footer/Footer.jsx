import React from "react";
import style from "./Footer.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <span>&copy; All Rights Reserved</span>
      <span>
        Developer & Designer :{"  "}
        <a
          href="https://instagram.com/allenbuhle"
          target="_blank"
          rel="noopener noreferrer"
        >
          Buhle Allen
        </a>
      </span>
    </div>
  );
}

export default Footer;

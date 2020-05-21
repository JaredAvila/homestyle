import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div>
      Created my free logo at LogoMakr.com |{" "}
      <a
        href="https://www.jaredavila.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jared Avila Designs
      </a>{" "}
      &copy; {year}
    </div>
  );
};

export default Footer;

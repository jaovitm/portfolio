import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillLinkedin,
} from "react-icons/ai";

const headerSocials = () => {
  return (
    <div className="header-socials">
      <a href="https://github.com/jaovitm" target="_blank">
        <AiFillGithub />
      </a>
      <a href="https://twitter.com/jaovitm" target="_blank">
        <AiFillTwitterCircle />
      </a>
      <a href="https://www.linkedin.com/in/joaovitormdesa/" target="_blank">
        <AiFillLinkedin />
      </a>
    </div>
  );
};

export default headerSocials;

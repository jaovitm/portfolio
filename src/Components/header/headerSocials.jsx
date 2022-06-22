import React from "react";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
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
      <a href="https://instagram.com/jaovit.m" target="_blank">
        <AiFillInstagram/>
      </a>
    </div>
  );
};

export default headerSocials;

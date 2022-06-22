import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageDetail } from "react-icons/bi";
import { FaLaptopCode } from "react-icons/fa";

const Nav = () => {
  const [activenav, setActivenav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        title="Home"
        onClick={() => setActivenav("#")}
        className={activenav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        title="Sobre Mim"
        onClick={() => setActivenav("#about")}
        className={activenav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#exp"
        title="Experiências"
        onClick={() => setActivenav("#exp")}
        className={activenav === "#exp" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#portfolio"
        title="Portifólio"
        onClick={() => setActivenav("#portfolio")}
        className={activenav === "#portfolio" ? "active" : ""}
      >
        <FaLaptopCode />
      </a>
      <a
        href="#contact"
        title="Contato"
        onClick={() => setActivenav("#contact")}
        className={activenav === "#contact" ? "active" : ""}
      >
        <BiMessageDetail />
      </a>
    </nav>
  );
};

export default Nav;

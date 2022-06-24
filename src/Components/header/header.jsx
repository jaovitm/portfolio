import React from "react";
import "./header.css";

import CTA from "./CTA";
import EU from "../../assets/CuteAvatarme.svg";
import HeaderSocials from "./headerSocials";

const header = () => {
  return (
    <header>
      <div className="container header-container">
        <h5>Olá, eu sou</h5>
        <h1>João Vitor M.</h1>
        <h5 className="text-light">FullStack Developer</h5>
        <CTA />
        <HeaderSocials />
        <div className="me">
          <img src={EU} alt="Uma foto minha" />
        </div>

        <a href="#contact" className="scrool-down">
          Arrasta pra cima!
        </a>
      </div>
    </header>
  );
};

export default header;

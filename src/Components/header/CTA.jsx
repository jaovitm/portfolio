import React from "react";
import CV from "../../assets/Curriculo Joao Vitor M. de Sá.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Donwload CV
      </a>
      <a href="#contact" className="btn btn-primary">
        Vamos Conversar!
      </a>
    </div>
  );
};

export default CTA;

import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>Minha Formação</h5>
      <h2>Cursos</h2>

      <div className="services-container">
        <article className="service">
          <div className="service-head">
            <h3>SENAI - Serviço Nacional de Aprendizagem Industrial</h3>
            <h5>Tecnico em Informatica para Internet</h5>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Lógica de Programação</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Desenvolvimento Frontend</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Desenvolvimento Backend</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Banco de Dados</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>ONE - Oracle Next Education / Alura</h3>
            <h5>Desenvolvimento Web e Java</h5>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Criação de sites responsivos e funcionais</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Desenvolvimento Java</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Soft Skills</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Empreendedorismo</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;

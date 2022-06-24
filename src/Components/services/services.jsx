import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const services = () => {
  return (
    <section id="services">
      <h5>O Que Ofereço</h5>
      <h2>Serviços</h2>

      <div className="services-container">
        <article className="service">
          <div className="service-head">
            <h3>Criação de Websites</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Criação de sites simples e funcionais</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Layouts responsivos</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Design Humano</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Integração com API</p>
            </li>
          </ul>
        </article>

        <article className="service">
          <div className="service-head">
            <h3>Criação de Backend</h3>
          </div>

          <ul className="service-list">
            <li>
              <BiCheck className="service-list-icon" />
              <p>Criação de API's</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Criação e conexão com banco de dados</p>
            </li>

            <li>
              <BiCheck className="service-list-icon" />
              <p>Criação de toda a logica necessaria para o seu site funcionar com precisão e rapidez</p>
            </li>

            <li>
              <BiCheck className="service-list-icon" />
              <p>Segurança no envio e recebimento de informações</p>
            </li>

          </ul>
        </article>
      </div>
    </section>
  );
};

export default services;

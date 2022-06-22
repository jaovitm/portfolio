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
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className="service-list-icon" />
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
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
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service-list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service-list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service-list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
              <li>
                <BiCheck className="service-list-icon" />
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
              </li>
            </ul>
        </article>
      </div>
    </section>
  );
};

export default services;

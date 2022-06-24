import React from "react";
import "./About.css";
import EU from "../../assets/me-about.webp";
import {FaAward} from "react-icons/fa"
import { GiSkills } from "react-icons/gi";
import { IoFolderOpenOutline } from "react-icons/io5";

const About = () => {
  return (
    <section id="about">
      <h5>Me conheça</h5>
      <h2>Sobre Mim</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-img">
            <img src={EU} alt="Uma foto minha" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards">

            <article className="about-card">
              <FaAward className="about-icon" />
              <h5>Experiencia</h5>
              <small>1+ Anos</small>
            </article>

            <article className="about-card">
              <GiSkills className="about-icon" />
              <h5>Habilidades</h5>
              <small>Dedicação e Proatividade</small>
            </article>

            <article className="about-card">
              <IoFolderOpenOutline className="about-icon" />
              <h5>Projetos</h5>
              <small>10+ concluidos </small>
            </article>
          </div>

          <p>Olá! Me chamo João Vitor Machado de Sá, sou um Programdor FullStack. Sempre fui apaixonado pela tecnologia e resolvi usar essa paixão para ajudar a transformar o mundo atraves da programação.</p>

          <a href="#contact" className="btn btn-primary">Me Contrate</a>
        </div>
      </div>
    </section>
  );
};

export default About;

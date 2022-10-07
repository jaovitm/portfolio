import React from 'react'
import "./portifolio.css";
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.jpg";
import IMG6 from "../../assets/portfolio3.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "FinCtrl - Sistema de Gestão Financeira",
    github: "https://github.com/jaovitm/FinCtrl",
    demo: "https://finctrl.netlify.app/",
  },
  {
    id: 2,
    image: IMG6,
    title: "AluraGeek - Ecommerce",
    github: "https://github.com/jaovitm/agEcommerce",
    demo: "https://alugeek.netlify.app/",
  },
  {
    id: 3,
    image: IMG3,
    title: "PedagogiaBH10 - Blog",
    github: "https://pedagogiabh10.com.br/",
    demo: "https://pedagogiabh10.com.br/",
  },
  {
    id: 4,
    image: IMG4,
    title: "Jogo da Forca",
    github: "https://github.com/jaovitm/Hangman",
    demo: "https://jaovitm.github.io/Hangman/",
  },
  {
    id: 5,
    image: IMG5,
    title: "Encriptador de Mensagens",
    github: "https://github.com/jaovitm/encriptador",
    demo: "https://jaovitm.github.io/encriptador/",
  },
  {
    id: 6,
    image: IMG2,
    title: "To Do List",
    github: "https://github.com/jaovitm/TaskList",
    demo: "https://jaovitm.github.io/TaskList/",
  },
];


const portifolio = () => {
  return (
    <>
      <section id="portfolio">
        <h5>Meus Projetos Recentes</h5>
        <h2>Portifólio</h2>

        <div className="container port-container">
          {data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="port-item">
                <div className="port-item-image">
                  <img src={image} alt="Portifolio project" />
                </div>
                <h3>{title}</h3>
                <div className="port-item-cta">
                  <a href={github} className="btn" target="_blank">
                    Github
                  </a>
                  <a href={demo} className="btn btn-primary" target="_blank">
                    Live Demo
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </section>
      <a href="https://github.com/jaovitm" className='btn allproj' target='_blank'>Todos os meu projetos</a>
    </>
  );
}

export default portifolio

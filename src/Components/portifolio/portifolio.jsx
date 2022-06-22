import React from 'react'
import "./portifolio.css";
import IMG1 from "../../assets/portfolio1.jpg"
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";


const data = [
  {
    id: 1,
    image: IMG1,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    image: IMG2,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    image: IMG3,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    image: IMG4,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    image: IMG5,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
  },
  {
    id: 1,
    image: IMG6,
    title: "Titulo do meu projeto",
    github: "https://github.com/",
    demo: "https://github.com/",
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

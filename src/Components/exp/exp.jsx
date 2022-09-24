import React from "react";
import "./exp.css";
import { BsPatchCheckFill } from "react-icons/bs";

const exp = () => {
  return (
    <section id="exp">
      <h5>Minhas Skills</h5>
      <h2>Em Que Me Destaco</h2>

      <div className="container exp-container">
        <div className="exp-frontend">
          <h3>Desenvolvimento Frontend</h3>
          <div className="exp-content">
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Com experiência</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Com experiência</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>Javascript</h4>
                <small className="text-light">Com experiência</small>
              </div>
            </article>
            <article className="exp-details">
              <BsPatchCheckFill className="exp-details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediário</small>
              </div>
            </article>
          </div>
        </div>
        <div className="exp-backend">
          <div className="exp-frontend">
            <h3>Desenvolvimento Backend</h3>
            <div className="exp-content">
              <article className="exp-details">
                <BsPatchCheckFill className="exp-details-icon" />
                <div>
                  <h4>NodeJs</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
              <article className="exp-details">
                <BsPatchCheckFill className="exp-details-icon" />
                <div>
                  <h4>MySql</h4>
                  <small className="text-light">Intermediário</small>
                </div>
              </article>
              <article className="exp-details">
                <BsPatchCheckFill className="exp-details-icon" />
                <div>
                  <h4>Java</h4>
                  <small className="text-light">Iniciante</small>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default exp;

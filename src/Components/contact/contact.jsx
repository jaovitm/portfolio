import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { FiTwitter, FiLinkedin } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "emailjs-com";



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p77yfui",
        "template_jqikr5l",
        form.current,
        "t1bLwW3SGPBz2lc0N"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

      e.target.reset()
  };

  return (
    <section id="contact">
      <h5>Vamos Conversar</h5>
      <h2>Entre em Contato Comigo</h2>

      <div className="container contact-container">
        <div className="contact-options">
          <article className="contact-option">
            <MdOutlineEmail className="contact-option-icon" />
            <h4>Email</h4>
            <h5>joaovitormdesa@gmail.com</h5>
            <a href="mailto:joaovitormdesa@gmail.com" target="_blank">
              Envie uma mensagem
            </a>
          </article>

          <article className="contact-option">
            <FiTwitter className="contact-option-icon" />
            <h4>Twitter</h4>
            <h5>@jaovitm</h5>
            <a href="https://twitter.com/jaovitm" target="_blank">
              Envie uma mensagem
            </a>
          </article>

          <article className="contact-option">
            <FiLinkedin className="contact-option-icon" />
            <h4>LinkedIN</h4>
            <h5>joaovitormdesa</h5>
            <a
              href="https://www.linkedin.com/in/joaovitormdesa/"
              target="_blank"
            >
              Envie uma mensagem
            </a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="name"
            placeholder="Seu nome completo ou Nome da Empresa"
            required
          />
          <input type="email" name="email" placeholder="Seu Email" required />
          <textarea
            name="message"
            rows="7"
            placeholder="Sua mensagem"
            required
          ></textarea>

          <button type="submit" className="btn btn-primary">
            Enviar Mensagem
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react'
import "./footer.css";
import {
  AiFillGithub,
  AiFillTwitterCircle,
  AiFillInstagram,
} from "react-icons/ai";

const footer = () => {
  return (
    <footer>
      <a href="#" className='footer-logo'>&#123; João Vitor M. &#125;</a>

      <div className="footer-socials">
        <a href="https://twitter.com/jaovitm">
          <AiFillTwitterCircle />
        </a>
        <a href="https://instagra,.com/jaovitm">
          <AiFillInstagram />
        </a>
        <a href="https://github.com/jaovitm"><AiFillGithub/></a>
      </div>

      <div className="footer-copyright">
        <small>&copy; João Vitor Machado de Sá. Todos os direitos reservados</small>
      </div>
    </footer>
  );
}

export default footer
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <div className="footer-content">
                 
         <div className="footer-links"> 
            <a href="#hero">Início</a>      
            <a href="#about">Sobre</a>
            <a href="#benefits">Terapia</a>              
            <a href="#faq">Faq</a>
          </div>
          <p>© {currentYear} - Adrielle Alves Psicóloga Clínica - CRP 02/30430 | Todos os direitos reservados</p>
          <div className="footer-socials">          
            <a href="https://instagram.com/adriellealves.psi" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram />
            </a>        

          </div>
          
       </div> 
    </footer>
  );
}

export default Footer;
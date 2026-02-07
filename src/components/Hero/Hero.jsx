import "./Hero.css";
import logo from "../../assets/Images/logoAdrielle.png";
import { FaWhatsapp } from "react-icons/fa"; 

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-content">
        <img src={logo} alt="Adrielle Alves Psicóloga" className="hero-logo" />

        <h1 className="hero-text">
          Aqui suas <span> emoções</span> ganham voz!
          <br />        
                    
        </h1>

        <a
          className="hero-button"
          href="https://wa.me/5581999214212"
          target="_blank"
          rel="noreferrer"
        >
          Entre em contato <FaWhatsapp className="icon" />
        </a>
      </div>
    </section>
  );
}

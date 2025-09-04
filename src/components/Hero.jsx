import { FaWhatsapp } from "react-icons/fa"; 
import "./Hero.css";

function Hero() {
  return (
    <section id="hero" className="hero">    
      <div className="overlay fade-in">
        <h1 className="hero-title">Adrielle Alves</h1>
        <p className="hero-subtitle">Psicóloga Clínica</p>
        <h2>Aqui as emoções ganham voz!</h2>
        
        <a
          className="btn-hero"
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

export default Hero;

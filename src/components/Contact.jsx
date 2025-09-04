import "./Contact.css";
import { FaInstagram, FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      
      <div className="contact-container">
        <div className="foto-container">
          <img src="images/Foto1.jpeg" alt="Adrielle" className="foto" />
          <p className="legenda">Adrielle Alves - CRP 02/30430</p>
        </div>
        
        <div className="cards-container">
          <h2 className="titulo">Entre em Contato</h2>
          <p>Atendimentos presencial e on-line </p>
          <div className="card-contact">
            <FaWhatsapp className="icon whatsapp" />
            <p>WhatsApp</p>
          </div>
          <div className="card-contact">
            <FaInstagram className="icon instagram" />
            <p>
              <a
                href="https://instagram.com/adriellealvs.psi"
                target="_blank"
                rel="noreferrer"
              >
                Instagram
              </a>
            </p>
          </div>
          <div className="card-contact">
            <FaLinkedin className="icon linkedin" />
            <p>
              <a
                href="https://www.linkedin.com/in/adriellealves"
                target="_blank"
                rel="noreferrer"
              >
                LinkedIn
              </a>
            </p>
          </div>
          <div className="card-contact">
            <FaEnvelope className="icon email" />
            <p>E-mail</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

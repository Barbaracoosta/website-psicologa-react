import "./Contact.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

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
          <p>Atendimentos presenciais em Olinda/PE e on-line para todo Brasil.</p>
          <div className="card-contact">
            <FaWhatsapp className="icon whatsapp" />
            <p>
              <a
                href="https://wa.me/SEUNUMERO"
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </p>
          </div>
          <div className="card-contact">
            <FaInstagram className="icon instagram" />
            <p>
              <a
                href="https://instagram.com/adriellealves.psi"
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
            <p>
              <a href="mailto:adrielle-alves@live.com">E-mail</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

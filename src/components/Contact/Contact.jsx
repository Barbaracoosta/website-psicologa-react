import "./Contact.css";
import {
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaLinkedin,
  FaClock,
} from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="headerBenefits">
        <span className="badge">Contato</span>
        <h1 className="title">Vamos Conversar?</h1>
        <p className="subtitle">
          Atendimentos presenciais em Olinda/PE e on-line para todo o Brasil.
        </p>
      </div>

      <div className="contact-container">
        <div className="foto-container">
          <img src="images/Foto2.jpeg" alt="Adrielle" className="foto" />
          <p className="legenda">Adrielle Alves • Psicóloga Clínica</p>
        </div>

        <div className="cards-container">
          <div className="card-contact">
            <FaWhatsapp className="icon whatsapp" />

            <a
              href="https://wa.me/5581999214212"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </div>
          <div className="card-contact">
            <FaInstagram className="icon instagram" />

            <a
              href="https://instagram.com/adriellealves.psi"
              target="_blank"
              rel="noreferrer"
            >
              Instagram
            </a>
          </div>
          <div className="card-contact">
            <FaLinkedin className="icon linkedin" />

            <a
              href="https://www.linkedin.com/in/adrielle-alves-9254a31b7"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="card-contact">
            <FaEnvelope className="icon email" />

            <a href="mailto:adrielle-alves@live.com">E-mail</a>
          </div>
          <div className="card-resposta">
            <FaClock className="icon clock" />
            <p>Tempo médio de resposta: até 24 horas úteis.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;

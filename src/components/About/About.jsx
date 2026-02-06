import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about fade-in">
      <h1>Sobre mim</h1>
      <div className="about-content">
        <div className="about-text">
          <p>
            Sou <strong>Adrielle Alves</strong>, psicóloga clínica (CRP 02/30430), dedicada ao cuidado da saúde mental com foco em crianças e adolescentes. Minha missão é oferecer um espaço seguro e acolhedor, onde cada pessoa possa se expressar livremente e encontrar caminhos para lidar com suas emoções e desafios. Acredito que a psicologia tem o poder de transformar vidas e que, através da escuta e do acolhimento,
             é possível promover desenvolvimento, bem-estar e qualidade de vida. 
            Sou especializada em diferentes áreas que fortalecem minha prática clínica,
             como TCC (Terapia Cognitivo-Comportamental), Neuropsicologia, Avaliação Psicológica, Psicodiagnóstico e 
             intervenções ABA aplicadas à infância e adolescência.
          </p>
        </div>
        <div className="about-photo">
          <img src="images/About.foto.jpeg" alt="Adrielle" />
        </div>        
      </div>
      <div className="About-cards">
        <div className="card-About">Profissionalismo e Ètica</div>
        <div className="card-About">Empatia e Acolhimento</div>
        <div className="card-About">Clareza e direcionamento</div>
        <div className="card-About">Sigilo e Confiança</div>
      </div>
    </section>
  );
}

export default About;

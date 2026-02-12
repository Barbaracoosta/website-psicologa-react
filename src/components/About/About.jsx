import React from "react";
import "./About.css";

function About() {
  return (
    <section id="about" className="about fade-in">
      <h1>Sobre mim</h1>

      <div className="about-content">
        <div className="about-text">
          <p>
            Sou <strong>Adrielle Alves</strong>, psicóloga clínica (CRP
            02/30430), com atuação voltada ao desenvolvimento emocional de
            crianças e adolescentes.
          </p>

          <p>
            Há mais de cinco anos acompanho o crescimento de crianças típicas e
            neuroatípicas, oferecendo um espaço estruturado, seguro e acolhedor,
            onde possam compreender suas emoções e enfrentar os desafios do
            cotidiano com mais segurança.
          </p>

          <p>
            Acredito que a psicologia, quando fundamentada em ciência e
            conduzida com sensibilidade, tem o poder de transformar trajetórias
            e promover autonomia.
          </p>

          <p>
            Meu trabalho é pautado na ética, no compromisso técnico e no
            fortalecimento do vínculo terapêutico, sempre respeitando a
            singularidade de cada paciente e atuando em parceria com a família e
            com a escola quando necessário.
          </p>
        </div>

        <div className="about-photo">
          <img src="images/About.foto.jpeg" alt="Adrielle" />
        </div>
      </div>

      <div className="formation-section">
        <h2>Formação e Especializações</h2>

        <div className="formation-grid">
          <div className="formation-card">
            <h3>TCC</h3>
            <p>Terapia Cognitivo-Comportamental</p>
          </div>

          <div className="formation-card">
            <h3>Neuropsicologia</h3>
            <p>Avaliação e compreensão do desenvolvimento cognitivo</p>
          </div>

          <div className="formation-card">
            <h3>Avaliação Psicológica</h3>
            <p>Psicodiagnóstico e intervenções estruturadas</p>
          </div>

          <div className="formation-card">
            <h3>ABA</h3>
            <p>Análise do Comportamento Aplicada</p>
          </div>
        </div>

        <p className="protocolos">
          Formação complementar nos protocolos ABLLS-R, VB-MAPP, PEI e AFLS,
          utilizados para avaliação e planejamento de intervenções
          individualizadas.
        </p>
      </div>
    </section>
  );
}

export default About;

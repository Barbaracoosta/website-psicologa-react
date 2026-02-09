import { useState } from "react";
import "./Faq.css";

const perguntas = [
  {
    pergunta: "O que é a Terapia Cognitivo-Comportamental (TCC)?",
    resposta:
      "A TCC é uma abordagem terapêutica baseada em evidências que ajuda o paciente a identificar e modificar pensamentos, emoções e comportamentos disfuncionais. O foco está no aqui e agora, buscando estratégias práticas para promover o bem-estar e melhorar a qualidade de vida."
  },
  {
    pergunta: "O que é a Análise do Comportamento Aplicada (ABA)?",
    resposta:
      "A ABA é uma ciência que estuda o comportamento humano e utiliza princípios comprovados para promover o desenvolvimento de habilidades e reduzir comportamentos que dificultam a rotina. É muito utilizada com crianças dentro do espectro autista, mas também pode beneficiar outras pessoas."
  },
  {
    pergunta: "Qual é a diferença entre TCC e ABA?",
    resposta:
      "A TCC é uma abordagem voltada à compreensão dos pensamentos e emoções que influenciam o comportamento. A ABA, por sua vez, é mais analítica e observa diretamente o comportamento e suas consequências. Ambas podem se complementar e trazer excelentes resultados."
  },
  {
    pergunta: "Como sei se meu filho precisa de acompanhamento psicológico?",
    resposta:
      "Mudanças de humor, dificuldades de socialização, comportamento agressivo, resistência a regras, atrasos no desenvolvimento, dificuldades escolares ou sofrimento emocional podem indicar a necessidade de avaliação."
  },
  {
    pergunta: "Como funciona o processo terapêutico infantil?",
    resposta:
      "No início, é feita uma entrevista com os responsáveis e uma avaliação da criança. Depois, são definidas metas terapêuticas e estratégias específicas conforme as necessidades identificadas."
  },
  {
    pergunta: "A terapia é só para crianças com diagnóstico?",
    resposta:
      "Não. A psicoterapia é indicada para qualquer criança, adolescente ou adulto que apresente dificuldades emocionais, comportamentais ou sociais."
  },
  {
    pergunta: "O que é feito nas sessões ABA?",
    resposta:
      "As sessões ABA envolvem atividades estruturadas e lúdicas, planejadas conforme os objetivos da intervenção. São ensinadas habilidades de comunicação, socialização e autonomia."
  }
];

export default function FAQ() {
  const [ativa, setAtiva] = useState(null);

  const toggle = (index) => {
    setAtiva(ativa === index ? null : index);
  };

  return (
    <section className="faq" id="faq">
      <div className="faq-container">
        <h2>Perguntas Frequentes</h2>
        <p className="faq-subtitulo">
          Tire suas dúvidas sobre o processo terapêutico.
        </p>

        {perguntas.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${ativa === index ? "ativa" : ""}`}
          >
            <button
              className="faq-pergunta"
              onClick={() => toggle(index)}
            >
              {item.pergunta}
              <span className="icone"></span>
            </button>

            <div className="faq-resposta">
              <p>{item.resposta}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

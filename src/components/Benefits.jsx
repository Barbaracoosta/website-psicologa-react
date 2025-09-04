import "./Benefits.css";

function Benefits() {
  return (
    <section id="benefits" className="benefits">      
      
      <h1>Como funciona?</h1>
      <h2>O processo acontece em 4 etapas:</h2>
      
      <div className="benefit-cards">
        <div className="card">
          <h3>Avaliação inicial</h3>  
          <p>
            No começo, vamos juntos explorar suas dificuldades, sentimentos e pensamentos. 
            Vou te ajudar a identificar as situações que geram desconforto e como você reage a elas. 
            É um momento de mapeamento, onde começamos a entender o funcionamento dos seus pensamentos e emoções.
          </p>
        </div>
        <div className="card">
          <h3>Definição de objetivos</h3>
          <p>
            Definiremos juntos metas claras e realistas para o seu desenvolvimento. 
            Essa etapa garante que cada sessão tenha um propósito, alinhado às suas necessidades e expectativas.
          </p>
        </div>
        <div className="card">
          <h3>Aplicação de técnicas</h3>
          <p>
            Aqui utilizamos estratégias da ABA e TCC, adaptadas ao seu perfil. 
            São exercícios práticos, discussões e intervenções que ajudam a melhorar comportamentos, habilidades sociais e emocionais.
          </p>
        </div>
        <div className="card">
          <h3>Conquista de autonomia</h3>
          <p>
            O objetivo final é que você desenvolva ferramentas e estratégias para lidar de forma independente com suas emoções e desafios. 
            A autonomia permite maior confiança e qualidade de vida no dia a dia.
          </p>
        </div>
      </div>

      <h2>Abordagens utilizadas</h2>
      <p>
        Cada atendimento é personalizado, combinando diferentes abordagens para atender às necessidades do paciente:
      </p>
      
      <div className="benefit-cards">
        <div className="card">🧠 Terapia Cognitivo-Comportamental (TCC)</div>
        <div className="card">🔹 Análise do Comportamento Aplicada (ABA)</div>
        <div className="card">👶 Intervenção precoce para crianças</div>
        <div className="card">💬 Estratégias de comunicação e socialização</div>
      </div>

      <h2>Benefícios do acompanhamento</h2>
      <p>
        O acompanhamento psicológico proporciona melhorias na vida emocional, comportamental e social, com atenção especial às necessidades individuais.
      </p>
      
      <div className="benefit-cards">
        <div className="card">🧒 Atendimento especializado em crianças e jovens</div>
        <div className="card">🤝 Acolhimento individualizado e humanizado</div>
        <div className="card">🧩 Experiência no acompanhamento de pacientes com TEA</div>
        <div className="card">🗓️ Organização de agenda e acompanhamento contínuo</div>
      </div>

    </section>
  );
}

export default Benefits;

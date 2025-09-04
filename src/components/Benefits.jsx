import "./Benefits.css";

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      
      {/* Título principal */}
      <h1>Como funciona?</h1>
      <h3>O processo acontece em 4 etapas:</h3>

      {/* Cards das etapas */}
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
        </div>
        <div className="card">
          <h3>Aplicação de técnicas</h3>
        </div>
        <div className="card">
          <h3>Conquista de autonomia</h3>
        </div>
      </div>

      {/* Benefícios */}
      <h3>Abordagens e Benefícios</h3>
      <p>
        Acompanhamento psicológico em ABA e TCC para crianças e jovens adultos.
      </p>

      {/* Cards de benefícios */}
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

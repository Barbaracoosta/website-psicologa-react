import "./MentalHealth.css";

function MentalHealth() {
  return (
    <section className="mental-health" id="mentalhealth">
      
      <div className="mental-intro">
        <h2>Cuidar da Mente é Cuidar de Você</h2>
        <p>
          Cuidar da saúde mental é um gesto de responsabilidade e carinho consigo mesmo.
          Assim como cuidamos do corpo, a mente também precisa de atenção, escuta e orientação adequada.
        </p>
        <p>
          Quando aprendemos a compreender nossas emoções e desenvolver estratégias
          para lidar com os desafios, fortalecemos nossa autonomia e qualidade de vida.
        </p>
      </div>

      <div className="mental-content">
        
        <div className="mental-block">
          <h3>Quando é importante buscar ajuda?</h3>
          <ul>
            <li>Ansiedade frequente ou preocupações excessivas</li>
            <li>Tristeza persistente ou desmotivação</li>
            <li>Irritabilidade intensa</li>
            <li>Dificuldades no sono ou na alimentação</li>
            <li>Problemas de atenção e aprendizagem</li>
            <li>Sobrecarga emocional</li>
          </ul>
          <p className="mental-note">
            Procurar apoio psicológico não é sinal de fraqueza, mas de coragem e cuidado.
          </p>
        </div>

        <div className="mental-block">
          <h3>Como crianças, adolescentes e jovens podem se cuidar melhor?</h3>
          <ul>
            <li>Manter uma rotina estruturada e equilibrada</li>
            <li>Aprender a identificar e nomear emoções</li>
            <li>Praticar atividades físicas e momentos de lazer</li>
            <li>Reduzir o excesso de tempo em telas</li>
            <li>Conversar com adultos de confiança</li>
            <li>Buscar acompanhamento profissional quando necessário</li>
          </ul>
        </div>

      </div>

      <div className="mental-footer">
        <p>
          O acompanhamento psicológico oferece um espaço seguro para compreender sentimentos,
          desenvolver habilidades emocionais e construir estratégias mais saudáveis para enfrentar os desafios do dia a dia.
        </p>
        <strong>Cuidar da mente é investir no presente e no futuro.</strong>
      </div>

    </section>
  );
}

export default MentalHealth;

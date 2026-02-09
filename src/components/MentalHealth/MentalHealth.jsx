import "./MentalHealth.css";
import { FiHeart, FiSmile, FiSun } from "react-icons/fi";

function MentalHealth() {
  return (
    <section className="mental-health" id="mentalhealth">
      <h2>Cuidar da Saúde Mental é um Ato de Amor</h2>

      <div className="mental-container">
        <div className="mental-box">
          <div className="mental-icon">
            <FiHeart />
          </div>
          <h3>Por que é importante?</h3>          
          <p>
            A saúde mental influencia nossos pensamentos, emoções e
            relacionamentos. Cuidar da mente é essencial para viver com mais
            equilíbrio e bem-estar.
          </p>
        </div>

        <div className="mental-box">
          <div className="mental-icon">
            <FiSmile />
          </div>
          <h3>Quando procurar ajuda?</h3>
          <ul>
            <li>Ansiedade frequente</li>
            <li>Tristeza persistente</li>
            <li>Dificuldade para dormir</li>
            <li>Sobrecarga emocional</li>
          </ul>
        </div>

        <div className="mental-box">
          <div className="mental-icon">
            <FiSun />
          </div>
          <h3>Como se cuidar melhor?</h3>
          <ul>
            <li>Manter rotina equilibrada</li>
            <li>Praticar atividades físicas</li>
            <li>Ter momentos de lazer</li>
            <li>Buscar apoio profissional</li>
          </ul>
        </div>
      </div>
      <div className="mental-cta">
  <p>
    Buscar ajuda é um passo de cuidado consigo mesma(o).
  </p>
  <button className="mental-btn">
    Agendar atendimento
  </button>
</div>

    </section>
  );
}

export default MentalHealth;

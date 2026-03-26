import "./Benefits.css";

function Benefits() {
  return (
    <section id="benefits" className="benefits">
      <div className="container">
        <h1 className="title">Como funciona?</h1>
        <p className="subtitle">
          O processo terapêutico é estruturado e individualizado, respeitando as
          necessidades de cada criança, adolescente ou jovem adulto.
        </p>

        <div className="timeline">
          <div className="step">
            <span className="number">01</span>
            <div className="content">
              <h3>Avaliação inicial</h3>
              <p>
                No início do acompanhamento, realizamos um mapeamento cuidadoso
                das demandas apresentadas. Investigamos emoções, pensamentos,
                comportamentos e contextos que possam estar gerando sofrimento.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="number">02</span>
            <div className="content">
              <h3>Definição de objetivos</h3>
              <p>
                Estabelecemos metas claras, realistas e mensuráveis, construídas
                de forma colaborativa para direcionar o plano terapêutico.
              </p>
            </div>
          </div>

          <div className="step">
            <span className="number">03</span>
            <div className="content">
              <h3>Técnicas baseadas em evidências</h3>
              <ul>
                <li>Treino de habilidades sociais</li>
                <li>Regulação emocional</li>
                <li>Reestruturação de pensamentos</li>
                <li>Desenvolvimento de autonomia</li>
              </ul>
            </div>
          </div>

          <div className="step">
            <span className="number">04</span>
            <div className="content">
              <h3>Desenvolvimento de autonomia</h3>
              <p>
                Fortalecimento de recursos internos e construção de
                independência emocional para lidar com desafios.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Abordagens utilizadas</h2>
          <div className="approach-grid">
            <div className="approach-card">
              <h3>Terapia Cognitivo-Comportamental (TCC)</h3>
              <p>
                Abordagem baseada em evidências científicas que atua na
                identificação e reestruturação de pensamentos, emoções e
                comportamentos, promovendo estratégias mais adaptativas para
                lidar com desafios cotidianos.
              </p>
            </div>

            <div className="approach-card">
              <h3>Análise do Comportamento Aplicada (ABA)</h3>
              <p>
                Intervenções estruturadas e individualizadas, especialmente
                indicadas para o desenvolvimento de habilidades comportamentais,
                sociais e comunicativas, com foco na ampliação de repertórios e
                na promoção de autonomia.
              </p>
            </div>

            <div className="approach-card">
              <h3>Intervenção precoce na infância</h3>
              <p>
                Atuação direcionada ao desenvolvimento global da criança, com
                ênfase em linguagem, habilidades sociais, autorregulação e
                adaptação aos contextos familiar e escolar.
              </p>
            </div>

            <div className="approach-card">
              <h3>Estratégias de comunicação e habilidades sociais</h3>
              <p>
                Treinos estruturados para fortalecer a comunicação funcional, a
                interação social e a regulação emocional, respeitando o ritmo e
                as particularidades de cada paciente.
              </p>
            </div>
          </div>
        </div>

        <div className="section">
          <h2>Benefícios do acompanhamento</h2>
          <div className="benefits-list">
            <div className="benefit-item">Atendimento especializado</div>
            <div className="benefit-item">Intervenções personalizadas</div>
            <div className="benefit-item">Acolhimento humanizado</div>
            <div className="benefit-item">Trabalho com a família</div>
            <div className="benefit-item">Experiência com TEA</div>
            <div className="benefit-item">Planejamento estruturado</div>
            <div className="benefit-item">Monitoramento contínuo</div>
            <div className="benefit-item">Evolução acompanhada</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Benefits;

import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import "./Feedback.css";

function Feedback() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const { data } = await supabase
      .from("depoimentos")
      .select("")
      .eq("aprovado", true)
      .order("created_at", { ascending: false });

    setLista(data || []);
  };

  const inicial = (nome) => nome.charAt(0).toUpperCase();

  return (
    <section className="testimonials" id="Feedback">

       <div className="headerBenefits">
          <span className="badge">Depoimentos</span>
          <h1 className="title">Cada Jornada Importa </h1>
          <p className="subtitle">
            Historias de cuidado e transformação construidas com acolhimento e cuidado.
          </p>
     </div>
     

      <div className="testimonials-grid">
        {lista.map((d) => (
          <div className="card" key={d.id}>
            <span className="quote">“</span>

            <p className="text">{d.depoimento}</p>

            <div className="feedback-stars">
              {"★".repeat(d.nota)}
            </div>

            <div className="user">
              <div className="avatar">
                {inicial(d.nome)}
              </div>
              
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
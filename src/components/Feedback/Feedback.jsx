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
    <section className="testimonials">

       <div className="headerBenefits">
          <span className="badge">Depoimentos</span>
          <h1 className="title">O que dizem sobre a terapia </h1>
          <p className="subtitle">
            Cada historia compartilhada me inspira a continuar cuidando com ainda mais amor e dedicação.
          </p>
     </div>
     

      <div className="testimonials-grid">
        {lista.map((d) => (
          <div className="card" key={d.id}>
            <span className="quote">“</span>

            <p className="text">{d.depoimento}</p>

            <div className="stars">
              {"⭐".repeat(d.nota)}
            </div>

            <div className="user">
              <div className="avatar">
                {inicial(d.nome)}
              </div>
              <span className="name">
                {inicial(d.nome)}.
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Feedback;
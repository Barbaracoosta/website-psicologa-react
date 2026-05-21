import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import "./Admin.css";

function AdminDepoimentos() {
  const [pendentes, setPendentes] = useState([]);
  const [aprovados, setAprovados] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    // depoimentos pendentes
    const { data: pendentesData } = await supabase
      .from("depoimentos")
      .select("*")
      .eq("aprovado", false)
      .order("created_at", { ascending: false });

    // depoimentos aprovados
    const { data: aprovadosData } = await supabase
      .from("depoimentos")
      .select("*")
      .eq("aprovado", true)
      .order("created_at", { ascending: false });

    setPendentes(pendentesData || []);
    setAprovados(aprovadosData || []);
  };

  const aprovar = async (id) => {
    await supabase.from("depoimentos").update({ aprovado: true }).eq("id", id);

    buscar();
  };

  const rejeitar = async (id) => {
    await supabase.from("depoimentos").delete().eq("id", id);

    buscar();
  };

  const excluir = async (id) => {
    const confirmar = window.confirm("Deseja excluir este depoimento?");

    if (!confirmar) return;

    await supabase.from("depoimentos").delete().eq("id", id);

    buscar();
  };

  return (
    <section className="admin">
      <div className="admin-header">
        <h1>Painel de Depoimentos</h1>
        <p>Gerencie os feedbacks enviados pelos pacientes.</p>
      </div>

      {/* PENDENTES */}

      <div className="section-title">
        <h2>Depoimentos Pendentes</h2>
        <span>{pendentes.length}</span>
      </div>

      <div className="cards-grid">
        {pendentes.map((d) => (
          <div className="admin-card" key={d.id}>
            <div className="card-top">
              <h4>{d.nome}</h4>

              <span className="stars">{"⭐".repeat(d.nota)}</span>
            </div>

            <p className="texto">{d.depoimento}</p>

            <div className="actions">
              <button className="approve" onClick={() => aprovar(d.id)}>
                Aprovar
              </button>

              <button className="delete" onClick={() => rejeitar(d.id)}>
                Rejeitar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* APROVADOS */}

      <div className="section-title history">
        <h2>Histórico de Aprovados</h2>
        <span>{aprovados.length}</span>
      </div>

      <div className="cards-grid">
        {aprovados.map((d) => (
          <div className="admin-card approved" key={d.id}>
            <div className="card-top">
              <h4>{d.nome}</h4>

              <span className="stars">{"⭐".repeat(d.nota)}</span>
            </div>

            <p className="texto">{d.depoimento}</p>

            <div className="actions">
              <button className="delete" onClick={() => excluir(d.id)}>
                Excluir
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AdminDepoimentos;

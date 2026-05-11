import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";
import "./Admin.css";

function AdminDepoimentos() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const { data } = await supabase
      .from("depoimentos")
      .select("")
      .eq("aprovado", false)
      .order("created_at", { ascending: false });

    setLista(data || []);
  };

  const aprovar = async (id) => {
    await supabase
      .from("depoimentos")
      .update({ aprovado: true })
      .eq("id", id);

    buscar();
  };

  const rejeitar = async (id) => {
    await supabase
      .from("depoimentos")
      .delete()
      .eq("id", id);

    buscar();
  };

  return (
    <section className="admin">
      <h2>Painel de Depoimentos</h2>

      {lista.map((d) => (
        <div className="admin-card" key={d.id}>
          <h4>{d.nome}</h4>
          <p>{d.depoimento}</p>
          <p>{"⭐".repeat(d.nota)}</p>

          <div className="actions">
            {!d.aprovado && (
              <button onClick={() => aprovar(d.id)}>
                Aprovar
              </button>
            )}
            <button className="delete" onClick={() => rejeitar(d.id)}>
              Rejeitar
            </button>
          </div>
        </div>
      ))}
    </section>
  );
}

export default AdminDepoimentos;
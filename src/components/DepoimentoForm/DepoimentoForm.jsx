import { useState } from "react";
import { supabase } from "../../services/supabaseClient";
import "./DepoimentoForm.css";

function DepoimentoForm() {
  const [form, setForm] = useState({
    nome: "",
    depoimento: "",
    nota: 5,
  });

  const [loading, setLoading] = useState(false);

  const enviar = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase.from("depoimentos").insert([form]);

    if (error) {
      alert("Erro ao enviar 😢");
    } else {
      alert("Depoimento enviado para aprovação 💜");
      setForm({ nome: "", depoimento: "", nota: 5 });
    }

    setLoading(false);
  };

  return (
    <section className="form-section">
      <div className="form-content">
        <div className="right">
          <div className="headerBenefits">
            <span className="badge">Compartilhe</span>
            <h1 className="title">Deixe seu depoimento</h1>
            <p className="subtitle">
              Sua opnião é muito importante e pode inspirar outras pessoas que
              também estão em busca de apoio.
            </p>
            <div className="info-box">
              🔒 Seu depoimento é anônimo no site. Apenas a inicial será
              exibida.
            </div>
          </div>
        </div>
        <div className="left">
          <form className="form" onSubmit={enviar}>
            <input
              type="text"
              placeholder="Seu nome"
              value={form.nome}
              onChange={(e) => setForm({ ...form, nome: e.target.value })}
              required
            />

            <textarea
              placeholder="Escreva seu depoimento..."
              value={form.depoimento}
              maxLength={500}
              onChange={(e) => setForm({ ...form, depoimento: e.target.value })}
              required
            />

            <div className="stars">
              {[1, 2, 3, 4, 5].map((n) => (
                <span
                  key={n}
                  onClick={() => !loading && setForm({ ...form, nota: n })}
                  className={form.nota >= n ? "active" : ""}
                >
                  ⭐
                </span>
              ))}
            </div>

            <button disabled={loading}>
              {loading ? "Enviando..." : "Enviar depoimento"}
            </button>
            <p className="disclaimer">
              Seu depoimento será analisado antes de ser publicado.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default DepoimentoForm;

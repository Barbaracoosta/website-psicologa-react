import { useEffect, useState } from "react";
import { supabase } from "../../services/supabaseClient";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./Feedback.css";

function Feedback() {
  const [lista, setLista] = useState([]);

  useEffect(() => {
    buscar();
  }, []);

  const buscar = async () => {
    const { data, error } = await supabase
      .from("depoimentos")
      .select("*")
      .eq("aprovado", true)
      .order("created_at", { ascending: false });

    if (!error) {
      setLista(data || []);
    }
  };

  const inicial = (nome = "") => nome.charAt(0).toUpperCase();

  return (
    <section className="testimonials" id="Feedback">

      <div className="headerBenefits">
        <span className="badge">Depoimentos</span>
        <h1 className="title">Cada Jornada Importa</h1>
        <p className="subtitle">
          Histórias de cuidado e transformação construídas com acolhimento e cuidado.
        </p>
      </div>

      <Swiper
        key={lista.length}
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        rewind={true}
        loop={false}
        centeredSlides={true}
        centeredSlidesBounds={true}
        observer
        observeParents
        watchOverflow
        spaceBetween={30}
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1200: { slidesPerView: 3 },
        }}
      >
        {lista.map((d) => (
          <SwiperSlide key={d.id}>
            <div className="cardFeedback">
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Feedback;
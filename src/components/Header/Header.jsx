import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Header.css";


function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <img src="images/logoAdrielle.png" alt="Logo Adri" />
      </div>

      
      <div className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
      
      <nav className={`nav ${menuOpen ? "active" : ""}`}>
        <ul>
          <li><a href="#hero" onClick={() => setMenuOpen(false)}>Início</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>Sobre</a></li>
          <li><a href="#benefits" onClick={() => setMenuOpen(false)}>Terapia</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contato</a></li>
        </ul>
        <a
          className="cta"
          href="https://wa.me/5581999214212"
          target="_blank"
          rel="noreferrer"
        >
          Agendar Avaliação
        </a>
      </nav>
    </header>
  );
}

export default Header;

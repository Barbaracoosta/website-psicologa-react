import "./Footer.css";

function Footer() {
  const currentYear = new Date().getFullYear(); 

  return (
    <footer className="footer">
      <p>© {currentYear} - Adrielle Alves Psicóloga Clínica | Todos os direitos reservados</p>
    </footer>
  );
}

export default Footer;

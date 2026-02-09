import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Beneficios from '../../components/Benefits/Benefits';
import MentalHealth from '../../components/MentalHealth/MentalHealth';
import Faq from '../../components/Faq/Faq';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About /> 
      <Beneficios />
      <MentalHealth />
      <Faq />
      <Contact />           
      <Footer />
    </>
  );
}

export default Home;

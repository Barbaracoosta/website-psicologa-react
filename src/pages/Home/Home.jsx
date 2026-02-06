import Header from '../../components/Header/Header';
import Hero from '../../components/Hero/Hero';
import About from '../../components/About/About';
import Beneficios from '../../components/Benefits/Benefits';
//import FAQ from '../../components/FAQ/FAQ';
import Contact from '../../components/Contact/Contact';
import Footer from '../../components/Footer/Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <About /> 
      <Beneficios />
      <Contact />           
      <Footer />
    </>
  );
}

export default Home;

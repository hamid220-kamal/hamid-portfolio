import Navbar from './components/Navbar';
import ExecutiveHero from './components/ExecutiveHero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Effects from './components/Effects';

function App() {
  return (
    <>
      <Effects />
      <Navbar />
      <main>
        <ExecutiveHero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

export default App;

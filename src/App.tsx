import { lazy, Suspense } from 'react';
import Navbar from './components/Navbar';
import ExecutiveHero from './components/ExecutiveHero';
import Effects from './components/Effects';

// Lazy load below-the-fold components for optimized bundle splitting & FCP
const About = lazy(() => import('./components/About'));
const Skills = lazy(() => import('./components/Skills'));
const Projects = lazy(() => import('./components/Projects'));
const Experience = lazy(() => import('./components/Experience'));
const Certificates = lazy(() => import('./components/Certificates'));
const Contact = lazy(() => import('./components/Contact'));
const Footer = lazy(() => import('./components/Footer'));

function App() {
  return (
    <>
      <Effects />
      <Navbar />
      <main>
        <ExecutiveHero />
        <Suspense fallback={null}>
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Certificates />
          <Contact />
        </Suspense>
      </main>
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </>
  );
}

export default App;

import { useState, lazy, Suspense } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import Navbar from './components/Navbar';
import Effects from './components/Effects';
import CommandPalette from './components/CommandPalette';
import ProjectModal from './components/ProjectModal';
import { RouterProvider, useRouter } from './context/RouterContext';
import type { Project } from './data/projects';

// Lazy load dedicated multi-section pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const SkillsPage = lazy(() => import('./pages/SkillsPage'));
const ExperiencePage = lazy(() => import('./pages/ExperiencePage'));
const CertificatesPage = lazy(() => import('./pages/CertificatesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const Footer = lazy(() => import('./components/Footer'));

function MainContent() {
  const { currentPath } = useRouter();
  const [isCommandPaletteOpen, setIsCommandPaletteOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const pageVariants: Variants = {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const } },
    exit: { opacity: 0, y: -16, transition: { duration: 0.2 } },
  };

  const renderCurrentPage = () => {
    switch (currentPath) {
      case '/about':
        return <AboutPage />;
      case '/projects':
      case '/ventures':
        return <ProjectsPage onSelectProject={(p) => setSelectedProject(p)} />;
      case '/skills':
      case '/stack':
        return <SkillsPage />;
      case '/experience':
        return <ExperiencePage />;
      case '/certificates':
        return <CertificatesPage />;
      case '/contact':
        return <ContactPage />;
      case '/':
      default:
        return <HomePage onSelectProject={(p) => setSelectedProject(p)} />;
    }
  };

  return (
    <>
      <Effects />
      <Navbar onOpenCommandPalette={() => setIsCommandPaletteOpen(true)} />
      
      <main style={{ minHeight: '80vh' }}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Suspense fallback={
              <div style={{ minHeight: '70vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <div style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.9rem', color: '#64748b' }}>
                  Loading Page...
                </div>
              </div>
            }>
              {renderCurrentPage()}
            </Suspense>
          </motion.div>
        </AnimatePresence>
      </main>

      <Suspense fallback={null}>
        <Footer />
      </Suspense>

      {/* Global Modals */}
      <CommandPalette 
        isOpen={isCommandPaletteOpen} 
        onClose={() => setIsCommandPaletteOpen(false)} 
      />

      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}

function App() {
  return (
    <RouterProvider>
      <MainContent />
    </RouterProvider>
  );
}

export default App;

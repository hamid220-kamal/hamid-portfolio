import React, { createContext, useContext, useState, useEffect } from 'react';

interface RouterContextType {
  currentPath: string;
  navigate: (path: string) => void;
}

const RouterContext = createContext<RouterContextType>({
  currentPath: '/',
  navigate: () => {},
});

interface RouteSEO {
  title: string;
  description: string;
  keywords: string;
  canonical: string;
}

const routeSeoMap: Record<string, RouteSEO> = {
  '/': {
    title: 'Hamid Kamal | 17yo AI Developer, Full Stack Software Engineer & Founder',
    description: 'Official portfolio & knowledge graph of Hamid Kamal (Hamid) — 17-year-old AI Developer, Full Stack Engineer, and Student Founder specializing in agentic AI, WebAssembly, CAD/CAM hardware integration, and high-availability web platforms.',
    keywords: 'Hamid, Hamid Kamal, Hamid AI, AI Developer, Full Stack Developer, Software Developer, Web Developer, Best Young Developer, 17yo AI Developer, Student Founder, Web Architect, Agentic AI, React Expert, TypeScript Developer',
    canonical: 'https://hamid-ai-dev.vercel.app/',
  },
  '/about': {
    title: 'About Hamid Kamal | 17yo AI Developer, Systems Architect & Student Founder',
    description: 'Learn about Hamid Kamal (Hamid), a 17-year-old self-taught AI Developer and Class 12 student founder in Hyderabad building cognitive AI architectures, Web Serial hardware bridges, and high-performance software systems.',
    keywords: 'About Hamid Kamal, Hamid Developer Bio, 17yo AI Founder, Youngest AI Developer, Student Founder Hyderabad, Hamid Class 12 AI Engineer',
    canonical: 'https://hamid-ai-dev.vercel.app/about',
  },
  '/projects': {
    title: 'AI Systems, Founder Ventures & Client Deliveries | Hamid Kamal Portfolio',
    description: 'Explore 20 production systems engineered by Hamid Kamal: Multi-Agent AI System, MLOps/LLMOps Pipeline, Advanced RAG, Design Swiftly CNC Engine, Learn Quran, Ali Logistics, Zoon Tourism, and PrimeEdge Engicon.',
    keywords: 'Hamid Kamal Projects, AI Developer Portfolio, Multi-Agent AI System, LLMOps Pipeline, Advanced RAG, Design Swiftly CNC, LearnQuran app, Web Developer Projects',
    canonical: 'https://hamid-ai-dev.vercel.app/projects',
  },
  '/skills': {
    title: 'Technical Architecture & Toolchain | React 19, TypeScript, Python, WASM | Hamid Kamal',
    description: 'Explore Hamid Kamal\'s comprehensive technical stack: Python, TypeScript, React 19, Rust WebAssembly, Web Serial API, PyTorch, YOLOv8, LangChain, Docker, and Cloud Infrastructure.',
    keywords: 'Hamid Kamal Skills, AI Tech Stack, React 19 Developer, TypeScript Expert, Rust WASM Developer, Python AI Engineer, Web Serial API Developer',
    canonical: 'https://hamid-ai-dev.vercel.app/skills',
  },
  '/experience': {
    title: 'Engineering Leadership & Career Timeline | Hamid Kamal (CTO & Founder)',
    description: 'Professional journey of Hamid Kamal: Founder of Design Swiftly (CNC CAD/CAM engine), CTO of LearnQuran.app, AI Engineering Intern at Syntecxhub, and Lead Full-Stack Consultant.',
    keywords: 'Hamid Kamal Experience, Hamid Kamal CTO, LearnQuran CTO, Design Swiftly Founder, AI Engineering Experience, Software Developer Career',
    canonical: 'https://hamid-ai-dev.vercel.app/experience',
  },
  '/certificates': {
    title: '29 Verified AI & Cloud Credentials | Oracle, Google, IBM, AWS | Hamid Kamal',
    description: 'View 29 verified professional credentials and score reports earned by Hamid Kamal across Generative AI, Cloud Solutions Architecture, Cybersecurity, and Software Engineering from Oracle, Google Cloud, IBM, and AWS.',
    keywords: 'Hamid Kamal Certificates, Verified AI Certificates, Oracle Cloud AI Certified, Google Cloud AI, IBM AI Credentials, AWS Solutions Architecture Simulation',
    canonical: 'https://hamid-ai-dev.vercel.app/certificates',
  },
  '/contact': {
    title: 'Initiate Contact & Engineering Advisory | Hamid Kamal (AI Developer)',
    description: 'Connect with Hamid Kamal for AI development contracts, software architecture advisory, full-stack web engineering, or founder partnerships. Email: buildwithhamid@gmail.com.',
    keywords: 'Contact Hamid Kamal, Hire Hamid Kamal, Hire AI Developer, Hire Full Stack Developer, AI Software Consultant, buildwithhamid@gmail.com',
    canonical: 'https://hamid-ai-dev.vercel.app/contact',
  },
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      updateSeo(path);
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    updateSeo(currentPath);

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const updateSeo = (path: string) => {
    const seo = routeSeoMap[path] || routeSeoMap['/'];
    if (!seo) return;

    // 1. Dynamic Title
    document.title = seo.title;

    // 2. Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', seo.description);

    // 3. Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', seo.keywords);

    // 4. Canonical Link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', seo.canonical);

    // 5. OpenGraph & Twitter Tags
    const updateMetaProp = (prop: string, content: string) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('property', prop);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMetaProp('og:title', seo.title);
    updateMetaProp('og:description', seo.description);
    updateMetaProp('og:url', seo.canonical);
    updateMetaProp('twitter:title', seo.title);
    updateMetaProp('twitter:description', seo.description);
    updateMetaProp('twitter:url', seo.canonical);
  };

  const navigate = (path: string) => {
    if (path === currentPath) return;

    // Normalize path
    const targetPath = path.startsWith('/') ? path : `/${path}`;

    window.history.pushState({}, '', targetPath);
    setCurrentPath(targetPath);
    updateSeo(targetPath);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

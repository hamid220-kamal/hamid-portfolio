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
    description: 'Official portfolio of Hamid Kamal — 17-year-old AI Developer, Full Stack Software Engineer, and Founder in Hyderabad building real-world web apps, browser CAD/CAM tools, and AI models.',
    keywords: 'Hamid, Hamid Kamal, Hamid AI, AI Developer, Full Stack Developer, Software Developer, Web Developer, Best Young Developer, 17yo AI Developer, Student Founder, Web Architect, Agentic AI, React Expert, TypeScript Developer',
    canonical: 'https://hamid-ai-dev.vercel.app/',
  },
  '/about': {
    title: 'About Hamid Kamal | 17yo AI Developer & Full Stack Software Engineer',
    description: 'Learn about Hamid Kamal — 17-year-old developer and founder in Hyderabad building web platforms, browser-hardware integrations via Web Serial API, and computer vision models.',
    keywords: 'About Hamid Kamal, Hamid Developer Bio, 17yo AI Founder, Youngest AI Developer, Student Founder Hyderabad, Hamid Class 12 AI Engineer',
    canonical: 'https://hamid-ai-dev.vercel.app/about',
  },
  '/projects': {
    title: 'Projects & Ventures | Hamid Kamal',
    description: 'Explore production projects and ventures built by Hamid Kamal, including Design Swiftly (browser CNC engine), Learn Quran, and machine learning pipelines.',
    keywords: 'Hamid Kamal Projects, AI Developer Portfolio, Multi-Agent AI System, LLMOps Pipeline, Advanced RAG, Design Swiftly CNC, LearnQuran app, Web Developer Projects',
    canonical: 'https://hamid-ai-dev.vercel.app/projects',
  },
  '/skills': {
    title: 'Tech Stack & Developer Tools | Hamid Kamal',
    description: 'Languages, frameworks, hardware APIs, and tools used by Hamid Kamal: TypeScript, React, Python, Rust WebAssembly, Web Serial API, and PyTorch.',
    keywords: 'Hamid Kamal Skills, AI Tech Stack, React 19 Developer, TypeScript Expert, Rust WASM Developer, Python AI Engineer, Web Serial API Developer',
    canonical: 'https://hamid-ai-dev.vercel.app/skills',
  },
  '/experience': {
    title: 'Work Experience & Leadership | Hamid Kamal',
    description: 'Experience and leadership journey of Hamid Kamal: CTO at Learn Quran, co-founder of CNC Jugaaadi, and full-stack developer.',
    keywords: 'Hamid Kamal Experience, Hamid Kamal CTO, LearnQuran CTO, Design Swiftly Founder, AI Engineering Experience, Software Developer Career',
    canonical: 'https://hamid-ai-dev.vercel.app/experience',
  },
  '/certificates': {
    title: '29 Verified Certifications | Hamid Kamal',
    description: 'Browse 29 verified industry certifications earned by Hamid Kamal from Oracle Cloud, Google Cloud, IBM, and AWS with live verification links.',
    keywords: 'Hamid Kamal Certificates, Verified AI Certificates, Oracle Cloud AI Certified, Google Cloud AI, IBM AI Credentials, AWS Solutions Architecture Simulation',
    canonical: 'https://hamid-ai-dev.vercel.app/certificates',
  },
  '/contact': {
    title: 'Contact & Collaboration | Hamid Kamal',
    description: 'Get in touch with Hamid Kamal for web development, machine learning projects, or technical collaboration. Email: buildwithhamid@gmail.com.',
    keywords: 'Contact Hamid Kamal, Hire Hamid Kamal, Hire AI Developer, Hire Full Stack Developer, AI Software Consultant, buildwithhamid@gmail.com',
    canonical: 'https://hamid-ai-dev.vercel.app/contact',
  },
};

// Interaction to Next Paint (INP) Non-Blocking Scheduler
const scheduleIdleWork = (callback: () => void) => {
  if (typeof window !== 'undefined' && 'requestIdleCallback' in window) {
    (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(callback);
  } else {
    setTimeout(callback, 1);
  }
};

export const RouterProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    return window.location.pathname || '/';
  });

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname || '/';
      setCurrentPath(path);
      scheduleIdleWork(() => updateSeo(path));
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    };

    window.addEventListener('popstate', handlePopState);
    scheduleIdleWork(() => updateSeo(currentPath));

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
    
    // Non-blocking INP execution: Update SEO on idle thread so UI is instantly responsive
    scheduleIdleWork(() => updateSeo(targetPath));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
};

export const useRouter = () => useContext(RouterContext);

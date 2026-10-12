// Background Pre-fetching Engine for 0ms Route Transitions (Deferred for Initial LCP Protection)

export const prefetchAllRoutes = () => {
  if (typeof window === 'undefined') return;

  const schedulePrefetch = (callback: () => void) => {
    // Wait until initial page render has completely stabilized before warming up other routes
    setTimeout(() => {
      if ('requestIdleCallback' in window) {
        (window as Window & { requestIdleCallback: (cb: () => void, opts?: { timeout: number }) => void }).requestIdleCallback(callback, { timeout: 4000 });
      } else {
        setTimeout(callback, 200);
      }
    }, 3500);
  };

  schedulePrefetch(() => {
    // Preload JavaScript Chunks for remaining pages in background
    const routeLoaders = [
      () => import('../pages/AboutPage'),
      () => import('../pages/ProjectsPage'),
      () => import('../pages/SkillsPage'),
      () => import('../pages/CertificatesPage'),
      () => import('../pages/ExperiencePage'),
      () => import('../pages/ContactPage'),
    ];

    routeLoaders.forEach((loader) => {
      try {
        loader();
      } catch {
        // Silently handle any prefetch aborts
      }
    });
  });
};

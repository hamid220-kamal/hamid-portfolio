// Background Pre-fetching and Asset Warming Engine for 0ms Route Transitions

export const prefetchAllRoutes = () => {
  if (typeof window === 'undefined') return;

  const schedulePrefetch = (callback: () => void) => {
    if ('requestIdleCallback' in window) {
      (window as Window & { requestIdleCallback: (cb: () => void) => void }).requestIdleCallback(callback);
    } else {
      setTimeout(callback, 50);
    }
  };

  schedulePrefetch(() => {
    // 1. Preload JavaScript Chunks for All 6 Remaining Pages in Background
    const routeLoaders = [
      () => import('../pages/AboutPage'),
      () => import('../pages/ProjectsPage'),
      () => import('../pages/SkillsPage'),
      () => import('../pages/CertificatesPage'),
      () => import('../pages/ExperiencePage'),
      () => import('../pages/ContactPage'),
      () => import('../components/Footer'),
    ];

    routeLoaders.forEach((loader) => {
      try {
        loader();
      } catch {
        // Silently handle any prefetch aborts
      }
    });

    // 2. Pre-warm Key High-Priority Image Assets in Browser GPU/RAM Cache
    const criticalAssets = [
      '/images/hamid-ai-developer-portfolio.webp',
      '/images/hamid-ai-developer-portfolio.jpg',
      '/favicon.svg',
      '/images/3d/cnc_robot_arm.jpg',
      '/images/3d/ai_traffic_city.jpg',
      '/images/3d/cybersecurity_lab.jpg',
    ];

    criticalAssets.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  });
};

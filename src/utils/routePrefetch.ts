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
      '/favicon.svg',
      '/icons/icon-192.png',
      '/images/3d/cnc_blueprint.webp',
      '/images/3d/yolo_traffic.webp',
      '/images/3d/shield_3d.webp',
    ];

    criticalAssets.forEach((src) => {
      const img = new Image();
      img.decoding = 'async';
      img.src = src;
    });
  });
};

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppPreloaderProps {
  onComplete: () => void;
}

// Core Master Asset Registry for Instant 60fps Home Page Experience
const CORE_PORTFOLIO_ASSETS = [
  // Global & Core Hero
  '/images/hamid-ai-developer-portfolio.webp',
  '/favicon.svg',
  '/icons/icon-192.png',

  // Home Page 3D Stages & Spheres (Pre-warmed in GPU memory)
  '/images/3d/engine_3d.webp',
  '/images/3d/cnc_blueprint.webp',
  '/images/3d/yolo_traffic.webp',
  '/images/3d/shield_3d.webp',
  '/images/3d/sphere_code.webp',
  '/images/3d/sphere_hardware.webp',
  '/images/3d/sphere_cyber.webp',
  '/images/3d/banner_3d_assets.webp',
];

export default function AppPreloader({ onComplete }: AppPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('PRE-LOADING PORTFOLIO...');

  useEffect(() => {
    let isMounted = true;
    let completedItems = 0;

    // 1. Ensure HomePage and Footer are immediately primed
    import('../pages/HomePage').catch(() => {});
    import('../components/Footer').catch(() => {});

    const totalAssets = CORE_PORTFOLIO_ASSETS.length;

    const updateProgress = (current: number) => {
      if (!isMounted) return;
      const pct = Math.min(100, Math.round((current / totalAssets) * 100));
      setProgress(pct);

      if (pct < 40) {
        setStatusText('DECODING HOME PAGE...');
      } else if (pct < 80) {
        setStatusText('PRE-WARMING 3D ASSETS...');
      } else {
        setStatusText('PORTFOLIO READY');
      }
    };

    // 2. Concurrently fetch and decode core Home assets into browser GPU memory
    const promises = CORE_PORTFOLIO_ASSETS.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;

        const onFinish = () => {
          completedItems++;
          updateProgress(completedItems);
          resolve();
        };

        if (img.complete) {
          if ('decode' in img) {
            img.decode().then(onFinish).catch(onFinish);
          } else {
            onFinish();
          }
        } else {
          img.onload = () => {
            if ('decode' in img) {
              img.decode().then(onFinish).catch(onFinish);
            } else {
              onFinish();
            }
          };
          img.onerror = onFinish;
        }
      });
    });

    // Snappy fallback timeout: Maximum 650ms so mobile never lags or hangs
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setProgress(100);
        setStatusText('PORTFOLIO READY');
      }
    }, 650);

    Promise.all(promises).then(() => {
      clearTimeout(fallbackTimer);
      if (isMounted) {
        setProgress(100);
        setStatusText('PORTFOLIO READY');
      }
    });

    return () => {
      isMounted = false;
      clearTimeout(fallbackTimer);
    };
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timer = setTimeout(() => {
        onComplete();
      }, 250);
      return () => clearTimeout(timer);
    }
  }, [progress, onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 999999,
          background: 'radial-gradient(circle at 88% 12%, #3a74b4 0%, #588cc2 25%, #8cb4de 50%, #d0e0f2 75%, #fbf1d5 100%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px',
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
        }}
      >
        {/* Central Specular Glass Pod */}
        <motion.div
          initial={{ scale: 0.92, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.35 }}
          style={{
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.15), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
            borderRadius: '28px',
            padding: '40px 48px',
            maxWidth: '460px',
            width: '100%',
            textAlign: 'center',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
          }}
        >
          {/* Animated Glowing Monogram */}
          <div style={{ position: 'relative', width: '72px', height: '72px', margin: '0 auto 24px' }}>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                inset: '-4px',
                borderRadius: '50%',
                border: '2px dashed rgba(37, 99, 235, 0.6)',
              }}
            />
            <div
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #0b1728 0%, #1e3a8a 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.35)',
              }}
            >
              <span
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 900,
                  fontSize: '1.7rem',
                  color: '#ffffff',
                  letterSpacing: '-0.04em',
                }}
              >
                HK
              </span>
            </div>
          </div>

          {/* Developer Title */}
          <h2
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.4rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '6px',
              letterSpacing: '-0.02em',
            }}
          >
            HAMID KAMAL
          </h2>
          <div
            style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#2563eb',
              letterSpacing: '0.08em',
              marginBottom: '24px',
            }}
          >
            17YO AI DEVELOPER &amp; FOUNDER
          </div>

          {/* Progress Bar Container */}
          <div
            style={{
              width: '100%',
              height: '8px',
              background: 'rgba(203, 213, 225, 0.6)',
              borderRadius: '999px',
              overflow: 'hidden',
              marginBottom: '16px',
              position: 'relative',
            }}
          >
            <div
              style={{
                height: '100%',
                width: '100%',
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                borderRadius: '999px',
                transform: `scaleX(${progress / 100})`,
                transformOrigin: 'left center',
                transition: 'transform 0.15s cubic-bezier(0.16, 1, 0.3, 1)',
                boxShadow: '0 0 12px rgba(56, 189, 248, 0.6)',
                willChange: 'transform',
              }}
            />
          </div>

          {/* Percentage & Telemetry Status */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.75rem',
              fontWeight: 700,
              color: '#475569',
            }}
          >
            <span style={{ fontSize: '0.68rem', color: '#64748b', textAlign: 'left', maxWidth: '75%' }}>
              {statusText}
            </span>
            <span style={{ color: '#0f172a', fontSize: '0.85rem' }}>{progress}%</span>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

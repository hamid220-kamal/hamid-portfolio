import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface AppPreloaderProps {
  onComplete: () => void;
}

// Complete Master Asset Registry across ALL 7 Dedicated Pages:
// 1. Home | 2. About | 3. Projects | 4. Skills | 5. Experience | 6. Certificates | 7. Contact
const ALL_PORTFOLIO_ASSETS = [
  // Global & Core Hero
  '/images/hamid-ai-developer-portfolio.webp',
  '/favicon.svg',
  '/icons/icon-192.png',
  '/icons/icon-512.png',

  // 1. Home Page Assets
  '/images/3d/engine_3d.webp',
  '/images/3d/cnc_blueprint.webp',
  '/images/3d/yolo_traffic.webp',
  '/images/3d/shield_3d.webp',
  '/images/3d/sphere_code.webp',
  '/images/3d/sphere_hardware.webp',
  '/images/3d/sphere_cyber.webp',
  '/images/3d/banner_3d_assets.webp',

  // 2. About Page Assets
  '/images/3d/four_pillars_3d_stage.webp',
  '/images/3d/principles_standards_3d_stage.webp',
  '/images/3d/about_cta_3d_banner.webp',

  // 3. Projects & Ventures Page Assets
  '/images/3d/projects_3d_isometric_stage.webp',
  '/images/3d/projects_cta_3d_banner.webp',
  '/images/projects/multi_agent_ai.webp',
  '/images/projects/mlops_pipeline.webp',
  '/images/projects/rag_system.webp',
  '/images/projects/fine_tuning.webp',
  '/images/projects/ai_traffic_new.webp',
  '/images/projects/override_new.webp',
  '/images/projects/capstone.webp',
  '/images/projects/heart_disease.webp',
  '/images/projects/face_recognition.webp',
  '/images/projects/sentiment_analysis.webp',
  '/images/projects/speech_to_text.webp',
  '/images/projects/ai_chatbot.webp',
  '/images/projects/expert_system.webp',
  '/images/projects/maze_solver.webp',
  '/images/projects/python_course.webp',
  '/images/projects/cnc_robot.webp',
  '/images/projects/learn_quran_net.webp',
  '/images/projects/ali_logistics.webp',
  '/images/projects/zoon_tourism.webp',
  '/images/projects/prime_edge.webp',

  // 4. Skills & Toolchain Page Assets
  '/images/3d/toolchain_3d_cyber_stage.webp',
  '/images/3d/skills_cta_3d_banner.webp',

  // 5. Experience & Leadership Page Assets
  '/images/3d/career_3d_tower_sculpture.webp',
  '/images/3d/experience_3d_query_stage.webp',
  '/images/3d/experience_cta_3d_sphere_banner.webp',

  // 6. Verified Certifications Page Assets
  '/images/3d/certificates_3d_validated_hub.webp',
  '/images/3d/certificates_cta_3d_badge.webp',

  // 7. Contact & FAQ Page Assets
  '/images/3d/contact_3d_cyber_cube.webp',
  '/images/3d/faq_3d_gear_cube.webp',

  // Global Footer
  '/images/3d/footer_3d_skyline_landscape.webp',
];

export default function AppPreloader({ onComplete }: AppPreloaderProps) {
  const [progress, setProgress] = useState(0);
  const [statusText, setStatusText] = useState('PRE-LOADING PORTFOLIO...');

  useEffect(() => {
    let isMounted = true;
    let completedItems = 0;

    // 1. Preload JS Chunks for all 7 routes concurrently
    const routeLoaders = [
      () => import('../pages/HomePage'),
      () => import('../pages/AboutPage'),
      () => import('../pages/ProjectsPage'),
      () => import('../pages/SkillsPage'),
      () => import('../pages/ExperiencePage'),
      () => import('../pages/CertificatesPage'),
      () => import('../pages/ContactPage'),
      () => import('../components/Footer'),
    ];

    routeLoaders.forEach((loader) => {
      try {
        loader();
      } catch {
        // Safe prefetch ignore
      }
    });

    const totalAssets = ALL_PORTFOLIO_ASSETS.length;

    const updateProgress = (current: number) => {
      if (!isMounted) return;
      const pct = Math.min(100, Math.round((current / totalAssets) * 100));
      setProgress(pct);

      if (pct < 25) {
        setStatusText('DECODING 7 PAGE MODULES...');
      } else if (pct < 55) {
        setStatusText('PRE-WARMING 3D RENDER STAGES...');
      } else if (pct < 85) {
        setStatusText('CACHING ALL 20 PROJECT ASSETS...');
      } else if (pct < 100) {
        setStatusText('INITIALIZING FULL APP IN GPU RAM...');
      } else {
        setStatusText('ALL 7 PAGES READY');
      }
    };

    // 2. Concurrently fetch and decode all 7 pages' assets into browser GPU memory
    const promises = ALL_PORTFOLIO_ASSETS.map((src) => {
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

    // Safety timeout: Maximum 2.5s fallback so slow 3G networks never hang
    const fallbackTimer = setTimeout(() => {
      if (isMounted) {
        setProgress(100);
        setStatusText('ALL 7 PAGES READY');
      }
    }, 2500);

    Promise.all(promises).then(() => {
      clearTimeout(fallbackTimer);
      if (isMounted) {
        setProgress(100);
        setStatusText('ALL 7 PAGES READY');
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
            <motion.div
              style={{
                height: '100%',
                width: `${progress}%`,
                background: 'linear-gradient(90deg, #2563eb 0%, #38bdf8 100%)',
                borderRadius: '999px',
                transition: 'width 0.1s ease',
                boxShadow: '0 0 12px rgba(56, 189, 248, 0.6)',
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

import { useEffect, useRef } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Effects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Direct DOM ref for mouse spotlight to eliminate React re-render overhead
  const spotlightRef = useRef<HTMLDivElement>(null);
  const mousePosRef = useRef({ x: -1000, y: -1000 });
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePosRef.current = { x: e.clientX, y: e.clientY };

      if (!rafIdRef.current) {
        rafIdRef.current = requestAnimationFrame(() => {
          if (spotlightRef.current) {
            spotlightRef.current.style.transform = `translate3d(${mousePosRef.current.x - 250}px, ${mousePosRef.current.y - 250}px, 0)`;
          }
          rafIdRef.current = null;
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (rafIdRef.current) cancelAnimationFrame(rafIdRef.current);
    };
  }, []);

  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Dynamic 3D Cursor Ambient Glow Spotlight for Light Blue & Beige Canvas */}
      <div
        ref={spotlightRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(37, 99, 235, 0.15) 45%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 1,
          willChange: 'transform',
          filter: 'blur(35px)',
          transform: 'translate3d(-1000px, -1000px, 0)',
        }}
        aria-hidden="true"
      />

      {/* Modern Architectural Grid Texture Overlay */}
      <div className="bg-grid-overlay" aria-hidden="true" />

      {/* 3D Background Floating Sculptures Layer (Light Blue & Warm Beige Palette) */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
          zIndex: 0,
        }}
        aria-hidden="true"
      >
        {/* Floating 3D Glowing Ambient Color Orbs (Sky Blue & Warm Beige) */}
        <motion.div
          animate={{
            x: [0, 90, -70, 0],
            y: [0, -100, 80, 0],
            scale: [1, 1.25, 0.9, 1],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '5%',
            left: '5%',
            width: '480px',
            height: '480px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.45) 0%, rgba(59, 130, 246, 0.18) 55%, transparent 75%)',
            filter: 'blur(55px)',
            willChange: 'transform',
          }}
        />

        <motion.div
          animate={{
            x: [0, -110, 80, 0],
            y: [0, 90, -100, 0],
            scale: [1, 1.3, 0.85, 1],
          }}
          transition={{ duration: 22, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            top: '42%',
            right: '3%',
            width: '560px',
            height: '560px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(253, 244, 219, 0.5) 0%, rgba(147, 197, 253, 0.25) 55%, transparent 75%)',
            filter: 'blur(65px)',
            willChange: 'transform',
          }}
        />

        <motion.div
          animate={{
            x: [0, 80, -90, 0],
            y: [0, 70, -80, 0],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          style={{
            position: 'absolute',
            bottom: '8%',
            left: '12%',
            width: '520px',
            height: '520px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(219, 234, 254, 0.45) 0%, rgba(37, 99, 235, 0.15) 55%, transparent 75%)',
            filter: 'blur(60px)',
            willChange: 'transform',
          }}
        />

        {/* 3D Glass Wireframe Rotating Cube 1 (Top Right - Light Glass & Specular Glow) */}
        <motion.div
          className="hide-on-mobile"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 360],
            rotateZ: [0, 180],
            y: [-15, 15, -15],
          }}
          transition={{
            rotateX: { duration: 24, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 32, repeat: Infinity, ease: 'linear' },
            rotateZ: { duration: 40, repeat: Infinity, ease: 'linear' },
            y: { duration: 6, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: '12%',
            right: '7%',
            width: '120px',
            height: '120px',
            transformStyle: 'preserve-3d',
            perspective: 800,
            opacity: 0.75,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.6) 0%, rgba(37, 99, 235, 0.15) 100%)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 20px 40px rgba(37, 99, 235, 0.2), inset 0 0 25px rgba(255, 255, 255, 0.8)',
            }}
          />
        </motion.div>

        {/* 3D Floating Sapphire/Beige Ring Sculpture (Left Center) */}
        <motion.div
          animate={{
            rotateX: [60, 40, 60],
            rotateY: [0, 360],
            y: [20, -20, 20],
          }}
          transition={{
            rotateY: { duration: 28, repeat: Infinity, ease: 'linear' },
            rotateX: { duration: 10, repeat: Infinity, ease: 'easeInOut' },
            y: { duration: 7, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            top: '38%',
            left: '4%',
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            border: '3px solid rgba(255, 255, 255, 0.9)',
            boxShadow: '0 15px 35px rgba(37, 99, 235, 0.25), inset 0 0 25px rgba(253, 244, 219, 0.6)',
            background: 'radial-gradient(circle, rgba(255, 255, 255, 0.5) 0%, rgba(37, 99, 235, 0.1) 70%)',
            opacity: 0.7,
            willChange: 'transform',
          }}
        />

        {/* 3D Glass Wireframe Rotating Cube 2 (Bottom Right) */}
        <motion.div
          animate={{
            rotateX: [360, 0],
            rotateY: [0, 360],
            rotateZ: [180, 0],
            y: [-20, 20, -20],
          }}
          transition={{
            rotateX: { duration: 30, repeat: Infinity, ease: 'linear' },
            rotateY: { duration: 25, repeat: Infinity, ease: 'linear' },
            rotateZ: { duration: 35, repeat: Infinity, ease: 'linear' },
            y: { duration: 8, repeat: Infinity, ease: 'easeInOut' },
          }}
          style={{
            position: 'absolute',
            bottom: '20%',
            right: '11%',
            width: '100px',
            height: '100px',
            transformStyle: 'preserve-3d',
            perspective: 800,
            opacity: 0.75,
            willChange: 'transform',
          }}
        >
          <div
            style={{
              width: '100%',
              height: '100%',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '18px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.65) 0%, rgba(59, 130, 246, 0.15) 100%)',
              backdropFilter: 'blur(12px)',
              boxShadow: '0 15px 35px rgba(37, 99, 235, 0.25), inset 0 0 20px rgba(255, 255, 255, 0.8)',
            }}
          />
        </motion.div>

        {/* Floating Particle Stars Matrix (Light Sky & Golden Amber Palette) */}
        {[
          { top: '10%', left: '15%', size: 6, duration: 4, color: '#2563eb' },
          { top: '25%', left: '85%', size: 8, duration: 6, color: '#1d4ed8' },
          { top: '38%', left: '22%', size: 7, duration: 5, color: '#ffffff' },
          { top: '55%', left: '78%', size: 6, duration: 7, color: '#d97706' },
          { top: '70%', left: '10%', size: 8, duration: 5.5, color: '#2563eb' },
          { top: '82%', left: '65%', size: 7, duration: 4.5, color: '#ffffff' },
          { top: '18%', left: '48%', size: 6, duration: 6.5, color: '#2563eb' },
          { top: '62%', left: '40%', size: 7, duration: 5, color: '#1d4ed8' },
          { top: '90%', left: '30%', size: 8, duration: 7, color: '#d97706' },
          { top: '32%', left: '92%', size: 6, duration: 4, color: '#ffffff' },
        ].map((particle, idx) => (
          <motion.div
            key={idx}
            animate={{
              y: [-12, 12, -12],
              opacity: [0.4, 0.95, 0.4],
              scale: [0.8, 1.3, 0.8],
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: idx * 0.4,
            }}
            style={{
              position: 'absolute',
              top: particle.top,
              left: particle.left,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              borderRadius: '50%',
              background: particle.color,
              boxShadow: `0 0 14px ${particle.color}`,
              willChange: 'transform, opacity',
            }}
          />
        ))}
      </div>
    </>
  );
}


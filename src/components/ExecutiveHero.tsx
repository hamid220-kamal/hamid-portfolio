import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin, FiTerminal, FiCode } from 'react-icons/fi';
import Hero3DCanvas from './canvas/Hero3DCanvas';
import { useRouter } from '../context/RouterContext';

export default function ExecutiveHero() {
  const { navigate } = useRouter();

  // Telemetry Cycling Text
  const [logIndex, setLogIndex] = useState(0);
  const telemetryLogs = [
    "> YOLOv8 Stream Inference: 99.4% Density Accuracy",
    "> WebSerial.connect('COM4', 115200) → READY",
    "> LearnQuran Protocol: Audio Sync OK (12ms)",
    "> WASM G-Code Generator: 494 Files Verified"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % telemetryLogs.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [telemetryLogs.length]);

  return (
    <section
      id="home"
      style={{
        minHeight: '94vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '100px',
        paddingBottom: '50px',
        position: 'relative',
        overflow: 'hidden',
        background: 'transparent'
      }}
    >
      {/* 3D Constellation Particle Canvas Background */}
      <Hero3DCanvas />

      {/* Embedded 3D Technical Engine & G-Code Laser Wireframe Illustration */}
      <div 
        style={{
          position: 'absolute',
          top: '48%',
          left: '52%',
          transform: 'translate(-50%, -50%)',
          width: '540px',
          height: '440px',
          opacity: 0.28,
          pointerEvents: 'none',
          zIndex: 1
        }}
      >
        <svg viewBox="0 0 400 300" fill="none" stroke="#2563eb" strokeWidth="1.2">
          {/* Cylinder Block Engine Lines */}
          <rect x="60" y="80" width="280" height="150" rx="16" strokeDasharray="4 4" />
          
          {/* Oscillating Piston Cylinder Assemblies */}
          <motion.circle 
            cx="120" cy="155" r="40" 
            animate={{ r: [38, 42, 38], strokeWidth: [1.2, 1.8, 1.2] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
          />
          <motion.circle 
            cx="200" cy="155" r="40" 
            animate={{ r: [42, 38, 42], strokeWidth: [1.8, 1.2, 1.8] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.circle 
            cx="280" cy="155" r="40" 
            animate={{ r: [38, 42, 38], strokeWidth: [1.2, 1.8, 1.2] }}
            transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut", delay: 1 }}
          />

          <path d="M120 115 L120 195 M200 115 L200 195 M280 115 L280 195" strokeDasharray="2 2" />
          <path d="M40 80 L360 80 M40 230 L360 230" strokeWidth="2" />
          <path d="M100 40 L300 40 L280 80 L120 80 Z" />

          {/* Continuous Rotating Gear Assembly */}
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 18, ease: "linear" }}
            style={{ transformOrigin: '60px 80px' }}
          >
            <circle cx="60" cy="80" r="24" strokeWidth="2" />
            <path d="M60 50 L60 110 M30 80 L90 80 M39 59 L81 101 M39 101 L81 59" strokeWidth="1.5" />
          </motion.g>

          {/* Animated Laser G-Code Toolpath Sweep Line */}
          <motion.line
            x1="40" y1="155" x2="360" y2="155"
            stroke="#0284c7"
            strokeWidth="2"
            strokeDasharray="10 10"
            animate={{ strokeDashoffset: [0, -100] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
          />
        </svg>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div className="hero-reference-grid">
          
          {/* Left Hero Narrative Column */}
          <div className="hero-left-content">
            
            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: 'clamp(1.9rem, 6.5vw, 4.8rem)',
                fontWeight: 700,
                lineHeight: 1.1,
                marginBottom: '20px',
                letterSpacing: '-0.03em',
                color: '#0f172a',
                maxWidth: '640px',
                wordBreak: 'break-word',
              }}
            >
              Engineering <span style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>high-stakes web systems,</span> CAD engines &amp; AI.
            </motion.h1>

            {/* Paragraph Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{
                fontSize: 'clamp(0.95rem, 1.6vw, 1.22rem)',
                color: '#334155',
                marginBottom: '28px',
                maxWidth: '620px',
                lineHeight: 1.65,
                fontWeight: 400
              }}
            >
              I'm <strong style={{ color: '#0f172a', fontWeight: 700 }}>Hamid Kamal</strong>. Chief Technology Officer (CTO) at <strong style={{ color: '#2563eb', fontWeight: 700 }}>Learn Quran</strong> (real-time EdTech platform) and former Co-Founder &amp; Lead Systems Engineer at <strong style={{ color: '#2563eb', fontWeight: 700 }}>CNC Jugaaadi</strong> (browser CAD/CAM via Web Serial API). I build robust web apps, hardware serial control logic, and computer vision pipelines.
            </motion.p>

            {/* Live Telemetry Dark Teal Capsule Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="telemetry-capsule"
              style={{
                background: 'linear-gradient(135deg, #0d2830 0%, #0b1f26 100%)',
                border: '1px solid #154c58',
                borderRadius: '20px',
                padding: '14px 18px',
                marginBottom: '32px',
                maxWidth: '560px',
                boxShadow: '0 12px 30px -5px rgba(13, 40, 48, 0.4)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                width: '100%',
                overflow: 'hidden'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexGrow: 1, minWidth: 0 }}>
                {/* Terminal Icon Box */}
                <div style={{
                  width: '36px',
                  height: '36px',
                  borderRadius: '10px',
                  background: 'rgba(20, 184, 166, 0.15)',
                  border: '1px solid rgba(20, 184, 166, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#2dd4bf',
                  flexShrink: 0
                }}>
                  <FiTerminal size={16} />
                </div>

                <div style={{ minWidth: 0, flexGrow: 1, overflow: 'hidden' }}>
                  <div style={{
                    fontSize: '0.65rem',
                    fontFamily: 'Space Mono, monospace',
                    color: '#6ee7b7',
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    marginBottom: '2px'
                  }}>
                    LIVE SYSTEM TELEMETRY
                  </div>

                  <motion.div
                    key={logIndex}
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '0.8rem',
                      fontWeight: 700,
                      color: '#38bdf8',
                      whiteSpace: 'nowrap',
                      textOverflow: 'ellipsis',
                      overflow: 'hidden'
                    }}
                  >
                    {telemetryLogs[logIndex]}
                  </motion.div>
                </div>
              </div>

              {/* Animated ECG Pulse Wave SVG */}
              <div className="telemetry-ecg-wave" style={{ width: '60px', height: '22px', flexShrink: 0, opacity: 0.9 }}>
                <svg viewBox="0 0 100 30" fill="none" stroke="#2dd4bf" strokeWidth="2.5" strokeLinecap="round">
                  <path d="M0 15 L25 15 L35 5 L45 25 L55 10 L65 20 L75 15 L100 15" />
                </svg>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="hero-action-btns"
              style={{ display: 'flex', gap: '14px', flexWrap: 'wrap', alignItems: 'center' }}
            >
              <button 
                onClick={() => navigate('/projects')} 
                className="btn-primary hero-btn"
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  borderColor: '#2563eb',
                  borderRadius: '999px',
                  padding: '14px 28px',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  boxShadow: '0 8px 24px -4px rgba(37, 99, 235, 0.4)'
                }}
              >
                Explore Selected Ventures
                <FiArrowRight size={16} />
              </button>

              <a 
                href="/Hamid Kamal - Resume.pdf" 
                className="btn-secondary hero-btn" 
                download
                style={{
                  background: '#ffffff',
                  borderColor: '#cbd5e1',
                  borderRadius: '999px',
                  padding: '14px 26px',
                  color: '#0f172a',
                  fontWeight: 700,
                  fontSize: '0.92rem'
                }}
              >
                <FiDownload size={16} />
                Executive CV
              </a>
            </motion.div>

          </div>

          {/* Right Column Stage — Rotated 3D Hologram Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="hero-right-stage"
          >
            <div className="hologram-rotated-container">
              
              {/* Slate-Cyan Dark Rotated Polygon Backdrop Frame */}
              <div className="dark-rotated-backdrop" />

              {/* Rotated 3D Glass Photo Card */}
              <div className="rotated-photo-card">
                <img 
                  src="/images/hamid-ai-developer-portfolio.webp" 
                  alt="Hamid Kamal Profile" 
                  className="photo-img"
                  fetchPriority="high"
                />

                {/* Bottom Overlay Profile Card */}
                <div className="bottom-profile-card">
                  <div style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '8px',
                    background: 'rgba(37, 99, 235, 0.1)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    flexShrink: 0
                  }}>
                    <FiCode size={15} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 700, color: '#0f172a' }}>Hamid Kamal</div>
                    <div style={{ fontSize: '0.68rem', color: '#64748b', fontFamily: 'Space Mono, monospace' }}>Systems &amp; Web Architect</div>
                  </div>
                </div>
              </div>

              {/* Translucent Glass Circle HK Badge on Top-Right */}
              <div className="floating-hk-badge">
                <span>HK</span>
                <span className="live-dot" />
              </div>

              {/* Bottom Right Floating Social Pills */}
              <div className="floating-social-pills">
                <a 
                  href="https://github.com/hamid220-kamal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill-btn"
                  aria-label="Hamid Kamal GitHub"
                >
                  <FiGithub size={16} />
                </a>
                <a 
                  href="https://linkedin.com/in/hamid-kamal" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="social-pill-btn"
                  aria-label="Hamid Kamal LinkedIn"
                >
                  <FiLinkedin size={16} />
                </a>
              </div>

            </div>
          </motion.div>

        </div>
      </div>

      <style>{`
        .hero-reference-grid {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          gap: 50px;
          align-items: center;
          padding-left: 45px;
        }

        .hero-right-stage {
          position: relative;
          width: 100%;
          max-width: 440px;
          margin: 0 auto;
        }

        .hologram-rotated-container {
          position: relative;
          width: 100%;
          aspect-ratio: 4/5;
        }

        .dark-rotated-backdrop {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #0d1e2b 0%, #162f42 100%);
          border-radius: 44px;
          transform: rotate(14deg);
          box-shadow: 0 25px 60px -15px rgba(13, 30, 43, 0.45);
          z-index: 1;
        }

        .rotated-photo-card {
          position: absolute;
          inset: 0;
          background: #ffffff;
          border: 1px solid rgba(255, 255, 255, 0.8);
          border-radius: 36px;
          overflow: hidden;
          transform: rotate(-10deg);
          box-shadow: 0 20px 40px -10px rgba(15, 23, 42, 0.18), 0 0 30px rgba(186, 230, 253, 0.4);
          z-index: 2;
          transition: transform 0.4s ease;
        }

        .hologram-rotated-container:hover .rotated-photo-card {
          transform: rotate(-5deg) scale(1.02);
        }

        .photo-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .bottom-profile-card {
          position: absolute;
          bottom: 16px;
          left: 16px;
          right: 16px;
          padding: 12px 16px;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(12px);
          border-radius: 16px;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          gap: 12px;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.1);
        }

        .floating-hk-badge {
          position: absolute;
          top: -20px;
          right: -20px;
          width: 72px;
          height: 72px;
          border-radius: 50%;
          background: rgba(15, 23, 42, 0.88);
          backdrop-filter: blur(16px);
          border: 2px solid rgba(186, 230, 253, 0.6);
          color: #ffffff;
          font-family: 'Space Grotesk', sans-serif;
          font-weight: 800;
          font-size: 1.25rem;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 25px -5px rgba(15, 23, 42, 0.3);
          z-index: 10;
        }

        .floating-hk-badge .live-dot {
          position: absolute;
          bottom: 4px;
          right: 4px;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: #10b981;
          border: 2px solid #0f172a;
          box-shadow: 0 0 8px #10b981;
        }

        .floating-social-pills {
          position: absolute;
          bottom: -12px;
          right: -6px;
          display: flex;
          gap: 10px;
          z-index: 10;
        }

        .social-pill-btn {
          width: 44px;
          height: 44px;
          border-radius: 50%;
          background: #ffffff;
          border: 1px solid #cbd5e1;
          color: #334155;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 16px rgba(0,0,0,0.08);
          transition: all 0.2s ease;
        }

        .social-pill-btn:hover {
          border-color: #2563eb;
          color: #2563eb;
          transform: translateY(-2px);
        }

        @media (max-width: 1024px) {
          .hero-reference-grid {
            grid-template-columns: 1fr;
            padding-left: 0;
            gap: 40px;
          }
          .hero-right-stage {
            max-width: 340px;
            margin: 20px auto 0;
          }
        }

        @media (max-width: 640px) {
          .telemetry-ecg-wave {
            display: none !important;
          }
          .hero-action-btns {
            flex-direction: column !important;
            width: 100% !important;
          }
          .hero-btn {
            width: 100% !important;
            justify-content: center !important;
          }
          .floating-hk-badge {
            width: 56px !important;
            height: 56px !important;
            font-size: 1rem !important;
            top: -12px !important;
            right: -10px !important;
          }
          .social-pill-btn {
            width: 38px !important;
            height: 38px !important;
          }
        }
      `}</style>
    </section>
  );
}

import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCpu, FiShield, FiArrowRight } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';
import DevEnvironment3DStage from '../components/DevEnvironment3DStage';
import {
  SiTypescript,
  SiPython,
  SiRust,
  SiCplusplus,
  SiPostgresql,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiFramer,
  SiOpencv,
  SiGoogle,
  SiFastapi,
  SiPytorch,
  SiWireshark,
  SiLinux,
  SiDocker,
  SiGit,
} from 'react-icons/si';

const toolchainDomains = [
  {
    title: "Languages & Runtimes",
    icon: <FiCode size={20} color="#2563eb" />,
    skills: [
      { name: "TypeScript / JavaScript", level: "Production Expert", icon: <SiTypescript color="#3178c6" size={16} /> },
      { name: "Python 3.x", level: "Advanced AI / Backend", icon: <SiPython color="#3776ab" size={16} /> },
      { name: "Rust / WASM", level: "High Performance R&D", icon: <SiRust color="#000000" size={16} /> },
      { name: "C / C++", level: "Embedded Systems", icon: <SiCplusplus color="#00599c" size={16} /> },
      { name: "SQL & NoSQL", level: "Schema Architecture", icon: <SiPostgresql color="#4169e1" size={16} /> }
    ]
  },
  {
    title: "Frontend Architecture & UI",
    icon: <FiLayers size={20} color="#059669" />,
    skills: [
      { name: "React 19 Ecosystem", level: "Component Engineering", icon: <SiReact color="#61dafb" size={16} /> },
      { name: "Next.js 15 (App Router)", level: "SSR / SSG Architecture", icon: <SiNextdotjs color="#000000" size={16} /> },
      { name: "Web Serial API", level: "Hardware Interoperability", icon: <FiCpu color="#2563eb" size={16} /> },
      { name: "Tailwind CSS & Canvas", level: "Bespoke Design Systems", icon: <SiTailwindcss color="#06b6d4" size={16} /> },
      { name: "Framer Motion", level: "Spring Physics Animation", icon: <SiFramer color="#0055ff" size={16} /> }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: <FiCpu size={20} color="#d97706" />,
    skills: [
      { name: "YOLOv8 & OpenCV", level: "Real-time Object Detection", icon: <SiOpencv color="#5c3ee8" size={16} /> },
      { name: "Gemini 2.0 / LLM APIs", level: "Agentic Automation", icon: <SiGoogle color="#4285f4" size={16} /> },
      { name: "RAG & Vector Storage", level: "Contextual Document AI", icon: <SiPython color="#3776ab" size={16} /> },
      { name: "FastAPI / Flask", level: "Low-Latency Model Inference", icon: <SiFastapi color="#009688" size={16} /> },
      { name: "PyTorch Foundations", level: "Model Validation & Tuning", icon: <SiPytorch color="#ee4c2c" size={16} /> }
    ]
  },
  {
    title: "Security & Systems",
    icon: <FiShield size={20} color="#0284c7" />,
    skills: [
      { name: "Penetration Testing", level: "OSCP Guidelines", icon: <SiWireshark color="#1679a7" size={16} /> },
      { name: "Ethical Hacking Labs", level: "Exploit Simulation", icon: <FiShield color="#0284c7" size={16} /> },
      { name: "Secure Web Protocols", level: "SSL/TLS & WebSockets", icon: <SiGit color="#f05032" size={16} /> },
      { name: "Linux Administration", level: "Kernel & Shell Scripts", icon: <SiLinux color="#fcc624" size={16} /> },
      { name: "Docker & Cloud Deploy", level: "Vercel / AWS / OCI", icon: <SiDocker color="#2496ed" size={16} /> }
    ]
  }
];

export default function SkillsPage() {
  const { navigate } = useRouter();

  return (
    <div style={{ paddingTop: '110px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header Banner */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '44px', textAlign: 'center', position: 'relative' }}
        >
          <div className="section-tag" style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            borderRadius: '999px',
            padding: '5px 16px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#1e3a5f',
            marginBottom: '16px',
          }}>
            03 / TECHNICAL TOOLCHAIN
          </div>

          {/* 3D Floating Metallic Chrome Title Arch */}
          <h1 className="section-title" style={{
            fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            background: 'linear-gradient(180deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 6px 18px rgba(37, 99, 235, 0.25))',
            maxWidth: '900px',
            margin: '0 auto 20px',
          }}>
            Engineering Stack &amp; Domain Toolchain
          </h1>

          {/* Translucent Glass Subtitle Capsule */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.28)',
            border: '1px solid rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '14px 24px',
            maxWidth: '680px',
            boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.06)',
          }}>
            <p style={{ fontSize: '0.96rem', color: '#334155', lineHeight: 1.6, margin: 0, fontWeight: 450 }}>
              A comprehensive matrix of production languages, hardware APIs, AI computer vision libraries, and security frameworks.
            </p>
          </div>
        </motion.div>

        {/* 3D 4-Station Cyber Platform Stage Visual (Exact match to Image 2) */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
            marginBottom: '48px',
            background: '#071224',
          }}
        >
          <img
            src="/images/3d/toolchain_3d_cyber_stage.jpg"
            alt="3D Technical Toolchain Cyber Platform Stage"
            style={{
              width: '100%',
              maxHeight: '580px',
              objectFit: 'cover',
              display: 'block',
            }}
          />
        </motion.div>

        {/* Stack Grid — 4 Glassmorphic Domain Cards */}
        <div className="stack-grid" style={{ marginBottom: '80px' }}>
          {toolchainDomains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={false}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.72) 0%, rgba(248,250,252,0.48) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '22px',
                padding: '28px',
                boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px', paddingBottom: '14px', borderBottom: '1px solid rgba(203, 213, 225, 0.5)' }}>
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.9)',
                  border: '1px solid rgba(203, 213, 225, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 12px rgba(15, 23, 42, 0.05)',
                }}>
                  {domain.icon}
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.2rem', fontWeight: 700, color: '#0f172a', margin: 0 }}>
                  {domain.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {domain.skills.map((skill) => (
                  <div
                    key={skill.name}
                    style={{
                      background: 'rgba(255, 255, 255, 0.65)',
                      backdropFilter: 'blur(10px)',
                      border: '1px solid rgba(255, 255, 255, 0.8)',
                      borderRadius: '12px',
                      padding: '10px 14px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      boxShadow: '0 2px 6px rgba(15, 23, 42, 0.03)',
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      {skill.icon}
                      <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#0f172a' }}>
                        {skill.name}
                      </span>
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.72rem',
                      fontWeight: 700,
                      color: '#2563eb',
                      background: 'rgba(37, 99, 235, 0.08)',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      padding: '3px 10px',
                      borderRadius: '6px',
                    }}>
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Coded 3D Animated Interactive Developer Environment Stage */}
        <DevEnvironment3DStage />

        {/* Bottom CTA Banner — 3D Cyber Console Dark Stage */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            position: 'relative',
            borderRadius: '28px',
            padding: '8px',
            background: 'linear-gradient(135deg, rgba(30,58,138,0.4) 0%, rgba(15,23,42,0.8) 50%, rgba(56,189,248,0.25) 100%)',
            border: '1.5px solid rgba(56, 189, 248, 0.35)',
            boxShadow: '0 30px 70px -15px rgba(5, 11, 23, 0.5), inset 0 2px 4px rgba(255, 255, 255, 0.2)',
            backdropFilter: 'blur(30px)',
            overflow: 'hidden',
          }}
        >
          <div
            className="skills-cta-inner-box"
            style={{
              position: 'relative',
              borderRadius: '22px',
              background: 'linear-gradient(145deg, #050b17 0%, #0a1428 50%, #060f20 100%)',
              padding: '40px 48px',
              overflow: 'hidden',
              border: '1.5px solid rgba(56, 189, 248, 0.4)',
              boxShadow: '0 30px 70px -15px rgba(5, 11, 23, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            {/* Left Content Column */}
            <div style={{ position: 'relative', zIndex: 3, maxWidth: '480px' }}>
              {/* 3D Dark Glass Title Screen */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.8)',
                border: '1.5px solid rgba(56, 189, 248, 0.35)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                borderRadius: '18px',
                padding: '16px 22px',
                marginBottom: '14px',
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4)',
              }}>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.5rem, 3.2vw, 2.2rem)',
                  lineHeight: 1.25,
                  fontWeight: 800,
                  color: '#ffffff',
                  margin: 0,
                  letterSpacing: '-0.02em',
                }}>
                  Have a custom stack requirement?
                </h3>
              </div>

              {/* Dark Subtitle Pane */}
              <div style={{
                background: 'rgba(15, 23, 42, 0.6)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                borderRadius: '14px',
                padding: '12px 18px',
              }}>
                <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.55, margin: 0, fontWeight: 500 }}>
                  I adapt quickly to specialized tech stacks and industrial software requirements.
                </p>
              </div>
            </div>

            {/* Right Action Button — 3D Glowing Blue Cyber Pill */}
            <div style={{ position: 'relative', zIndex: 3 }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #6366f1 100%)',
                  border: '2px solid rgba(191, 219, 254, 0.8)',
                  borderRadius: '999px',
                  padding: '16px 36px',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow: '0 14px 40px -4px rgba(37, 99, 235, 0.75), inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
                }}
              >
                <span>Discuss Technical Requirements</span>
                <FiArrowRight size={18} />
              </motion.button>
            </div>

            {/* Background 3D Render Image Asset */}
            <div
              className="hide-on-mobile"
              style={{
                position: 'absolute',
                right: '-20px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '58%',
                height: '110%',
                pointerEvents: 'none',
                zIndex: 1,
                opacity: 0.75,
                filter: 'drop-shadow(0 0 25px rgba(56, 189, 248, 0.3))',
              }}
            >
              <img src="/images/3d/skills_cta_3d_banner.jpg" alt="3D Tech Assembly Stage" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', willChange: 'transform' }} />
            </div>

          </div>
        </motion.div>

      </div>

      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .env-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-top: 32px;
        }

        .domain-card {
          padding: 32px;
        }

        .domain-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .domain-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .domain-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
        }

        .skill-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #0f172a;
        }

        .skill-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .stack-grid { grid-template-columns: 1fr; }
          .env-grid { grid-template-columns: 1fr; }
        }
      `}</style>
    </div>
  );
}

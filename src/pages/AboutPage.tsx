import { motion } from 'framer-motion';
import { FiCpu, FiShield, FiZap, FiTarget, FiArrowRight, FiCheckCircle } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';

const engineeringPillars = [
  {
    id: 'hardware',
    index: '01',
    title: "Hardware & Serial Execution",
    description: "Architecting browser engines that directly interface with industrial CNC machinery via Web Serial API, WebAssembly, and real-time G-Code control logic.",
    icon: <FiCpu size={22} color="#2563eb" />
  },
  {
    id: 'web-systems',
    index: '02',
    title: "High-Availability Web Architectures",
    description: "Building production-grade web applications using React 19, Next.js, and low-latency Node.js infrastructure capable of serving global user bases.",
    icon: <FiZap size={22} color="#059669" />
  },
  {
    id: 'ai-vision',
    index: '03',
    title: "Computer Vision & AI Pipelines",
    description: "Integrating real-time deep learning models (YOLOv8, OpenCV) and LLM-powered agentic automation pipelines into accessible web interfaces.",
    icon: <FiTarget size={22} color="#d97706" />
  },
  {
    id: 'cybersecurity',
    index: '04',
    title: "Defensive & Offensive Security",
    description: "Engineering resilient systems rooted in rigorous Security-by-Design principles, penetration testing methodologies, and threat surface minimization.",
    icon: <FiShield size={22} color="#0284c7" />
  }
];

const engineeringPrinciples = [
  { title: "Performance-First Architecture", desc: "Zero unnecessary bloat. Optimized runtime execution, minimal bundle size, and fast FCP." },
  { title: "Hardware-Native Browser Logic", desc: "Pushing browser capabilities via Web Serial, WASM, and low-level protocols to execute physical tasks." },
  { title: "Security by Design", desc: "Proactive vulnerability landscape analysis, input validation, and defensive systems engineering." },
  { title: "Resilient User Experience", desc: "Designing sleek, intuitive interfaces that perform reliably even in high-stress or low-bandwidth environments." }
];

export default function AboutPage() {
  const { navigate } = useRouter();

  return (
    <div style={{ paddingTop: '110px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header Banner */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '44px' }}
        >
          <div className="section-tag" style={{
            background: 'rgba(255, 255, 255, 0.75)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            borderRadius: '999px',
            padding: '5px 16px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#1e3a5f',
          }}>
            01 / ABOUT &amp; PHILOSOPHY
          </div>

          <h1 className="section-title" style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.03em',
            marginBottom: '20px',
            background: 'linear-gradient(180deg, #1e3a5f 0%, #2563eb 55%, #1d4ed8 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 4px 12px rgba(37, 99, 235, 0.18))',
          }}>
            Bridging web software with physical hardware &amp; cognitive AI logic.
          </h1>

          {/* Translucent Glass Subtitle Capsule */}
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.28)',
            border: '1px solid rgba(255, 255, 255, 0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            borderRadius: '16px',
            padding: '14px 22px',
            maxWidth: '680px',
            boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.06)',
          }}>
            <p style={{ fontSize: '0.98rem', color: '#334155', lineHeight: 1.6, margin: 0, fontWeight: 450 }}>
              A deep look into my background as a full-stack engineer, AI systems developer, and founder building software that breaks traditional browser limitations.
            </p>
          </div>
        </motion.div>

        {/* Outer 3D Glass Slab Plate Container around BOTH Cards */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            borderRadius: '32px',
            padding: '10px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.5) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: '0 35px 80px -15px rgba(15, 23, 42, 0.22), inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.1)',
            backdropFilter: 'blur(30px)',
            marginBottom: '80px',
          }}
        >
          {/* Inner Narrative & Photo Grid */}
          <div className="about-page-grid" style={{
            position: 'relative',
            display: 'grid',
            gridTemplateColumns: '1.35fr 0.85fr',
            gap: '24px',
            alignItems: 'stretch',
            zIndex: 2,
          }}>
            
            {/* Left Card: The Engineering Journey */}
            <div
              className="about-journey-card"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.4) 0%, rgba(248,250,252,0.28) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(255, 255, 255, 0.65)',
                borderRadius: '24px',
                padding: '36px 40px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 12px 32px -6px rgba(15, 23, 42, 0.06)',
              }}
            >
              <div>
                <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.65rem', fontWeight: 700, color: '#0f172a', marginBottom: '22px' }}>
                  The Engineering Journey
                </h2>

                <div className="prose-content" style={{ fontSize: '0.92rem', lineHeight: 1.7, color: '#334155' }}>
                  <p style={{ marginBottom: '16px' }}>
                    I am <span style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.22)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700, color: '#0f172a' }}>Hamid Kamal</span>, a full-stack engineer and AI systems developer. I specialize in building software that bridges abstract digital logic with real-world execution.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    My engineering journey began with a curiosity for low-level automation and security. Currently, as CTO at <strong style={{ color: '#1e40af', fontWeight: 700 }}>Learn Quran</strong>, I architect digital infrastructure connecting teachers and students globally via low-latency real-time communication protocols.
                  </p>
                  <p style={{ marginBottom: '16px' }}>
                    Previously, I engineered <span style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.22)', padding: '2px 8px', borderRadius: '6px', fontWeight: 700, color: '#1e40af' }}>CNC Jugaaadi (Design Swiftly)</span>—a browser CAD/CAM control system featuring direct Web Serial API machine execution, WASM toolpath generation, and Gemini AI design intelligence.
                  </p>
                  <p style={{ marginBottom: '0' }}>
                    My work spans computer vision pipelines <span style={{ background: 'rgba(37,99,235,0.12)', border: '1px solid rgba(37,99,235,0.22)', padding: '2px 8px', borderRadius: '6px', fontWeight: 600, color: '#1e3a5f' }}>(YOLOv8, OpenCV)</span>, offensive security laboratories (OverR1de), and enterprise frontend engineering. I believe software should be fast, intuitive, and built with absolute technical rigor.
                  </p>
                </div>
              </div>

              <div style={{ marginTop: '32px', paddingTop: '20px', borderTop: '1px solid rgba(203, 213, 225, 0.4)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
                <div>
                  <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>Hamid Kamal</div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: "'Space Mono', monospace" }}>Systems &amp; Web Architect</div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.03, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/projects')}
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                    border: '1px solid rgba(147, 197, 253, 0.7)',
                    borderRadius: '999px',
                    padding: '12px 24px',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px -4px rgba(37, 99, 235, 0.6), inset 0 2px 2px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.4), 0 0 20px rgba(37, 99, 235, 0.4)',
                  }}
                >
                  <span>View My Ventures</span>
                  <FiArrowRight size={15} />
                </motion.button>
              </div>
            </div>

            {/* Right Card: Profile Image & Current Status */}
            <div style={{ position: 'relative' }}>
              <div
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.45) 0%, rgba(248,250,252,0.3) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.65)',
                  borderRadius: '24px',
                  padding: '20px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 12px 32px -6px rgba(15, 23, 42, 0.06)',
                }}
              >
                {/* Photo Frame Container */}
                <div
                  className="about-profile-frame"
                  style={{
                    position: 'relative',
                    borderRadius: '18px',
                    overflow: 'hidden',
                    border: '1px solid rgba(255, 255, 255, 0.85)',
                    boxShadow: '0 12px 30px rgba(15, 23, 42, 0.12)',
                    flex: 1,
                    minHeight: '420px',
                    marginBottom: '16px',
                    background: '#ffffff',
                  }}
                >
                  <img
                    src="/images/hamid-ai-developer-portfolio.webp"
                    alt="Hamid Kamal Profile"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: '50% 12%',
                      display: 'block',
                    }}
                  />
                </div>

                {/* Status Pill Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '16px',
                  padding: '14px 16px',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', color: '#1e40af', fontWeight: 700, marginBottom: '4px' }}>
                    <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981', display: 'inline-block' }} />
                    CURRENT STATUS
                  </div>
                  <div style={{ fontSize: '0.84rem', fontWeight: 600, color: '#0f172a', lineHeight: 1.45 }}>
                    Open for technical consulting, AI development contracts &amp; leadership roles.
                  </div>
                </div>
              </div>

            </div>

          </div>
        </motion.div>

        {/* Engineering Pillars Section — 3D Stage & Pedestal Towers (Exact match to Image 2) */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginTop: '80px', marginBottom: '80px', position: 'relative' }}
        >
          <div className="section-tag" style={{
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
            CORE CAPABILITIES
          </div>

          {/* 3D Floating Metallic Chrome Title */}
          <h2 className="section-title" style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            background: 'linear-gradient(180deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 6px 18px rgba(37, 99, 235, 0.25))',
          }}>
            The Four Engineering Pillars
          </h2>

          {/* 3D Stage Hero Visual Banner */}
          <div style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            background: '#0a1424',
          }}>
            <img
              src="/images/3d/four_pillars_3d_stage.jpg"
              alt="The Four Engineering Pillars 3D Render"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* 4 Metallic Chrome & Glass Pedestal Towers Grid */}
          <div className="pillars-grid-4">
            {engineeringPillars.map((pillar) => (
              <motion.div
                key={pillar.id}
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(248,250,252,0.45) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '22px',
                  padding: '24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.12), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                }}
              >
                <div>
                  {/* Top Bar: Icon + Index */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
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
                      {pillar.icon}
                    </div>
                    <span style={{
                      fontFamily: "'Space Mono', monospace",
                      fontSize: '0.85rem',
                      fontWeight: 800,
                      color: '#2563eb',
                      background: 'rgba(37, 99, 235, 0.1)',
                      border: '1px solid rgba(37, 99, 235, 0.25)',
                      borderRadius: '999px',
                      padding: '2px 10px',
                    }}>
                      {pillar.index}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '1.18rem',
                    fontWeight: 700,
                    color: '#0f172a',
                    marginBottom: '10px',
                    lineHeight: 1.3,
                  }}>
                    {pillar.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                    {pillar.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Engineering Mindset / Principles Grid — 3D Cyber Sculptures Stage (Exact match to Image 2) */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '80px', position: 'relative' }}
        >
          <div className="section-tag" style={{
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
            ENGINEERING MINDSET
          </div>

          {/* 3D Floating Metallic Chrome Title */}
          <h2 className="section-title" style={{
            fontSize: 'clamp(2.4rem, 5vw, 4.2rem)',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            marginBottom: '32px',
            background: 'linear-gradient(180deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0 6px 18px rgba(37, 99, 235, 0.25))',
          }}>
            Principles &amp; Standards
          </h2>

          {/* 3D Stage Hero Visual Banner */}
          <div style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.25), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
            marginBottom: '32px',
            background: '#07101e',
          }}>
            <img
              src="/images/3d/principles_standards_3d_stage.jpg"
              alt="Principles &amp; Standards 3D Sculptures"
              style={{
                width: '100%',
                maxHeight: '440px',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </div>

          {/* 4 Frosted Glass Principles Grid */}
          <div className="principles-grid">
            {engineeringPrinciples.map((p) => (
              <motion.div
                key={p.title}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.7) 0%, rgba(248,250,252,0.45) 100%)',
                  backdropFilter: 'blur(24px)',
                  WebkitBackdropFilter: 'blur(24px)',
                  border: '1px solid rgba(255, 255, 255, 0.8)',
                  borderRadius: '22px',
                  padding: '24px',
                  boxShadow: '0 14px 32px -8px rgba(15, 23, 42, 0.1), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                  <div style={{
                    width: '36px',
                    height: '36px',
                    borderRadius: '10px',
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#2563eb',
                    flexShrink: 0
                  }}>
                    <FiCheckCircle size={18} />
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#0f172a' }}>
                    {p.title}
                  </h3>
                </div>
                <p style={{ fontSize: '0.88rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>
                  {p.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Bottom CTA Banner — High-Tech 3D Cyber Console Slab Frame (Exact match to Image 2) */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            borderRadius: '28px',
            padding: '8px',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.5) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.28), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(30px)',
          }}
        >
          <div
            className="about-cta-inner-box"
            style={{
              position: 'relative',
              borderRadius: '22px',
              background: 'linear-gradient(135deg, #050b17 0%, #0a1428 50%, #060f20 100%)',
              padding: '40px 44px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            {/* Subtle background circuit overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              backgroundImage: 'radial-gradient(circle at 85% 50%, rgba(37, 99, 235, 0.22) 0%, transparent 60%)',
              pointerEvents: 'none',
            }} />

            {/* Left Content Column */}
            <div style={{ position: 'relative', zIndex: 3, maxWidth: '480px' }}>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: 'clamp(1.6rem, 3.5vw, 2.3rem)',
                lineHeight: 1.18,
                fontWeight: 700,
                color: '#ffffff',
                marginBottom: '14px',
              }}>
                Interested in collaborating or hiring?
              </h3>

              <p style={{ color: '#94a3b8', fontSize: '0.96rem', lineHeight: 1.6, margin: 0, maxWidth: '440px' }}>
                Explore my technical stack or get in touch directly to discuss your project requirements.
              </p>
            </div>

            {/* Right Interactive 3D Crystal Action Buttons Container */}
            <div style={{ position: 'relative', zIndex: 3, display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
              {/* Button 1: 3D Translucent Glass Cube Block */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/skills')}
                style={{
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.4)',
                  borderRadius: '16px',
                  padding: '16px 28px',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  boxShadow: '0 12px 28px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.7), inset 0 -2px 4px rgba(0, 0, 0, 0.5), 0 4px 0 rgba(255, 255, 255, 0.12)',
                  cursor: 'pointer',
                }}
              >
                View Technical Stack
              </motion.button>

              {/* Button 2: 3D Quantum Reactor Core Sapphire Crystal Pill */}
              <motion.button
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                style={{
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                  border: '1px solid rgba(147, 197, 253, 0.8)',
                  borderRadius: '999px',
                  padding: '16px 32px',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 14px 40px -4px rgba(37, 99, 235, 0.75), inset 0 2px 2px rgba(255, 255, 255, 0.9), inset 0 -3px 6px rgba(0, 0, 0, 0.5), 0 0 35px rgba(37, 99, 235, 0.6)',
                }}
              >
                <span>Initiate Contact</span>
                <FiArrowRight size={16} />
              </motion.button>
            </div>

            {/* Background 3D Cyber Banner Asset */}
            <div style={{
              position: 'absolute',
              right: '-10px',
              top: '50%',
              transform: 'translateY(-50%)',
              width: '55%',
              height: '110%',
              pointerEvents: 'none',
              zIndex: 1,
              opacity: 0.7,
              mixBlendMode: 'screen',
              filter: 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.4))',
            }}>
              <img src="/images/3d/about_cta_3d_banner.jpg" alt="3D Cyber Console" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain', willChange: 'transform' }} />
            </div>

          </div>
        </motion.div>

      </div>

      <style>{`
        .about-page-grid {
          display: grid;
          grid-template-columns: 1.3fr 0.7fr;
          gap: 32px;
          align-items: start;
        }

        .prose-content p {
          color: #334155;
          font-size: 1.08rem;
          line-height: 1.7;
          margin-bottom: 16px;
        }

        .prose-content strong {
          color: #0f172a;
          font-weight: 600;
        }

        .pillars-grid-4 {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 20px;
          margin-top: 24px;
        }

        .pillar-card {
          padding: 28px;
          display: flex;
          flex-direction: column;
        }

        .pillar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pillar-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-index {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 700;
        }

        .pillar-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .pillar-desc {
          font-size: 0.95rem;
          color: #64748b;
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .about-page-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
          .pillars-grid-4 {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .principles-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 16px !important;
          }
          .about-cta-inner-box {
            flex-direction: column !important;
            padding: 32px 20px !important;
            gap: 24px !important;
            text-align: center !important;
          }
        }

        @media (max-width: 768px) {
          .about-page-grid {
            grid-template-columns: 1fr !important;
          }
          .pillars-grid-4 {
            grid-template-columns: 1fr !important;
          }
          .principles-grid {
            grid-template-columns: 1fr !important;
          }
          .about-profile-frame {
            min-height: 280px !important;
            max-height: 380px !important;
          }
          .about-journey-card {
            padding: 24px 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

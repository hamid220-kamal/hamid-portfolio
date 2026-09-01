import { motion } from 'framer-motion';
import ExecutiveHero from '../components/ExecutiveHero';
import DomainArchitectureStage from '../components/DomainArchitectureStage';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useRouter } from '../context/RouterContext';
import { FiArrowRight, FiExternalLink, FiGithub, FiCpu, FiCheckCircle, FiMaximize2 } from 'react-icons/fi';

interface HomePageProps {
  onSelectProject: (project: Project) => void;
}

export default function HomePage({ onSelectProject }: HomePageProps) {
  const { navigate } = useRouter();
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <ExecutiveHero />

      <div className="container">
        
        {/* Section 1: 3D Orbital Domain Architecture Stage (Matching Image 1) */}
        <DomainArchitectureStage />

        {/* Section 2: Featured Ventures Showcase */}
        <section style={{ padding: '60px 0 80px 0', position: 'relative' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '36px' }}
          >
            <div>
              <div className="section-tag">02 / FEATURED VENTURES</div>
              <h2 className="section-title">Selected Systems &amp; Products</h2>
              <p className="section-subtitle">
                High-stakes software built for industrial CNC execution, global EdTech,<br />
                and automated computer vision.
              </p>
            </div>
            <button onClick={() => navigate('/projects')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: 'rgba(255,255,255,0.88)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(203,213,225,0.7)',
              borderRadius: 12,
              padding: '12px 22px',
              fontFamily: "'Space Grotesk',sans-serif",
              fontSize: '0.9rem', fontWeight: 600,
              color: '#0f172a', cursor: 'pointer',
              boxShadow: '0 4px 16px -4px rgba(15,23,42,0.12)',
              transition: 'all 0.2s ease',
            }}>
              View All 6 Ventures <FiArrowRight size={16} />
            </button>
          </motion.div>

          {/* Grid with floating central engine */}
          <div style={{ position: 'relative' }}>
            {/* Central Floating Innovation Engine */}
            <div style={{
              position: 'absolute',
              top: '50%', left: '50%',
              transform: 'translate(-50%, -50%)',
              zIndex: 10,
              width: 220,
              pointerEvents: 'none',
              filter: 'drop-shadow(0 20px 40px rgba(37,99,235,0.25))',
            }}>
              <img
                src="/images/3d/engine_3d.jpg"
                alt="Innovation Engine"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', borderRadius: '50%', display: 'block',
                  boxShadow: '0 0 0 8px rgba(255,255,255,0.55), 0 0 0 16px rgba(56,189,248,0.15)',
                  willChange: 'transform' }}
              />
              <div style={{
                textAlign: 'center', marginTop: 10,
                background: 'rgba(15,23,42,0.82)', backdropFilter: 'blur(12px)',
                border: '1px solid rgba(56,189,248,0.4)',
                borderRadius: 999, padding: '5px 14px',
                fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', fontWeight: 700,
                color: '#7dd3fc', whiteSpace: 'nowrap',
              }}>
                Innovation Engine:<br />Integrated Domains
              </div>
            </div>

            <div className="home-projects-grid">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  whileHover={{ y: -6, boxShadow: '0 32px 64px -16px rgba(15,23,42,0.18)' }}
                  style={{
                    background: 'rgba(255,255,255,0.72)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(226,232,240,0.75)',
                    borderRadius: 18,
                    overflow: 'hidden',
                    boxShadow: '0 12px 32px -8px rgba(15,23,42,0.1)',
                    cursor: 'pointer',
                    transition: 'all 0.3s cubic-bezier(0.16,1,0.3,1)',
                  }}
                >
                  {/* Full-width tall project image */}
                  <div style={{ position: 'relative', height: 200, overflow: 'hidden' }}>
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        decoding="async"
                        style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block',
                          transition: 'transform 0.5s ease', willChange: 'transform' }}
                        onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                        onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}
                      />
                    ) : (
                      <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg,#e0e7ff,#c7d2fe)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: 800, color: '#4f46e5' }}>
                        {project.title.substring(0, 2)}
                      </div>
                    )}
                    {/* Top-left brand tag */}
                    <div style={{
                      position: 'absolute', top: 12, left: 12,
                      background: 'rgba(255,255,255,0.88)', backdropFilter: 'blur(8px)',
                      borderRadius: 999, padding: '3px 10px',
                      fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: '#0f172a',
                    }}>
                      {project.title.split(' ')[0]}
                    </div>
                    {/* Core venture badge */}
                    {project.featured && (
                      <span style={{
                        position: 'absolute', top: 12, right: 12,
                        background: 'rgba(15,23,42,0.78)', backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(56,189,248,0.4)',
                        borderRadius: 999, padding: '3px 10px',
                        fontFamily: "'Space Mono',monospace", fontSize: '0.6rem', fontWeight: 700, color: '#7dd3fc',
                        display: 'flex', alignItems: 'center', gap: 5,
                      }}>
                        <FiCpu size={10} /> Core Venture
                      </span>
                    )}
                  </div>

                  {/* Card body */}
                  <div style={{ padding: '18px 20px 20px' }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '1.05rem', fontWeight: 700, color: '#0f172a', marginBottom: 8, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                    <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.6, marginBottom: 14 }}>
                      {project.description}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 16 }}>
                      {project.tags.map((tag) => (
                        <span key={tag} style={{
                          fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', fontWeight: 700,
                          background: 'rgba(241,245,249,0.9)', border: '1px solid rgba(203,213,225,0.8)',
                          borderRadius: 6, padding: '3px 8px', color: '#334155',
                        }}>{tag}</span>
                      ))}
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <div style={{ display: 'flex', gap: 8 }}>
                        {project.demo && (
                          <a href={project.demo} target="_blank" rel="noopener noreferrer" style={{
                            width: 32, height: 32, borderRadius: 8, background: 'rgba(241,245,249,0.9)',
                            border: '1px solid rgba(203,213,225,0.7)', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', color: '#475569', textDecoration: 'none',
                          }} aria-label={`Visit ${project.title}`}>
                            <FiExternalLink size={15} />
                          </a>
                        )}
                        {project.github && (
                          <a href={project.github} target="_blank" rel="noopener noreferrer" style={{
                            width: 32, height: 32, borderRadius: 8, background: 'rgba(241,245,249,0.9)',
                            border: '1px solid rgba(203,213,225,0.7)', display: 'flex', alignItems: 'center',
                            justifyContent: 'center', color: '#475569', textDecoration: 'none',
                          }} aria-label={`GitHub ${project.title}`}>
                            <FiGithub size={15} />
                          </a>
                        )}
                      </div>
                      <button onClick={() => onSelectProject(project)} style={{
                        display: 'inline-flex', alignItems: 'center', gap: 6,
                        background: 'transparent', border: 'none',
                        fontFamily: "'Space Mono',monospace", fontSize: '0.68rem', fontWeight: 700,
                        color: '#2563eb', cursor: 'pointer', padding: 0,
                      }}>
                        <span>System Details</span>
                        <FiMaximize2 size={12} />
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Section 3: Core Engineering Stack — 3D Sphere Design */}
        <section style={{ paddingBottom: '80px', position: 'relative' }}>

          {/* Header row — no white wrapper, sits on gradient */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '20px', marginBottom: '32px' }}
          >
            <div>
              <div className="section-tag">03 / TECHNICAL TOOLCHAIN</div>
              <h2 className="section-title" style={{ color: '#0f1e38' }}>Core Engineering Stack</h2>
              <p className="section-subtitle" style={{ maxWidth: 420 }}>
                High-level breakdown of production software stacks,<br />
                Web Serial hardware APIs, and AI models.
              </p>
            </div>
            <button onClick={() => navigate('/skills')} style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              background: '#2563eb', border: 'none', borderRadius: 12,
              padding: '12px 22px', cursor: 'pointer',
              fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.9rem', fontWeight: 600, color: '#fff',
              boxShadow: '0 6px 20px -4px rgba(37,99,235,0.45)',
            }}>
              Explore Full Stack <FiArrowRight size={16} />
            </button>
          </motion.div>

          {/* 3 Spheres Stage */}
          <div style={{ position: 'relative' }}>

            {/* SVG connection lines */}
            <svg
              className="spheres-svg-lines"
              viewBox="0 0 1000 320"
              preserveAspectRatio="none"
              style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '320px', zIndex: 1, pointerEvents: 'none', overflow: 'visible' }}
            >
              <defs>
                <filter id="sg1" x="-50%" y="-50%" width="200%" height="200%">
                  <feGaussianBlur stdDeviation="4" result="b"/>
                  <feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge>
                </filter>
              </defs>

              {/* LEFT sphere equator (167, 195) → CENTER sphere equator (500, 175) */}
              <path d="M 167 195 C 280 205 400 178 500 175" stroke="rgba(34,211,238,0.15)" strokeWidth="28" fill="none" strokeLinecap="round"/>
              <path d="M 167 195 C 280 205 400 178 500 175" stroke="rgba(34,211,238,0.45)" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M 167 195 C 280 205 400 178 500 175" stroke="#22d3ee" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#sg1)">
                <animate attributeName="stroke-dashoffset" from="450" to="0" dur="2.2s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dasharray" from="0 450" to="450 0" dur="2.2s" repeatCount="indefinite"/>
              </path>

              {/* CENTER sphere equator (500, 175) → RIGHT sphere equator (833, 195) */}
              <path d="M 500 175 C 600 178 720 205 833 195" stroke="rgba(52,211,153,0.15)" strokeWidth="28" fill="none" strokeLinecap="round"/>
              <path d="M 500 175 C 600 178 720 205 833 195" stroke="rgba(52,211,153,0.45)" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <path d="M 500 175 C 600 178 720 205 833 195" stroke="#34d399" strokeWidth="2" fill="none" strokeLinecap="round" filter="url(#sg1)">
                <animate attributeName="stroke-dashoffset" from="450" to="0" dur="2.6s" repeatCount="indefinite"/>
                <animate attributeName="stroke-dasharray" from="0 450" to="450 0" dur="2.6s" repeatCount="indefinite"/>
              </path>
            </svg>

            {/* 3-column grid — flex-start so marginTop creates arch */}
            <div className="spheres-3d-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0px', position: 'relative', zIndex: 2, alignItems: 'flex-start' }}>

              {/* Sphere 1: Languages & WASM — pushed DOWN 50px */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
              >
                <div style={{ position: 'relative', width: 'min(100%, 290px)' }}>
                  <img
                    src="/images/3d/sphere_code.jpg"
                    alt="Languages & WASM"
                    style={{
                      width: '100%', display: 'block',
                      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 47%, black 65%, transparent 88%)',
                      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 47%, black 65%, transparent 88%)',
                      filter: 'drop-shadow(0 16px 40px rgba(37,99,235,0.35))',
                    }}
                  />
                  <div style={{
                    position: 'absolute', bottom: '8%', left: '4%', right: '4%', zIndex: 2,
                    background: 'rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 14, padding: '10px 14px',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                  }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: 3, lineHeight: 1.25 }}>
                      Languages &amp; WASM
                    </h3>
                    <p style={{ fontSize: '0.72rem', color: '#1e3a5f', lineHeight: 1.5, margin: 0 }}>
                      TypeScript, Python 3.x, Rust WebAssembly, C++, SQL Schema Architecture
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sphere 2: Hardware & Web Serial — at TOP (marginTop:0), largest, most prominent */}
              <motion.div
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 0 }}
              >
                <div style={{ position: 'relative', width: 'min(100%, 350px)' }}>
                  <img
                    src="/images/3d/sphere_hardware.jpg"
                    alt="Hardware & Web Serial"
                    style={{
                      width: '100%', display: 'block',
                      WebkitMaskImage: 'radial-gradient(ellipse 50% 50% at 50% 47%, black 65%, transparent 88%)',
                      maskImage: 'radial-gradient(ellipse 50% 50% at 50% 47%, black 65%, transparent 88%)',
                      filter: 'drop-shadow(0 22px 52px rgba(6,182,212,0.42))',
                    }}
                  />
                  <div style={{
                    position: 'absolute', bottom: '6%', left: '4%', right: '4%', zIndex: 2,
                    background: 'rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 14, padding: '10px 14px',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                  }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: 3, lineHeight: 1.25 }}>
                      Hardware &amp; Web Serial
                    </h3>
                    <p style={{ fontSize: '0.72rem', color: '#1e3a5f', lineHeight: 1.5, margin: 0 }}>
                      Web Serial API, G-Code Logic, WebSockets, 3D Canvas Machine Control
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Sphere 3: AI & Cybersecurity — pushed DOWN 50px matching left */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.2 }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}
              >
                <div style={{ position: 'relative', width: 'min(100%, 290px)' }}>
                  <img
                    src="/images/3d/sphere_cyber.jpg"
                    alt="AI & Cybersecurity"
                    style={{
                      width: '100%', display: 'block',
                      WebkitMaskImage: 'radial-gradient(ellipse 50% 46% at 50% 44%, black 65%, transparent 88%)',
                      maskImage: 'radial-gradient(ellipse 50% 46% at 50% 44%, black 65%, transparent 88%)',
                      filter: 'drop-shadow(0 16px 40px rgba(139,92,246,0.35))',
                    }}
                  />
                  <div style={{
                    position: 'absolute', bottom: '6%', left: '4%', right: '4%', zIndex: 2,
                    background: 'rgba(255,255,255,0.14)',
                    backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.3)',
                    borderRadius: 14, padding: '10px 14px',
                    boxShadow: '0 2px 16px rgba(15,23,42,0.06)',
                  }}>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.92rem', fontWeight: 700, color: '#0f172a', marginBottom: 3, lineHeight: 1.25 }}>
                      AI &amp; Cybersecurity
                    </h3>
                    <p style={{ fontSize: '0.72rem', color: '#1e3a5f', lineHeight: 1.5, margin: 0 }}>
                      YOLOv8, OpenCV, Gemini API, Penetration Testing &amp; OSCP Guidelines
                    </p>
                  </div>
                </div>
              </motion.div>

            </div>

          </div>
        </section>

        {/* Section 4: High-Impact Conversion Banner — 3D Glass Slab Container */}
        <section style={{ paddingBottom: '80px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              borderRadius: '28px',
              padding: '8px',
              background: 'linear-gradient(135deg, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.15) 45%, rgba(255,255,255,0.4) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.6)',
              boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.35), inset 0 2px 4px rgba(255, 255, 255, 0.9), inset 0 -2px 4px rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(24px)',
            }}
          >
            {/* Inner Dark Glossy Container */}
            <div
              className="banner-3d-inner-box"
              style={{
                position: 'relative',
                borderRadius: '22px',
                background: 'linear-gradient(135deg, #050a14 0%, #0a1324 50%, #060e1d 100%)',
                padding: '48px 52px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                minHeight: '380px',
              }}
            >
              {/* Subtle background glow & circuit grid overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(circle at 80% 50%, rgba(37, 99, 235, 0.18) 0%, transparent 60%), radial-gradient(circle at 10% 20%, rgba(6, 182, 212, 0.1) 0%, transparent 40%)',
                pointerEvents: 'none',
              }} />

              {/* Left Column — Content & Glass Controls */}
              <div className="banner-3d-content" style={{ position: 'relative', zIndex: 3, maxWidth: '520px' }}>
                {/* Monospace Ticker Tag */}
                <div className="banner-3d-ticker" style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.7rem',
                  color: '#60a5fa',
                  fontWeight: 700,
                  letterSpacing: '0.04em',
                  marginBottom: '20px',
                  whiteSpace: 'nowrap',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  maxWidth: '100%',
                }}>
                  <FiCheckCircle size={14} color="#60a5fa" />
                  <span>AVAILABLE FOR CONTRACTS &amp; CONSULTING — DISCUSS HOW WE CAN ENGINEER CUSTOM WEB PLATFORMS, HARDWARE SERIAL TOOLS...</span>
                </div>

                {/* Headline */}
                <h2 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: 'clamp(1.7rem, 4.5vw, 2.6rem)',
                  lineHeight: 1.15,
                  fontWeight: 300,
                  color: '#ffffff',
                  marginBottom: '20px',
                }}>
                  Ready to build<br />
                  <span style={{ fontWeight: 700, color: '#ffffff' }}>something exceptional?</span>
                </h2>

                {/* Translucent Glass Pill Description Box */}
                <div style={{
                  background: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  borderRadius: '14px',
                  padding: '14px 18px',
                  marginBottom: '32px',
                  boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
                }}>
                  <p style={{ color: '#94a3b8', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
                    Let's discuss how we can engineer custom web platforms, hardware serial tools, or AI pipelines for your project.
                  </p>
                </div>

                {/* 3D Glass & Sapphire Crystal Action Buttons */}
                <div className="banner-3d-btns" style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
                  {/* Button 1: 3D Translucent Glass Block */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/experience')}
                    className="banner-3d-btn"
                    style={{
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 100%)',
                      border: '1px solid rgba(255, 255, 255, 0.35)',
                      borderRadius: '12px',
                      padding: '14px 24px',
                      color: '#ffffff',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 600,
                      fontSize: '0.88rem',
                      backdropFilter: 'blur(16px)',
                      WebkitBackdropFilter: 'blur(16px)',
                      boxShadow: '0 10px 25px rgba(0, 0, 0, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.6), inset 0 -2px 4px rgba(0, 0, 0, 0.5), 0 4px 0 rgba(255, 255, 255, 0.12)',
                      cursor: 'pointer',
                    }}
                  >
                    View Career Trajectory
                  </motion.button>

                  {/* Button 2: 3D Glowing Sapphire Blue Crystal Block */}
                  <motion.button
                    whileHover={{ scale: 1.03, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => navigate('/contact')}
                    className="banner-3d-btn"
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #1e40af 100%)',
                      border: '1px solid rgba(147, 197, 253, 0.7)',
                      borderRadius: '12px',
                      padding: '14px 28px',
                      color: '#ffffff',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.88rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      cursor: 'pointer',
                      boxShadow: '0 12px 35px -4px rgba(37, 99, 235, 0.7), inset 0 2px 2px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.5), 0 0 30px rgba(37, 99, 235, 0.6)',
                    }}
                  >
                    <span>Initiate Contact</span>
                    <FiArrowRight size={16} />
                  </motion.button>
                </div>
              </div>

              {/* Right Column — 3D Floating Tech Assets */}
              <div
                className="banner-3d-right-assets"
                style={{
                  position: 'absolute',
                  right: '-20px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  width: '52%',
                  height: '110%',
                  pointerEvents: 'none',
                  zIndex: 2,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img
                  src="/images/3d/banner_3d_assets.jpg"
                  alt="3D Technology Assets"
                  loading="lazy"
                  decoding="async"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'contain',
                    filter: 'drop-shadow(0 20px 50px rgba(37, 99, 235, 0.35))',
                    willChange: 'transform',
                  }}
                />
              </div>

            </div>
          </motion.div>
        </section>

      </div>

      <style>{`
        .bento-focus-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
        }

        .home-projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .quick-domains-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }

        .project-card { display: flex; flex-direction: column; overflow: hidden; }
        .card-visual { position: relative; height: 220px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; overflow: hidden; }
        .card-img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .project-card:hover .card-img { transform: scale(1.04); }
        .logo-container { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; padding: 24px; }
        .card-logo { max-height: 100%; max-width: 100%; object-fit: contain; }
        .card-fallback { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; font-family: 'Space Grotesk', sans-serif; font-size: 2.5rem; font-weight: 700; color: #cbd5e1; }
        .core-badge { position: absolute; top: 16px; right: 16px; display: inline-flex; align-items: center; gap: 6px; background: #ffffff; border: 1px solid #e2e8f0; padding: 4px 12px; border-radius: 999px; font-family: 'Space Mono', monospace; font-size: 0.72rem; font-weight: 700; color: #2563eb; box-shadow: var(--shadow-sm); }
        .card-body { padding: 28px; display: flex; flex-direction: column; flex-grow: 1; }
        .card-title { font-family: 'Space Grotesk', sans-serif; font-size: 1.4rem; font-weight: 700; color: #0f172a; margin-bottom: 12px; }
        .card-desc { font-size: 0.95rem; color: #475569; line-height: 1.6; margin-bottom: 24px; flex-grow: 1; }
        .card-tags { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 24px; }
        .tech-badge { font-size: 0.78rem; font-weight: 600; color: #334155; background: #f1f5f9; border: 1px solid #e2e8f0; padding: 4px 10px; border-radius: 6px; }
        .card-footer { display: flex; justify-content: space-between; align-items: center; padding-top: 20px; border-top: 1px solid #f1f5f9; }
        .action-links { display: flex; gap: 8px; }
        .link-icon { display: flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 10px; background: #f8fafc; border: 1px solid #e2e8f0; color: #475569; transition: all 0.2s ease; }
        .link-icon:hover { border-color: #cbd5e1; color: #0f172a; }
        .link-icon.primary { background: rgba(37, 99, 235, 0.08); border-color: rgba(37, 99, 235, 0.2); color: #2563eb; }
        .link-icon.primary:hover { background: #2563eb; color: #ffffff; }
        .details-btn { display: flex; align-items: center; gap: 6px; background: none; border: none; font-family: 'Space Mono', monospace; font-size: 0.78rem; font-weight: 700; color: #2563eb; cursor: pointer; transition: color 0.2s; }
        .details-btn:hover { color: #1d4ed8; }

        @media (max-width: 900px) {
          .bento-focus-grid { grid-template-columns: 1fr; }
          .home-projects-grid { grid-template-columns: 1fr; }
          .quick-domains-grid { grid-template-columns: 1fr; }
          .spheres-3d-grid {
            grid-template-columns: 1fr !important;
            gap: 36px !important;
          }
          .spheres-3d-grid > motion.div,
          .spheres-3d-grid > div {
            margin-top: 0 !important;
            padding-top: 0 !important;
          }
          .spheres-svg-lines {
            display: none !important;
          }
          .banner-3d-inner-box {
            flex-direction: column !important;
            padding: 28px 16px !important;
            min-height: auto !important;
            width: 100% !important;
            box-sizing: border-box !important;
          }
          .banner-3d-content {
            width: 100% !important;
            max-width: 100% !important;
          }
          .banner-3d-ticker {
            white-space: normal !important;
            font-size: 0.65rem !important;
            line-height: 1.4 !important;
          }
          .banner-3d-btns {
            flex-direction: column !important;
            width: 100% !important;
            gap: 12px !important;
          }
          .banner-3d-btn {
            width: 100% !important;
            justify-content: center !important;
            text-align: center !important;
            padding: 14px 16px !important;
          }
          .banner-3d-right-assets {
            position: relative !important;
            right: 0 !important;
            top: 0 !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            height: 180px !important;
            margin-top: 20px !important;
          }
        }
      `}</style>
    </div>
  );
}

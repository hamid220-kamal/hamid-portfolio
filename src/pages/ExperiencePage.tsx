import { motion } from 'framer-motion';
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink, FiArrowRight, FiCheckCircle, FiCpu } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';

export default function ExperiencePage() {
  const { navigate } = useRouter();

  return (
    <div style={{ paddingTop: '110px', paddingBottom: '80px' }}>
      <div className="container">
        
        {/* Page Header Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
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
            04 / CAREER TRAJECTORY &amp; ROLES
          </div>

          {/* 3D Floating Metallic Chrome Title */}
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
            maxWidth: '920px',
            margin: '0 auto 20px',
          }}>
            Professional Experience &amp; Technical Leadership
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
              A chronological timeline detailing engineering outcomes across founder initiatives, high-availability web platforms, and AI research internships.
            </p>
          </div>
        </motion.div>

        {/* Main Experience Layout (Left Vertical Stepper Pipeline + Right Experience Cards Stack) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '300px 1fr',
          gap: '36px',
          alignItems: 'start',
          marginBottom: '80px',
        }} className="experience-main-grid">
          
          {/* LEFT COLUMN: Vertical Timeline Stepper Pipeline (Exact match to Image 2) */}
          <div style={{
            position: 'sticky',
            top: '120px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            paddingLeft: '16px',
            borderLeft: '2px solid rgba(37, 99, 235, 0.4)',
          }}>
            
            {/* Step 1: Executive CTO Role */}
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              <div style={{
                position: 'absolute',
                left: '-27px',
                top: '4px',
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                background: '#2563eb',
                boxShadow: '0 0 12px #2563eb',
              }} />
              <div style={{
                background: 'linear-gradient(135deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.6) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1.5px solid rgba(37, 99, 235, 0.4)',
                borderRadius: '16px',
                padding: '16px 20px',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.1)',
              }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Executive CTO Role
                </div>
                <div style={{ fontSize: '0.78rem', color: '#64748b', fontFamily: "'Space Mono', monospace", marginBottom: '6px' }}>
                  Aug 2024 - Present &bull; Learn Quran
                </div>
                <div style={{ fontSize: '0.76rem', color: '#1e40af', fontWeight: 600 }}>
                  CTO @ Learn Quran &amp; Co-Founder
                </div>
              </div>
            </div>

            {/* Step 2: Technical Internships */}
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              <div style={{
                position: 'absolute',
                left: '-26px',
                top: '4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#cbd5e1',
                border: '2px solid #ffffff',
              }} />
              <div style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '16px',
                padding: '16px 20px',
              }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Technical Internships
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748b', fontFamily: "'Space Mono', monospace" }}>
                  Web Architecture, RAG AI Systems, Computer Vision
                </div>
              </div>
            </div>

            {/* Step 3: Active Since 2024 */}
            <div style={{ position: 'relative', paddingLeft: '20px' }}>
              <div style={{
                position: 'absolute',
                left: '-26px',
                top: '4px',
                width: '10px',
                height: '10px',
                borderRadius: '50%',
                background: '#cbd5e1',
                border: '2px solid #ffffff',
              }} />
              <div style={{
                background: 'rgba(255, 255, 255, 0.65)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                border: '1px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '16px',
                padding: '16px 20px',
              }}>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                  Active Since 2024
                </div>
                <div style={{ fontSize: '0.76rem', color: '#64748b', fontFamily: "'Space Mono', monospace" }}>
                  Continuous Software Delivery &amp; R&amp;D
                </div>
              </div>
            </div>

            {/* 3D Quantum Trajectory Orbit Sculpture Showcase Stage */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{
                marginTop: '12px',
                position: 'relative',
                borderRadius: '24px',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                padding: '20px',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.12), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              {/* Header Badge */}
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#2563eb',
                letterSpacing: '0.05em',
                marginBottom: '12px',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: '999px',
                padding: '4px 12px',
              }}>
                QUANTUM CORE RADAR
              </div>

              {/* Animated 3D Orbit Sculpture Stage */}
              <div style={{
                width: '100%',
                height: '320px',
                borderRadius: '18px',
                overflow: 'hidden',
                position: 'relative',
                background: 'linear-gradient(135deg, rgba(219,234,254,0.4) 0%, rgba(239,246,255,0.2) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <motion.img
                  animate={{
                    y: [-6, 6, -6],
                    rotate: [0, 3, -3, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  src="/images/3d/career_3d_tower_sculpture.jpg"
                  alt="3D Quantum Trajectory Orbit Sculpture"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    mixBlendMode: 'multiply',
                    filter: 'drop-shadow(0 15px 30px rgba(37, 99, 235, 0.25))',
                  }}
                />
              </div>
            </motion.div>

          </div>

          {/* RIGHT COLUMN: Experience Cards Stack (Exact match to Image 2 layout) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            
            {/* Card 1: CTO Learn Quran */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.1), inset 0 2px 3px rgba(255, 255, 255, 0.9)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '32px', alignItems: 'start' }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '12px',
                  }}>
                    <FiBriefcase size={12} /> EXECUTIVE CTO
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    Chief Technology Officer (CTO)
                  </h2>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2563eb', marginBottom: '14px' }}>
                    Learn Quran
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
                    <span><FiCalendar size={13} /> Aug 2024 - Present</span>
                    <span><FiMapPin size={13} /> Remote</span>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(203, 213, 225, 0.6)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                  }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: "'Space Mono', monospace", marginBottom: '2px' }}>
                      Co-Founder &amp; Lead Strategist:
                    </div>
                    <a href="https://linkedin.com/in/danish-imran" target="_blank" rel="noopener noreferrer" style={{ color: '#2563eb', fontWeight: 700, fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                      <span>Danish Imran</span>
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiCheckCircle size={18} color="#2563eb" /> Key Engineering Deliverables
                  </h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    <li>Serving as CTO, leading the core technical architecture, product engineering, and digital infrastructure for a global Islamic EdTech platform (learnquran.app).</li>
                    <li>Pioneered high-availability real-time communication protocols that maintain low-latency audio sync for students and teachers across divergent global network conditions.</li>
                    <li>Architected global learning ecosystem using Next.js 15, Node.js microservices, and robust cloud-native infrastructures.</li>
                    <li>Overseeing technical strategy, engineering roadmaps, performance optimization, and platform security.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Card 2: Former Co-Founder & Lead Systems Engineer */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.1), inset 0 2px 3px rgba(255, 255, 255, 0.9)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '32px', alignItems: 'start' }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(5, 150, 105, 0.1)',
                    border: '1px solid rgba(5, 150, 105, 0.25)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#059669',
                    marginBottom: '12px',
                  }}>
                    <FiBriefcase size={12} /> FORMER CO-FOUNDER
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    Former Co-Founder &amp; Lead Systems Engineer
                  </h2>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#059669', marginBottom: '14px' }}>
                    CNC Jugaaadi
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
                    <span><FiCalendar size={13} /> Feb 2023 - Present</span>
                    <span><FiMapPin size={13} /> Remote / Hybrid</span>
                  </div>

                  <div style={{
                    background: 'rgba(255, 255, 255, 0.7)',
                    border: '1px solid rgba(203, 213, 225, 0.6)',
                    borderRadius: '12px',
                    padding: '10px 14px',
                  }}>
                    <div style={{ fontSize: '0.72rem', color: '#64748b', fontFamily: "'Space Mono', monospace", marginBottom: '2px' }}>
                      Co-Founder &amp; Lead Strategist:
                    </div>
                    <a href="https://linkedin.com/in/mateen-ahmed-khan" target="_blank" rel="noopener noreferrer" style={{ color: '#059669', fontWeight: 700, fontSize: '0.86rem', display: 'inline-flex', alignItems: 'center', gap: '4px', textDecoration: 'none' }}>
                      <span>Mateen Ahmed Khan</span>
                      <FiExternalLink size={12} />
                    </a>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiCheckCircle size={18} color="#059669" /> Key Engineering Deliverables
                  </h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    <li>Engineered 'Design Swiftly', a browser-based CAD/CAM engine that enables direct hardware communication via Web Serial API for CNC machinery.</li>
                    <li>Engineered autonomous Toolpath generation systems integrated with Gemini 2.0 AI, enabling natural language translation into industrial machine execution.</li>
                    <li>Spearheaded core R&amp;D efforts in real-time 3D material removal simulation and G-Code parsing logic.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Middle Split Grid: Internships + 3D Cyber Data Query Stage (Exact Match to Image 2) */}
            <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', alignItems: 'stretch' }}>
              
              {/* Left Column: Web Architecture & AI Systems Intern Cards */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                
                {/* Card 3: Web Architecture Intern */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.15 }}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.85)',
                    borderRadius: '24px',
                    padding: '24px',
                    boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '8px',
                  }}>
                    INTERNSHIP
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>
                    Web Architecture Intern
                  </h3>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                    Amdocs Technologies
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '12px', fontFamily: "'Space Mono', monospace" }}>
                    Feb 2026 - Mar 2026 &bull; India
                  </div>
                  <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                    <li>Contributed to development of enterprise-grade landing systems, focusing on performance optimization and technical SEO for high-traffic environments.</li>
                    <li>Implemented advanced frontend patterns to ensure seamless UX across complex industrial client dashboards.</li>
                  </ul>
                </motion.div>

                {/* Card 4: AI Systems Intern */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  style={{
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
                    backdropFilter: 'blur(24px)',
                    WebkitBackdropFilter: 'blur(24px)',
                    border: '1.5px solid rgba(255, 255, 255, 0.85)',
                    borderRadius: '24px',
                    padding: '24px',
                    boxShadow: '0 16px 36px -8px rgba(15, 23, 42, 0.08)',
                  }}
                >
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(217, 119, 6, 0.08)',
                    border: '1px solid rgba(217, 119, 6, 0.2)',
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 700,
                    color: '#d97706',
                    marginBottom: '8px',
                  }}>
                    INTERNSHIP
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '2px' }}>
                    AI Systems Intern
                  </h3>
                  <div style={{ fontSize: '0.92rem', fontWeight: 700, color: '#475569', marginBottom: '8px' }}>
                    Syntecxhub
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748b', marginBottom: '12px', fontFamily: "'Space Mono', monospace" }}>
                    Jan 2026 - Feb 2026 &bull; Remote
                  </div>
                  <ul style={{ paddingLeft: '16px', margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', fontSize: '0.85rem', color: '#334155', lineHeight: 1.5 }}>
                    <li>Conducted research and implementation of RAG-based knowledge retrieval systems for automated document intelligence.</li>
                    <li>Optimized inference pipelines of lightweight LLMs to deliver real-time insights within constrained web environments.</li>
                  </ul>
                </motion.div>

              </div>

              {/* Right Column: 3D Cyber Data Query Diorama Stage Visual */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                style={{
                  position: 'relative',
                  borderRadius: '24px',
                  overflow: 'hidden',
                  border: '1.5px solid rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.15)',
                  background: '#050c1a',
                }}
              >
                <img
                  src="/images/3d/experience_3d_query_stage.jpg"
                  alt="3D Data Query Dashboard Stage"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                />
              </motion.div>

            </div>

            {/* Card 5: Computer Vision Intern (with Object Detector Scanner Badge) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.25 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
                backdropFilter: 'blur(24px)',
                WebkitBackdropFilter: 'blur(24px)',
                border: '1.5px solid rgba(255, 255, 255, 0.85)',
                borderRadius: '24px',
                padding: '32px',
                boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.1), inset 0 2px 3px rgba(255, 255, 255, 0.9)',
              }}
            >
              <div style={{ display: 'grid', gridTemplateColumns: '0.85fr 1.15fr', gap: '32px', alignItems: 'center' }}>
                <div>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    background: 'rgba(37, 99, 235, 0.08)',
                    border: '1px solid rgba(37, 99, 235, 0.2)',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.72rem',
                    fontWeight: 700,
                    color: '#2563eb',
                    marginBottom: '12px',
                  }}>
                    INTERNSHIP
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.4rem', fontWeight: 800, color: '#0f172a', marginBottom: '4px' }}>
                    Computer Vision Intern
                  </h2>
                  <div style={{ fontSize: '1.05rem', fontWeight: 700, color: '#2563eb', marginBottom: '14px' }}>
                    Codec Technologies India
                  </div>
                  <div style={{ fontSize: '0.82rem', color: '#64748b', display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '16px' }}>
                    <span><FiCalendar size={13} /> Dec 2025 - Jan 2026</span>
                    <span><FiMapPin size={13} /> Remote</span>
                  </div>

                  {/* Integrated Object Detector Scanner Badge */}
                  <div style={{
                    width: '120px',
                    height: '80px',
                    borderRadius: '12px',
                    background: 'linear-gradient(135deg, rgba(37,99,235,0.1) 0%, rgba(37,99,235,0.02) 100%)',
                    border: '1.5px stroke #2563eb',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderStyle: 'dashed',
                  }}>
                    <FiCpu size={22} color="#2563eb" />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 800, color: '#2563eb', marginTop: '4px' }}>
                      Object Detector
                    </span>
                  </div>
                </div>

                <div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 700, color: '#0f172a', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <FiCheckCircle size={18} color="#2563eb" /> Key Engineering Deliverables
                  </h3>
                  <ul style={{ paddingLeft: '18px', margin: 0, display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.9rem', color: '#334155', lineHeight: 1.6 }}>
                    <li>Developed and validated computer vision algorithms using YOLOv8 for high-precision real-time object detection and density tracking.</li>
                    <li>Implemented automated data augmentation pipelines to enhance the robustness of deep learning models against edge-case variances.</li>
                    <li>Assisted in the integration of AI modules into client-facing automation suites, improving operational efficiency by 20%.</li>
                  </ul>
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* Bottom CTA Banner — 3D Cyber Console Dark Showcase Stage */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            position: 'relative',
            marginTop: '40px',
            borderRadius: '26px',
            background: 'linear-gradient(145deg, #050b17 0%, #0a1428 50%, #060f20 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            padding: '40px 48px',
            boxShadow: '0 30px 70px -15px rgba(5, 11, 23, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            overflow: 'hidden',
          }}
        >
          {/* Left Content Column */}
          <div style={{ position: 'relative', zIndex: 3, maxWidth: '580px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '999px',
              padding: '4px 14px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#38bdf8',
              letterSpacing: '0.04em',
              marginBottom: '14px',
            }}>
              ENGINEERING COLLABORATION
            </div>

            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '10px',
              letterSpacing: '-0.02em',
            }}>
              Want to collaborate or discuss an engineering role?
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: '0 0 24px 0', lineHeight: 1.55, fontWeight: 500 }}>
              I'm open for technical consulting, AI development contracts, and engineering leadership opportunities.
            </p>

            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #6366f1 100%)',
                border: '2px solid rgba(191, 219, 254, 0.8)',
                borderRadius: '999px',
                padding: '16px 38px',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.96rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                boxShadow: '0 14px 40px -4px rgba(37, 99, 235, 0.85), inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span>Initiate Contact</span>
              <FiArrowRight size={18} />
            </motion.button>
          </div>

          {/* Right Column — 3D Orbital Sphere Floating Animation */}
          <motion.div
            className="hide-on-mobile"
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'relative',
              width: '360px',
              height: '220px',
              borderRadius: '20px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 15px 35px rgba(56, 189, 248, 0.25)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <img
              src="/images/3d/experience_cta_3d_sphere_banner.jpg"
              alt="3D Orbital Sphere Render Stage"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                willChange: 'transform',
              }}
            />
          </motion.div>
        </motion.div>

      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 32px;
        }

        .timeline-item {
          padding: 36px;
        }

        .timeline-split {
          display: grid;
          grid-template-columns: 0.8fr 1.2fr;
          gap: 40px;
          align-items: start;
        }

        .exp-type-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: 'Space Mono', monospace;
          font-size: 0.75rem;
          font-weight: 700;
          text-transform: uppercase;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.15);
          padding: 4px 10px;
          border-radius: 6px;
          margin-bottom: 12px;
        }

        .exp-role {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .exp-company {
          font-size: 1.05rem;
          font-weight: 600;
          color: #334155;
          margin-bottom: 16px;
        }

        .exp-details {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .exp-detail-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 0.85rem;
          color: #64748b;
        }

        .exp-partner-card {
          margin-top: 16px;
          padding: 12px 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .partner-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.88rem;
          font-weight: 600;
          color: #2563eb;
          text-decoration: none;
        }

        .exp-bullets {
          padding-left: 20px;
          display: flex;
          flex-direction: column;
          gap: 12px;
          color: #334155;
          font-size: 0.98rem;
          line-height: 1.65;
        }

        @media (max-width: 900px) {
          .timeline-split { grid-template-columns: 1fr; gap: 24px; }
          .mobile-hide-line { display: none; }
        }
      `}</style>
    </div>
  );
}

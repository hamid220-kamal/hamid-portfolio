import { motion } from 'framer-motion';
import { useRef } from 'react';
import { FiArrowRight, FiDownload, FiGithub, FiLinkedin } from 'react-icons/fi';

export default function ExecutiveHero() {
  const containerRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8 } 
    },
  };

  return (
    <section 
      id="home" 
      ref={containerRef}
      style={{ 
        minHeight: '85vh', 
        display: 'flex', 
        alignItems: 'center', 
        paddingTop: '140px',
        paddingBottom: '40px',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <div className="container">
        <motion.div 
          className="hero-grid"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <h1 className="sr-only">Hamid Kamal - 17-Year-Old AI Developer & Founder</h1>

          
          {/* Text Content */}
          <motion.div className="hero-content">
            {/* Label */}
            <motion.div
              variants={itemVariants}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 20px',
                background: 'rgba(99, 102, 241, 0.08)',
                border: '1px solid rgba(99, 102, 241, 0.15)',
                borderRadius: '99px',
                color: '#818cf8',
                fontSize: '0.85rem',
                fontWeight: 600,
                marginBottom: '32px',
                letterSpacing: '0.05em',
                textTransform: 'uppercase'
              }}
            >
              <motion.span 
                animate={{ scale: [1, 1.4, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#6366f1' }}
              />
              Pioneering Agentic AI Architecture
            </motion.div>

            {/* Headline */}
            <motion.h2
              variants={itemVariants}
              style={{
                fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
                fontWeight: 800,
                lineHeight: 0.9,
                marginBottom: '28px',
                letterSpacing: '-0.06em',
                color: '#f8fafc'
              }}
            >
              Building the <br />
              <span style={{ color: '#6366f1' }}>Intelligence</span> <br />
              of Tomorrow.
            </motion.h2>

            {/* Subheader */}
            <motion.p
              variants={itemVariants}
              style={{
                fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                color: '#ffffff',
                marginBottom: '56px',
                maxWidth: '600px',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              I am <span style={{ color: '#fff', fontWeight: 600 }}>Hamid Kamal</span>. A 17-year-old high school student (Class 12) and self-taught AI Developer architecting industrial-grade ecosystems and secure decentralized platforms.
            </motion.p>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="hero-actions"
            >
              <a href="#projects" className="btn-primary">
                View My Ventures
                <FiArrowRight size={20} />
              </a>
              <a href="/Hamid Kamal - Resume.pdf" className="btn-secondary" download>
                Executive CV
                <FiDownload size={18} />
              </a>

              <div style={{ display: 'flex', gap: '24px', marginLeft: '12px' }}>
                <a href="https://github.com/hamid220-kamal" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'} aria-label="Hamid Kamal's GitHub Profile"><FiGithub size={24} /></a>
                <a href="https://linkedin.com/in/hamid-kamal" target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', transition: 'color 0.3s' }} onMouseEnter={e => e.currentTarget.style.color = '#fff'} onMouseLeave={e => e.currentTarget.style.color = '#ffffff'} aria-label="Hamid Kamal's LinkedIn Profile"><FiLinkedin size={24} /></a>
              </div>
            </motion.div>
          </motion.div>

          {/* Photo Section */}
          <motion.div
            variants={itemVariants}
            style={{ position: 'relative', width: '100%', maxWidth: '420px', margin: '0 auto' }}
          >
            <motion.div 
              style={{ 
                aspectRatio: '4/5', 
                width: '100%', 
                background: '#0f172a', 
                borderRadius: '40px',
                overflow: 'hidden',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                boxShadow: '0 50px 100px -20px rgba(0, 0, 0, 0.6)'
              }}
            >
              <img 
                src="/images/hamid-ai-developer-portfolio.webp" 
                alt="Hamid Kamal - 17-year-old AI Developer and Founder profile picture" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </motion.div>

            {/* Founder Card - Enhanced */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="founder-card"
            >
              <div style={{ fontSize: '0.7rem', color: '#818cf8', fontWeight: 800, textTransform: 'uppercase', marginBottom: '6px', letterSpacing: '0.1em' }}>17-Year-Old Prodigy</div>
              <div style={{ fontSize: '1.25rem', fontWeight: 800, color: '#fff', marginBottom: '2px' }}>Hamid Kamal</div>
              <div style={{ fontSize: '0.9rem', color: '#ffffff', fontWeight: 500 }}>AI Developer & Founder</div>
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      <style>{`
        .hero-grid {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          gap: 80px;
          align-items: center;
        }

        .founder-card {
          position: absolute;
          bottom: 40px;
          left: -40px;
          padding: 28px 32px;
          background: rgba(15, 23, 42, 0.8);
          backdrop-filter: blur(32px);
          border-radius: 24px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5);
          z-index: 10;
        }

        .hero-actions {
          display: flex;
          gap: 24px;
          flex-wrap: wrap;
          align-items: center;
        }

        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 60px;
          }
          .hero-content {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-actions {
            justify-content: center;
          }
          .hero-actions > div {
            margin-left: 0 !important;
            justify-content: center;
            width: 100%;
          }
          .founder-card {
            left: 50%;
            transform: translateX(-50%);
            bottom: -30px;
            width: max-content;
          }
        }

        @media (max-width: 480px) {
          section#home {
            padding-top: 100px !important;
          }
          .hero-grid {
            gap: 60px;
          }
          .founder-card {
            padding: 20px 24px;
            bottom: -20px;
          }
        }
      `}</style>
    </section>
  );
}

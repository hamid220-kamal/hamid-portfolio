import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiAward, FiShield, FiCpu, FiCloud, FiCheckCircle, FiExternalLink } from 'react-icons/fi';
import { certificates, type Certificate } from '../data/certificates';

const categories = ['All', 'AI', 'Cybersecurity', 'Cloud', 'Other'];

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'Cybersecurity': return <FiShield size={20} />;
    case 'AI': return <FiCpu size={20} />;
    case 'Cloud': return <FiCloud size={20} />;
    default: return <FiAward size={20} />;
  }
};

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Cybersecurity': return '#34d399'; // Emerald
    case 'AI': return '#818cf8'; // Indigo
    case 'Cloud': return '#38bdf8'; // Sky
    default: return '#ffffff'; // Slate
  }
};

function CredentialCard({ cert, index }: { cert: Certificate, index: number }) {
  const color = getCategoryColor(cert.category);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="credential-card"
    >
      <div className="cred-glow-bg" style={{ background: `radial-gradient(circle at top right, ${color}15, transparent 70%)` }} />
      
      <div className="cred-inner">
        <div className="cred-header">
          <div className="cred-icon-box" style={{ color: color, background: `${color}10`, borderColor: `${color}20` }}>
            {getCategoryIcon(cert.category)}
          </div>
          <div className="cred-category" style={{ color: color, background: `${color}10`, borderColor: `${color}20` }}>
            {cert.category}
          </div>
        </div>

        <div className="cred-body">
          <h3 className="cred-title">{cert.title}</h3>
          <div className="cred-issuer">
            <FiCheckCircle size={14} className="verified-icon" />
            Issued by <span className="issuer-name">{cert.issuer}</span>
          </div>
        </div>

        <div className="cred-footer">
          <a href={`/Certificates/${cert.file}`} target="_blank" rel="noopener noreferrer" className="verify-btn">
            Verify Credential <FiExternalLink />
          </a>
        </div>
      </div>
    </motion.div>
  );
}

export default function Certificates() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const [activeCategory, setActiveCategory] = useState('All');

  const filteredCerts = certificates.filter(
    cert => activeCategory === 'All' || cert.category === activeCategory
  );

  return (
    <section id="certificates" className="section credentials-section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="credentials-header"
        >
          <div className="section-label">Verified Expertise</div>
          <h2 className="section-title">Professional Credentials</h2>
          <p className="section-subtitle">
            A curated index of rigorous technical certifications validating deep architectural expertise in AI, Cloud Infrastructure, and Offensive Cybersecurity.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <motion.div 
          className="filter-bar"
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {activeCategory === cat && (
                <motion.div layoutId="activeFilter" className="filter-active-bg" />
              )}
              <span className="filter-text">{cat}</span>
            </button>
          ))}
        </motion.div>

        {/* Credentials Grid */}
        <motion.div layout className="credentials-grid">
          <AnimatePresence mode="popLayout">
            {filteredCerts.map((cert, idx) => (
              <CredentialCard key={cert.id} cert={cert} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <style>{`
        .credentials-section {
          position: relative;
          background: transparent;
        }

        .credentials-header {
          text-align: center;
          margin-bottom: 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .filter-bar {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 48px;
        }

        .filter-btn {
          position: relative;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 8px 20px;
          border-radius: 99px;
          cursor: pointer;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          color: #ffffff;
          transition: color 0.3s;
          outline: none;
        }

        .filter-btn:hover {
          color: #f8fafc;
        }

        .filter-btn.active {
          color: #fff;
          border-color: transparent;
        }

        .filter-active-bg {
          position: absolute;
          inset: 0;
          background: rgba(99, 102, 241, 0.2);
          border: 1px solid rgba(99, 102, 241, 0.4);
          border-radius: 99px;
          z-index: 0;
        }

        .filter-text {
          position: relative;
          z-index: 1;
        }

        .credentials-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          gap: 24px;
        }

        .credential-card {
          position: relative;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          overflow: hidden;
          transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease;
        }

        .credential-card:hover {
          transform: translateY(-5px);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
        }

        .cred-glow-bg {
          position: absolute;
          inset: 0;
          pointer-events: none;
          z-index: 0;
          opacity: 0.5;
          transition: opacity 0.3s;
        }

        .credential-card:hover .cred-glow-bg {
          opacity: 1;
        }

        .cred-inner {
          position: relative;
          z-index: 1;
          padding: 24px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .cred-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .cred-icon-box {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          border: 1px solid transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .cred-category {
          font-size: 0.65rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          padding: 4px 10px;
          border-radius: 6px;
          border: 1px solid transparent;
        }

        .cred-body {
          flex-grow: 1;
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-bottom: 24px;
        }

        .cred-title {
          font-size: 1.15rem;
          font-weight: 700;
          color: #f8fafc;
          line-height: 1.4;
          letter-spacing: -0.01em;
        }

        .cred-issuer {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          color: #ffffff;
        }

        .verified-icon {
          color: #34d399;
        }

        .issuer-name {
          color: #ffffff;
          font-weight: 600;
        }

        .cred-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 16px;
        }

        .verify-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 0.85rem;
          font-weight: 700;
          color: #818cf8;
          text-decoration: none;
          transition: color 0.3s, gap 0.3s;
        }

        .verify-btn:hover {
          color: #c084fc;
          gap: 10px;
        }

        @media (max-width: 640px) {
          .credentials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

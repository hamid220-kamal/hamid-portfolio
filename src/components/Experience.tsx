import { motion } from 'framer-motion';
import { FiExternalLink, FiCalendar, FiMapPin, FiUsers, FiCornerDownRight } from 'react-icons/fi';
import { experiences, type Experience as ExperienceType } from '../data/experience';

function TimelineNode({ exp }: { exp: ExperienceType }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="timeline-item"
    >
      {/* Node Marker */}
      <div className="timeline-marker">
        <motion.div 
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, type: 'spring' }}
          className={`marker-dot ${exp.type === 'Founder' ? 'founder-dot' : 'intern-dot'}`}
        />
        <div className="marker-line" />
      </div>

      {/* Content Card */}
      <div className={`timeline-card ${exp.type === 'Founder' ? 'exp-founder-card' : ''}`}>
        
        <div className="timeline-header">
          <div className="header-left">
            <div className="title-group">
              <span className={`exp-badge ${exp.type === 'Founder' ? 'founder-badge' : 'intern-badge'}`}>
                {exp.type}
              </span>
              <h3 className="company-name">{exp.company}</h3>
            </div>
            <h4 className="role-title">{exp.role}</h4>
          </div>

          <div className="header-right">
            <div className="meta-item">
              <FiCalendar /> <span>{exp.period}</span>
            </div>
            <div className="meta-item">
              <FiMapPin /> <span>{exp.location}</span>
            </div>
          </div>
        </div>

        {exp.partner && (
          <div className="partner-box">
            <div className="partner-icon">
              <FiUsers size={18} />
            </div>
            <div className="partner-info">
              <span className="partner-label">In Partnership With</span>
              <a href={exp.partnerLink} target="_blank" rel="noopener noreferrer" className="partner-link">
                <span className="partner-name">{exp.partner}</span>
                <span className="partner-role">— {exp.partnerRole}</span>
                <FiExternalLink className="ext-icon" />
              </a>
            </div>
          </div>
        )}

        <ul className="desc-list">
          {exp.description.map((item, i) => (
            <li key={i} className="desc-item">
              <span className="desc-bullet">
                <FiCornerDownRight />
              </span>
              <span className="desc-text">{item}</span>
            </li>
          ))}
        </ul>

      </div>
    </motion.div>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section experience-section">
      <div className="container">
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="experience-header"
        >
          <div className="section-label">Professional Journey</div>
          <h2 className="section-title">Execution & Leadership</h2>
          <p className="section-subtitle">
            A track record of collaborative venture building, architectural strategy, and high-stakes engineering.
          </p>
        </motion.div>

        <div className="timeline-container">
          {/* Main Continuous Line */}
          <motion.div 
            initial={{ height: 0 }}
            whileInView={{ height: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="timeline-spine"
          />

          <div className="timeline-items">
            {experiences.map((exp) => (
              <TimelineNode key={exp.id} exp={exp} />
            ))}
          </div>
        </div>

      </div>

      <style>{`
        .experience-section {
          position: relative;
          background: transparent;
        }

        .experience-header {
          text-align: center;
          margin-bottom: 80px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .timeline-container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding-left: 40px;
        }

        .timeline-spine {
          position: absolute;
          left: 0;
          top: 0;
          width: 2px;
          background: linear-gradient(to bottom, #6366f1 0%, rgba(99, 102, 241, 0.1) 100%);
          border-radius: 2px;
          z-index: 0;
        }

        .timeline-items {
          display: flex;
          flex-direction: column;
          gap: 64px;
        }

        .timeline-item {
          position: relative;
          width: 100%;
        }

        .timeline-marker {
          position: absolute;
          left: -40px;
          top: 0;
          width: 40px;
          height: 100%;
          display: flex;
          justify-content: center;
          z-index: 1;
        }

        .marker-dot {
          position: absolute;
          top: 32px;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          border: 3px solid #0f172a;
          box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.8);
          transform: translateX(-50%);
          left: 1px;
        }

        .founder-dot {
          background: #34d399; /* Emerald for founders */
          box-shadow: 0 0 0 4px rgba(15, 23, 42, 0.8), 0 0 15px rgba(52, 211, 153, 0.5);
        }

        .intern-dot {
          background: #818cf8; /* Indigo for interns */
        }

        .timeline-card {
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          transition: transform 0.4s ease, border-color 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        .timeline-card:hover {
          transform: translateY(-4px);
          border-color: rgba(99, 102, 241, 0.3);
        }

        .exp-founder-card::before {
          content: '';
          position: absolute;
          top: 0; right: 0;
          width: 300px; height: 300px;
          background: radial-gradient(circle at top right, rgba(52, 211, 153, 0.05), transparent 70%);
          pointer-events: none;
        }

        .timeline-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 24px;
          margin-bottom: 32px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          padding-bottom: 24px;
        }

        .title-group {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-bottom: 8px;
          flex-wrap: wrap;
        }

        .exp-badge {
          padding: 4px 10px;
          font-size: 0.65rem;
          font-weight: 800;
          border-radius: 6px;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .founder-badge {
          background: rgba(52, 211, 153, 0.1);
          color: #34d399;
          border: 1px solid rgba(52, 211, 153, 0.2);
        }

        .intern-badge {
          background: rgba(148, 163, 184, 0.1);
          color: #ffffff;
          border: 1px solid rgba(148, 163, 184, 0.2);
        }

        .company-name {
          font-size: 1.6rem;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }

        .role-title {
          font-size: 1.15rem;
          font-weight: 600;
          color: #ffffff;
        }

        .header-right {
          display: flex;
          flex-direction: column;
          gap: 8px;
          align-items: flex-end;
        }

        .meta-item {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
        }

        .partner-box {
          display: flex;
          align-items: center;
          gap: 16px;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 16px 24px;
          border-radius: 16px;
          margin-bottom: 32px;
          transition: background 0.3s;
        }

        .partner-box:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .partner-icon {
          width: 40px; height: 40px;
          border-radius: 10px;
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .partner-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .partner-label {
          font-size: 0.7rem;
          color: #ffffff;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .partner-link {
          display: flex;
          align-items: center;
          gap: 8px;
          text-decoration: none;
          color: #f8fafc;
          transition: color 0.3s;
          flex-wrap: wrap;
        }

        .partner-link:hover {
          color: #818cf8;
        }

        .partner-name {
          font-weight: 700;
          font-size: 1rem;
        }

        .partner-role {
          color: #ffffff;
          font-size: 0.9rem;
        }

        .ext-icon {
          opacity: 0.5;
        }

        .desc-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .desc-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }

        .desc-bullet {
          color: #6366f1;
          margin-top: 4px;
          flex-shrink: 0;
        }

        .desc-text {
          color: #ffffff;
          font-size: 1.05rem;
          line-height: 1.7;
        }

        @media (max-width: 768px) {
          .timeline-container { padding-left: 20px; }
          .timeline-marker { left: -20px; width: 20px; }
          .timeline-card { padding: 24px; }
          .header-right { align-items: flex-start; margin-top: 16px; }
          .partner-box { flex-direction: column; align-items: flex-start; gap: 12px; }
        }

        @media (max-width: 480px) {
          .timeline-container { padding-left: 16px; }
          .timeline-marker { left: -16px; width: 16px; }
          .marker-dot { width: 12px; height: 12px; top: 24px; left: 0px; box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.8); }
          .founder-dot { box-shadow: 0 0 0 3px rgba(15, 23, 42, 0.8), 0 0 10px rgba(52, 211, 153, 0.5); }
          .timeline-card { padding: 16px; border-radius: 16px; width: 100%; box-sizing: border-box; overflow-wrap: break-word; }
          .company-name { font-size: 1.25rem; word-break: break-word; }
          .role-title { font-size: 0.95rem; }
          .desc-text { font-size: 0.9rem; }
          .timeline-header { gap: 12px; margin-bottom: 20px; padding-bottom: 16px; }
          .partner-box { padding: 12px; border-radius: 12px; gap: 10px; }
          .partner-icon { width: 32px; height: 32px; }
          .desc-item { gap: 10px; }
        }
      `}</style>
    </section>
  );
}

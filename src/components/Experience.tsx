import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiMapPin, FiCalendar, FiExternalLink } from 'react-icons/fi';
import { experiences } from '../data/experience';

export default function Experience() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <div className="section-tag">04 / TRAJECTORY & ROLES</div>
          <h2 className="section-title">Professional Experience</h2>
          <p className="section-subtitle">
            A chronological timeline of technical leadership roles, founder initiatives, and engineering internships across web systems and AI development.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="timeline">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="timeline-item editorial-card"
            >
              <div className="timeline-split">
                
                {/* Left Meta Info */}
                <div className="exp-meta">
                  <div className="exp-type-badge">
                    <FiBriefcase size={14} /> {exp.type}
                  </div>
                  <h3 className="exp-role">{exp.role}</h3>
                  <div className="exp-company">{exp.company}</div>

                  <div className="exp-details">
                    <span className="exp-detail-item">
                      <FiCalendar size={14} /> {exp.period}
                    </span>
                    <span className="exp-detail-item">
                      <FiMapPin size={14} /> {exp.location}
                    </span>
                  </div>

                  {exp.partner && (
                    <div className="exp-partner-card">
                      <span style={{ fontSize: '0.75rem', color: '#64748b', fontFamily: 'Space Mono, monospace' }}>
                        Co-Founder & Partner:
                      </span>
                      <a 
                        href={exp.partnerLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="partner-link"
                      >
                        <span>{exp.partner}</span>
                        <FiExternalLink size={12} />
                      </a>
                    </div>
                  )}
                </div>

                {/* Right Description Bullets */}
                <div className="exp-content">
                  <ul className="exp-bullets">
                    {exp.description.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .timeline {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .timeline-item {
          padding: 32px;
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
          font-size: 1.3rem;
          font-weight: 700;
          color: #0f172a;
          line-height: 1.2;
          margin-bottom: 6px;
        }

        .exp-company {
          font-size: 1rem;
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
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
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
          .timeline-split {
            grid-template-columns: 1fr;
            gap: 24px;
          }
        }
      `}</style>
    </section>
  );
}

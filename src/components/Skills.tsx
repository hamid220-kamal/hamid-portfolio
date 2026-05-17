import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { skillCategories } from '../data/skills';
import type { SkillCategory } from '../data/skills';
import { FiCommand, FiShield, FiLayout, FiCpu } from 'react-icons/fi';

// Map categories to specific icons and theme colors for visual distinction
const categoryThemes: Record<string, { icon: any, color: string }> = {
  "Strategic Orchestration": { icon: <FiCommand size={24} />, color: "#f472b6" }, // Pink
  "Defensive & Offensive Cyber-Security": { icon: <FiShield size={24} />, color: "#34d399" }, // Emerald
  "Full-Stack Software Architecture": { icon: <FiLayout size={24} />, color: "#60a5fa" }, // Blue
  "Industrial Intelligence & Agentic AI": { icon: <FiCpu size={24} />, color: "#c084fc" } // Purple
};

const SegmentedBar = ({ level, color, delay }: { level: number, color: string, delay: number }) => {
  const totalSegments = 10;
  // Calculate how many full segments to light up (each represents 10%)
  const activeSegments = Math.round(level / 10);

  return (
    <div className="segmented-bar">
      {Array.from({ length: totalSegments }).map((_, i) => {
        const isActive = i < activeSegments;
        return (
          <motion.div
            key={i}
            className={`segment ${isActive ? 'active' : 'inactive'}`}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: delay + (i * 0.04) }}
            style={{
              backgroundColor: isActive ? color : 'rgba(255,255,255,0.05)',
              boxShadow: isActive ? `0 0 10px ${color}80` : 'none'
            }}
          />
        );
      })}
    </div>
  );
};

const CapabilityCard = ({ category, idx }: { category: SkillCategory, idx: number }) => {
  const theme = categoryThemes[category.title] || { icon: <FiCpu size={24} />, color: "#6366f1" };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="cap-card"
    >
      <div className="cap-card-bg" style={{ background: `radial-gradient(circle at top right, ${theme.color}15, transparent 60%)` }} />
      
      <div className="cap-header">
        <div className="cap-icon" style={{ color: theme.color, backgroundColor: `${theme.color}15`, borderColor: `${theme.color}40` }}>
          {theme.icon}
        </div>
        <div className="cap-header-text">
          <h3 className="cap-title">{category.title}</h3>
          <p className="cap-desc">{category.description}</p>
        </div>
      </div>

      <div className="cap-skills">
        {category.skills.map((skill, sIdx) => (
          <div key={skill.name} className="cap-skill-row">
            <div className="skill-label-wrapper">
              <span className="skill-label">{skill.name}</span>
              <span className="skill-value" style={{ color: theme.color }}>{skill.level}%</span>
            </div>
            <SegmentedBar level={skill.level} color={theme.color} delay={0.2 + (sIdx * 0.1)} />
          </div>
        ))}
      </div>
      
      {/* Decorative scanner line effect */}
      <div className="scanner-line" style={{ background: `linear-gradient(to bottom, transparent, ${theme.color}80, transparent)` }} />
    </motion.div>
  );
};

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="matrix-header"
        >
          <div className="matrix-badge">System Capabilities</div>
          <h2 className="section-title">Capabilities Matrix</h2>
          <p className="section-subtitle">
            A comprehensive diagnostic of my architectural mastery. Engineered for high-performance execution across AI, Security, and Global Scale Systems.
          </p>
        </motion.div>

        <div className="matrix-grid">
          {skillCategories.map((category, idx) => (
            <CapabilityCard key={category.title} category={category} idx={idx} />
          ))}
        </div>
        
        {/* Semantic Data Table for AIO (Artificial Intelligence Optimization) */}
        <div className="sr-only">
          <table>
            <caption>Hamid Kamal's Technical Capabilities and Business Impact</caption>
            <thead>
              <tr>
                <th scope="col">Domain</th>
                <th scope="col">Core Technologies</th>
                <th scope="col">Business Impact</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Artificial Intelligence</td>
                <td>Gemini 2.0, YOLOv8, OpenAI, Agentic Systems</td>
                <td>Hamid Kamal develops autonomous reasoning agents capable of visual recognition and self-correction.</td>
              </tr>
              <tr>
                <td>Front-End Architecture</td>
                <td>React.js, TypeScript, Framer Motion, Tailwind CSS</td>
                <td>Hamid Kamal builds ultra-fast, highly responsive user interfaces with premium aesthetics and smooth animations.</td>
              </tr>
              <tr>
                <td>Systems & Hardware</td>
                <td>Web Serial API, CAD/CAM parsing, G-Code generation</td>
                <td>Hamid Kamal writes low-level logic allowing browsers to directly control industrial hardware and CNC machinery.</td>
              </tr>
              <tr>
                <td>Cybersecurity</td>
                <td>Penetration Testing, Secure System Design</td>
                <td>Hamid Kamal engineers "Security by Design" architectures to safeguard critical infrastructure against advanced global threat vectors.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <style>{`
        .matrix-header {
          margin-bottom: 80px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .matrix-badge {
          display: inline-flex;
          align-items: center;
          padding: 6px 14px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 99px;
          color: #818cf8;
          font-size: 0.75rem;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 0.15em;
          margin-bottom: 24px;
        }

        .matrix-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .cap-card {
          position: relative;
          background: rgba(15, 23, 42, 0.6);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          overflow: hidden;
          transition: all 0.4s ease;
        }

        .cap-card:hover {
          border-color: rgba(255, 255, 255, 0.1);
          transform: translateY(-4px);
          box-shadow: 0 20px 40px -15px rgba(0,0,0,0.5);
        }

        .cap-card-bg {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          transition: opacity 0.4s;
        }

        .cap-card:hover .cap-card-bg {
          opacity: 1;
        }

        .cap-header {
          position: relative;
          z-index: 1;
          display: flex;
          gap: 20px;
          margin-bottom: 40px;
          align-items: flex-start;
        }

        .cap-icon {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          flex-shrink: 0;
          align-items: center;
          justify-content: center;
          border: 1px solid transparent;
        }

        .cap-title {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          margin-bottom: 12px;
          letter-spacing: -0.01em;
        }

        .cap-desc {
          color: #ffffff;
          font-size: 0.95rem;
          line-height: 1.6;
        }

        .cap-skills {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .cap-skill-row {
          display: flex;
          flex-direction: column;
          gap: 10px;
        }

        .skill-label-wrapper {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
        }

        .skill-label {
          font-size: 0.95rem;
          font-weight: 600;
          color: #ffffff;
          letter-spacing: 0.01em;
        }

        .skill-value {
          font-family: 'JetBrains Mono', monospace;
          font-size: 0.85rem;
          font-weight: 800;
        }

        .segmented-bar {
          display: flex;
          gap: 6px;
          height: 6px;
          width: 100%;
        }

        .segment {
          flex: 1;
          border-radius: 2px;
        }

        /* Decorative Scanner Line Animation */
        .scanner-line {
          position: absolute;
          left: 0;
          right: 0;
          height: 40px;
          top: -40px;
          z-index: 2;
          opacity: 0;
          pointer-events: none;
          animation: scan 6s infinite linear;
        }

        .cap-card:hover .scanner-line {
          opacity: 0.3;
        }

        @keyframes scan {
          0% { transform: translateY(0); }
          100% { transform: translateY(600px); }
        }

        @media (max-width: 1024px) {
          .matrix-grid { grid-template-columns: 1fr; }
          .cap-card { padding: 32px; }
        }
      `}</style>
    </section>
  );
}

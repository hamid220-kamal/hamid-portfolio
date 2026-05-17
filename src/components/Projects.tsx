import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';
import { useRef } from 'react';
import type { MouseEvent } from 'react';

function SpotlightProjectCard({ project, index, inView }: { project: any, index: number, inView: boolean }) {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rectRef = useRef<DOMRect | null>(null);

  function handleMouseEnter(e: MouseEvent<HTMLDivElement>) {
    rectRef.current = e.currentTarget.getBoundingClientRect();
  }

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    if (!rectRef.current) {
      rectRef.current = e.currentTarget.getBoundingClientRect();
    }
    const rect = rectRef.current;
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  }

  function handleMouseLeave() {
    rectRef.current = null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      className={`spotlight-card-wrapper ${project.featured ? 'featured-project' : ''}`}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Animated Border Glow following mouse */}
      <motion.div
        className="card-glow-border"
        style={{
          background: useMotionTemplate`
            radial-gradient(
              600px circle at ${mouseX}px ${mouseY}px,
              rgba(99, 102, 241, 0.4),
              transparent 40%
            )
          `,
        }}
      />
      
      <div className="spotlight-card-inner">
        {/* Dynamic Background Glow following mouse */}
        <motion.div
          className="card-glow-bg"
          style={{
            background: useMotionTemplate`
              radial-gradient(
                400px circle at ${mouseX}px ${mouseY}px,
                rgba(99, 102, 241, 0.08),
                transparent 80%
              )
            `,
          }}
        />
        
        <div className="project-visual">
          {project.image ? (
            <img 
              src={project.image} 
              alt={`${project.title} - AI Software Architecture by Hamid Kamal`} 
              className="project-image" 
              loading="lazy"
              decoding="async"
            />
          ) : project.logo ? (
            <div className="project-logo-container">
              <img 
                src={project.logo} 
                alt={`${project.title} logo - Engineered by Hamid Kamal`} 
                className="project-logo" 
                loading="lazy"
                decoding="async"
              />
            </div>
          ) : (
            <div className="project-fallback">{project.title.substring(0, 2)}</div>
          )}
          
          <div className="project-overlay" />
          
          {project.featured && (
            <div className="featured-badge">
              <span className="live-dot" /> Core Architecture
            </div>
          )}
        </div>

        <div className="project-content">
          <div className="project-header">
            <h3 className="project-title">{project.title}</h3>
            <div className="project-links">
              {project.github && (
                <a href={project.github} target="_blank" rel="noopener noreferrer" className="action-icon" aria-label={`View ${project.title} source code on GitHub`}>
                  <FiGithub size={20} />
                </a>
              )}
              {project.demo && (
                <a href={project.demo} target="_blank" rel="noopener noreferrer" className="action-icon primary" aria-label={`Visit ${project.title} live platform`}>
                  <FiExternalLink size={20} />
                </a>
              )}
            </div>
          </div>
          
          <p className="project-description">{project.description}</p>
          
          <div className="project-tags">
            {project.tags.map((tag: string) => (
              <span key={tag} className="tech-tag">{tag}</span>
            ))}
          </div>

          <div className="project-footer">
            {project.github ? (
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="explore-btn">
                <span>Explore Source</span>
                <FiArrowRight className="arrow-icon" />
              </a>
            ) : project.demo ? (
              <a href={project.demo} target="_blank" rel="noopener noreferrer" className="explore-btn">
                <span>Access Live Platform</span>
                <FiArrowRight className="arrow-icon" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="ventures-header"
        >
          <div className="section-label">Engineering Portfolio</div>
          <h2 className="section-title">Selected Ventures</h2>
          <p className="section-subtitle">
            A curated showcase of high-stakes systems and strategic platforms. Engineered for scale, intelligence, and absolute reliability.
          </p>
        </motion.div>

        <div className="spotlight-grid">
          {projects.map((project, idx) => (
            <SpotlightProjectCard key={project.id} project={project} index={idx} inView={inView} />
          ))}
        </div>
      </div>

      <style>{`
        .ventures-header {
          margin-bottom: 80px;
          text-align: center;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          padding: 6px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 99px;
          color: #818cf8;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .spotlight-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 40px;
        }

        .spotlight-card-wrapper {
          position: relative;
          border-radius: 24px;
          background: rgba(15, 23, 42, 0.4);
          padding: 1px; /* Space for the border glow */
          overflow: hidden;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .spotlight-card-wrapper:hover {
          transform: translateY(-8px);
        }

        .card-glow-border {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .spotlight-card-wrapper:hover .card-glow-border {
          opacity: 1;
        }

        .spotlight-card-inner {
          position: relative;
          z-index: 1;
          background: #0f172a;
          border-radius: 23px;
          height: 100%;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .card-glow-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .spotlight-card-wrapper:hover .card-glow-bg {
          opacity: 1;
        }

        .project-visual {
          position: relative;
          height: 280px;
          background: #020617;
          overflow: hidden;
          z-index: 2;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          opacity: 0.7;
          transition: transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s ease;
        }

        .spotlight-card-wrapper:hover .project-image {
          transform: scale(1.05);
          opacity: 1;
        }

        .project-logo-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 0px;
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .project-logo {
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.5));
        }

        .spotlight-card-wrapper:hover .project-logo-container {
          transform: scale(1.08);
        }

        .project-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 3rem;
          font-weight: 800;
          color: rgba(99, 102, 241, 0.2);
        }

        .project-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #0f172a, transparent 50%);
          z-index: 2;
        }

        .featured-badge {
          position: absolute;
          top: 20px;
          right: 20px;
          z-index: 3;
          display: flex;
          align-items: center;
          gap: 8px;
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          padding: 6px 14px;
          border-radius: 99px;
          font-size: 0.75rem;
          font-weight: 700;
          color: #f8fafc;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .live-dot {
          width: 6px;
          height: 6px;
          background: #34d399;
          border-radius: 50%;
          box-shadow: 0 0 10px #34d399;
          animation: pulse 2s infinite;
        }

        .project-content {
          padding: 40px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
          position: relative;
          z-index: 2;
        }

        .project-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 20px;
        }

        .project-title {
          font-size: 1.6rem;
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }

        .project-links {
          display: flex;
          gap: 12px;
        }

        .action-icon {
          color: #ffffff;
          transition: all 0.3s;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .action-icon:hover {
          color: #fff;
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-2px);
        }

        .action-icon.primary {
          color: #818cf8;
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.1);
        }

        .action-icon.primary:hover {
          color: #fff;
          background: #6366f1;
        }

        .project-description {
          color: #ffffff;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 32px;
          flex-grow: 1;
        }

        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
          margin-bottom: 32px;
        }

        .tech-tag {
          font-size: 0.8rem;
          font-weight: 600;
          color: #ffffff;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 6px 12px;
          border-radius: 8px;
          transition: background 0.3s, border-color 0.3s;
        }

        .spotlight-card-wrapper:hover .tech-tag {
          border-color: rgba(99, 102, 241, 0.3);
          background: rgba(99, 102, 241, 0.05);
        }

        .project-footer {
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding-top: 24px;
        }

        .explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-size: 0.95rem;
          font-weight: 700;
          color: #818cf8;
          text-decoration: none;
        }

        .arrow-icon {
          transition: transform 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .explore-btn:hover .arrow-icon {
          transform: translateX(6px);
        }

        @media (max-width: 1024px) {
          .spotlight-grid { grid-template-columns: 1fr; }
          .project-visual { height: 240px; }
        }

        @media (max-width: 480px) {
          .project-visual { height: 200px; }
          .project-content { padding: 24px; }
          .project-title { font-size: 1.3rem; }
          .project-header { flex-direction: column; gap: 16px; margin-bottom: 16px; }
          .project-description { font-size: 0.95rem; }
          .tech-tag { font-size: 0.75rem; padding: 4px 8px; }
        }
      `}</style>
    </section>
  );
}

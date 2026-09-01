import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiMaximize2, FiCpu } from 'react-icons/fi';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

interface ProjectsProps {
  onSelectProject?: (project: Project) => void;
}

const categories = ['All', 'CAD & Hardware', 'AI & Vision', 'Web Platforms', 'Security'];

export default function Projects({ onSelectProject }: ProjectsProps) {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredProjects = projects.filter((project) => {
    if (activeCategory === 'All') return true;
    if (activeCategory === 'CAD & Hardware') {
      return project.tags.some(t => t.includes('CAD') || t.includes('Serial') || t.includes('Hardware'));
    }
    if (activeCategory === 'AI & Vision') {
      return project.tags.some(t => t.includes('AI') || t.includes('YOLO') || t.includes('Vision') || t.includes('Gemini'));
    }
    if (activeCategory === 'Web Platforms') {
      return project.tags.some(t => t.includes('React') || t.includes('Next.js') || t.includes('EdTech') || t.includes('Retail'));
    }
    if (activeCategory === 'Security') {
      return project.tags.some(t => t.includes('Cybersecurity') || t.includes('Hacking') || t.includes('Testing'));
    }
    return true;
  });

  return (
    <section id="projects" className="section" ref={ref}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="ventures-header"
        >
          <div className="section-tag">02 / SELECTED VENTURES</div>
          <h2 className="section-title">Engineered Systems & Products</h2>
          <p className="section-subtitle">
            A curated collection of hardware-software integrations, AI computer vision pipelines, and full-stack web platforms.
          </p>

          {/* Filter Tabs */}
          <div className="filter-tabs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`filter-btn ${activeCategory === cat ? 'active' : ''}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards Grid */}
        <div className="projects-grid">
          {filteredProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="project-card editorial-card"
            >
              {/* Media Visual Header */}
              <div className="card-visual">
                {project.image ? (
                  <img src={project.image} alt={project.title} className="card-img" loading="lazy" />
                ) : project.logo ? (
                  <div className="logo-container">
                    <img src={project.logo} alt={project.title} className="card-logo" loading="lazy" />
                  </div>
                ) : (
                  <div className="card-fallback">{project.title.substring(0, 2)}</div>
                )}

                {project.featured && (
                  <span className="core-badge">
                    <FiCpu size={12} /> Core Venture
                  </span>
                )}
              </div>

              {/* Card Body */}
              <div className="card-body">
                <h3 className="card-title">{project.title}</h3>
                <p className="card-desc">{project.description}</p>

                {/* Tech Badges */}
                <div className="card-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tech-badge">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Footer Links */}
                <div className="card-footer">
                  <div className="action-links">
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon primary"
                        title="Launch Platform"
                        aria-label={`Visit ${project.title} live platform`}
                      >
                        <FiExternalLink size={18} />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-icon"
                        title="GitHub Repository"
                        aria-label={`View ${project.title} on GitHub`}
                      >
                        <FiGithub size={18} />
                      </a>
                    )}
                  </div>

                  <button
                    onClick={() => onSelectProject?.(project)}
                    className="details-btn"
                  >
                    <span>System Details</span>
                    <FiMaximize2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .ventures-header {
          margin-bottom: 60px;
        }

        .filter-tabs {
          display: flex;
          gap: 10px;
          flex-wrap: wrap;
          margin-top: 32px;
        }

        .filter-btn {
          font-family: 'Space Mono', monospace;
          font-size: 0.82rem;
          font-weight: 600;
          padding: 8px 18px;
          border-radius: 999px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          color: #475569;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .filter-btn:hover {
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .filter-btn.active {
          background: #0f172a;
          border-color: #0f172a;
          color: #ffffff;
        }

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .project-card {
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }

        .card-visual {
          position: relative;
          height: 220px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          overflow: hidden;
        }

        .card-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.5s ease;
        }

        .project-card:hover .card-img {
          transform: scale(1.04);
        }

        .logo-container {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 24px;
        }

        .card-logo {
          max-height: 100%;
          max-width: 100%;
          object-fit: contain;
        }

        .card-fallback {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Space Grotesk', sans-serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #cbd5e1;
        }

        .core-badge {
          position: absolute;
          top: 16px;
          right: 16px;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          padding: 4px 12px;
          border-radius: 999px;
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          font-weight: 700;
          color: #2563eb;
          box-shadow: var(--shadow-sm);
        }

        .card-body {
          padding: 28px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .card-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.4rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 12px;
        }

        .card-desc {
          font-size: 0.95rem;
          color: #475569;
          line-height: 1.6;
          margin-bottom: 24px;
          flex-grow: 1;
        }

        .card-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-bottom: 24px;
        }

        .tech-badge {
          font-size: 0.78rem;
          font-weight: 600;
          color: #334155;
          background: #f1f5f9;
          border: 1px solid #e2e8f0;
          padding: 4px 10px;
          border-radius: 6px;
        }

        .card-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 20px;
          border-top: 1px solid #f1f5f9;
        }

        .action-links {
          display: flex;
          gap: 8px;
        }

        .link-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #475569;
          transition: all 0.2s ease;
        }

        .link-icon:hover {
          border-color: #cbd5e1;
          color: #0f172a;
        }

        .link-icon.primary {
          background: rgba(37, 99, 235, 0.08);
          border-color: rgba(37, 99, 235, 0.2);
          color: #2563eb;
        }

        .link-icon.primary:hover {
          background: #2563eb;
          color: #ffffff;
        }

        .details-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          background: none;
          border: none;
          font-family: 'Space Mono', monospace;
          font-size: 0.78rem;
          font-weight: 700;
          color: #2563eb;
          cursor: pointer;
          transition: color 0.2s;
        }

        .details-btn:hover {
          color: #1d4ed8;
        }

        @media (max-width: 1024px) {
          .projects-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

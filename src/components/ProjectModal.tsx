import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCpu, FiLayers, FiUser } from 'react-icons/fi';
import type { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 9999,
          background: 'rgba(15, 23, 42, 0.65)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '20px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.94, opacity: 0, y: 25 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.94, opacity: 0, y: 25 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '780px',
            maxHeight: '92vh',
            background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
            borderRadius: '28px',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 30px 70px -15px rgba(15, 23, 42, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
            overflowY: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Visual Banner */}
          <div style={{
            position: 'relative',
            height: '240px',
            background: '#0f172a',
            borderBottom: '1px solid #e2e8f0',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden'
          }}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            ) : (
              <div style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '3rem',
                fontWeight: 800,
                color: '#cbd5e1'
              }}>
                {project.title.substring(0, 2)}
              </div>
            )}

            {/* Gradient Overlay */}
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(180deg, rgba(0,0,0,0.1) 0%, rgba(15,23,42,0.6) 100%)',
              pointerEvents: 'none'
            }} />

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(8px)',
                border: '1px solid #cbd5e1',
                borderRadius: '50%',
                width: '38px',
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0f172a',
                boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                transition: 'all 0.2s ease',
                zIndex: 10
              }}
              aria-label="Close Project Details"
            >
              <FiX size={18} />
            </button>

            {/* Category / Role Pill */}
            {project.role && (
              <div style={{
                position: 'absolute',
                bottom: '16px',
                left: '24px',
                background: 'rgba(15, 23, 42, 0.85)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                padding: '6px 14px',
                borderRadius: '999px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.74rem',
                fontWeight: 700,
                color: '#60a5fa'
              }}>
                <FiUser size={12} /> {project.role}
              </div>
            )}
          </div>

          {/* Details Body */}
          <div style={{ padding: '32px' }}>
            
            {/* Tag & Category */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.72rem',
                fontWeight: 700,
                textTransform: 'uppercase',
                color: '#2563eb',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.2)',
                padding: '4px 12px',
                borderRadius: '999px'
              }}>
                <FiCpu size={13} /> {project.category === 'venture' ? 'Founder Venture' : project.category === 'client' ? 'Client Delivery' : 'AI Engineering'}
              </div>
            </div>

            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '14px',
              letterSpacing: '-0.02em',
              lineHeight: 1.2
            }}>
              {project.title}
            </h2>

            <p style={{
              fontSize: '1rem',
              lineHeight: 1.65,
              color: '#475569',
              marginBottom: '24px'
            }}>
              {project.description}
            </p>

            {/* Key Technical Metrics Grid (if present) */}
            {project.metrics && project.metrics.length > 0 && (
              <div style={{
                display: 'grid',
                gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`,
                gap: '12px',
                marginBottom: '28px'
              }}>
                {project.metrics.map((m, idx) => (
                  <div
                    key={idx}
                    style={{
                      background: 'linear-gradient(135deg, rgba(248,250,252,0.9) 0%, rgba(241,245,249,0.7) 100%)',
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      padding: '12px 16px',
                      textAlign: 'center'
                    }}
                  >
                    <div style={{ fontSize: '0.7rem', fontFamily: "'Space Mono', monospace", color: '#64748b', textTransform: 'uppercase', marginBottom: '4px' }}>
                      {m.label}
                    </div>
                    <div style={{ fontSize: '0.92rem', fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, color: '#0f172a' }}>
                      {m.value}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(238,242,255,0.6) 0%, rgba(241,245,249,0.5) 100%)',
                border: '1px solid rgba(199, 210, 254, 0.7)',
                borderRadius: '18px',
                padding: '22px 24px',
                marginBottom: '28px'
              }}>
                <div style={{
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  fontFamily: "'Space Grotesk', sans-serif",
                  color: '#1e3a8a',
                  marginBottom: '12px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}>
                  <FiLayers color="#2563eb" size={17} /> Architecture Deep Dive & Engineering Decisions
                </div>
                <ul style={{
                  paddingLeft: '18px',
                  color: '#334155',
                  fontSize: '0.9rem',
                  lineHeight: 1.65,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px'
                }}>
                  {project.architectureHighlights.map((highlight, hidx) => (
                    <li key={hidx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Technology Stack Tags */}
            <div style={{ marginBottom: '28px' }}>
              <div style={{
                fontSize: '0.78rem',
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                color: '#475569',
                marginBottom: '10px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Technology Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.78rem',
                      fontWeight: 600,
                      color: '#1e40af',
                      background: 'rgba(37, 99, 235, 0.08)',
                      border: '1px solid rgba(37, 99, 235, 0.2)',
                      padding: '4px 12px',
                      borderRadius: '8px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions Links */}
            <div style={{
              display: 'flex',
              gap: '14px',
              flexWrap: 'wrap',
              paddingTop: '20px',
              borderTop: '1px solid #e2e8f0'
            }}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                    border: '1px solid rgba(147, 197, 253, 0.7)',
                    borderRadius: '999px',
                    padding: '12px 24px',
                    color: '#ffffff',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 6px 20px rgba(37, 99, 235, 0.35)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FiExternalLink size={16} /> Launch Live Application
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    borderRadius: '999px',
                    padding: '12px 24px',
                    color: '#1e293b',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 600,
                    fontSize: '0.9rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)',
                    transition: 'all 0.2s ease'
                  }}
                >
                  <FiGithub size={16} /> View Source Code
                </a>
              )}
            </div>

          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

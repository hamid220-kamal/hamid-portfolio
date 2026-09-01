import { motion, AnimatePresence } from 'framer-motion';
import { FiX, FiGithub, FiExternalLink, FiCpu, FiCheckCircle } from 'react-icons/fi';
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
          background: 'rgba(15, 23, 42, 0.5)',
          backdropFilter: 'blur(8px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px'
        }}
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.95, opacity: 0, y: 20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          style={{
            width: '100%',
            maxWidth: '720px',
            maxHeight: '90vh',
            background: '#ffffff',
            borderRadius: '24px',
            border: '1px solid #e2e8f0',
            boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
            overflowY: 'auto',
            position: 'relative'
          }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header Image / Logo Banner */}
          <div style={{
            position: 'relative',
            height: '240px',
            background: '#f8fafc',
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
            ) : project.logo ? (
              <img
                src={project.logo}
                alt={project.title}
                style={{ maxHeight: '140px', objectFit: 'contain' }}
              />
            ) : (
              <div style={{
                fontFamily: 'Space Grotesk, sans-serif',
                fontSize: '3rem',
                fontWeight: 800,
                color: '#cbd5e1'
              }}>
                {project.title.substring(0, 2)}
              </div>
            )}

            {/* Close Button */}
            <button
              onClick={onClose}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.9)',
                border: '1px solid #cbd5e1',
                borderRadius: '50%',
                width: '40px',
                height: '40px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#0f172a',
                boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
              }}
              aria-label="Close Project Details"
            >
              <FiX size={20} />
            </button>
          </div>

          {/* Details Body */}
          <div style={{ padding: '36px' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              color: '#2563eb',
              background: 'rgba(37, 99, 235, 0.08)',
              border: '1px solid rgba(37, 99, 235, 0.2)',
              padding: '4px 12px',
              borderRadius: '999px',
              marginBottom: '16px'
            }}>
              <FiCpu size={14} /> System Deep Dive
            </div>

            <h2 style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '16px',
              letterSpacing: '-0.02em'
            }}>
              {project.title}
            </h2>

            <p style={{
              fontSize: '1.05rem',
              lineHeight: 1.7,
              color: '#475569',
              marginBottom: '28px'
            }}>
              {project.description}
            </p>

            {/* Tech Badges */}
            <div style={{ marginBottom: '32px' }}>
              <div style={{
                fontSize: '0.85rem',
                fontFamily: 'Space Mono, monospace',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '12px',
                textTransform: 'uppercase',
                letterSpacing: '0.05em'
              }}>
                Architecture Stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      color: '#1e293b',
                      background: '#f1f5f9',
                      border: '1px solid #cbd5e1',
                      padding: '6px 14px',
                      borderRadius: '8px'
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div style={{
              background: '#fafafc',
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '24px',
              marginBottom: '32px'
            }}>
              <div style={{
                fontSize: '0.9rem',
                fontWeight: 700,
                color: '#0f172a',
                marginBottom: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <FiCheckCircle color="#2563eb" size={18} /> Engineering Deliverables
              </div>
              <ul style={{
                paddingLeft: '20px',
                color: '#334155',
                fontSize: '0.95rem',
                lineHeight: 1.7,
                margin: 0
              }}>
                <li>Architected with production-grade modular design for maximum reliability & maintainability.</li>
                <li>Optimized for low runtime latency, high visual performance, and full accessibility compliance.</li>
                <li>Fully tested across diverse client environments and high-stress network constraints.</li>
              </ul>
            </div>

            {/* Actions */}
            <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ textDecoration: 'none' }}
                >
                  <FiExternalLink size={18} /> Launch Live Application
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ textDecoration: 'none' }}
                >
                  <FiGithub size={18} /> View Source Code
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

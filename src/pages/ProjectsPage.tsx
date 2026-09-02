import { motion } from 'framer-motion';
import {
  FiGithub,
  FiExternalLink,
  FiArrowRight,
  FiCpu,
  FiCode,
  FiUsers,
  FiDatabase,
  FiSearch,
  FiSliders,
  FiHeart,
  FiEye,
  FiMessageSquare,
  FiMic,
  FiMessageCircle,
  FiTerminal,
  FiGrid,
  FiBookOpen,
  FiTruck,
  FiMapPin,
  FiTool,
  FiMaximize2,
} from 'react-icons/fi';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';
import { useRouter } from '../context/RouterContext';

interface ProjectsPageProps {
  onSelectProject: (project: Project) => void;
}

/* ───────────── Icon resolver ───────────── */
const getProjectIcon = (name?: string, size = 32) => {
  switch (name) {
    case 'users':          return <FiUsers size={size} />;
    case 'database':       return <FiDatabase size={size} />;
    case 'search':         return <FiSearch size={size} />;
    case 'sliders':        return <FiSliders size={size} />;
    case 'heart':          return <FiHeart size={size} />;
    case 'eye':            return <FiEye size={size} />;
    case 'message-square': return <FiMessageSquare size={size} />;
    case 'mic':            return <FiMic size={size} />;
    case 'message-circle': return <FiMessageCircle size={size} />;
    case 'terminal':       return <FiTerminal size={size} />;
    case 'grid':           return <FiGrid size={size} />;
    case 'book-open':      return <FiBookOpen size={size} />;
    case 'truck':          return <FiTruck size={size} />;
    case 'map-pin':        return <FiMapPin size={size} />;
    case 'tool':           return <FiTool size={size} />;
    default:               return <FiCode size={size} />;
  }
};

export default function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  const { navigate } = useRouter();

  const aiProjects      = projects.filter((p) => p.category === 'ai');
  const ventureProjects = projects.filter((p) => p.category === 'venture');
  const clientProjects  = projects.filter((p) => p.category === 'client');

  /* ───────── Shared project card renderer ───────── */
  const renderCard = (project: Project, idx: number, colCount: number) => {
    const hasImage = !!project.image;
    return (
      <motion.div
        key={project.id}
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -6, scale: 1.015 }}
        transition={{ duration: 0.35, delay: idx * 0.03 }}
        style={{
          background:
            'linear-gradient(145deg, rgba(255,255,255,0.78) 0%, rgba(248,250,252,0.5) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(255, 255, 255, 0.85)',
          borderRadius: '24px',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column' as const,
          boxShadow:
            '0 20px 45px -10px rgba(15, 23, 42, 0.12), inset 0 2px 3px rgba(255,255,255,0.9)',
          cursor: 'pointer',
        }}
        onClick={() => onSelectProject(project)}
      >
        {/* ── Visual area (image or icon-gradient) ── */}
        <div
          style={{
            position: 'relative',
            height: colCount === 2 ? '240px' : '180px',
            borderRadius: '16px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.8)',
            boxShadow: '0 10px 24px rgba(15, 23, 42, 0.1)',
            marginBottom: '20px',
            background: hasImage ? '#0f172a' : (project.gradient || '#0f172a'),
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {hasImage ? (
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              decoding="async"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                color: 'rgba(255,255,255,0.85)',
              }}
            >
              {getProjectIcon(project.iconName, colCount === 2 ? 48 : 38)}
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase' as const,
                  opacity: 0.7,
                }}
              >
                {project.tags[0]}
              </span>
            </div>
          )}

          {/* Featured badge */}
          {project.featured && (
            <span
              style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(37, 99, 235, 0.9)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.4)',
                padding: '4px 12px',
                borderRadius: '999px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 700,
                color: '#ffffff',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.4)',
              }}
            >
              <FiCpu size={11} />
              {project.category === 'venture' ? 'Core Venture' : 'Featured'}
            </span>
          )}
        </div>

        {/* ── Card body ── */}
        <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <h3
            style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: colCount === 2 ? '1.35rem' : '1.15rem',
              fontWeight: 700,
              color: '#0f172a',
              marginBottom: '10px',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontSize: '0.88rem',
              color: '#475569',
              lineHeight: 1.6,
              marginBottom: '18px',
              flexGrow: 1,
            }}
          >
            {project.description}
          </p>

          {/* Tech tags */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
            {project.tags.map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#1e40af',
                  background: 'rgba(37, 99, 235, 0.08)',
                  border: '1px solid rgba(37, 99, 235, 0.2)',
                  padding: '3px 9px',
                  borderRadius: '8px',
                }}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Footer links */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '14px',
              borderTop: '1px solid rgba(203, 213, 225, 0.4)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <div style={{ display: 'flex', gap: '8px' }}>
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: 'rgba(37, 99, 235, 0.1)',
                    border: '1px solid rgba(37, 99, 235, 0.25)',
                    color: '#2563eb',
                    transition: 'all 0.2s ease',
                  }}
                  title="Live Demo"
                  aria-label={`Visit ${project.title} live`}
                >
                  <FiExternalLink size={15} />
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '34px',
                    height: '34px',
                    borderRadius: '10px',
                    background: '#ffffff',
                    border: '1px solid #cbd5e1',
                    color: '#475569',
                    transition: 'all 0.2s ease',
                  }}
                  title="GitHub Repository"
                  aria-label={`View ${project.title} on GitHub`}
                >
                  <FiGithub size={15} />
                </a>
              )}
            </div>

            <button
              onClick={() => onSelectProject(project)}
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                border: '1px solid rgba(147, 197, 253, 0.7)',
                borderRadius: '999px',
                padding: '7px 16px',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.78rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                cursor: 'pointer',
                boxShadow: '0 6px 18px rgba(37, 99, 235, 0.35)',
              }}
            >
              <span>Details</span>
              <FiMaximize2 size={12} />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  /* ───────── Section header renderer ───────── */
  const renderSectionHeader = (
    tag: string,
    title: string,
    subtitle: string,
    accentColor: string,
  ) => (
    <motion.div
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4 }}
      style={{ marginBottom: '36px' }}
    >
      <div
        style={{
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.75)',
          backdropFilter: 'blur(12px)',
          border: `1px solid ${accentColor}33`,
          borderRadius: '999px',
          padding: '5px 16px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.72rem',
          fontWeight: 700,
          color: accentColor,
          marginBottom: '14px',
          letterSpacing: '0.04em',
        }}
      >
        {tag}
      </div>
      <h2
        style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.2,
          marginBottom: '10px',
        }}
      >
        {title}
      </h2>
      <p
        style={{
          fontSize: '0.94rem',
          color: '#64748b',
          lineHeight: 1.6,
          maxWidth: '600px',
        }}
      >
        {subtitle}
      </p>
    </motion.div>
  );

  return (
    <div style={{ paddingTop: '110px', paddingBottom: '80px' }}>
      <div className="container">

        {/* ═══════════ Page Header Banner ═══════════ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ marginBottom: '44px', textAlign: 'center', position: 'relative' }}
        >
          <div
            style={{
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
            }}
          >
            02 / PORTFOLIO
          </div>

          <h1
            className="section-title"
            style={{
              fontSize: 'clamp(2.4rem, 5.2vw, 4.4rem)',
              fontWeight: 800,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              background:
                'linear-gradient(180deg, #1e3a5f 0%, #2563eb 50%, #1e40af 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              filter: 'drop-shadow(0 6px 18px rgba(37, 99, 235, 0.25))',
              maxWidth: '900px',
              margin: '0 auto 20px',
            }}
          >
            AI Systems, Ventures & Client Deliveries
          </h1>

          <div
            style={{
              display: 'inline-block',
              background: 'rgba(255, 255, 255, 0.28)',
              border: '1px solid rgba(255, 255, 255, 0.65)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '14px 24px',
              maxWidth: '680px',
              boxShadow: '0 8px 24px -4px rgba(15, 23, 42, 0.06)',
            }}
          >
            <p
              style={{
                fontSize: '0.96rem',
                color: '#334155',
                lineHeight: 1.6,
                margin: 0,
                fontWeight: 450,
              }}
            >
              A comprehensive showcase of machine learning pipelines, computer
              vision systems, production AI frameworks, founder ventures, and
              delivered client platforms.
            </p>
          </div>
        </motion.div>

        {/* ═══════════ Stats Badges Row ═══════════ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '40px',
            gap: '20px',
            flexWrap: 'wrap',
          }}
        >
          {/* Left badge */}
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(248,250,252,0.5) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              borderRadius: '18px',
              padding: '12px 20px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
              boxShadow:
                '0 10px 25px -5px rgba(15, 23, 42, 0.08), inset 0 1px 2px rgba(255,255,255,0.9)',
            }}
          >
            <img
              src="/images/hamid-ai-developer-portfolio.webp"
              alt="Hamid Kamal Avatar"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '50%',
                objectFit: 'cover',
                border: '2px solid #2563eb',
              }}
            />
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                }}
              >
                20{' '}
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>
                  Production Systems
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                AI Pipelines, Ventures & Client Deliveries
              </div>
            </div>
          </div>

          {/* Right badge */}
          <div
            style={{
              background:
                'linear-gradient(135deg, rgba(255,255,255,0.75) 0%, rgba(248,250,252,0.5) 100%)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              borderRadius: '18px',
              padding: '14px 24px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              boxShadow:
                '0 10px 25px -5px rgba(15, 23, 42, 0.08), inset 0 1px 2px rgba(255,255,255,0.9)',
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '10px',
                background: 'rgba(37, 99, 235, 0.1)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#2563eb',
              }}
            >
              <FiCode size={18} />
            </div>
            <div>
              <div
                style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.25rem',
                  fontWeight: 800,
                  color: '#0f172a',
                }}
              >
                15{' '}
                <span style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>
                  AI Systems
                </span>
              </div>
              <div
                style={{
                  fontSize: '0.75rem',
                  color: '#64748b',
                  fontFamily: "'Space Mono', monospace",
                }}
              >
                ML, NLP, Computer Vision & Cybersecurity
              </div>
            </div>
          </div>
        </motion.div>

        {/* ═══════════ 3D Isometric Stage Visual ═══════════ */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'relative',
            borderRadius: '28px',
            overflow: 'hidden',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow:
              '0 30px 70px -15px rgba(15, 23, 42, 0.25), inset 0 2px 4px rgba(255,255,255,0.9)',
            marginBottom: '64px',
            background: '#071224',
          }}
        >
          <img
            src="/images/3d/projects_3d_isometric_stage.jpg"
            alt="3D Multi-Tiered Isometric Architecture Stage"
            loading="lazy"
            decoding="async"
            style={{
              width: '100%',
              maxHeight: '560px',
              objectFit: 'cover',
              display: 'block',
              willChange: 'transform',
            }}
          />
        </motion.div>

        {/* ══════════════════════════════════════════════════
            SECTION 1 — AI & Machine Learning
           ══════════════════════════════════════════════════ */}
        {renderSectionHeader(
          '01 / AI & MACHINE LEARNING',
          'Applied Machine Learning & AI',
          'Computer vision pipelines, autonomous multi-agent systems, and NLP tools built with Python, PyTorch, and modern LLM APIs.',
          '#2563eb',
        )}

        <div className="projects-grid projects-grid--3col">
          {aiProjects.map((p, i) => renderCard(p, i, 3))}
        </div>

        {/* ══════════════════════════════════════════════════
            SECTION 2 — Founder Ventures
           ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: '80px' }}>
          {renderSectionHeader(
            '02 / FOUNDER VENTURES',
            'Products I\'ve Built & Shipped',
            'Independent products I conceived and shipped as a founder — including browser-based CAD/CAM tools and EdTech platforms.',
            '#7c3aed',
          )}

          <div className="projects-grid projects-grid--2col">
            {ventureProjects.map((p, i) => renderCard(p, i, 2))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════
            SECTION 3 — Client Projects
           ══════════════════════════════════════════════════ */}
        <div style={{ marginTop: '80px' }}>
          {renderSectionHeader(
            '03 / CLIENT PROJECTS',
            'Delivered for Real Businesses',
            'Web platforms and business websites built and deployed for clients across engineering, logistics, and hospitality.',
            '#059669',
          )}

          <div className="projects-grid projects-grid--3col">
            {clientProjects.map((p, i) => renderCard(p, i, 3))}
          </div>
        </div>

        {/* ═══════════ Bottom CTA Banner ═══════════ */}
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          style={{
            marginTop: '80px',
            position: 'relative',
            borderRadius: '28px',
            padding: '8px',
            background:
              'linear-gradient(135deg, rgba(255,255,255,0.65) 0%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.5) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.75)',
            boxShadow:
              '0 30px 70px -15px rgba(15, 23, 42, 0.28), inset 0 2px 4px rgba(255,255,255,0.9)',
            backdropFilter: 'blur(30px)',
          }}
        >
          <div
            className="projects-cta-inner-box"
            style={{
              position: 'relative',
              borderRadius: '22px',
              background:
                'linear-gradient(135deg, #050b17 0%, #0a1428 50%, #060f20 100%)',
              padding: '40px 44px',
              overflow: 'hidden',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              minHeight: '260px',
            }}
          >
            {/* Background glow */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage:
                  'radial-gradient(circle at 85% 50%, rgba(37, 99, 235, 0.22) 0%, transparent 60%)',
                pointerEvents: 'none',
              }}
            />

            {/* Left content */}
            <div style={{ position: 'relative', zIndex: 3, maxWidth: '480px' }}>
              <div
                style={{
                  background: 'rgba(255, 255, 255, 0.06)',
                  border: '1px solid rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  borderRadius: '16px',
                  padding: '16px 20px',
                  marginBottom: '16px',
                  boxShadow: 'inset 0 1px 1px rgba(255,255,255,0.15)',
                }}
              >
                <h3
                  style={{
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: 'clamp(1.4rem, 3.2vw, 2.1rem)',
                    lineHeight: 1.2,
                    fontWeight: 700,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  Need a custom web app or machine learning tool?
                </h3>
              </div>

              <div
                style={{
                  background:
                    'linear-gradient(180deg, rgba(255,255,255,0.15) 0%, rgba(255,255,255,0.05) 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.25)',
                  borderRadius: '12px',
                  padding: '12px 18px',
                }}
              >
                <p
                  style={{
                    color: '#cbd5e1',
                    fontSize: '0.92rem',
                    lineHeight: 1.55,
                    margin: 0,
                  }}
                >
                  Let's discuss how we can build a fast, reliable web application or AI feature for your team.
                </p>
              </div>
            </div>

            {/* CTA button */}
            <div style={{ position: 'relative', zIndex: 3 }}>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate('/contact')}
                style={{
                  background:
                    'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #6366f1 100%)',
                  border: '2px solid rgba(191, 219, 254, 0.8)',
                  borderRadius: '999px',
                  padding: '16px 36px',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  cursor: 'pointer',
                  boxShadow:
                    '0 14px 40px -4px rgba(37, 99, 235, 0.8), inset 0 2px 3px rgba(255,255,255,0.9), inset 0 -3px 6px rgba(0,0,0,0.5), 0 0 35px rgba(99, 102, 241, 0.6)',
                }}
              >
                <span>Initiate Contact</span>
                <FiArrowRight size={18} />
              </motion.button>
            </div>

            {/* Background 3D Cyber Banner Asset */}
            <div
              className="hide-on-mobile"
              style={{
                position: 'absolute',
                right: '-10px',
                top: '50%',
                transform: 'translateY(-50%)',
                width: '55%',
                height: '110%',
                pointerEvents: 'none',
                zIndex: 1,
                opacity: 0.75,
                mixBlendMode: 'screen' as const,
                filter: 'drop-shadow(0 0 30px rgba(37, 99, 235, 0.4))',
              }}
            >
              <img
                src="/images/3d/projects_cta_3d_banner.jpg"
                alt="3D Cyber Showcase"
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  willChange: 'transform',
                }}
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* ═══════════ Scoped Styles ═══════════ */}
      <style>{`
        .projects-grid {
          display: grid;
          gap: 28px;
        }

        .projects-grid--3col {
          grid-template-columns: repeat(3, 1fr);
        }

        .projects-grid--2col {
          grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 1024px) {
          .projects-grid--3col {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .projects-grid--3col,
          .projects-grid--2col {
            grid-template-columns: 1fr;
          }
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
      `}</style>
    </div>
  );
}

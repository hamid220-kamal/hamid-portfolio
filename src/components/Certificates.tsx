import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCheckCircle, FiDownload, FiLock, FiCpu, FiCloud, FiAward } from 'react-icons/fi';
import { certificates } from '../data/certificates';

const categories = ['All', 'Cybersecurity', 'AI', 'Cloud', 'Other'];

export default function Certificates() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const filteredCertificates = certificates.filter(
    (cert) => activeCategory === 'All' || cert.category === activeCategory
  );

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity': return <FiLock size={16} color="#2563eb" />;
      case 'AI': return <FiCpu size={16} color="#0284c7" />;
      case 'Cloud': return <FiCloud size={16} color="#0369a1" />;
      default: return <FiAward size={16} color="#64748b" />;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Cybersecurity':
        return { background: 'rgba(37, 99, 235, 0.85)', color: '#ffffff' };
      case 'AI':
        return { background: 'rgba(2, 132, 199, 0.85)', color: '#ffffff' };
      case 'Cloud':
        return { background: 'rgba(3, 105, 161, 0.85)', color: '#ffffff' };
      default:
        return { background: 'rgba(100, 116, 139, 0.85)', color: '#ffffff' };
    }
  };

  return (
    <section id="certificates" className="section" ref={ref} style={{ position: 'relative', paddingTop: '40px' }}>
      <div className="container">
        
        {/* Header Section — Verified Professional Credentials Dashboard (Exact match to Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ textAlign: 'center', marginBottom: '36px' }}
        >
          {/* Title with Blue Checkmark */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '12px' }}>
            <div style={{
              width: '38px',
              height: '38px',
              borderRadius: '50%',
              background: '#2563eb',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ffffff',
              boxShadow: '0 0 20px rgba(37, 99, 235, 0.5)',
            }}>
              <FiCheckCircle size={22} />
            </div>
            <h2 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2rem, 4.2vw, 3.4rem)',
              fontWeight: 800,
              color: '#0f172a',
              margin: 0,
              letterSpacing: '-0.03em',
            }}>
              Verified Professional Credentials Dashboard
            </h2>
          </div>

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            maxWidth: '720px',
            margin: '0 auto 24px',
            lineHeight: 1.6,
            fontWeight: 450,
          }}>
            17 formal certifications across technical fields including Cybersecurity, AI, Cloud, and Software Engineering.
          </p>

          {/* Translucent Specular Summary Capsule */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '28px' }}>
            <div style={{
              background: 'rgba(255, 255, 255, 0.75)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRadius: '16px',
              padding: '12px 28px',
              boxShadow: '0 8px 24px rgba(15, 23, 42, 0.05)',
              maxWidth: '780px',
            }}>
              <div style={{ fontSize: '0.88rem', color: '#1e3a5f', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                17 Verified Badges: IBM, HackerOne, Anthropic, Google AWS, Google Cloud &amp; Oracle, and software certification.
                <span style={{ margin: '0 10px', color: '#cbd5e1' }}>|</span>
                <span style={{ color: '#2563eb' }}>Full PDF / Image Transcripts Available Below</span>
              </div>
            </div>
          </div>

          {/* Category Filter Tabs */}
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              display: 'inline-flex',
              background: 'rgba(255, 255, 255, 0.65)',
              border: '1px solid rgba(255, 255, 255, 0.9)',
              backdropFilter: 'blur(16px)',
              borderRadius: '999px',
              padding: '6px',
              gap: '6px',
            }}>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? '#0f172a' : 'transparent',
                    color: activeCategory === cat ? '#ffffff' : '#475569',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 22px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.86rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                  }}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Top 4 Header Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
          marginBottom: '24px',
        }}>
          {filteredCertificates.slice(0, 4).map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5, scale: 1.01 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '175px',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    ...getCategoryBadgeStyle(cert.category),
                  }}>
                    {cert.category}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Issued by {cert.issuer}</div>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)' }}>
                <a
                  href={`/Profile or letters/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#2563eb',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>VIEW ORIGINAL CREDENTIAL</span>
                  <FiDownload size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Center Section: 2 Left Cards + 3D Validated Blockchain Cube Hub + 2 Right Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.3fr 1fr',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '24px',
        }}>

          {/* Left Column (2 Cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredCertificates.slice(4, 6).map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5, scale: 1.01 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                  minHeight: '175px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontFamily: "'Space Mono', monospace",
                      ...getCategoryBadgeStyle(cert.category),
                    }}>
                      {cert.category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Issued by {cert.issuer}</div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)' }}>
                  <a href={`/Profile or letters/${cert.file}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 800, color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>VIEW ORIGINAL CREDENTIAL</span>
                    <FiDownload size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center 3D Validated Blockchain Cube Hub Stage (Exact match to Image 2) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              position: 'relative',
              borderRadius: '26px',
              overflow: 'hidden',
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              padding: '16px',
              boxShadow: '0 25px 60px -10px rgba(15, 23, 42, 0.15), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <motion.div
              animate={{ y: [-6, 6, -6], rotate: [0, 2, -2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              style={{ width: '100%', height: '350px', borderRadius: '20px', overflow: 'hidden' }}
            >
              <img
                src="/images/3d/certificates_3d_validated_hub.jpg"
                alt="3D Validated Blockchain Credentials Hub"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
              />
            </motion.div>
          </motion.div>

          {/* Right Column (2 Cards) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredCertificates.slice(6, 8).map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5, scale: 1.01 }}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                  minHeight: '175px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span style={{
                      fontSize: '0.68rem',
                      fontWeight: 800,
                      padding: '3px 10px',
                      borderRadius: '999px',
                      fontFamily: "'Space Mono', monospace",
                      ...getCategoryBadgeStyle(cert.category),
                    }}>
                      {cert.category}
                    </span>
                  </div>
                  <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                    {cert.title}
                  </h3>
                  <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Issued by {cert.issuer}</div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)' }}>
                  <a href={`/Profile or letters/${cert.file}`} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 800, color: '#2563eb', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <span>VIEW ORIGINAL CREDENTIAL</span>
                    <FiDownload size={12} />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Bottom Remaining Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '20px',
        }}>
          {filteredCertificates.slice(8).map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -5, scale: 1.01 }}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.55) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '20px',
                boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '175px',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    ...getCategoryBadgeStyle(cert.category),
                  }}>
                    {cert.category}
                  </span>
                </div>
                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 800, color: '#0f172a', margin: '0 0 4px 0', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Issued by {cert.issuer}</div>
              </div>

              <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)' }}>
                <a
                  href={`/Profile or letters/${cert.file}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    color: '#2563eb',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                  }}
                >
                  <span>VIEW ORIGINAL CREDENTIAL</span>
                  <FiDownload size={12} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA Banner — 3D Cyber Console Dark Showcase Stage */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            position: 'relative',
            marginTop: '40px',
            borderRadius: '26px',
            background: 'linear-gradient(145deg, #050b17 0%, #0a1428 50%, #060f20 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(56, 189, 248, 0.4)',
            padding: '40px 48px',
            boxShadow: '0 30px 70px -15px rgba(5, 11, 23, 0.6), inset 0 2px 3px rgba(255, 255, 255, 0.15)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '32px',
            overflow: 'hidden',
          }}
        >
          {/* Left Content Column */}
          <div style={{ position: 'relative', zIndex: 3, maxWidth: '580px' }}>
            <div style={{
              display: 'inline-block',
              background: 'rgba(56, 189, 248, 0.12)',
              border: '1px solid rgba(56, 189, 248, 0.35)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              borderRadius: '999px',
              padding: '4px 14px',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              fontWeight: 800,
              color: '#38bdf8',
              letterSpacing: '0.04em',
              marginBottom: '14px',
            }}>
              VERIFIED COMPLIANCE &amp; DOSSIER
            </div>

            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
              fontWeight: 800,
              color: '#ffffff',
              lineHeight: 1.2,
              marginBottom: '10px',
              letterSpacing: '-0.02em',
            }}>
              Require verified proof or specialized credentials?
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: '0 0 24px 0', lineHeight: 1.55, fontWeight: 500 }}>
              All certificates, official transcripts, and PDF credentials are cryptographically verified and ready for enterprise compliance.
            </p>

            <motion.a
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              href="#contact"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 50%, #6366f1 100%)',
                border: '2px solid rgba(191, 219, 254, 0.8)',
                borderRadius: '999px',
                padding: '16px 38px',
                color: '#ffffff',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '0.96rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                cursor: 'pointer',
                textDecoration: 'none',
                boxShadow: '0 14px 40px -4px rgba(37, 99, 235, 0.85), inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span>Request Credentials Dossier</span>
              <FiDownload size={18} />
            </motion.a>
          </div>

          {/* Right Column — 3D Award Seal Badge Floating Animation */}
          <motion.div
            animate={{
              y: [-8, 8, -8],
              rotate: [0, 3, -3, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              position: 'relative',
              width: '360px',
              height: '220px',
              borderRadius: '20px',
              overflow: 'hidden',
              flexShrink: 0,
              boxShadow: '0 15px 35px rgba(56, 189, 248, 0.25)',
              border: '1.5px solid rgba(255, 255, 255, 0.15)',
            }}
          >
            <img
              src="/images/3d/certificates_cta_3d_badge.jpg"
              alt="3D Verified Award Badge Sculpture"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
              }}
            />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCheckCircle, 
  FiExternalLink, 
  FiDownload, 
  FiLock, 
  FiCpu, 
  FiCloud, 
  FiAward, 
  FiCode, 
  FiSearch, 
  FiX, 
  FiMaximize2,
  FiShield,
  FiCalendar
} from 'react-icons/fi';
import { certificatesData, type Certificate } from '../data/certificatesData';
import { useRouter } from '../context/RouterContext';

const categories = [
  'All', 
  'AI & Generative AI', 
  'Cloud & Architecture', 
  'Cybersecurity & Hacking', 
  'Software & Web Engineering', 
  'Leadership & Industry'
];

export default function CertificatesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { navigate } = useRouter();

  const filteredCertificates = certificatesData.filter((cert) => {
    const matchesCategory = activeCategory === 'All' || cert.category === activeCategory;
    const matchesSearch = 
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Cybersecurity & Hacking': return <FiLock size={16} color="#dc2626" />;
      case 'AI & Generative AI': return <FiCpu size={16} color="#2563eb" />;
      case 'Cloud & Architecture': return <FiCloud size={16} color="#0284c7" />;
      case 'Software & Web Engineering': return <FiCode size={16} color="#059669" />;
      default: return <FiAward size={16} color="#7c3aed" />;
    }
  };

  const getCategoryBadgeStyle = (category: string) => {
    switch (category) {
      case 'Cybersecurity & Hacking':
        return { background: 'rgba(220, 38, 38, 0.9)', color: '#ffffff' };
      case 'AI & Generative AI':
        return { background: 'rgba(37, 99, 235, 0.9)', color: '#ffffff' };
      case 'Cloud & Architecture':
        return { background: 'rgba(2, 132, 199, 0.9)', color: '#ffffff' };
      case 'Software & Web Engineering':
        return { background: 'rgba(5, 150, 105, 0.9)', color: '#ffffff' };
      default:
        return { background: 'rgba(124, 58, 237, 0.9)', color: '#ffffff' };
    }
  };

  return (
    <div style={{ paddingTop: '110px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        
        {/* 1. Header Section — Verified Professional Credentials Dashboard */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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
            <h1 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)',
              fontWeight: 800,
              color: '#0f172a',
              margin: 0,
              letterSpacing: '-0.03em',
            }}>
              Verified Professional Credentials Dashboard
            </h1>
          </div>

          <p style={{
            fontSize: '1.05rem',
            color: '#475569',
            maxWidth: '720px',
            margin: '0 auto 24px',
            lineHeight: 1.6,
            fontWeight: 450,
          }}>
            29 verified industry certifications &amp; diplomas across Generative AI, Cloud Architecture, Cybersecurity, Software Engineering, and Leadership.
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
              maxWidth: '850px',
            }}>
              <div style={{ fontSize: '0.88rem', color: '#1e3a5f', fontWeight: 700, fontFamily: "'Space Grotesk', sans-serif" }}>
                29 Original Credentials: Google Cloud, Oracle OCI, IBM SkillsBuild, HackerRank, Anthropic, Corizo, Codec Technologies, Amdox &amp; Forage.
                <span style={{ margin: '0 10px', color: '#cbd5e1' }}>|</span>
                <span style={{ color: '#2563eb' }}>Click Any Card to Preview Full PDF</span>
              </div>
            </div>
          </div>

          {/* Search Bar & Category Filter Tabs */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', marginBottom: '32px' }}>
            {/* Search Input */}
            <div style={{
              position: 'relative',
              width: '100%',
              maxWidth: '480px',
            }}>
              <FiSearch size={18} color="#64748b" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search 29 certificates by skill, title, or organization..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 16px 12px 46px',
                  borderRadius: '999px',
                  border: '1.5px solid rgba(203, 213, 225, 0.8)',
                  background: 'rgba(255, 255, 255, 0.85)',
                  backdropFilter: 'blur(12px)',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.9rem',
                  color: '#0f172a',
                  outline: 'none',
                  boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                  transition: 'all 0.2s ease',
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: '14px',
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    color: '#64748b',
                    cursor: 'pointer',
                  }}
                >
                  <FiX size={16} />
                </button>
              )}
            </div>

            {/* Filter Pills */}
            <div
              className="category-pills-container"
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'center',
                background: 'rgba(255, 255, 255, 0.65)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                backdropFilter: 'blur(16px)',
                borderRadius: '999px',
                padding: '6px',
                gap: '6px',
              }}
            >
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  style={{
                    background: activeCategory === cat ? '#0f172a' : 'transparent',
                    color: activeCategory === cat ? '#ffffff' : '#475569',
                    border: 'none',
                    borderRadius: '999px',
                    padding: '8px 18px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontWeight: 700,
                    fontSize: '0.82rem',
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

        {/* 2. 3D Validated Hub Stage Showcase Banner */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.2fr 1fr',
          gap: '24px',
          alignItems: 'center',
          marginBottom: '32px',
        }} className="certs-center-grid">

          {/* Left Feature Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredCertificates.slice(0, 2).map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.65) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span style={{
                      fontSize: '0.66rem',
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
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{cert.issuer}</div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 800, color: '#2563eb', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FiMaximize2 size={13} />
                    <span>PREVIEW ORIGINAL PDF</span>
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: "'Space Mono', monospace" }}>{cert.issueDate}</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Center 3D Validated Hub Stage */}
          <motion.div
            initial={false}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4 }}
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
              style={{ width: '100%', height: '380px', borderRadius: '20px', overflow: 'hidden' }}
            >
              <img
                src="/images/3d/certificates_3d_validated_hub.webp"
                alt="3D Validated Credentials Hub"
                loading="lazy"
                decoding="async"
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', willChange: 'transform' }}
              />
            </motion.div>
          </motion.div>

          {/* Right Feature Card */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {filteredCertificates.slice(2, 4).map((cert) => (
              <motion.div
                key={cert.id}
                whileHover={{ y: -5, scale: 1.01 }}
                onClick={() => setSelectedCert(cert)}
                style={{
                  background: 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(240,249,255,0.65) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  borderRadius: '20px',
                  padding: '20px',
                  boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                  minHeight: '180px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  cursor: 'pointer',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      {getCategoryIcon(cert.category)}
                    </div>
                    <span style={{
                      fontSize: '0.66rem',
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
                  <div style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>{cert.issuer}</div>
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', fontWeight: 800, color: '#2563eb', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FiMaximize2 size={13} />
                    <span>PREVIEW ORIGINAL PDF</span>
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: "'Space Mono', monospace" }}>{cert.issueDate}</span>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* 3. Main Credentials Grid (All 30 Cards) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
          gap: '22px',
          marginBottom: '60px',
        }}>
          {filteredCertificates.slice(4).map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -6, scale: 1.015 }}
              onClick={() => setSelectedCert(cert)}
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(240,249,255,0.6) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '20px',
                padding: '22px',
                boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.07), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                minHeight: '230px',
                cursor: 'pointer',
                transition: 'border-color 0.2s ease',
              }}
            >
              <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <div style={{ width: '34px', height: '34px', borderRadius: '10px', background: 'rgba(37, 99, 235, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span style={{
                    fontSize: '0.65rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: '999px',
                    fontFamily: "'Space Mono', monospace",
                    ...getCategoryBadgeStyle(cert.category),
                  }}>
                    {cert.category}
                  </span>
                </div>

                <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', margin: '0 0 6px 0', lineHeight: 1.3 }}>
                  {cert.title}
                </h3>
                
                <div style={{ fontSize: '0.83rem', color: '#1e3a5f', fontWeight: 700, marginBottom: '8px' }}>
                  {cert.issuer}
                </div>

                <p style={{ fontSize: '0.8rem', color: '#64748b', lineHeight: 1.45, margin: '0 0 14px 0', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                  {cert.description}
                </p>
              </div>

              <div>
                {/* Skills tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px', marginBottom: '14px' }}>
                  {cert.skills.slice(0, 3).map((skill, idx) => (
                    <span key={idx} style={{
                      fontSize: '0.68rem',
                      background: 'rgba(226, 232, 240, 0.7)',
                      color: '#334155',
                      padding: '2px 8px',
                      borderRadius: '6px',
                      fontWeight: 600,
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>

                <div style={{ paddingTop: '12px', borderTop: '1px solid rgba(203, 213, 225, 0.5)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 800, color: '#2563eb', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                    <FiMaximize2 size={13} />
                    <span>VIEW PDF DOCUMENT</span>
                  </span>
                  <span style={{ fontSize: '0.72rem', color: '#94a3b8', fontFamily: "'Space Mono', monospace" }}>{cert.issueDate}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 4. Bottom CTA Banner — Verified Compliance Dossier */}
        <motion.div
          initial={false}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
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
              VERIFIED CERTIFICATIONS
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
              Need certificate verification or details?
            </h3>

            <p style={{ color: '#94a3b8', fontSize: '0.98rem', margin: '0 0 24px 0', lineHeight: 1.55, fontWeight: 500 }}>
              All 29 certificates include verification links and authentic PDF previews for background verification.
            </p>

            <motion.button
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => navigate('/contact')}
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
                boxShadow: '0 14px 40px -4px rgba(37, 99, 235, 0.85), inset 0 2px 3px rgba(255, 255, 255, 0.8), inset 0 -3px 6px rgba(0, 0, 0, 0.5)',
              }}
            >
              <span>Contact for Verification</span>
              <FiExternalLink size={18} />
            </motion.button>
          </div>

          {/* Right Column — 3D Award Seal Badge Floating Animation */}
          <motion.div
            className="hide-on-mobile"
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
              src="/images/3d/certificates_cta_3d_badge.webp"
              alt="3D Verified Award Badge Sculpture"
              loading="lazy"
              decoding="async"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                display: 'block',
                willChange: 'transform',
              }}
            />
          </motion.div>
        </motion.div>

      </div>

      {/* 5. High-End Interactive PDF Viewer Modal */}
      <AnimatePresence>
        {selectedCert && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCert(null)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 9999,
              background: 'rgba(15, 23, 42, 0.75)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '960px',
                maxHeight: '90vh',
                background: '#ffffff',
                borderRadius: '24px',
                overflow: 'hidden',
                boxShadow: '0 25px 70px rgba(0, 0, 0, 0.35)',
                display: 'flex',
                flexDirection: 'column',
                border: '1.5px solid rgba(255, 255, 255, 0.8)',
              }}
            >
              {/* Modal Header Bar */}
              <div style={{
                padding: '16px 22px',
                background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 100%)',
                color: '#ffffff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '12px',
              }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <FiShield color="#38bdf8" size={16} />
                    <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.7rem', color: '#38bdf8', fontWeight: 800 }}>
                      VERIFIED ORIGINAL DOCUMENT
                    </span>
                  </div>
                  <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.05rem, 3.2vw, 1.3rem)', fontWeight: 800, margin: 0, lineHeight: 1.3 }}>
                    {selectedCert.title}
                  </h2>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: 'auto' }}>
                  <a
                    href={selectedCert.pdfPath}
                    download
                    style={{
                      background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                      color: '#ffffff',
                      border: 'none',
                      borderRadius: '999px',
                      padding: '7px 16px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '6px',
                      textDecoration: 'none',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    <FiDownload size={14} />
                    <span>Download PDF</span>
                  </a>

                  <button
                    onClick={() => setSelectedCert(null)}
                    style={{
                      background: 'rgba(255, 255, 255, 0.15)',
                      border: 'none',
                      borderRadius: '50%',
                      width: '34px',
                      height: '34px',
                      color: '#ffffff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                      flexShrink: 0,
                    }}
                  >
                    <FiX size={18} />
                  </button>
                </div>
              </div>

              {/* Modal Body & Live PDF Viewer iFrame */}
              <div className="modal-pdf-split" style={{ display: 'grid' }}>
                {/* iFrame PDF container */}
                <div style={{ background: '#f8fafc', position: 'relative', height: '100%' }}>
                  <iframe
                    src={`${selectedCert.pdfPath}#toolbar=1&navpanes=0`}
                    title={selectedCert.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      border: 'none',
                    }}
                  />
                </div>

                {/* Sidebar details */}
                <div style={{
                  padding: '24px',
                  background: '#f1f5f9',
                  borderLeft: '1px solid #e2e8f0',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '20px',
                }}>
                  <div>
                    <label style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, fontFamily: "'Space Mono', monospace", display: 'block', marginBottom: '4px' }}>
                      ISSUING ORGANIZATION
                    </label>
                    <div style={{ fontSize: '0.95rem', color: '#0f172a', fontWeight: 800, fontFamily: "'Space Grotesk', sans-serif" }}>
                      {selectedCert.issuer}
                    </div>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, fontFamily: "'Space Mono', monospace", display: 'block', marginBottom: '4px' }}>
                      ISSUE DATE
                    </label>
                    <div style={{ fontSize: '0.9rem', color: '#334155', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <FiCalendar size={14} color="#2563eb" />
                      <span>{selectedCert.issueDate}</span>
                    </div>
                  </div>

                  {selectedCert.credentialId && (
                    <div>
                      <label style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, fontFamily: "'Space Mono', monospace", display: 'block', marginBottom: '4px' }}>
                        CREDENTIAL / VERIFICATION ID
                      </label>
                      <div style={{ fontSize: '0.8rem', color: '#0f172a', fontWeight: 700, background: '#ffffff', padding: '6px 10px', borderRadius: '8px', border: '1px solid #cbd5e1', wordBreak: 'break-all', fontFamily: "'Space Mono', monospace" }}>
                        {selectedCert.credentialId}
                      </div>
                    </div>
                  )}

                  <div>
                    <label style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, fontFamily: "'Space Mono', monospace", display: 'block', marginBottom: '4px' }}>
                      SUMMARY &amp; SCOPE
                    </label>
                    <p style={{ fontSize: '0.82rem', color: '#475569', lineHeight: 1.5, margin: 0, fontWeight: 500 }}>
                      {selectedCert.description}
                    </p>
                  </div>

                  <div>
                    <label style={{ fontSize: '0.72rem', color: '#64748b', fontWeight: 800, fontFamily: "'Space Mono', monospace", display: 'block', marginBottom: '6px' }}>
                      VERIFIED COMPETENCIES
                    </label>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {selectedCert.skills.map((skill, i) => (
                        <span key={i} style={{
                          fontSize: '0.7rem',
                          background: '#ffffff',
                          color: '#2563eb',
                          padding: '3px 10px',
                          borderRadius: '999px',
                          fontWeight: 700,
                          border: '1px solid #bfdbfe',
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div style={{ marginTop: 'auto', paddingTop: '16px' }}>
                    <a
                      href={selectedCert.pdfPath}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        width: '100%',
                        background: '#0f172a',
                        color: '#ffffff',
                        border: 'none',
                        borderRadius: '12px',
                        padding: '12px',
                        fontFamily: "'Space Grotesk', sans-serif",
                        fontWeight: 700,
                        fontSize: '0.85rem',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '8px',
                        textDecoration: 'none',
                      }}
                    >
                      <FiExternalLink size={14} />
                      <span>Open PDF in New Tab</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


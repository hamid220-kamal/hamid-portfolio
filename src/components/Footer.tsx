import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiArrowUp, FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';

export default function Footer() {
  const [timeStr, setTimeStr] = useState('');
  const { navigate } = useRouter();

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
      };
      setTimeStr(now.toLocaleTimeString('en-US', options) + ' IST');
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: 'Overview', path: '/' },
    { name: 'Profile', path: '/about' },
    { name: 'Ventures', path: '/projects' },
    { name: 'Tech Stack', path: '/skills' },
    { name: 'Career', path: '/experience' },
    { name: 'Credentials', path: '/certificates' },
    { name: 'Connect', path: '/contact' },
  ];

  const coreDomains = [
    { name: 'Hardware & Web Serial', path: '/skills' },
    { name: 'High-Availability Web Apps', path: '/projects' },
    { name: 'AI Vision & Automation', path: '/projects' },
    { name: 'Security & Penetration Labs', path: '/skills' },
    { name: 'Engineering Leadership', path: '/about' },
  ];

  return (
    <footer style={{
      position: 'relative',
      width: '100%',
      marginTop: '100px',
      paddingTop: '80px',
      paddingBottom: '40px',
      overflow: 'hidden',
      borderTop: '1px solid rgba(255, 255, 255, 0.7)',
    }}>
      
      {/* 1. Full-Width 3D Tech Skyline Background Image directly on canvas background */}
      <div style={{
        position: 'absolute',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 0.75,
        filter: 'drop-shadow(0 0 35px rgba(37, 99, 235, 0.25))',
      }}>
        <img
          src="/images/3d/footer_3d_skyline_landscape.webp"
          alt="3D Futuristic Tech Skyline Horizon"
          loading="lazy"
          decoding="async"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center bottom',
            willChange: 'transform',
          }}
        />
      </div>

      {/* Very Soft Gradient Blend for Pristine Text Contrast */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(180deg, rgba(235, 243, 253, 0.7) 0%, rgba(220, 233, 248, 0.25) 50%, rgba(253, 244, 219, 0.4) 100%)',
        pointerEvents: 'none',
        zIndex: 1,
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 3 }}>
        
        {/* Main 4-Column Footer Grid Layout (Text Directly On 3D Skyline Image) */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.8fr 1fr 1.1fr',
          gap: '40px',
          paddingBottom: '50px',
          borderBottom: '1px solid rgba(148, 163, 184, 0.35)',
          marginBottom: '32px',
        }} className="footer-4col-grid">

          {/* Column 1: About Hamid Kamal & Brand Identity */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '18px' }}>
              <motion.div
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '14px',
                  background: '#0f172a',
                  color: '#ffffff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '1.05rem',
                  boxShadow: '0 8px 20px rgba(15, 23, 42, 0.25)',
                  position: 'relative',
                }}
              >
                HK
                <span style={{
                  position: 'absolute',
                  bottom: '-2px',
                  right: '-2px',
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  background: '#10b981',
                  border: '2px solid #ffffff',
                  boxShadow: '0 0 8px #10b981',
                }} />
              </motion.div>

              <div>
                <h3 style={{
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '1.3rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  margin: 0,
                  letterSpacing: '-0.02em',
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                }}>
                  Hamid Kamal
                </h3>
                <span style={{
                  fontFamily: "'Space Mono', monospace",
                  fontSize: '0.78rem',
                  color: '#1d4ed8',
                  fontWeight: 700,
                  textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                }}>
                  CTO @ Learn Quran &amp; Architect
                </span>
              </div>
            </div>

            <p style={{
              fontSize: '0.92rem',
              color: '#1e293b',
              lineHeight: 1.65,
              margin: '0 0 20px 0',
              fontWeight: 500,
              maxWidth: '340px',
              textShadow: '0 1px 3px rgba(255, 255, 255, 0.85)',
            }}>
              Building software that breaks traditional browser limitations—connecting abstract AI logic, Web Serial hardware API execution, and high-availability web architectures.
            </p>

            {/* Social Action Buttons */}
            <div style={{ display: 'flex', gap: '10px' }}>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/hamid220-kamal"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0f172a',
                  boxShadow: '0 6px 16px rgba(15, 23, 42, 0.1)',
                  transition: 'all 0.2s ease',
                }}
                aria-label="GitHub Profile"
              >
                <FiGithub size={17} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="https://linkedin.com/in/hamid-kamal"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'rgba(255, 255, 255, 0.95)',
                  border: '1.5px solid rgba(255, 255, 255, 0.95)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#0077b5',
                  boxShadow: '0 6px 16px rgba(15, 23, 42, 0.1)',
                  transition: 'all 0.2s ease',
                }}
                aria-label="LinkedIn Profile"
              >
                <FiLinkedin size={17} />
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:buildwithhamid@gmail.com"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  border: '1px solid rgba(147, 197, 253, 0.8)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ffffff',
                  boxShadow: '0 6px 18px rgba(37, 99, 235, 0.45)',
                  transition: 'all 0.2s ease',
                }}
                aria-label="Send Email"
              >
                <FiMail size={17} />
              </motion.a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
            }}>
              Quick Navigation
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <button
                    onClick={() => navigate(link.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.94rem',
                      fontWeight: 650,
                      color: '#1e293b',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#2563eb';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#1e293b';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Core Engineering Domains */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
            }}>
              Core Engineering
            </h4>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {coreDomains.map((domain) => (
                <li key={domain.name}>
                  <button
                    onClick={() => navigate(domain.path)}
                    style={{
                      background: 'none',
                      border: 'none',
                      padding: 0,
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.94rem',
                      fontWeight: 650,
                      color: '#1e293b',
                      cursor: 'pointer',
                      transition: 'all 0.2s ease',
                      textAlign: 'left',
                      textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = '#2563eb';
                      e.currentTarget.style.transform = 'translateX(4px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = '#1e293b';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}
                  >
                    {domain.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Inquiries / Live Telemetry */}
          <div>
            <h4 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.1rem',
              fontWeight: 800,
              color: '#0f172a',
              marginBottom: '20px',
              letterSpacing: '-0.01em',
              textShadow: '0 1px 2px rgba(255, 255, 255, 0.9)',
            }}>
              Direct Inquiries
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              <a
                href="mailto:buildwithhamid@gmail.com"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#1e40af',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  fontFamily: "'Space Mono', monospace",
                  textDecoration: 'none',
                  background: 'rgba(255, 255, 255, 0.85)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  borderRadius: '10px',
                  padding: '8px 14px',
                  boxShadow: '0 2px 8px rgba(15, 23, 42, 0.04)',
                }}
              >
                <FiMail size={15} color="#2563eb" />
                <span>buildwithhamid@gmail.com</span>
              </a>

              {/* Operational Status */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '0.8rem',
                fontFamily: "'Space Mono', monospace",
                color: '#0f172a',
                fontWeight: 700,
                textShadow: '0 1px 2px rgba(255, 255, 255, 0.95)',
              }}>
                <span style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: '#10b981',
                  boxShadow: '0 0 8px #10b981',
                }} />
                <span>Systems Operational &bull; {timeStr}</span>
              </div>

              {/* Back To Top Floating Pill */}
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={scrollToTop}
                style={{
                  marginTop: '10px',
                  background: '#ffffff',
                  border: '1.5px solid rgba(37, 99, 235, 0.35)',
                  borderRadius: '999px',
                  padding: '10px 22px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontSize: '0.85rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  cursor: 'pointer',
                  boxShadow: '0 6px 20px -3px rgba(15, 23, 42, 0.08)',
                  width: 'fit-content',
                }}
              >
                <span>Back To Top</span>
                <FiArrowUp size={16} color="#2563eb" />
              </motion.button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.84rem',
          fontFamily: "'Space Grotesk', sans-serif",
          color: '#475569',
          fontWeight: 500,
        }}>
          <div>
            &copy; {new Date().getFullYear()} <strong style={{ color: '#0f172a', fontWeight: 800 }}>Hamid Kamal</strong>. All rights reserved.
          </div>
          <div style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.78rem', color: '#64748b' }}>
            Hand-crafted with engineering precision &bull; Light Glass Aesthetic
          </div>
        </div>

      </div>

      <style>{`
        @media (max-width: 1024px) {
          .footer-4col-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 32px !important;
          }
        }
        @media (max-width: 640px) {
          .footer-4col-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
        }
      `}</style>
    </footer>
  );
}

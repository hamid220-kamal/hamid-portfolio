import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiTerminal, FiUser, FiGrid, FiLayers, FiBriefcase, FiAward, FiSend, FiMenu, FiX } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';

interface NavbarProps {
  onOpenCommandPalette: () => void;
}

export default function Navbar({ onOpenCommandPalette }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Global keydown listener for Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        onOpenCommandPalette();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onOpenCommandPalette]);

  // Easy-to-read, distinctive & modern Sidebar Navigation Items
  const sidebarNavItems = [
    { name: 'Overview', path: '/', index: '00', icon: <FiTerminal size={18} /> },
    { name: 'Profile', path: '/about', index: '01', icon: <FiUser size={18} /> },
    { name: 'Ventures', path: '/projects', index: '02', icon: <FiGrid size={18} /> },
    { name: 'Tech Stack', path: '/skills', index: '03', icon: <FiLayers size={18} /> },
    { name: 'Career', path: '/experience', index: '04', icon: <FiBriefcase size={18} /> },
    { name: 'Credentials', path: '/certificates', index: '05', icon: <FiAward size={18} /> },
    { name: 'Connect', path: '/contact', index: '06', icon: <FiSend size={18} /> }
  ];

  const handleNavClick = (path: string) => {
    navigate(path);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* Top Header Bar */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: '16px 28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: scrolled ? 'rgba(255, 255, 255, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(16px)' : 'none',
          transition: 'all 0.3s ease',
          pointerEvents: 'none'
        }}
      >
        {/* Left: Brand Monogram & Status Badge */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', pointerEvents: 'auto' }}>
          <button
            onClick={() => handleNavClick('/')}
            style={{
              background: 'none',
              border: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              cursor: 'pointer',
              padding: 0
            }}
          >
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: '#0f172a',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: '0.85rem',
              position: 'relative',
              boxShadow: '0 4px 12px rgba(15, 23, 42, 0.15)'
            }}>
              HK
              <span style={{
                position: 'absolute',
                bottom: 0,
                right: 0,
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: '#10b981',
                border: '2px solid #ffffff'
              }} />
            </div>

            <span style={{
              fontFamily: 'Space Grotesk, sans-serif',
              fontWeight: 800,
              fontSize: '1rem',
              color: '#0f172a',
              letterSpacing: '-0.02em'
            }}>
              HAMID
            </span>
          </button>

          {/* Status Badge (Desktop Only) */}
          <div className="desktop-only" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px 14px',
            background: 'rgba(255, 255, 255, 0.9)',
            border: '1px solid rgba(37, 99, 235, 0.2)',
            backdropFilter: 'blur(10px)',
            borderRadius: '999px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.04)'
          }}>
            <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#10b981', boxShadow: '0 0 8px #10b981' }} />
            <span style={{ fontSize: '0.76rem', fontFamily: 'Space Mono, monospace', fontWeight: 700, color: '#1e40af' }}>
              CTO @ LEARN QURAN & SYSTEMS ARCHITECT
            </span>
          </div>
        </div>

        {/* Right Action Pills */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', pointerEvents: 'auto' }}>
          <button
            onClick={onOpenCommandPalette}
            className="cmd-k-btn"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'rgba(255, 255, 255, 0.9)',
              border: '1px solid #cbd5e1',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              padding: '8px 16px',
              fontSize: '0.78rem',
              fontFamily: 'Space Mono, monospace',
              fontWeight: 600,
              color: '#334155',
              cursor: 'pointer',
              boxShadow: '0 2px 8px rgba(0,0,0,0.04)',
              transition: 'all 0.2s'
            }}
            aria-label="Open Command Palette"
          >
            <span>Command+K</span>
          </button>

          <a
            href="/Hamid Kamal - Resume.pdf"
            download
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: '#0f172a',
              color: '#ffffff',
              padding: '8px 18px',
              borderRadius: '999px',
              textDecoration: 'none',
              fontSize: '0.82rem',
              fontWeight: 700,
              boxShadow: '0 4px 14px rgba(15, 23, 42, 0.2)',
              transition: 'all 0.2s'
            }}
          >
            <FiDownload size={14} />
            <span>CV</span>
          </a>

          {/* Mobile Toggle Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="mobile-only-toggle"
            style={{
              background: '#ffffff',
              border: '1px solid #cbd5e1',
              borderRadius: '50%',
              width: '38px',
              height: '38px',
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0f172a',
              cursor: 'pointer'
            }}
            aria-label="Toggle Navigation Menu"
          >
            {isMobileOpen ? <FiX size={20} /> : <FiMenu size={20} />}
          </button>
        </div>
      </header>

      {/* Left Sidebar Navigation Dock (3D Light Glassmorphic Floating Pod) */}
      <aside className="left-sidebar-dock-compact">
        <div style={{
          background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.75) 100%)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1.5px solid rgba(255, 255, 255, 0.95)',
          borderRadius: '24px',
          padding: '14px 10px',
          boxShadow: '0 20px 50px -10px rgba(15, 23, 42, 0.14), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          alignItems: 'center',
          transformStyle: 'preserve-3d',
        }}>
          {sidebarNavItems.map((item) => {
            const isActive = currentPath === item.path || (item.path !== '/' && currentPath.startsWith(item.path));

            return (
              <motion.button
                key={item.name}
                onClick={() => handleNavClick(item.path)}
                whileHover={{ scale: 1.12, y: -2, rotateX: 6, rotateY: -6 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'spring', stiffness: 450, damping: 25 }}
                style={{
                  position: 'relative',
                  background: 'none',
                  border: 'none',
                  color: isActive ? '#2563eb' : '#475569',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '8px 10px',
                  borderRadius: '14px',
                  textDecoration: 'none',
                  width: '64px',
                  perspective: 600,
                }}
              >
                {isActive && (
                  <motion.div
                    layoutId="sidebar-active-indicator-pill"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(135deg, rgba(37, 99, 235, 0.12) 0%, rgba(59, 130, 246, 0.22) 100%)',
                      border: '1.5px solid rgba(37, 99, 235, 0.35)',
                      borderRadius: '14px',
                      boxShadow: '0 8px 20px -4px rgba(37, 99, 235, 0.3), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
                      zIndex: 0
                    }}
                  />
                )}
                <div style={{
                  position: 'relative',
                  zIndex: 1,
                  filter: isActive ? 'drop-shadow(0 2px 8px rgba(37, 99, 235, 0.4))' : 'none',
                  transition: 'all 0.2s ease',
                }}>
                  {item.icon}
                </div>
                <span style={{
                  position: 'relative',
                  zIndex: 1,
                  fontSize: '0.68rem',
                  fontFamily: 'Space Grotesk, sans-serif',
                  fontWeight: isActive ? 800 : 600,
                  letterSpacing: '-0.01em',
                  whiteSpace: 'nowrap',
                }}>
                  {item.name}
                </span>
              </motion.button>
            );
          })}
        </div>
      </aside>

      {/* Mobile Menu Popover */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            style={{
              position: 'fixed',
              top: '70px',
              left: '16px',
              right: '16px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #cbd5e1',
              padding: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              boxShadow: '0 20px 40px -15px rgba(15, 23, 42, 0.2)',
              zIndex: 999
            }}
          >
            {sidebarNavItems.map((item) => {
              const isActive = currentPath === item.path;
              return (
                <button
                  key={item.name}
                  onClick={() => handleNavClick(item.path)}
                  style={{
                    background: isActive ? 'rgba(37, 99, 235, 0.08)' : 'none',
                    border: 'none',
                    borderRadius: '12px',
                    color: isActive ? '#2563eb' : '#0f172a',
                    cursor: 'pointer',
                    fontSize: '0.95rem',
                    fontWeight: isActive ? 700 : 600,
                    padding: '10px 14px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    {item.icon}
                    <span>{item.name}</span>
                  </div>
                  <span style={{ fontFamily: 'Space Mono, monospace', fontSize: '0.78rem', color: '#94a3b8' }}>
                    {item.index}
                  </span>
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .left-sidebar-dock-compact {
          position: fixed;
          left: 18px;
          top: 48%;
          transform: translateY(-50%);
          z-index: 990;
          display: block;
        }

        @media (max-width: 1024px) {
          .left-sidebar-dock-compact { display: none !important; }
          .desktop-only { display: none !important; }
          .mobile-only-toggle { display: flex !important; }
        }

        @media (max-width: 500px) {
          .cmd-k-btn { display: none !important; }
        }
      `}</style>
    </>
  );
}

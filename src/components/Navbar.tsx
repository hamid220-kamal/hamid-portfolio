import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Capabilities', href: '#skills' },
    { name: 'Ventures', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      style={{
        position: 'fixed',
        top: '24px',
        left: '50%',
        transform: 'translateX(-50%)',
        zIndex: 1000,
        width: 'calc(100% - 48px)',
        maxWidth: '800px',
        transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
    >
      <div 
        style={{
          background: scrolled ? 'rgba(15, 23, 42, 0.7)' : 'rgba(15, 23, 42, 0.4)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(255, 255, 255, 0.08)',
          borderRadius: '24px',
          padding: '12px 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          boxShadow: scrolled ? '0 20px 40px rgba(0,0,0,0.3)' : 'none'
        }}
      >
        <a href="#home" style={{ fontSize: '1.25rem', fontWeight: 800, color: '#f8fafc', textDecoration: 'none', letterSpacing: '-0.02em' }}>
          HK<span style={{ color: '#6366f1' }}>.</span>
        </a>

        {/* Desktop Links */}
        <div style={{ display: 'none', gap: '32px' }} className="desktop-nav">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '0.9rem',
                fontWeight: 600,
                transition: 'color 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.color = '#f8fafc'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#ffffff'}
            >
              {link.name}
            </a>
          ))}
        </div>

        <a href="#contact" className="btn-nav" style={{ display: 'none' }}>
          Get in Touch
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          style={{ 
            background: 'none', 
            border: 'none', 
            color: '#f8fafc', 
            cursor: 'pointer',
            padding: '8px',
            display: 'block'
          }}
          className="mobile-toggle"
        >
          {isOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '80px',
              left: 0,
              right: 0,
              background: 'rgba(15, 23, 42, 0.95)',
              backdropFilter: 'blur(20px)',
              borderRadius: '24px',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
              zIndex: 999
            }}
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  color: '#f8fafc',
                  textDecoration: 'none',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  padding: '12px 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)'
                }}
              >
                {link.name}
              </a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 769px) {
          .desktop-nav { display: flex !important; }
          .btn-nav { 
            display: block !important; 
            background: #f8fafc; 
            color: #020617; 
            padding: 10px 20px; 
            border-radius: 12px; 
            text-decoration: none; 
            font-size: 0.85rem; 
            font-weight: 700;
            transition: all 0.3s;
          }
          .btn-nav:hover { background: #6366f1; color: #fff; }
          .mobile-toggle { display: none !important; }
        }
      `}</style>
    </nav>
  );
}

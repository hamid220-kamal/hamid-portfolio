import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMenu, FiX, FiGithub, FiLinkedin, FiInstagram } from 'react-icons/fi';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Certificates', href: '#certificates' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hamid220-kamal', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hamidkamal/', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://www.instagram.com/buildwith_hamid/', label: 'Instagram' },
];

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleNavClick = (href: string) => {
        setIsMobileMenuOpen(false);
        const element = document.querySelector(href);
        element?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    right: 0,
                    zIndex: 1000,
                    padding: '16px 24px',
                    background: isScrolled ? 'rgba(10, 10, 15, 0.9)' : 'transparent',
                    backdropFilter: isScrolled ? 'blur(20px)' : 'none',
                    borderBottom: isScrolled ? '1px solid rgba(139, 92, 246, 0.1)' : 'none',
                    transition: 'all 0.3s ease',
                }}
            >
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    {/* Logo */}
                    <motion.a
                        href="#home"
                        onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
                        whileHover={{ scale: 1.05 }}
                        style={{
                            fontSize: '1.5rem',
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            textDecoration: 'none',
                            fontFamily: "'Outfit', sans-serif",
                        }}
                    >
                        HK
                    </motion.a>

                    {/* Desktop Navigation */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '32px',
                    }}
                        className="desktop-nav"
                    >
                        {navLinks.map((link) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                whileHover={{ color: '#8b5cf6' }}
                                style={{
                                    color: '#e4e4e7',
                                    textDecoration: 'none',
                                    fontSize: '0.9rem',
                                    fontWeight: 500,
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}
                    </div>

                    {/* Social Icons */}
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '16px',
                    }}
                        className="desktop-nav"
                    >
                        {socialLinks.map((social) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, color: '#8b5cf6' }}
                                style={{
                                    color: '#e4e4e7',
                                    transition: 'color 0.3s ease',
                                }}
                            >
                                <social.icon size={20} />
                            </motion.a>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <motion.button
                        whileTap={{ scale: 0.9 }}
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="mobile-menu-btn"
                        style={{
                            display: 'none',
                            background: 'transparent',
                            border: 'none',
                            color: '#fff',
                            cursor: 'pointer',
                            padding: '8px',
                        }}
                    >
                        {isMobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
                    </motion.button>
                </div>
            </motion.nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ duration: 0.3 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            bottom: 0,
                            width: '70%',
                            maxWidth: '300px',
                            background: 'rgba(10, 10, 15, 0.98)',
                            backdropFilter: 'blur(20px)',
                            zIndex: 999,
                            padding: '100px 32px 32px',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '24px',
                        }}
                    >
                        {navLinks.map((link, index) => (
                            <motion.a
                                key={link.name}
                                href={link.href}
                                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                style={{
                                    color: '#fff',
                                    textDecoration: 'none',
                                    fontSize: '1.2rem',
                                    fontWeight: 500,
                                }}
                            >
                                {link.name}
                            </motion.a>
                        ))}

                        <div style={{
                            display: 'flex',
                            gap: '20px',
                            marginTop: '32px',
                        }}>
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{ color: '#e4e4e7' }}
                                >
                                    <social.icon size={24} />
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
        </>
    );
}

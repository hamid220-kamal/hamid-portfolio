import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiHeart, FiArrowUp, FiCode } from 'react-icons/fi';

const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hamid220-kamal', label: 'GitHub' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/hamid-kamal-hyderabad', label: 'LinkedIn' },
    { icon: FiInstagram, href: 'https://instagram.com/hamid220_kamal', label: 'Instagram' },
    { icon: FiMail, href: 'mailto:buildwithhamid@gmail.com', label: 'Email' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer
            style={{
                background: 'linear-gradient(to top, #0a0a0f, #12121a)',
                borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                position: 'relative',
            }}
        >
            {/* Scroll to Top Button */}
            <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.9 }}
                style={{
                    position: 'absolute',
                    top: '-28px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: '56px',
                    height: '56px',
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    border: 'none',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    color: '#fff',
                    boxShadow: '0 0 30px rgba(139, 92, 246, 0.5)',
                }}
            >
                <FiArrowUp size={24} />
            </motion.button>

            <div className="container" style={{ padding: '80px 24px 40px' }}>
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                        gap: '50px',
                        marginBottom: '50px',
                    }}
                >
                    {/* Brand Section */}
                    <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                            <div
                                style={{
                                    width: '48px',
                                    height: '48px',
                                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                    borderRadius: '12px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                <FiCode size={24} color="#fff" />
                            </div>
                            <span
                                style={{
                                    fontFamily: "'Outfit', sans-serif",
                                    fontSize: '1.4rem',
                                    fontWeight: 700,
                                    color: '#fff',
                                }}
                            >
                                Hamid Kamal
                            </span>
                        </div>
                        <p style={{ color: '#d4d4d8', lineHeight: 1.8, fontSize: '0.95rem' }}>
                            Aspiring AI Engineer and Full-Stack Developer passionate about building innovative
                            technology solutions that make a meaningful impact.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '20px',
                            }}
                        >
                            Quick Navigation
                        </h4>
                        <ul style={{ listStyle: 'none', padding: 0 }}>
                            {quickLinks.map((link) => (
                                <li key={link.name} style={{ marginBottom: '12px' }}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5, color: '#8b5cf6' }}
                                        style={{
                                            color: '#e4e4e7',
                                            textDecoration: 'none',
                                            fontSize: '0.95rem',
                                            transition: 'color 0.3s ease',
                                        }}
                                    >
                                        {link.name}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '20px',
                            }}
                        >
                            Get in Touch
                        </h4>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                            <a
                                href="mailto:buildwithhamid@gmail.com"
                                style={{ color: '#e4e4e7', textDecoration: 'none', fontSize: '0.95rem' }}
                            >
                                buildwithhamid@gmail.com
                            </a>
                            <span style={{ color: '#e4e4e7', fontSize: '0.95rem' }}>
                                Hyderabad, India
                            </span>
                            <span style={{ color: '#10b981', fontSize: '0.9rem', fontWeight: 500 }}>
                                ● Available for opportunities
                            </span>
                        </div>
                    </div>

                    {/* Social Links */}
                    <div>
                        <h4
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.1rem',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '20px',
                            }}
                        >
                            Connect With Me
                        </h4>
                        <div style={{ display: 'flex', gap: '12px' }}>
                            {socialLinks.map((social) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.15, y: -3 }}
                                    style={{
                                        width: '46px',
                                        height: '46px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '12px',
                                        color: '#e4e4e7',
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = '#8b5cf6';
                                        e.currentTarget.style.borderColor = '#8b5cf6';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '#e4e4e7';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <social.icon size={22} />
                                </motion.a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div
                    style={{
                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                        paddingTop: '28px',
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '16px',
                    }}
                >
                    <p style={{ color: '#d4d4d8', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Hamid Kamal. All rights reserved.
                    </p>
                    <p
                        style={{
                            color: '#d4d4d8',
                            fontSize: '0.9rem',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '6px',
                        }}
                    >
                        Crafted with <FiHeart size={14} color="#ef4444" /> using React & TypeScript
                    </p>
                </div>
            </div>
        </footer>
    );
}

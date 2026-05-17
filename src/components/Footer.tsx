import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { FiGithub, FiLinkedin, FiInstagram, FiMail, FiArrowUp, FiTerminal } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/hamid220-kamal', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hamid-kamal/', label: 'LinkedIn' },
  { icon: FiInstagram, href: 'https://www.instagram.com/buildwith_hamid/', label: 'Instagram' },
  { icon: FiMail, href: 'mailto:buildwithhamid@gmail.com', label: 'Email' },
];

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#skills' },
  { name: 'Ventures', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Credentials', href: '#certificates' },
];

export default function Footer() {
  const footerRef = useRef(null);
  const inView = useInView(footerRef, { once: true, amount: 0.2 });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <footer ref={footerRef} className="footer-section">
      {/* Top Ambient Glow */}
      <div className="footer-glow" />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="footer-brand">
            <a href="#home" className="footer-logo">
              Hamid Kamal<span className="accent">.</span>
            </a>
            <p className="footer-bio">
              Architecting secure, scalable AI ecosystems and decentralized infrastructures. Building the intelligence of tomorrow, today.
            </p>
            <div className="system-status">
              <div className="status-dot" />
              <span>All Systems Operational</span>
            </div>
          </motion.div>

          {/* Navigation Column */}
          <motion.div variants={itemVariants} className="footer-nav">
            <h4 className="footer-heading">Architecture</h4>
            <div className="footer-links">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="footer-link">
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Socials Column */}
          <motion.div variants={itemVariants} className="footer-socials">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-grid">
              {socialLinks.map((social) => (
                <a 
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-btn"
                  title={social.label}
                >
                  <social.icon size={20} />
                  <span>{social.label}</span>
                </a>
              ))}
            </div>
          </motion.div>

        </motion.div>

        {/* Bottom Bar */}
        <motion.div 
          className="footer-bottom"
          variants={itemVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="copyright">
            &copy; {new Date().getFullYear()} Hamid Kamal. All rights reserved.
          </div>
          
          <div className="engineered-by">
            <FiTerminal size={14} className="terminal-icon" />
            <span>Engineered with precision in React & TypeScript</span>
          </div>

          <button onClick={scrollToTop} className="back-to-top" aria-label="Scroll to top">
            <FiArrowUp size={18} />
          </button>
        </motion.div>
      </div>

      <style>{`
        .footer-section {
          position: relative;
          background: #020617; /* Slate 950 */
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          padding: 80px 0 40px;
          overflow: hidden;
        }

        .footer-glow {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 80vw;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(99, 102, 241, 0.5), transparent);
          box-shadow: 0 0 40px 10px rgba(99, 102, 241, 0.1);
        }

        .footer-content {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 80px;
        }

        .footer-logo {
          display: inline-block;
          font-size: 1.75rem;
          font-weight: 800;
          color: #f8fafc;
          text-decoration: none;
          letter-spacing: -0.02em;
          margin-bottom: 20px;
        }

        .footer-logo .accent {
          color: #6366f1;
        }

        .footer-bio {
          color: #ffffff;
          font-size: 0.95rem;
          line-height: 1.6;
          max-width: 400px;
          margin-bottom: 24px;
        }

        .system-status {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          background: rgba(52, 211, 153, 0.1);
          border: 1px solid rgba(52, 211, 153, 0.2);
          border-radius: 99px;
          color: #34d399;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05em;
        }

        .status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #34d399;
          box-shadow: 0 0 10px #34d399;
          animation: pulse 2s infinite;
        }

        @keyframes pulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.2); }
          100% { opacity: 1; transform: scale(1); }
        }

        .footer-heading {
          color: #f8fafc;
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 24px;
          letter-spacing: 0.02em;
        }

        .footer-links {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-link {
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          display: inline-block;
          width: fit-content;
        }

        .footer-link:hover {
          color: #818cf8;
          transform: translateX(4px);
        }

        .social-grid {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-social-btn {
          display: flex;
          align-items: center;
          gap: 12px;
          color: #ffffff;
          text-decoration: none;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          padding: 8px 12px;
          margin: -8px -12px;
          border-radius: 8px;
        }

        .footer-social-btn:hover {
          color: #f8fafc;
          background: rgba(255, 255, 255, 0.05);
        }

        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 32px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #ffffff;
          font-size: 0.85rem;
          flex-wrap: wrap;
          gap: 20px;
        }

        .engineered-by {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .terminal-icon {
          color: #6366f1;
        }

        .back-to-top {
          width: 40px;
          height: 40px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
          outline: none;
        }

        .back-to-top:hover {
          background: #6366f1;
          color: #fff;
          border-color: #6366f1;
          transform: translateY(-4px);
        }

        @media (max-width: 1024px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }

        @media (max-width: 640px) {
          .footer-content {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 48px;
          }
          .footer-bio {
            margin: 0 auto 24px;
          }
          .footer-links {
            align-items: center;
          }
          .social-grid {
            flex-direction: row;
            justify-content: center;
            flex-wrap: wrap;
            gap: 12px;
          }
          .footer-social-btn {
            margin: 0;
          }
          .footer-bottom {
            flex-direction: column;
            text-align: center;
            gap: 24px;
          }
          .engineered-by {
            justify-content: center;
            flex-wrap: wrap;
          }
        }
      `}</style>
    </footer>
  );
}

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiInstagram, FiMessageSquare, FiArrowRight, FiCheckCircle } from 'react-icons/fi';

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/hamid220-kamal', label: 'GitHub', color: '#8b5cf6' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/hamid-kamal-/', label: 'LinkedIn', color: '#0077b5' },
  { icon: FiInstagram, href: 'https://www.instagram.com/buildwith_hamid/', label: 'Instagram', color: '#e4405f' },
];

export default function Contact() {
  const containerRef = useRef(null);
  const inView = useInView(containerRef, { once: true, amount: 0.1 });

  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = '918332059777';
    const message = `*Executive Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Message:*%0A${formData.message}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="section contact-section" ref={containerRef}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="contact-header"
        >
          <div className="section-label">Collaboration & Inquiries</div>
          <h2 className="section-title">Initiate Dialogue</h2>
          <p className="section-subtitle" style={{ maxWidth: '500px', margin: '0 auto' }}>
            Whether you are looking to architect scalable infrastructure, integrate agentic AI, or discuss executive leadership opportunities—my line is open.
          </p>
        </motion.div>

        <div className="contact-grid">
          
          {/* Direct Communication Panel */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="contact-info-panel"
          >
            <div className="panel-glow" />
            <h3 className="panel-title">Direct Comms</h3>
            <p className="panel-desc">
              I prioritize high-signal communication. Reach out directly via email or connect through professional networks.
            </p>

            <a href="mailto:buildwithhamid@gmail.com" className="email-block">
              <div className="email-icon">
                <FiMail size={22} />
              </div>
              <div className="email-text">
                <span className="email-label">Primary Email</span>
                <span className="email-address">buildwithhamid@gmail.com</span>
              </div>
            </a>

            <div className="social-block">
              <span className="social-label">Verified Networks</span>
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a 
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn"
                    title={social.label}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="availability-status">
              <FiCheckCircle size={16} className="status-icon" />
              <span>Available for Executive Roles & Consulting</span>
            </div>
          </motion.div>

          {/* Secure Form Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="contact-form-panel"
          >
            <form onSubmit={handleSubmit} className="secure-form">
              <div className="form-header">
                <FiMessageSquare size={20} className="form-header-icon" />
                <span>Secure Message Portal</span>
              </div>

              <div className={`input-group ${focusedField === 'name' ? 'focused' : ''} ${formData.name ? 'has-value' : ''}`}>
                <label>Full Name</label>
                <input 
                  type="text" 
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <div className="input-border" />
              </div>

              <div className={`input-group ${focusedField === 'email' ? 'focused' : ''} ${formData.email ? 'has-value' : ''}`}>
                <label>Corporate Email</label>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  onFocus={() => setFocusedField('email')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <div className="input-border" />
              </div>

              <div className={`input-group textarea-group ${focusedField === 'message' ? 'focused' : ''} ${formData.message ? 'has-value' : ''}`}>
                <label>Project Details / Inquiry</label>
                <textarea 
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  required
                />
                <div className="input-border" />
              </div>

              <button type="submit" className="submit-btn">
                <span>Transmit via WhatsApp</span>
                <FiArrowRight size={18} className="btn-icon" />
              </button>
            </form>
          </motion.div>

        </div>
      </div>

      <style>{`
        .contact-section {
          position: relative;
          background: transparent;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 60px;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 32px;
          align-items: stretch;
        }

        /* Info Panel */
        .contact-info-panel {
          position: relative;
          background: rgba(15, 23, 42, 0.4);
          backdrop-filter: blur(16px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }

        .panel-glow {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: radial-gradient(circle at top left, rgba(99, 102, 241, 0.15), transparent 70%);
          pointer-events: none;
        }

        .panel-title {
          font-size: 1.5rem;
          font-weight: 700;
          color: #f8fafc;
          margin-bottom: 12px;
          position: relative;
        }

        .panel-desc {
          color: #ffffff;
          font-size: 0.95rem;
          line-height: 1.6;
          margin-bottom: 40px;
          position: relative;
        }

        .email-block {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 20px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 16px;
          text-decoration: none;
          transition: all 0.3s ease;
          position: relative;
          margin-bottom: 40px;
        }

        .email-block:hover {
          background: rgba(99, 102, 241, 0.08);
          border-color: rgba(99, 102, 241, 0.2);
          transform: translateY(-2px);
        }

        .email-icon {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(99, 102, 241, 0.1);
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .email-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }

        .email-label {
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          font-weight: 700;
        }

        .email-address {
          color: #f8fafc;
          font-weight: 600;
          font-size: 1.05rem;
        }

        .social-block {
          margin-bottom: auto;
          position: relative;
        }

        .social-label {
          display: block;
          font-size: 0.75rem;
          text-transform: uppercase;
          letter-spacing: 0.05em;
          color: #ffffff;
          font-weight: 700;
          margin-bottom: 16px;
        }

        .social-links {
          display: flex;
          gap: 16px;
        }

        .social-btn {
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          color: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }

        .social-btn:hover {
          background: #6366f1;
          color: #ffffff;
          border-color: #6366f1;
          transform: translateY(-3px);
          box-shadow: 0 10px 20px -10px rgba(99, 102, 241, 0.5);
        }

        .availability-status {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-top: 40px;
          padding-top: 24px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          color: #34d399;
          font-size: 0.85rem;
          font-weight: 600;
        }

        /* Form Panel */
        .contact-form-panel {
          background: rgba(15, 23, 42, 0.6);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 24px;
          padding: 40px;
          position: relative;
        }

        .secure-form {
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        .form-header {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #818cf8;
          font-weight: 600;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          margin-bottom: 8px;
        }

        .input-group {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .input-group label {
          position: absolute;
          left: 16px;
          top: 18px;
          font-size: 0.95rem;
          color: #ffffff;
          pointer-events: none;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          transform-origin: left top;
        }

        .input-group.focused label,
        .input-group.has-value label {
          transform: translateY(-26px) scale(0.85);
          color: #818cf8;
        }

        .input-group input,
        .input-group textarea {
          width: 100%;
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 12px;
          padding: 16px;
          color: #f8fafc;
          font-family: inherit;
          font-size: 1rem;
          outline: none;
          transition: background 0.3s;
        }

        .input-group textarea {
          resize: vertical;
          min-height: 120px;
        }

        .input-group input:hover,
        .input-group textarea:hover {
          background: rgba(255, 255, 255, 0.04);
        }

        .input-border {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background: #6366f1;
          transform: scaleX(0);
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
          border-radius: 0 0 12px 12px;
        }

        .input-group.focused .input-border {
          transform: scaleX(1);
        }

        .input-group.focused input,
        .input-group.focused textarea {
          background: rgba(99, 102, 241, 0.03);
          border-color: rgba(99, 102, 241, 0.3);
          border-bottom-color: transparent;
        }

        .submit-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          width: 100%;
          padding: 18px;
          background: #6366f1;
          color: #fff;
          border: none;
          border-radius: 12px;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
          margin-top: 8px;
        }

        .submit-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          transition: left 0.5s ease;
        }

        .submit-btn:hover {
          background: #4f46e5;
          transform: translateY(-2px);
          box-shadow: 0 10px 25px -5px rgba(99, 102, 241, 0.4);
        }

        .submit-btn:hover::before {
          left: 100%;
        }

        .submit-btn:hover .btn-icon {
          transform: translateX(4px);
        }

        .btn-icon {
          transition: transform 0.3s ease;
        }

        @media (max-width: 860px) {
          .contact-grid {
            grid-template-columns: 1fr;
          }
          .contact-info-panel, .contact-form-panel {
            padding: 32px;
          }
        }

        @media (max-width: 480px) {
          .contact-info-panel, .contact-form-panel {
            padding: 24px;
          }
        }
      `}</style>
    </section>
  );
}

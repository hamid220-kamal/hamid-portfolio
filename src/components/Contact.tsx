import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiSend, FiCopy, FiCheck, FiGithub, FiLinkedin, FiHelpCircle, FiAlertCircle, FiLoader } from 'react-icons/fi';

const contactFaqs = [
  {
    q: "What types of engineering projects do you accept?",
    a: "I specialize in web architecture (React 19, Next.js 15), browser hardware control (Web Serial API, WASM engines), computer vision pipelines (YOLOv8, OpenCV), and AI model integration."
  },
  {
    q: "What is your typical response time?",
    a: "I review technical inquiries daily. You can expect a response to direct emails within 12 to 24 hours."
  },
  {
    q: "Are you available for remote contracts & technical leadership?",
    a: "Yes, I actively consult for select technical contracts, product engineering advisory, and founder partnerships worldwide."
  }
];

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('buildwithhamid@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const payload = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name}`,
      message: formData.message,
    };

    try {
      // 1. Primary: Secure Vercel Serverless Function (/api/contact) where Access Key is completely hidden
      let response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      // 2. Fallback for local Vite dev if Vercel serverless /api is not running locally:
      if (!response.ok && response.status === 404) {
        const localKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
        if (localKey) {
          response = await fetch('https://api.web3forms.com/submit', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
              'Accept': 'application/json',
            },
            body: JSON.stringify({
              access_key: localKey,
              ...payload,
              from_name: `${formData.name} via Hamid Portfolio`,
              replyto: formData.email,
              botcheck: '',
            }),
          });
        }
      }

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setErrorMessage(result.message || 'Submission failed. You can email directly to buildwithhamid@gmail.com');
      }
    } catch {
      setErrorMessage('Network transmission failed. Click below to launch your email client directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section" ref={ref} style={{ position: 'relative', paddingTop: '40px' }}>
      <div className="container">
        
        {/* 1. Header Banner — Left Aligned (Exact match to Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: '36px' }}
        >
          <div style={{
            display: 'inline-block',
            background: 'rgba(255, 255, 255, 0.85)',
            border: '1px solid rgba(37, 99, 235, 0.3)',
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            borderRadius: '999px',
            padding: '5px 16px',
            fontFamily: "'Space Mono', monospace",
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#1e3a5f',
            marginBottom: '16px',
          }}>
            01 / GET IN TOUCH
          </div>

          <h2 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.2rem, 4.8vw, 3.8rem)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}>
            Initiate Technical Collaboration<br />&amp; Contracting
          </h2>

          <p style={{
            fontSize: '1.08rem',
            color: '#475569',
            maxWidth: '680px',
            lineHeight: 1.6,
            fontWeight: 450,
            margin: 0,
          }}>
            Whether you need software architecture consulting, hardware serial <strong>execution</strong>, or an <strong>AI-driven web platform</strong>—my inbox is open.
          </p>
        </motion.div>

        {/* 2. Top Row: Direct Inquiries Glass Pod + GitHub & LinkedIn Stack + 3D Cyber Cube Assembly (Exact Match to Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr 220px',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '32px',
          }}
        >
          
          {/* Left Pod: Direct Inquiries Glass Box */}
          <div style={{
            position: 'relative',
            background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.6) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            borderRadius: '20px',
            padding: '24px 28px',
            boxShadow: '0 12px 30px -5px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
          }}>
            {/* Top Attached Pill */}
            <div style={{
              position: 'absolute',
              top: '-14px',
              left: '24px',
              background: 'rgba(219, 234, 254, 0.9)',
              border: '1px solid rgba(37, 99, 235, 0.3)',
              borderRadius: '999px',
              padding: '3px 12px',
              fontSize: '0.72rem',
              fontWeight: 700,
              color: '#1e3a5f',
              fontFamily: "'Space Grotesk', sans-serif",
            }}>
              Available for technical roles &amp; AI contracts
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '14px', marginTop: '6px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', border: '1px solid rgba(37, 99, 235, 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
                <FiMail size={20} />
              </div>
              <div>
                <div style={{ fontSize: '0.76rem', color: '#64748b', fontFamily: "'Space Mono', monospace" }}>Direct Inquiries:</div>
                <div style={{ fontSize: '1.08rem', fontWeight: 800, color: '#0f172a', fontFamily: "'Space Grotesk', sans-serif" }}>buildwithhamid@gmail.com</div>
              </div>
            </div>

            <button
              onClick={handleCopyEmail}
              style={{
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(203, 213, 225, 0.8)',
                borderRadius: '12px',
                padding: '8px 18px',
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '0.84rem',
                fontWeight: 700,
                color: '#334155',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
              }}
            >
              {copied ? <FiCheck size={14} color="#059669" /> : <FiCopy size={14} />}
              <span>{copied ? 'Copied to Clipboard!' : 'Copy Email Address'}</span>
            </button>
          </div>

          {/* Center Column: GitHub Profile & LinkedIn Network Stack */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <a
              href="https://github.com/hamid220-kamal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.6) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '14px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#0f172a',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.05)',
              }}
            >
              <FiGithub size={22} />
              <span>GitHub Profile</span>
            </a>

            <a
              href="https://linkedin.com/in/hamid-kamal"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(240,249,255,0.6) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: '16px',
                padding: '14px 22px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                textDecoration: 'none',
                color: '#0f172a',
                fontFamily: "'Space Grotesk', sans-serif",
                fontWeight: 700,
                fontSize: '1rem',
                boxShadow: '0 8px 20px rgba(15, 23, 42, 0.05)',
              }}
            >
              <FiLinkedin size={22} color="#0284c7" />
              <span>LinkedIn Network</span>
            </a>
          </div>

          {/* Right Side: 3D Holographic Cyber Cube Assembly Render (Fills All Side Space) */}
          <motion.div
            animate={{
              y: [-6, 6, -6],
              rotate: [0, 4, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            style={{
              width: '100%',
              height: '180px',
              borderRadius: '20px',
              overflow: 'hidden',
              position: 'relative',
            }}
          >
            <img
              src="/images/3d/contact_3d_cyber_cube.jpg"
              alt="3D Holographic Cyber Cube Assembly"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                mixBlendMode: 'multiply',
                filter: 'drop-shadow(0 10px 25px rgba(37, 99, 235, 0.25))',
              }}
            />
          </motion.div>

        </motion.div>

        {/* 3. Bottom Row: 3D Glass Form Slab ("Send Direct Message") (Exact Match to Image 2 Structure) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{
            background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            borderRadius: '26px',
            padding: '36px 44px',
            boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.1), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
            marginBottom: '60px',
          }}
        >
          {submitted ? (
            <div style={{ textAlign: 'center', padding: '40px 20px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(5, 150, 105, 0.12)', border: '1.5px solid rgba(5, 150, 105, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', margin: '0 auto 16px' }}>
                <FiCheck size={28} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.6rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                Message Transmitted Successfully!
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', maxWidth: '520px', margin: '0 auto 24px', lineHeight: 1.6 }}>
                Your message has been delivered directly to Hamid Kamal&apos;s verified inbox (<strong>buildwithhamid@gmail.com</strong>). I will review and respond within 12–24 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                style={{
                  background: 'rgba(37, 99, 235, 0.1)',
                  border: '1px solid rgba(37, 99, 235, 0.3)',
                  color: '#2563eb',
                  padding: '10px 24px',
                  borderRadius: '999px',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 700,
                  fontSize: '0.9rem',
                  cursor: 'pointer',
                }}
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              
              {errorMessage && (
                <div style={{
                  background: 'rgba(239, 68, 68, 0.08)',
                  border: '1px solid rgba(239, 68, 68, 0.3)',
                  borderRadius: '12px',
                  padding: '14px 18px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  color: '#b91c1c',
                  fontSize: '0.9rem',
                  fontFamily: "'Space Grotesk', sans-serif",
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <FiAlertCircle size={18} />
                    <span>{errorMessage}</span>
                  </div>
                  <a
                    href={`mailto:buildwithhamid@gmail.com?subject=${encodeURIComponent(formData.subject || 'Portfolio Inquiry')}&body=${encodeURIComponent(formData.message + '\n\nFrom: ' + formData.name + ' (' + formData.email + ')')}`}
                    style={{
                      background: '#b91c1c',
                      color: '#ffffff',
                      padding: '6px 14px',
                      borderRadius: '8px',
                      textDecoration: 'none',
                      fontWeight: 700,
                      fontSize: '0.8rem',
                      whiteSpace: 'nowrap',
                    }}
                  >
                    Open Mail Client
                  </a>
                </div>
              )}

              {/* Row 1: Side-by-Side 2-Column Inputs for Name & Email */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                    YOUR FULL NAME
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g., Alex Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1.5px solid rgba(203, 213, 225, 0.8)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.92rem',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                    YOUR EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="e.g., Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      width: '100%',
                      background: 'rgba(255, 255, 255, 0.9)',
                      border: '1.5px solid rgba(203, 213, 225, 0.8)',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      fontFamily: "'Space Grotesk', sans-serif",
                      fontSize: '0.92rem',
                      color: '#0f172a',
                      outline: 'none',
                      boxSizing: 'border-box',
                    }}
                  />
                </div>
              </div>

              {/* Row 2: Full Width Subject */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                  PROJECT / OPPORTUNITY SUBJECT
                </label>
                <input
                  type="text"
                  required
                  placeholder="Project / Opportunity Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1.5px solid rgba(203, 213, 225, 0.8)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.92rem',
                    color: '#0f172a',
                    outline: 'none',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Row 3: Full Width Message Details */}
              <div>
                <label style={{ display: 'block', fontFamily: "'Space Mono', monospace", fontSize: '0.72rem', fontWeight: 800, color: '#475569', marginBottom: '8px' }}>
                  MESSAGE DETAILS
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="e.g., Message Details"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  style={{
                    width: '100%',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1.5px solid rgba(203, 213, 225, 0.8)',
                    borderRadius: '12px',
                    padding: '12px 16px',
                    fontFamily: "'Space Grotesk', sans-serif",
                    fontSize: '0.92rem',
                    color: '#0f172a',
                    outline: 'none',
                    resize: 'vertical',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Submit Button across full width */}
              <motion.button
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                disabled={isSubmitting}
                type="submit"
                style={{
                  width: '100%',
                  background: isSubmitting
                    ? 'linear-gradient(135deg, #64748b 0%, #475569 100%)'
                    : 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                  border: 'none',
                  borderRadius: '14px',
                  padding: '16px',
                  color: '#ffffff',
                  fontFamily: "'Space Grotesk', sans-serif",
                  fontWeight: 800,
                  fontSize: '1rem',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  cursor: isSubmitting ? 'not-allowed' : 'pointer',
                  boxShadow: '0 12px 30px rgba(37, 99, 235, 0.4)',
                  opacity: isSubmitting ? 0.8 : 1,
                  transition: 'all 0.2s ease',
                }}
              >
                {isSubmitting ? (
                  <>
                    <FiLoader className="animate-spin" size={18} />
                    <span>Transmitting to Inbox...</span>
                  </>
                ) : (
                  <>
                    <span>Send Message</span>
                    <FiSend size={16} />
                  </>
                )}
              </motion.button>

            </form>
          )}
        </motion.div>

        {/* 4. Frequently Asked Questions Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '20px' }}>
            <FiHelpCircle size={20} color="#2563eb" />
            <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', margin: 0 }}>
              Frequently Asked Questions
            </h3>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
            {contactFaqs.map((faq, i) => (
              <div
                key={i}
                style={{
                  background: 'rgba(255, 255, 255, 0.75)',
                  border: '1px solid rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '18px',
                  padding: '20px',
                  boxShadow: '0 6px 18px rgba(15, 23, 42, 0.04)',
                }}
              >
                <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '0.98rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px' }}>
                  {faq.q}
                </h4>
                <p style={{ color: '#475569', fontSize: '0.86rem', lineHeight: 1.5, margin: 0 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiMail, FiSend, FiCopy, FiCheck, FiGithub, FiLinkedin, FiHelpCircle, FiChevronDown, FiAlertCircle, FiLoader } from 'react-icons/fi';

export default function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [openFaq, setOpenFaq] = useState<string>('who-is');

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
    <div style={{ paddingTop: '110px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        
        {/* 1. Header Banner — Left Aligned (Exact match to Image 2) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
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

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
            fontWeight: 800,
            color: '#0f172a',
            lineHeight: 1.15,
            letterSpacing: '-0.03em',
            marginBottom: '16px',
          }}>
            Initiate Technical Collaboration<br />&amp; Contracting
          </h1>

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1.1fr 0.9fr 220px',
            gap: '24px',
            alignItems: 'center',
            marginBottom: '32px',
          }}
          className="contact-top-row"
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
          animate={{ opacity: 1, y: 0 }}
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
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }} className="contact-form-grid">
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

        {/* 4. Frequently Asked Questions Section (3D Light Glassmorphic Accordion Stage) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          style={{
            position: 'relative',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1.5px solid rgba(37, 99, 235, 0.3)',
            borderRadius: '32px',
            padding: '48px 40px 40px',
            boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.12), inset 0 2px 4px rgba(255, 255, 255, 0.9)',
          }}
        >
          {/* Top Center Attached Light Glass Tag Plate */}
          <div style={{
            position: 'absolute',
            top: '-22px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)',
            border: '1.5px solid rgba(37, 99, 235, 0.35)',
            backdropFilter: 'blur(16px)',
            borderRadius: '999px',
            padding: '8px 30px',
            boxShadow: '0 8px 24px rgba(37, 99, 235, 0.15)',
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            zIndex: 4,
          }}>
            <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(37, 99, 235, 0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#2563eb' }}>
              <FiHelpCircle size={18} />
            </div>
            <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.1rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              Frequently Asked Questions &amp; Technical Specifications
            </span>
          </div>

          {/* Main 2-Column Split Layout — Zero Empty Space */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: '0.75fr 1.25fr',
            gap: '32px',
            alignItems: 'stretch',
            marginTop: '16px',
          }} className="faq-split-grid">
            
            {/* Left Column: 3D Holographic Gear Cube Stage (Fills Full Height) */}
            <div style={{
              background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.9) 0%, rgba(241, 245, 249, 0.9) 100%)',
              border: '1px solid rgba(37, 99, 235, 0.25)',
              borderRadius: '24px',
              padding: '32px 24px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(15, 23, 42, 0.05)',
              height: '100%',
              boxSizing: 'border-box',
            }}>
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                background: 'rgba(37, 99, 235, 0.08)',
                border: '1px solid rgba(37, 99, 235, 0.25)',
                borderRadius: '999px',
                padding: '4px 14px',
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.7rem',
                fontWeight: 800,
                color: '#2563eb',
                marginBottom: '24px',
              }}>
                AEO TECHNICAL KNOWLEDGE HUB
              </div>

              <motion.div
                animate={{
                  y: [-8, 8, -8],
                  rotate: [0, 4, -4, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  width: '210px',
                  height: '210px',
                  borderRadius: '22px',
                  overflow: 'hidden',
                  marginBottom: '24px',
                  boxShadow: '0 15px 35px rgba(37, 99, 235, 0.2)',
                  border: '2px solid rgba(255, 255, 255, 0.8)',
                }}
              >
                <img
                  src="/images/3d/faq_3d_gear_cube.jpg"
                  alt="3D Holographic Gear Cube Sculpture"
                  loading="lazy"
                  decoding="async"
                  style={{ width: '100%', height: '100%', objectFit: 'cover', willChange: 'transform' }}
                />
              </motion.div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                Got Technical Questions?
              </h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
                Click any topic on the right to expand technical specifications, engineering protocols, and contracting FAQs.
              </p>
            </div>

            {/* Right Column: 6 Interactive Dropdown Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                {
                  id: 'who-is',
                  q: "Who is Hamid Kamal and what is his engineering background?",
                  a: "Hamid Kamal is a Full-Stack Engineer, Chief Technology Officer (CTO) at Learn Quran, and AI Systems Developer specializing in React, TypeScript, and industrial web architectures. He engineers resilient systems that bridge cognitive Artificial Intelligence with physical hardware execution.",
                  cat: "BACKGROUND"
                },
                {
                  id: 'projects',
                  q: "What types of engineering projects do you accept?",
                  a: "I specialize in web architecture (React 19, Next.js 15), browser hardware control (Web Serial API, WASM engines), computer vision pipelines (YOLOv8, OpenCV), and AI model integration.",
                  cat: "CAPABILITIES"
                },
                {
                  id: 'response',
                  q: "What is your typical response time for technical inquiries?",
                  a: "I review technical inquiries daily. You can expect a direct response to emails and contract inquiries within 12 to 24 hours.",
                  cat: "SLA / TIMELINE"
                },
                {
                  id: 'remote',
                  q: "Are you available for remote contracts & technical leadership?",
                  a: "Yes, I actively consult for select technical contracts, product engineering advisory, CTO advisory roles, and founder partnerships worldwide.",
                  cat: "CONTRACTS"
                },
                {
                  id: 'hardware',
                  q: "How do you handle browser-hardware & serial execution?",
                  a: "I engineer native Web Serial API drivers, WebAssembly binary engines, and low-latency WebSocket bridges for direct micro-controller, CNC hardware, and sensor array control inside the browser.",
                  cat: "HARDWARE / WASM"
                },
                {
                  id: 'credentials',
                  q: "Can I request official transcripts and verified credentials?",
                  a: "Yes, all 17 formal industry certifications (IBM, HackerOne, Anthropic, AWS, Oracle), PDF transcripts, and degree documentation are cryptographically verified and ready for compliance.",
                  cat: "COMPLIANCE"
                }
              ].map((faq) => {
                const isOpen = openFaq === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    style={{
                      background: isOpen
                        ? 'linear-gradient(145deg, #eff6ff 0%, #dbeafe 100%)'
                        : 'rgba(255, 255, 255, 0.85)',
                      border: isOpen
                        ? '1.5px solid rgba(37, 99, 235, 0.5)'
                        : '1px solid rgba(203, 213, 225, 0.6)',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      transition: 'all 0.25s ease',
                      boxShadow: isOpen ? '0 10px 25px rgba(37, 99, 235, 0.15)' : 'none',
                    }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === faq.id ? '' : faq.id)}
                      style={{
                        width: '100%',
                        padding: '18px 24px',
                        background: 'transparent',
                        border: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        textAlign: 'left',
                        gap: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <span style={{ fontFamily: "'Space Mono', monospace", fontSize: '0.68rem', fontWeight: 800, color: '#2563eb', background: 'rgba(37, 99, 235, 0.08)', padding: '3px 8px', borderRadius: '6px', letterSpacing: '0.04em' }}>
                          {faq.cat}
                        </span>
                        <h4 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.02rem', fontWeight: 750, color: isOpen ? '#1e40af' : '#0f172a', margin: 0 }}>
                          {faq.q}
                        </h4>
                      </div>

                      <motion.div
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        style={{ color: isOpen ? '#2563eb' : '#64748b', flexShrink: 0 }}
                      >
                        <FiChevronDown size={20} />
                      </motion.div>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div style={{
                            padding: '0 24px 20px 24px',
                            color: '#334155',
                            fontSize: '0.92rem',
                            lineHeight: 1.65,
                            borderTop: '1px solid rgba(203, 213, 225, 0.4)',
                            paddingTop: '16px',
                          }}>
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </motion.div>

      </div>
    </div>
  );
}

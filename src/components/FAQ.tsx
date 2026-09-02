import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiHelpCircle, FiChevronDown } from 'react-icons/fi';

const faqsList = [
  {
    id: 'who-is',
    question: "Who is Hamid Kamal and what is his engineering background?",
    answer: "Hamid Kamal is a Full-Stack Engineer, Chief Technology Officer (CTO) at Learn Quran, and AI Systems Developer specializing in React, TypeScript, and industrial web architectures. He engineers resilient systems that bridge cognitive Artificial Intelligence with physical hardware execution.",
    category: "BACKGROUND"
  },
  {
    id: 'projects',
    question: "What types of engineering projects do you accept?",
    answer: "I specialize in web architecture (React 19, Next.js 15), browser hardware control (Web Serial API, WASM engines), computer vision pipelines (YOLOv8, OpenCV), and AI model integration.",
    category: "CAPABILITIES"
  },
  {
    id: 'response',
    question: "What is your typical response time for technical inquiries?",
    answer: "I review technical inquiries daily. You can expect a direct response to emails and contract inquiries within 12 to 24 hours.",
    category: "SLA / TIMELINE"
  },
  {
    id: 'remote',
    question: "Are you available for remote contracts & technical leadership?",
    answer: "Yes, I actively consult for select technical contracts, product engineering advisory, CTO advisory roles, and founder partnerships worldwide.",
    category: "CONTRACTS"
  },
  {
    id: 'hardware',
    question: "How do you handle browser-hardware & serial execution?",
    answer: "I engineer native Web Serial API drivers, WebAssembly binary engines, and low-latency WebSocket bridges for direct micro-controller, CNC hardware, and sensor array control inside the browser.",
    category: "HARDWARE / WASM"
  },
  {
    id: 'credentials',
    question: "Can I request official transcripts and verified credentials?",
    answer: "Yes, all 17 formal industry certifications (IBM, HackerOne, Anthropic, AWS, Oracle), PDF transcripts, and degree documentation are cryptographically verified and ready for compliance.",
    category: "COMPLIANCE"
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [openFaq, setOpenFaq] = useState<string>('who-is');

  const toggleFaq = (id: string) => {
    setOpenFaq(openFaq === id ? '' : id);
  };

  return (
    <section id="faq" className="section" ref={ref} style={{ paddingTop: '20px', paddingBottom: '80px', position: 'relative' }}>
      <div className="container">
        
        {/* Outer 3D Glassmorphic Light Console Stage Frame */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            position: 'relative',
            width: '100%',
            background: 'rgba(255, 255, 255, 0.88)',
            backdropFilter: 'blur(28px)',
            WebkitBackdropFilter: 'blur(28px)',
            border: '1.5px solid rgba(37, 99, 235, 0.3)',
            borderRadius: '32px',
            padding: '48px 36px 36px',
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
          }}>
            
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
                  src="/images/3d/faq_3d_gear_cube.webp"
                  alt="3D Holographic Gear Cube Sculpture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              </motion.div>

              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.3rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>
                Got Technical Questions?
              </h3>
              <p style={{ color: '#475569', fontSize: '0.88rem', lineHeight: 1.6, margin: 0, maxWidth: '280px' }}>
                Click any topic on the right to expand technical specifications, engineering protocols, and contracting FAQs.
              </p>
            </div>

            {/* Right Column: Interactive 3D Light Accordion Dropdowns List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {faqsList.map((faq) => {
                const isOpen = openFaq === faq.id;

                return (
                  <motion.div
                    key={faq.id}
                    initial={{ opacity: 0, y: 15 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
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
                      onClick={() => toggleFaq(faq.id)}
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
                        <span style={{
                          fontFamily: "'Space Mono', monospace",
                          fontSize: '0.68rem',
                          fontWeight: 800,
                          color: '#2563eb',
                          background: 'rgba(37, 99, 235, 0.08)',
                          padding: '3px 8px',
                          borderRadius: '6px',
                          letterSpacing: '0.04em',
                        }}>
                          {faq.category}
                        </span>
                        <h4 style={{
                          fontFamily: "'Space Grotesk', sans-serif",
                          fontSize: '1.02rem',
                          fontWeight: 750,
                          color: isOpen ? '#1e40af' : '#0f172a',
                          margin: 0,
                        }}>
                          {faq.question}
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
                            {faq.answer}
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
    </section>
  );
}

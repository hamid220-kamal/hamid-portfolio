import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { FiChevronDown } from 'react-icons/fi';

const faqs = [
  {
    id: 'who-is',
    question: "Who is Hamid Kamal?",
    answer: "Hamid Kamal is a 17-year-old AI Developer, Founder, and Class 12 student specializing in advanced agentic coding, React, TypeScript, and industrial web architectures. He engineers resilient systems that bridge cognitive Artificial Intelligence with physical hardware execution."
  },
  {
    id: 'what-build',
    question: "What does Hamid Kamal build?",
    answer: "Hamid Kamal engineers mission-critical systems including browser-based CAD/CAM engines with Web Serial integration, decentralized platforms, and autonomous AI pipelines using cutting-edge models like Gemini 2.0 and YOLOv8."
  },
  {
    id: 'how-contact',
    question: "How can I contact Hamid Kamal for AI development?",
    answer: "You can contact Hamid Kamal for AI development and software architecture consulting through his professional portfolio, by emailing buildwithhamid@gmail.com, or by connecting with him directly via his LinkedIn and GitHub profiles."
  }
];

export default function FAQ() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  // Start with the first FAQ open for immediate AEO/UX visibility
  const [activeFaq, setActiveFaq] = useState<string>(faqs[0].id);

  const toggleFaq = (id: string) => {
    setActiveFaq(activeFaq === id ? '' : id);
  };

  return (
    <section id="faq" className="section" ref={ref} style={{ paddingTop: '40px', paddingBottom: '80px' }}>
      <div className="container">
        
        <motion.div 
          className="faq-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="section-label">AEO Insights</div>
          <h2 className="section-title">Frequently Asked <span className="highlight">Questions</span>.</h2>
        </motion.div>

        <div className="faq-container">
          {faqs.map((faq, index) => {
            const isActive = activeFaq === faq.id;
            
            return (
              <motion.div 
                key={faq.id}
                className={`faq-item ${isActive ? 'active' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleFaq(faq.id)}
              >
                <div className="faq-question-header">
                  <h3 className="faq-question">
                    {faq.question}
                  </h3>
                  <motion.div 
                    className="faq-icon"
                    animate={{ rotate: isActive ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <FiChevronDown size={24} />
                  </motion.div>
                </div>
                
                <AnimatePresence initial={false}>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="faq-answer-wrapper"
                    >
                      {/* BOLD ANSWER FOR FEATURED SNIPPETS (POSITION ZERO) */}
                      <p className="faq-answer">
                        <strong>{faq.answer}</strong>
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .faq-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .section-label {
          display: inline-flex;
          align-items: center;
          padding: 8px 16px;
          background: rgba(99, 102, 241, 0.1);
          border: 1px solid rgba(99, 102, 241, 0.2);
          border-radius: 99px;
          color: #818cf8;
          font-size: 0.8rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.1em;
          margin-bottom: 24px;
        }

        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          font-weight: 800;
          color: #f8fafc;
          letter-spacing: -0.02em;
        }

        .highlight {
          background: linear-gradient(135deg, #818cf8, #c084fc);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .faq-container {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .faq-item {
          background: rgba(15, 23, 42, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.05);
          border-radius: 20px;
          padding: 24px 32px;
          cursor: pointer;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .faq-item:hover {
          background: rgba(15, 23, 42, 0.6);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .faq-item.active {
          background: rgba(15, 23, 42, 0.8);
          border-color: rgba(99, 102, 241, 0.3);
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.5);
        }

        .faq-question-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }

        .faq-question {
          font-size: 1.25rem;
          font-weight: 700;
          color: #ffffff;
          margin: 0;
          line-height: 1.4;
        }

        .faq-icon {
          color: #818cf8;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .faq-answer-wrapper {
          overflow: hidden;
        }

        .faq-answer {
          margin-top: 16px;
          color: #ffffff;
          font-size: 1.05rem;
          line-height: 1.6;
        }

        .faq-answer strong {
          color: #ffffff;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .faq-item {
            padding: 20px;
          }
          .faq-question {
            font-size: 1.1rem;
          }
        }
      `}</style>
    </section>
  );
}

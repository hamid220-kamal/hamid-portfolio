import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCpu, FiShield, FiZap, FiTarget } from 'react-icons/fi';

const engineeringPillars = [
  {
    id: 'hardware',
    index: '01',
    title: "Hardware & Serial Execution",
    description: "Architecting browser engines that directly interface with industrial CNC machinery via Web Serial API, WebAssembly, and real-time G-Code control logic.",
    icon: <FiCpu size={22} color="#2563eb" />
  },
  {
    id: 'web-systems',
    index: '02',
    title: "High-Availability Web Architectures",
    description: "Building production-grade web applications using React 19, Next.js, and low-latency Node.js infrastructure capable of serving global user bases.",
    icon: <FiZap size={22} color="#059669" />
  },
  {
    id: 'ai-vision',
    index: '03',
    title: "Computer Vision & AI Pipelines",
    description: "Integrating real-time deep learning models (YOLOv8, OpenCV) and LLM-powered agentic automation pipelines into accessible web interfaces.",
    icon: <FiTarget size={22} color="#d97706" />
  },
  {
    id: 'cybersecurity',
    index: '04',
    title: "Defensive & Offensive Security",
    description: "Engineering resilient systems rooted in rigorous Security-by-Design principles, penetration testing methodologies, and threat surface minimization.",
    icon: <FiShield size={22} color="#0284c7" />
  }
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        
        <div className="about-split-layout">
          {/* Left Column: Narrative */}
          <motion.div 
            className="about-narrative"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="section-tag">
              01 / ABOUT & PHILOSOPHY
            </div>
            
            <h2 className="section-title">
              Bridging browser software with physical hardware & intelligent systems.
            </h2>
            
            <div className="about-prose">
              <p>
                I am <strong>Hamid Kamal</strong>, a full-stack engineer and AI systems developer. I specialize in building software that breaks conventional browser boundaries—from direct hardware control to real-time artificial intelligence.
              </p>
              <p>
                My flagship project, <strong>CNC Jugaaadi (Design Swiftly)</strong>, is a browser-based industrial CAD/CAM platform that allows users to generate toolpaths and directly control CNC hardware over Web Serial API without heavy desktop software installation.
              </p>
              <p>
                Whether scaling global platforms like <strong>Learn Quran</strong> or building computer vision pipelines with YOLOv8, I build with clean engineering principles, high performance, and absolute reliability.
              </p>
            </div>

            <div className="signature-card">
              <div className="sig-author">Hamid Kamal</div>
              <div className="sig-role">Systems & Full-Stack Engineer</div>
            </div>
          </motion.div>

          {/* Right Column: Engineering Pillars Grid */}
          <motion.div 
            className="pillars-grid"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {engineeringPillars.map((pillar) => (
              <div key={pillar.id} className="pillar-card editorial-card">
                <div className="pillar-top">
                  <div className="pillar-icon-wrapper">
                    {pillar.icon}
                  </div>
                  <span className="pillar-index">{pillar.index}</span>
                </div>
                <h3 className="pillar-title">{pillar.title}</h3>
                <p className="pillar-desc">{pillar.description}</p>
              </div>
            ))}
          </motion.div>

        </div>
      </div>

      <style>{`
        .about-split-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .about-prose {
          display: flex;
          flex-direction: column;
          gap: 18px;
          color: #334155;
          font-size: 1.05rem;
          line-height: 1.7;
          margin-bottom: 32px;
        }

        .about-prose strong {
          color: #0f172a;
          font-weight: 600;
        }

        .signature-card {
          padding: 16px 20px;
          background: #ffffff;
          border-left: 3px solid #2563eb;
          border-radius: 0 12px 12px 0;
          box-shadow: var(--shadow-sm);
        }

        .sig-author {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
        }

        .sig-role {
          font-size: 0.8rem;
          color: #64748b;
          font-family: 'Space Mono', monospace;
        }

        .pillars-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }

        .pillar-card {
          padding: 24px;
          display: flex;
          flex-direction: column;
        }

        .pillar-top {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }

        .pillar-icon-wrapper {
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .pillar-index {
          font-family: 'Space Mono', monospace;
          font-size: 0.8rem;
          color: #94a3b8;
          font-weight: 700;
        }

        .pillar-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.1rem;
          font-weight: 700;
          color: #0f172a;
          margin-bottom: 10px;
        }

        .pillar-desc {
          font-size: 0.9rem;
          color: #64748b;
          line-height: 1.65;
        }

        @media (max-width: 1024px) {
          .about-split-layout {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }

        @media (max-width: 640px) {
          .pillars-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

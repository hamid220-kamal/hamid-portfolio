import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiCpu, FiShield } from 'react-icons/fi';

const toolchainDomains = [
  {
    title: "Languages & Runtimes",
    icon: <FiCode size={20} color="#2563eb" />,
    skills: [
      { name: "TypeScript / JavaScript", level: "Production Expert" },
      { name: "Python 3.x", level: "Advanced AI / Backend" },
      { name: "Rust / WASM", level: "High Performance R&D" },
      { name: "C / C++", level: "Embedded Systems" },
      { name: "SQL & NoSQL", level: "Schema Architecture" }
    ]
  },
  {
    title: "Frontend Architecture & UI",
    icon: <FiLayers size={20} color="#059669" />,
    skills: [
      { name: "React 19 Ecosystem", level: "Component Engineering" },
      { name: "Next.js 15 (App Router)", level: "SSR / SSG Architecture" },
      { name: "Web Serial API", level: "Hardware Interoperability" },
      { name: "Tailwind CSS & Canvas", level: "Bespoke Design Systems" },
      { name: "Framer Motion", level: "Spring Physics Animation" }
    ]
  },
  {
    title: "AI & Computer Vision",
    icon: <FiCpu size={20} color="#d97706" />,
    skills: [
      { name: "YOLOv8 & OpenCV", level: "Real-time Object Detection" },
      { name: "Gemini 2.0 / LLM APIs", level: "Agentic Automation" },
      { name: "RAG & Vector Storage", level: "Contextual Document AI" },
      { name: "FastAPI / Flask", level: "Low-Latency Model Inference" },
      { name: "PyTorch Foundations", level: "Model Validation & Tuning" }
    ]
  },
  {
    title: "Security & Systems",
    icon: <FiShield size={20} color="#0284c7" />,
    skills: [
      { name: "Penetration Testing", level: "OSCP Guidelines" },
      { name: "Ethical Hacking Labs", level: "Exploit Simulation" },
      { name: "Secure Web Protocols", level: "SSL/TLS & WebSockets" },
      { name: "Linux Administration", level: "Kernel & Shell Scripts" },
      { name: "Docker & Cloud Deploy", level: "Vercel / AWS / OCI" }
    ]
  }
];

export default function Skills() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="section" ref={ref}>
      <div className="container">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ marginBottom: '60px' }}
        >
          <div className="section-tag">03 / TECHNICAL TOOLCHAIN</div>
          <h2 className="section-title">Engineering Capabilities & Stack</h2>
          <p className="section-subtitle">
            A comprehensive overview of production technologies, hardware APIs, and security frameworks utilized across client and venture codebases.
          </p>
        </motion.div>

        {/* Stack Grid */}
        <div className="stack-grid">
          {toolchainDomains.map((domain, idx) => (
            <motion.div
              key={domain.title}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="domain-card editorial-card"
            >
              <div className="domain-header">
                <div className="domain-icon-box">
                  {domain.icon}
                </div>
                <h3 className="domain-title">{domain.title}</h3>
              </div>

              <div className="skill-list">
                {domain.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-badge">{skill.level}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      <style>{`
        .stack-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 32px;
        }

        .domain-card {
          padding: 32px;
        }

        .domain-header {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 24px;
          padding-bottom: 16px;
          border-bottom: 1px solid #f1f5f9;
        }

        .domain-icon-box {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .domain-title {
          font-family: 'Space Grotesk', sans-serif;
          font-size: 1.25rem;
          font-weight: 700;
          color: #0f172a;
        }

        .skill-list {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .skill-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 10px 14px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 10px;
        }

        .skill-name {
          font-size: 0.92rem;
          font-weight: 600;
          color: #0f172a;
        }

        .skill-badge {
          font-family: 'Space Mono', monospace;
          font-size: 0.72rem;
          color: #2563eb;
          background: rgba(37, 99, 235, 0.08);
          border: 1px solid rgba(37, 99, 235, 0.15);
          padding: 2px 8px;
          border-radius: 6px;
        }

        @media (max-width: 1024px) {
          .stack-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}

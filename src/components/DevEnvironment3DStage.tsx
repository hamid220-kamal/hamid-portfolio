import { motion } from 'framer-motion';
import { VscCode } from 'react-icons/vsc';
import { FaWindows } from 'react-icons/fa';
import {
  SiPycharm,
  SiNeovim,
  SiLinux,
  SiUbuntu,
  SiArchlinux,
  SiApple,
  SiVercel,
  SiAmazon,
  SiOracle,
  SiGit,
  SiGithubactions,
  SiDocker,
  SiArduino,
  SiRaspberrypi,
} from 'react-icons/si';
import { FiCpu, FiActivity, FiTerminal } from 'react-icons/fi';

export default function DevEnvironment3DStage() {
  return (
    <div style={{ position: 'relative', width: '100%', marginBottom: '80px', paddingTop: '20px' }}>
      
      {/* 1. Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ marginBottom: '40px' }}
      >
        <div style={{
          display: 'inline-block',
          background: 'rgba(255, 255, 255, 0.85)',
          border: '1px solid rgba(37, 99, 235, 0.3)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRadius: '999px',
          padding: '6px 18px',
          fontFamily: "'Space Mono', monospace",
          fontSize: '0.75rem',
          fontWeight: 700,
          color: '#1e3a5f',
          marginBottom: '16px',
          boxShadow: '0 4px 12px rgba(15, 23, 42, 0.04)',
        }}>
          DEV WORKFLOW
        </div>

        <h2 style={{
          fontFamily: "'Space Grotesk', sans-serif",
          fontSize: 'clamp(2.4rem, 5.2vw, 4.2rem)',
          fontWeight: 800,
          color: '#0f172a',
          lineHeight: 1.1,
          letterSpacing: '-0.03em',
          marginBottom: '16px',
        }}>
          Developer Environment<br />&amp; Tooling
        </h2>

        <p style={{
          fontSize: '1.08rem',
          color: '#475569',
          maxWidth: '680px',
          lineHeight: 1.6,
          fontWeight: 450,
          margin: 0,
        }}>
          A comprehensive matrix detailing component-level tooling, hardware debuggers, and production runtimes with verified logos.
        </p>
      </motion.div>

      {/* 2. 5 Glassmorphic 3D Card Grid */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(2, 1fr)',
        gap: '24px',
        alignItems: 'start',
      }} className="dev-env-grid">

        {/* LEFT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Card 1: Primary IDEs (Tall Glass Slab with Center 3D Gear & Tool Logos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '26px',
              padding: '32px',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              display: 'flex',
              flexDirection: 'column',
              minHeight: '380px',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            {/* Top Tag & Title */}
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}>
                &gt;_ PRIMARY IDES
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0f172a',
                margin: '0 0 16px 0',
              }}>
                VS Code, PyCharm, Neovim
              </h3>

              {/* Verified Tool Logos Pill List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={toolPillStyle}>
                  <VscCode color="#007acc" size={16} /> VS Code
                </span>
                <span style={toolPillStyle}>
                  <SiPycharm color="#21d789" size={16} /> PyCharm
                </span>
                <span style={toolPillStyle}>
                  <SiNeovim color="#57a143" size={16} /> Neovim
                </span>
              </div>
            </div>

            {/* Center 3D Metallic Gear Sculpture */}
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '20px 0',
            }}>
              <motion.img
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                src="/images/3d/metallic_gear_3d_render.jpg"
                alt="3D Metallic Gear Render"
                loading="lazy"
                decoding="async"
                style={{
                  width: '160px',
                  height: '160px',
                  objectFit: 'contain',
                  filter: 'drop-shadow(0 15px 30px rgba(15, 23, 42, 0.15))',
                  borderRadius: '24px',
                  willChange: 'transform',
                }}
              />
            </div>

            {/* Bottom Telemetry Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '16px',
              borderTop: '1px solid rgba(203, 213, 225, 0.5)',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 700,
            }}>
              <span>DEPL_LATENCY: OPTIMAL</span>
              <span style={{ width: '40px', height: '2px', background: '#cbd5e1', borderRadius: '2px' }} />
            </div>
          </motion.div>

          {/* Card 4: Cloud & Hosting (Bottom Left Glass Slab with Logos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '26px',
              padding: '28px 32px',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}>
                &gt;_ CLOUD &amp; HOSTING
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0f172a',
                margin: '0 0 14px 0',
                lineHeight: 1.35,
              }}>
                Vercel, AWS, Oracle Cloud
              </h3>

              {/* Tool Logos Pill List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                <span style={toolPillStyle}>
                  <SiVercel color="#000000" size={15} /> Vercel
                </span>
                <span style={toolPillStyle}>
                  <SiAmazon color="#ff9900" size={15} /> AWS (EC2/S3)
                </span>
                <span style={toolPillStyle}>
                  <SiOracle color="#f80000" size={15} /> Oracle Cloud
                </span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* RIGHT COLUMN */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Card 2: OS / Kernel (Top Right Upper Glass Slab with Logos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, delay: 0.05 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '26px',
              padding: '28px 32px',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              minHeight: '200px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}>
                &gt;_ OS / KERNEL
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0f172a',
                margin: '0 0 14px 0',
                lineHeight: 1.35,
              }}>
                Linux (Ubuntu / Arch), macOS, Windows
              </h3>

              {/* OS Tool Logos Pill List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span style={toolPillStyle}>
                  <SiLinux color="#fcc624" size={15} /> Linux
                </span>
                <span style={toolPillStyle}>
                  <SiUbuntu color="#e95420" size={15} /> Ubuntu
                </span>
                <span style={toolPillStyle}>
                  <SiArchlinux color="#1793d1" size={15} /> Arch
                </span>
                <span style={toolPillStyle}>
                  <SiApple color="#000000" size={15} /> macOS
                </span>
                <span style={toolPillStyle}>
                  <FaWindows color="#0078d4" size={15} /> Windows
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '14px',
              borderTop: '1px solid rgba(203, 213, 225, 0.5)',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 700,
            }}>
              <span>KERNEL_PASS: TRUE</span>
              <span style={{ width: '40px', height: '2px', background: '#cbd5e1', borderRadius: '2px' }} />
            </div>
          </motion.div>

          {/* Card 3: Hardware Debugging (Middle Right Glass Slab with Logos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '26px',
              padding: '28px 32px',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              minHeight: '220px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
          >
            <div>
              <div style={{
                fontFamily: "'Space Mono', monospace",
                fontSize: '0.78rem',
                fontWeight: 700,
                color: '#64748b',
                letterSpacing: '0.04em',
                marginBottom: '10px',
              }}>
                &gt;_ HARDWARE DEBUGGING
              </div>
              <h3 style={{
                fontFamily: "'Space Grotesk', sans-serif",
                fontSize: '1.35rem',
                fontWeight: 700,
                color: '#0f172a',
                margin: '0 0 14px 0',
                lineHeight: 1.35,
              }}>
                Web Serial API, Logic Analyzers, G-Code
              </h3>

              {/* Hardware Debugging Logos Pill List */}
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '14px' }}>
                <span style={toolPillStyle}>
                  <FiCpu color="#2563eb" size={15} /> Web Serial
                </span>
                <span style={toolPillStyle}>
                  <FiActivity color="#059669" size={15} /> Logic Analyzer
                </span>
                <span style={toolPillStyle}>
                  <FiTerminal color="#d97706" size={15} /> G-Code Sim
                </span>
                <span style={toolPillStyle}>
                  <SiArduino color="#00979d" size={15} /> Arduino
                </span>
                <span style={toolPillStyle}>
                  <SiRaspberrypi color="#c51a4a" size={15} /> RPi
                </span>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              paddingTop: '14px',
              borderTop: '1px solid rgba(203, 213, 225, 0.5)',
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.72rem',
              color: '#64748b',
              fontWeight: 700,
            }}>
              <span>SERIAL_BAUD: 115200</span>
              <span style={{ width: '40px', height: '2px', background: '#cbd5e1', borderRadius: '2px' }} />
            </div>
          </motion.div>

          {/* Card 5: VCS & CI/CD (Bottom Right Glass Slab with Logos) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ y: -6, scale: 1.01 }}
            transition={{ duration: 0.3, delay: 0.15 }}
            style={{
              background: 'linear-gradient(145deg, rgba(255,255,255,0.85) 0%, rgba(248,250,252,0.55) 100%)',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              borderRadius: '26px',
              padding: '28px 32px',
              boxShadow: '0 20px 45px -10px rgba(15, 23, 42, 0.08), inset 0 2px 3px rgba(255, 255, 255, 0.95)',
              minHeight: '180px',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
            }}
          >
            <div style={{
              fontFamily: "'Space Mono', monospace",
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#64748b',
              letterSpacing: '0.04em',
              marginBottom: '10px',
            }}>
              &gt;_ VCS &amp; CI/CD
            </div>
            <h3 style={{
              fontFamily: "'Space Grotesk', sans-serif",
              fontSize: '1.35rem',
              fontWeight: 700,
              color: '#0f172a',
              margin: '0 0 14px 0',
              lineHeight: 1.35,
            }}>
              Git, GitHub Actions, Docker
            </h3>

            {/* VCS Logos Pill List */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              <span style={toolPillStyle}>
                <SiGit color="#f05032" size={15} /> Git
              </span>
              <span style={toolPillStyle}>
                <SiGithubactions color="#2088ff" size={15} /> Actions
              </span>
              <span style={toolPillStyle}>
                <SiDocker color="#2496ed" size={15} /> Docker
              </span>
            </div>
          </motion.div>

        </div>

      </div>

    </div>
  );
}

const toolPillStyle: React.CSSProperties = {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '6px',
  background: 'rgba(255, 255, 255, 0.9)',
  border: '1px solid rgba(203, 213, 225, 0.8)',
  borderRadius: '8px',
  padding: '5px 10px',
  fontFamily: "'Space Mono', monospace",
  fontSize: '0.74rem',
  fontWeight: 700,
  color: '#1e293b',
  boxShadow: '0 2px 6px rgba(15, 23, 42, 0.04)',
};

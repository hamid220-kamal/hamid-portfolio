import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootSequence = [
  "INITIALIZING KERNEL...",
  "LOADING CORE MODULES...",
  "ESTABLISHING SECURE PROTOCOLS...",
  "AUTHENTICATING FOUNDER CREDENTIALS...",
  "ACCESS GRANTED: HAMID KAMAL",
  "DECRYPTING PORTFOLIO ASSETS..."
];

export default function TerminalLoader({ onComplete }: { onComplete: () => void }) {
  const [currentLine, setCurrentLine] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (currentLine < bootSequence.length) {
      const timeout = setTimeout(() => {
        setCurrentLine(prev => prev + 1);
      }, 250);
      return () => clearTimeout(timeout);
    } else {
      setTimeout(() => {
        setLoading(false);
        setTimeout(onComplete, 500);
      }, 800);
    }
  }, [currentLine, onComplete]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            backgroundColor: '#020202',
            zIndex: 9999,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '20px',
            fontFamily: "'JetBrains Mono', monospace"
          }}
        >
          <div style={{ maxWidth: '600px', width: '100%' }}>
            {bootSequence.slice(0, currentLine + 1).map((line, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                style={{
                  color: index === 4 ? '#b91c1c' : '#ffffff',
                  fontSize: '0.9rem',
                  marginBottom: '8px',
                  fontWeight: index === 4 ? 700 : 400
                }}
              >
                <span style={{ color: '#b91c1c', marginRight: '10px' }}>[+]</span>
                {line}
              </motion.div>
            ))}
            
            {currentLine < bootSequence.length && (
              <motion.div
                animate={{ opacity: [1, 0] }}
                transition={{ repeat: Infinity, duration: 0.8 }}
                style={{
                  width: '8px',
                  height: '18px',
                  backgroundColor: '#b91c1c',
                  display: 'inline-block',
                  marginTop: '10px'
                }}
              />
            )}
          </div>

          <motion.div
            style={{
              position: 'absolute',
              bottom: '40px',
              left: '40px',
              fontSize: '0.7rem',
              color: '#334155',
              letterSpacing: '0.2em'
            }}
          >
            SYSTEM_ID: 0x7A_HAMID_KAMAL
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

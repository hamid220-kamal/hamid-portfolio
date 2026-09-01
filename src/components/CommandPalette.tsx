import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch, FiArrowRight, FiFileText, FiMail, FiGithub, FiExternalLink, FiX } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandItem {
  id: string;
  title: string;
  category: string;
  icon: React.ReactNode;
  action: () => void;
}

export default function CommandPalette({ isOpen, onClose }: CommandPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const { navigate } = useRouter();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
      setSelectedIndex(0);
    }
  }, [isOpen]);

  const items: CommandItem[] = [
    {
      id: 'sec-home',
      title: '00 / Home & Executive Overview',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/'); onClose(); }
    },
    {
      id: 'sec-about',
      title: '01 / About & Engineering Philosophy',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/about'); onClose(); }
    },
    {
      id: 'sec-projects',
      title: '02 / Featured Ventures & Systems',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/projects'); onClose(); }
    },
    {
      id: 'sec-skills',
      title: '03 / Technical Toolchain & Stack',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/skills'); onClose(); }
    },
    {
      id: 'sec-experience',
      title: '04 / Experience & Trajectory',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/experience'); onClose(); }
    },
    {
      id: 'sec-certificates',
      title: '05 / Verified Certifications Vault',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/certificates'); onClose(); }
    },
    {
      id: 'sec-contact',
      title: '06 / Contact & Technical Consultation',
      category: 'Pages',
      icon: <FiArrowRight size={16} />,
      action: () => { navigate('/contact'); onClose(); }
    },
    {
      id: 'act-cv',
      title: 'Download Resume / Executive CV',
      category: 'Quick Actions',
      icon: <FiFileText size={16} />,
      action: () => {
        const link = document.createElement('a');
        link.href = '/Hamid Kamal - Resume.pdf';
        link.download = 'Hamid Kamal - Resume.pdf';
        link.click();
        onClose();
      }
    },
    {
      id: 'act-email',
      title: 'Copy Direct Email (buildwithhamid@gmail.com)',
      category: 'Quick Actions',
      icon: <FiMail size={16} />,
      action: () => {
        navigator.clipboard.writeText('buildwithhamid@gmail.com');
        alert('Email address copied to clipboard!');
        onClose();
      }
    },
    {
      id: 'act-cnc',
      title: 'Launch CNC Jugaaadi Live Platform',
      category: 'Featured Projects',
      icon: <FiExternalLink size={16} />,
      action: () => {
        window.open('https://cnc.jugaaadi.com/', '_blank');
        onClose();
      }
    },
    {
      id: 'act-github',
      title: 'Visit GitHub Profile (@hamid220-kamal)',
      category: 'Links',
      icon: <FiGithub size={16} />,
      action: () => {
        window.open('https://github.com/hamid220-kamal', '_blank');
        onClose();
      }
    }
  ];

  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(query.toLowerCase()) ||
    item.category.toLowerCase().includes(query.toLowerCase())
  );

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredItems[selectedIndex]) {
        filteredItems[selectedIndex].action();
      }
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            background: 'rgba(15, 23, 42, 0.4)',
            backdropFilter: 'blur(8px)',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'center',
            paddingTop: '100px',
            paddingLeft: '16px',
            paddingRight: '16px'
          }}
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: -20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: -20 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              width: '100%',
              maxWidth: '640px',
              background: '#ffffff',
              borderRadius: '20px',
              border: '1px solid #e2e8f0',
              boxShadow: '0 25px 50px -12px rgba(15, 23, 42, 0.25)',
              overflow: 'hidden'
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Input Bar */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              padding: '18px 24px',
              borderBottom: '1px solid #f1f5f9',
              gap: '12px'
            }}>
              <FiSearch size={20} color="#64748b" />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                placeholder="Type a page name or action..."
                style={{
                  width: '100%',
                  border: 'none',
                  outline: 'none',
                  fontSize: '1rem',
                  fontFamily: 'Inter, sans-serif',
                  color: '#0f172a',
                  background: 'transparent'
                }}
              />
              <button
                onClick={onClose}
                style={{
                  background: '#f1f5f9',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px',
                  cursor: 'pointer',
                  color: '#64748b',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                aria-label="Close Command Palette"
              >
                <FiX size={18} />
              </button>
            </div>

            {/* Results List */}
            <div style={{ maxHeight: '360px', overflowY: 'auto', padding: '12px 16px' }}>
              {filteredItems.length === 0 ? (
                <div style={{ padding: '32px', textAlign: 'center', color: '#64748b', fontSize: '0.9rem' }}>
                  No matching commands found.
                </div>
              ) : (
                filteredItems.map((item, index) => {
                  const isSelected = index === selectedIndex;
                  return (
                    <div
                      key={item.id}
                      onClick={item.action}
                      onMouseEnter={() => setSelectedIndex(index)}
                      style={{
                        padding: '12px 16px',
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        cursor: 'pointer',
                        background: isSelected ? '#f1f5f9' : 'transparent',
                        border: isSelected ? '1px solid #cbd5e1' : '1px solid transparent',
                        transition: 'all 0.15s ease',
                        marginBottom: '4px'
                      }}
                    >
                      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{
                          color: isSelected ? '#2563eb' : '#64748b',
                          display: 'flex',
                          alignItems: 'center'
                        }}>
                          {item.icon}
                        </div>
                        <span style={{
                          fontSize: '0.95rem',
                          fontWeight: isSelected ? 600 : 500,
                          color: isSelected ? '#0f172a' : '#334155'
                        }}>
                          {item.title}
                        </span>
                      </div>
                      <span style={{
                        fontSize: '0.75rem',
                        fontFamily: 'Space Mono, monospace',
                        color: '#94a3b8',
                        background: '#f8fafc',
                        padding: '4px 8px',
                        borderRadius: '6px',
                        border: '1px solid #e2e8f0'
                      }}>
                        {item.category}
                      </span>
                    </div>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div style={{
              padding: '12px 24px',
              borderTop: '1px solid #f1f5f9',
              background: '#fafafc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              fontSize: '0.75rem',
              color: '#64748b',
              fontFamily: 'Space Mono, monospace'
            }}>
              <span>Use ↑ ↓ to navigate</span>
              <span>[Enter] to select &bull; [Esc] to exit</span>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

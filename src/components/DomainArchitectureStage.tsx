import { motion } from 'framer-motion';
import { FiCpu, FiZap, FiLayers, FiShield, FiArrowRight } from 'react-icons/fi';
import { useRouter } from '../context/RouterContext';
import { useRef, useEffect, useState, useCallback } from 'react';

interface Pt { x: number; y: number }
interface TubeConfig { color: string; glow: string; dur: string }

const TUBES: TubeConfig[] = [
  { color: 'rgba(96,165,250,0.55)',  glow: '#93c5fd', dur: '2.2s' },
  { color: 'rgba(52,211,153,0.55)',  glow: '#6ee7b7', dur: '2.6s' },
  { color: 'rgba(125,211,252,0.55)', glow: '#7dd3fc', dur: '2.0s' },
  { color: 'rgba(245,158,11,0.55)',  glow: '#fbbf24', dur: '2.9s' },
];

/* Quadratic bezier — pulls control point 90° perpendicular to the midpoint */
function makePath(a: Pt, b: Pt): string {
  const mx = (a.x + b.x) / 2;
  const my = (a.y + b.y) / 2;
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const cpx = mx - dy * 0.28;
  const cpy = my + dx * 0.28;
  return `M ${a.x} ${a.y} Q ${cpx} ${cpy} ${b.x} ${b.y}`;
}

export default function DomainArchitectureStage() {
  const { navigate } = useRouter();

  const stageRef  = useRef<HTMLDivElement>(null);
  const engineRef = useRef<HTMLDivElement>(null);
  const cardRefs  = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [svgDim, setSvgDim] = useState({ w: 0, h: 0 });
  const [enginePt, setEnginePt] = useState<Pt>({ x: 0, y: 0 });
  const [cardPts, setCardPts] = useState<Pt[]>([
    { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 }, { x: 0, y: 0 },
  ]);
  const [isMobile, setIsMobile] = useState(false);

  const measure = useCallback(() => {
    const stage = stageRef.current;
    const eng   = engineRef.current;
    setIsMobile(window.innerWidth <= 900);
    if (!stage || !eng) return;

    const sr = stage.getBoundingClientRect();
    const er = eng.getBoundingClientRect();

    setSvgDim({ w: sr.width, h: sr.height });
    setEnginePt({
      x: er.left + er.width  / 2 - sr.left,
      y: er.top  + er.height / 2 - sr.top,
    });
    setCardPts(
      cardRefs.map(ref => {
        if (!ref.current) return { x: 0, y: 0 };
        const cr = ref.current.getBoundingClientRect();
        return {
          x: cr.left + cr.width  / 2 - sr.left,
          y: cr.top  + cr.height / 2 - sr.top,
        };
      })
    );
  }, []);

  useEffect(() => {
    measure();
    const t1 = setTimeout(measure, 300);
    const t2 = setTimeout(measure, 800);
    window.addEventListener('resize', measure);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      window.removeEventListener('resize', measure);
    };
  }, [measure]);

  return (
    <section style={{ position: 'relative', width: '100%', padding: isMobile ? '40px 0 60px' : '72px 0 110px', overflow: 'hidden' }}>

      <div style={{ maxWidth: '1320px', margin: '0 auto', padding: isMobile ? '0 16px' : '0 40px', position: 'relative', zIndex: 2 }}>

        {/* ─── Header ─── */}
        <motion.div initial={false} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} style={{ marginBottom: isMobile ? 24 : 36 }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: 'rgba(255,255,255,0.75)', backdropFilter: 'blur(12px)',
            border: '1px solid rgba(148,163,184,0.4)', borderRadius: 999,
            padding: '5px 14px', marginBottom: 14,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6', display: 'inline-block' }} />
            <span style={{ fontFamily: "'Space Mono',monospace", fontSize: '0.7rem', fontWeight: 700, color: '#1e3a5f', letterSpacing: '0.08em' }}>
              01 / CORE FOCUS AREAS
            </span>
          </div>
          <h2 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: 'clamp(1.8rem,5vw,3.4rem)', fontWeight: 800, color: '#0f1e38', lineHeight: 1.1, letterSpacing: '-0.03em', marginBottom: 14 }}>
            What I Specialize In
          </h2>
          <p style={{ fontSize: isMobile ? '0.9rem' : '1rem', color: '#475569', lineHeight: 1.65, maxWidth: 520 }}>
            Connecting web browsers to physical machines, training computer vision models, and building reliable full-stack applications.
          </p>
        </motion.div>

        {/* ─── STAGE ─── */}
        <div ref={stageRef} style={{ position: 'relative', width: '100%', minHeight: isMobile ? 'auto' : 580 }}>

          {/* ══ DYNAMIC TUBE SVG (measured positions) ══ */}
          {svgDim.w > 0 && (
            <svg
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 3, pointerEvents: 'none', overflow: 'visible' }}
              viewBox={`0 0 ${svgDim.w} ${svgDim.h}`}
              preserveAspectRatio="none"
            >
              <defs>
                {TUBES.map((_, i) => (
                  <filter key={i} id={`glow${i}`} x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
                  </filter>
                ))}
              </defs>

              {TUBES.map((t, i) => {
                const cp = cardPts[i];
                if (!cp.x && !cp.y) return null;
                const path = makePath(enginePt, cp);
                return (
                  <g key={i}>
                    {/* Outer glow body */}
                    <path d={path} stroke={t.color.replace('0.55', '0.22')} strokeWidth="26" fill="none" strokeLinecap="round" />
                    {/* Mid tube */}
                    <path d={path} stroke={t.color} strokeWidth="12" fill="none" strokeLinecap="round" />
                    {/* Bright inner core with glow */}
                    <path d={path} stroke={t.glow} strokeWidth="4" fill="none" strokeLinecap="round" filter={`url(#glow${i})`} />
                    {/* Animated energy pulse */}
                    <path d={path} stroke="rgba(255,255,255,0.9)" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeDasharray="14 22">
                      <animate attributeName="stroke-dashoffset" from="280" to="0" dur={t.dur} repeatCount="indefinite" />
                    </path>
                  </g>
                );
              })}
            </svg>
          )}

          {/* ══ CENTRAL ENGINE ══ */}
          <div ref={engineRef} style={isMobile ? {
            position: 'relative',
            margin: '0 auto 32px',
            width: 190, height: 190,
            zIndex: 10, borderRadius: '50%', overflow: 'hidden',
            boxShadow: '0 0 0 6px rgba(255,255,255,0.7), 0 0 0 14px rgba(56,189,248,0.2), 0 20px 50px -8px rgba(37,99,235,0.3)',
          } : {
            position: 'absolute',
            top: '52%', left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 240, height: 240,
            zIndex: 10, borderRadius: '50%', overflow: 'hidden',
            boxShadow: '0 0 0 8px rgba(255,255,255,0.6), 0 0 0 18px rgba(56,189,248,0.18), 0 30px 80px -10px rgba(37,99,235,0.25)',
          }}>
            <img src="/images/3d/engine_3d.webp" alt="Core Engine" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0,
              background: 'linear-gradient(transparent, rgba(15,23,42,0.88))',
              padding: '18px 8px 8px',
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              fontFamily: "'Space Mono',monospace", fontSize: '0.58rem', fontWeight: 700, color: '#38bdf8',
            }}>
              <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#10b981', boxShadow: '0 0 6px #10b981', display: 'inline-block' }} />
              CORE ENGINE
            </div>
          </div>

          {/* Cards Container: Stacked Flex on Mobile, Absolute Stage on Desktop */}
          <div style={isMobile ? { display: 'flex', flexDirection: 'column', gap: 24, width: '100%' } : {}}>

            {/* ══ CARD 1: Industrial CAD/CAM (LEFT) ══ */}
            <motion.div
              ref={cardRefs[0]}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => navigate('/projects')}
              style={isMobile ? {
                position: 'relative', width: '100%', zIndex: 8, cursor: 'pointer',
                borderRadius: 22, overflow: 'hidden',
                background: 'linear-gradient(155deg, rgba(224,231,255,0.92) 0%, rgba(199,210,255,0.85) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(199,210,254,0.75)',
                boxShadow: '0 20px 45px -10px rgba(79,70,229,0.25)',
              } : {
                position: 'absolute', top: 90, left: 0, width: 272, zIndex: 8, cursor: 'pointer',
                borderRadius: 22, overflow: 'visible',
                transform: 'perspective(800px) rotateY(22deg) rotateX(7deg)',
                transformOrigin: 'left center',
                boxShadow: [
                  '0 50px 100px -22px rgba(79,70,229,0.38)',
                  'inset 0 2px 0 rgba(255,255,255,0.75)',
                  'inset -1px 0 0 rgba(255,255,255,0.4)',
                  '7px 7px 0 rgba(79,70,229,0.52)',
                  '12px 12px 0 rgba(79,70,229,0.34)',
                  '17px 17px 0 rgba(79,70,229,0.18)',
                  '22px 22px 0 rgba(79,70,229,0.08)',
                ].join(', '),
              }}
            >
              {/* Dark top — CNC blueprint fills edge-to-edge */}
              <div style={{
                background: 'rgba(8,12,36,0.85)',
                backdropFilter: 'blur(20px)', WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(148,163,252,0.45)', borderBottom: 'none',
                borderRadius: '22px 22px 0 0', overflow: 'hidden', height: isMobile ? 150 : 185, position: 'relative',
              }}>
                <div style={{
                  position: 'absolute', top: 10, left: 10, zIndex: 2,
                  background: 'rgba(20,16,60,0.88)', backdropFilter: 'blur(8px)',
                  border: '1px solid rgba(165,180,252,0.45)', borderRadius: 999, padding: '3px 9px',
                  fontFamily: "'Space Mono',monospace", fontSize: '0.56rem', fontWeight: 700, color: '#a5b4fc',
                }}>Web Serial API &amp; Machine Control</div>
                <img src="/images/3d/cnc_blueprint.webp" alt="CNC Blueprint" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.88 }} />
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 36, background: 'linear-gradient(transparent, rgba(10,12,40,0.65))' }} />
              </div>
              {/* Light bottom — text */}
              <div style={{
                background: 'linear-gradient(155deg, rgba(224,231,255,0.76) 0%, rgba(199,210,255,0.62) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(199,210,254,0.65)', borderTop: 'none',
                borderRadius: '0 0 22px 22px', padding: '15px 17px 17px',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                  <div style={{ width: 27, height: 27, borderRadius: 8, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#4f46e5', flexShrink: 0 }}><FiCpu size={13} /></div>
                  <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.93rem', fontWeight: 700, color: '#1e1b4b', lineHeight: 1.25, margin: 0 }}>CAD/CAM &amp; Machine Control</h3>
                </div>
                <p style={{ fontSize: '0.76rem', color: '#374151', lineHeight: 1.5, marginBottom: 9 }}>
                  Built browser software that generates G-Code toolpaths and streams commands directly to CNC hardware via the Web Serial API.
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#4f46e5', fontFamily: "'Space Mono',monospace", fontSize: '0.66rem', fontWeight: 700 }}>
                  <span>View Project</span><FiArrowRight size={11} />
                </div>
              </div>
            </motion.div>

            {/* ══ CARD 2: Computer Vision & AI (CENTER TOP) ══ */}
            <motion.div
              ref={cardRefs[1]}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => navigate('/projects')}
              style={isMobile ? {
                position: 'relative', width: '100%', zIndex: 8, cursor: 'pointer',
                background: 'linear-gradient(145deg,rgba(209,250,229,0.9) 0%,rgba(167,243,208,0.8) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(110,231,183,0.75)', borderRadius: 22, padding: '15px 17px 17px',
                boxShadow: '0 20px 45px -10px rgba(5,150,105,0.22)',
              } : {
                position: 'absolute', top: 5, left: '29%', width: 330, zIndex: 8, cursor: 'pointer',
                transform: 'perspective(800px) rotateY(-6deg) rotateX(4deg)',
                transformOrigin: 'center top',
                background: 'linear-gradient(145deg,rgba(209,250,229,0.78) 0%,rgba(167,243,208,0.65) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(110,231,183,0.7)', borderRadius: 22, padding: '13px 15px 15px',
                boxShadow: [
                  '0 45px 90px -20px rgba(5,150,105,0.32)',
                  'inset 0 2px 0 rgba(255,255,255,0.75)',
                  'inset 1px 0 0 rgba(255,255,255,0.45)',
                  '-5px 7px 0 rgba(16,185,129,0.5)',
                  '-9px 12px 0 rgba(16,185,129,0.3)',
                  '-13px 17px 0 rgba(16,185,129,0.14)',
                  '-17px 22px 0 rgba(16,185,129,0.06)',
                ].join(', '),
              }}
            >
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.85)', border: '1px solid rgba(110,231,183,0.62)', borderRadius: 999, padding: '3px 9px', marginBottom: 9, fontFamily: "'Space Mono',monospace", fontSize: '0.56rem', fontWeight: 700, color: '#065f46' }}>
                YOLOv8, OpenCV &amp; Machine Learning
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 112px', gap: 10 }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                    <div style={{ width: 27, height: 27, borderRadius: 8, background: 'rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#059669', flexShrink: 0 }}><FiZap size={13} /></div>
                    <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.93rem', fontWeight: 700, color: '#064e3b', lineHeight: 1.25, margin: 0 }}>Computer Vision &amp; Applied AI</h3>
                  </div>
                  <p style={{ fontSize: '0.74rem', color: '#1f4a3a', lineHeight: 1.5, marginBottom: 9 }}>
                    Trained computer vision models for vehicle detection and built automated AI pipelines using modern models.
                  </p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#059669', fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', fontWeight: 700 }}>
                    <span>View Project</span><FiArrowRight size={11} />
                  </div>
                </div>
                {!isMobile && (
                  <div style={{ borderRadius: 11, overflow: 'hidden', height: 105, border: '1px solid rgba(110,231,183,0.32)' }}>
                    <img src="/images/3d/yolo_traffic.webp" alt="YOLO Detection" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                )}
              </div>
            </motion.div>

            {/* ══ CARD 3: Defensive Architecture (FAR RIGHT) ══ */}
            <motion.div
              ref={cardRefs[2]}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => navigate('/experience')}
              style={isMobile ? {
                position: 'relative', width: '100%', zIndex: 8, cursor: 'pointer', overflow: 'hidden',
                background: 'linear-gradient(145deg,rgba(248,250,252,0.92) 0%,rgba(226,232,240,0.85) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(203,213,225,0.75)', borderRadius: 22, padding: '15px 17px 17px',
                boxShadow: '0 20px 45px -10px rgba(15,23,42,0.18)',
              } : {
                position: 'absolute', top: 35, right: 0, width: 268, zIndex: 8, cursor: 'pointer', overflow: 'visible',
                transform: 'perspective(800px) rotateY(-22deg) rotateX(6deg)',
                transformOrigin: 'right center',
                background: 'linear-gradient(145deg,rgba(248,250,252,0.82) 0%,rgba(226,232,240,0.68) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(203,213,225,0.7)', borderRadius: 22, padding: '13px 15px 15px',
                boxShadow: [
                  '0 45px 90px -20px rgba(15,23,42,0.24)',
                  'inset 0 2px 0 rgba(255,255,255,0.85)',
                  'inset 1px 0 0 rgba(255,255,255,0.55)',
                  '-7px 7px 0 rgba(100,116,139,0.52)',
                  '-12px 12px 0 rgba(100,116,139,0.33)',
                  '-17px 17px 0 rgba(100,116,139,0.16)',
                  '-22px 22px 0 rgba(100,116,139,0.07)',
                ].join(', '),
              }}
            >
              {/* Large 3D Chrome Shield (only on desktop to prevent overflow) */}
              {!isMobile && (
                <div style={{ position: 'absolute', right: -66, bottom: -32, width: 128, height: 154, zIndex: 25, filter: 'drop-shadow(-10px 18px 28px rgba(15,23,42,0.32))', pointerEvents: 'none', transform: 'rotate(-5deg)' }}>
                  <img src="/images/3d/shield_3d.webp" alt="Security Shield" loading="lazy" decoding="async" style={{ width: '100%', height: '100%', objectFit: 'contain' }} />
                </div>
              )}
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.9)', border: '1px solid rgba(203,213,225,0.7)', borderRadius: 999, padding: '3px 9px', marginBottom: 9, fontFamily: "'Space Mono',monospace", fontSize: '0.56rem', fontWeight: 700, color: '#0c4a6e' }}>
                Security &amp; Vulnerability Research
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 27, height: 27, borderRadius: 8, background: 'rgba(255,255,255,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#0284c7', flexShrink: 0 }}><FiShield size={13} /></div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.93rem', fontWeight: 700, color: '#0f172a', lineHeight: 1.25, margin: 0 }}>Security &amp; System Hardening</h3>
              </div>
              <p style={{ fontSize: '0.74rem', color: '#334155', lineHeight: 1.5, marginBottom: 9 }}>
                Practicing ethical security audits, network analysis, and building applications with strong input validation and security best practices.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#0284c7', fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', fontWeight: 700 }}>
                <span>View Details</span><FiArrowRight size={11} />
              </div>
            </motion.div>

            {/* ══ CARD 4: High-Availability Web Systems (BOTTOM RIGHT) ══ */}
            <motion.div
              ref={cardRefs[3]}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              onClick={() => navigate('/skills')}
              style={isMobile ? {
                position: 'relative', width: '100%', zIndex: 8, cursor: 'pointer', overflow: 'hidden',
                background: 'linear-gradient(145deg,rgba(255,251,235,0.92) 0%,rgba(254,243,199,0.85) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(253,230,138,0.85)', borderRadius: 22, padding: '15px 17px 17px',
                boxShadow: '0 20px 45px -10px rgba(180,100,0,0.2)',
              } : {
                position: 'absolute', top: 318, right: '3%', width: 295, zIndex: 12, cursor: 'pointer', overflow: 'hidden',
                transform: 'perspective(800px) rotateY(-16deg) rotateX(-5deg)',
                transformOrigin: 'right bottom',
                background: 'linear-gradient(145deg,rgba(255,251,235,0.82) 0%,rgba(254,243,199,0.68) 100%)',
                backdropFilter: 'blur(24px)', WebkitBackdropFilter: 'blur(24px)',
                border: '1px solid rgba(253,230,138,0.78)', borderRadius: 22, padding: '13px 15px 15px',
                boxShadow: [
                  '0 45px 90px -20px rgba(180,100,0,0.28)',
                  'inset 0 2px 0 rgba(255,255,255,0.75)',
                  'inset 1px 0 0 rgba(255,255,255,0.45)',
                  '-7px 6px 0 rgba(217,119,6,0.52)',
                  '-12px 10px 0 rgba(217,119,6,0.33)',
                  '-17px 14px 0 rgba(217,119,6,0.16)',
                  '-22px 18px 0 rgba(217,119,6,0.07)',
                ].join(', '),
              }}
            >
              {/* Globe arc watermark */}
              <div style={{ position: 'absolute', top: -8, right: -8, width: 155, height: 90, opacity: 0.4, pointerEvents: 'none' }}>
                <svg viewBox="0 0 220 120" style={{ width: '100%', height: '100%' }}>
                  <ellipse cx="110" cy="60" rx="98" ry="42" fill="none" stroke="#d97706" strokeWidth="1" strokeDasharray="5 6" />
                  <path d="M22 60 Q110 10 198 60" fill="none" stroke="#f59e0b" strokeWidth="2" />
                  <circle cx="50" cy="42" r="5" fill="#f59e0b" /><circle cx="170" cy="76" r="5" fill="#d97706" />
                  <line x1="50" y1="42" x2="170" y2="76" stroke="#f59e0b" strokeWidth="1.4" strokeDasharray="4 4" />
                </svg>
              </div>
              <div style={{ display: 'inline-block', background: 'rgba(255,255,255,0.88)', border: '1px solid rgba(253,230,138,0.78)', borderRadius: 999, padding: '3px 9px', marginBottom: 9, fontFamily: "'Space Mono',monospace", fontSize: '0.56rem', fontWeight: 700, color: '#78350f' }}>
                React 19, Next.js &amp; WebSockets
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
                <div style={{ width: 27, height: 27, borderRadius: 8, background: 'rgba(255,255,255,0.88)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#d97706', flexShrink: 0 }}><FiLayers size={13} /></div>
                <h3 style={{ fontFamily: "'Space Grotesk',sans-serif", fontSize: '0.96rem', fontWeight: 700, color: '#451a03', lineHeight: 1.25, margin: 0 }}>Full-Stack Web Development</h3>
              </div>
              <p style={{ fontSize: '0.74rem', color: '#57360a', lineHeight: 1.5, marginBottom: 9 }}>
                Architecting responsive web apps and low-latency audio communication connecting students and tutors globally at Learn Quran.
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: '#d97706', fontFamily: "'Space Mono',monospace", fontSize: '0.65rem', fontWeight: 700 }}>
                <span>View Details</span><FiArrowRight size={11} />
              </div>
            </motion.div>

          </div>

          {/* Spacer for desktop only */}
          {!isMobile && <div style={{ height: 620 }} />}
        </div>
      </div>
    </section>
  );
}

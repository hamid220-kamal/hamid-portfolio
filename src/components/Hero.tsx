import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiArrowDown, FiGithub, FiMail, FiStar, FiZap, FiCode } from 'react-icons/fi';

const roles = [
    "AI Engineer",
    "Full-Stack Developer",
    "Tech Innovator",
    "Prompt Engineering Specialist",
    "Software Architect"
];

const floatingIcons = [
    { Icon: FiCode, delay: 0, x: '10%', y: '20%' },
    { Icon: FiZap, delay: 0.5, x: '85%', y: '25%' },
    { Icon: FiStar, delay: 1, x: '15%', y: '70%' },
    { Icon: FiGithub, delay: 1.5, x: '80%', y: '65%' },
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [0, 1], [5, -5]);
    const rotateY = useTransform(mouseX, [0, 1], [-5, 5]);

    useEffect(() => {
        const role = roles[currentRole];
        const typingSpeed = isDeleting ? 30 : 80;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2000);
                }
            } else {
                if (displayText.length > 0) {
                    setDisplayText(role.substring(0, displayText.length - 1));
                } else {
                    setIsDeleting(false);
                    setCurrentRole((prev) => (prev + 1) % roles.length);
                }
            }
        }, typingSpeed);

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;
        mouseX.set(x);
        mouseY.set(y);
    };

    const scrollToProjects = () => {
        document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    const scrollToContact = () => {
        document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            style={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                padding: '120px 24px 80px',
                overflow: 'hidden',
            }}
        >
            {/* Animated Background Elements */}
            <div className="gradient-bg" />

            {/* Floating Particles */}
            <div className="particles">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="particle"
                        style={{
                            left: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 15}s`,
                            animationDuration: `${15 + Math.random() * 10}s`,
                        }}
                    />
                ))}
            </div>

            {/* Floating Icons */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.3,
                        scale: 1,
                        y: [0, -20, 0],
                        rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                        opacity: { delay, duration: 0.5 },
                        scale: { delay, duration: 0.5 },
                        y: { delay: delay + 0.5, duration: 4, repeat: Infinity },
                        rotate: { delay: delay + 0.5, duration: 6, repeat: Infinity }
                    }}
                    style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        color: index % 2 === 0 ? '#8b5cf6' : '#06b6d4',
                        pointerEvents: 'none',
                    }}
                >
                    <Icon size={32} />
                </motion.div>
            ))}

            {/* Glowing Orbs */}
            <motion.div
                animate={{
                    y: [-30, 30, -30],
                    x: [-20, 20, -20],
                    scale: [1, 1.2, 1],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '5%',
                    width: '200px',
                    height: '200px',
                    background: 'radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(60px)',
                    pointerEvents: 'none',
                }}
            />
            <motion.div
                animate={{
                    y: [30, -30, 30],
                    x: [20, -20, 20],
                    scale: [1.2, 1, 1.2],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                style={{
                    position: 'absolute',
                    bottom: '15%',
                    right: '10%',
                    width: '250px',
                    height: '250px',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.25) 0%, transparent 70%)',
                    borderRadius: '50%',
                    filter: 'blur(70px)',
                    pointerEvents: 'none',
                }}
            />

            <motion.div
                style={{
                    maxWidth: '1000px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '28px',
                    rotateX,
                    rotateY,
                }}
            >
                {/* Profile Image with 3D effect */}
                <motion.div
                    initial={{ scale: 0, opacity: 0, rotateY: -180 }}
                    animate={{ scale: 1, opacity: 1, rotateY: 0 }}
                    transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                    whileHover={{ scale: 1.05 }}
                    style={{
                        position: 'relative',
                        width: '200px',
                        height: '200px',
                    }}
                >
                    {/* Animated Ring */}
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            inset: '-8px',
                            background: 'conic-gradient(from 0deg, #8b5cf6, #06b6d4, #f59e0b, #8b5cf6)',
                            borderRadius: '50%',
                        }}
                    />
                    <motion.div
                        animate={{ rotate: -360 }}
                        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        style={{
                            position: 'absolute',
                            inset: '-4px',
                            background: 'conic-gradient(from 180deg, transparent 40%, #8b5cf6 50%, transparent 60%)',
                            borderRadius: '50%',
                            filter: 'blur(8px)',
                        }}
                    />
                    <img
                        src="/images/hamid.png"
                        alt="Hamid Kamal"
                        style={{
                            position: 'relative',
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '6px solid #0a0a0f',
                        }}
                    />

                    {/* Status Badge */}
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.5 }}
                        style={{
                            position: 'absolute',
                            bottom: '10px',
                            right: '10px',
                            width: '40px',
                            height: '40px',
                            background: 'linear-gradient(135deg, #10b981, #059669)',
                            borderRadius: '50%',
                            border: '4px solid #0a0a0f',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <span style={{ fontSize: '16px' }}>✓</span>
                    </motion.div>
                </motion.div>

                {/* Welcome Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '10px 24px',
                        background: 'rgba(139, 92, 246, 0.1)',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                        borderRadius: '50px',
                    }}
                >
                    <motion.span
                        animate={{ rotate: [0, 20, -20, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    >
                        👋
                    </motion.span>
                    <span style={{ color: '#8b5cf6', fontWeight: 600, letterSpacing: '1px', fontSize: '0.85rem' }}>
                        WELCOME TO MY DIGITAL PORTFOLIO
                    </span>
                </motion.div>

                {/* Name with Gradient Animation */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    style={{
                        fontFamily: "'Outfit', sans-serif",
                        fontSize: 'clamp(2.8rem, 10vw, 5rem)',
                        fontWeight: 900,
                        lineHeight: 1.1,
                        color: '#fff',
                    }}
                >
                    Hi, I'm{' '}
                    <span className="text-gradient-animate">
                        Hamid Kamal
                    </span>
                </motion.h1>

                {/* Typing Effect with Cursor */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{
                        fontSize: 'clamp(1.3rem, 4vw, 2rem)',
                        fontWeight: 600,
                        color: '#e4e4e7',
                        height: '45px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{
                        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                    }}>
                        {displayText}
                    </span>
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{
                            width: '3px',
                            height: '35px',
                            background: 'linear-gradient(180deg, #8b5cf6, #06b6d4)',
                            marginLeft: '4px',
                            borderRadius: '2px',
                        }}
                    />
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        fontSize: '1.15rem',
                        color: '#d4d4d8',
                        maxWidth: '650px',
                        lineHeight: 1.9,
                    }}
                >
                    <span style={{ color: '#8b5cf6', fontWeight: 600 }}>16-year-old technologist</span> specializing in
                    AI-powered solutions and enterprise-grade web applications. Passionate about architecting
                    innovative digital experiences and transforming complex ideas into{' '}
                    <span style={{ color: '#06b6d4', fontWeight: 600 }}>production-ready solutions</span>.
                </motion.p>

                {/* Stats Row */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.65 }}
                    style={{
                        display: 'flex',
                        gap: '40px',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        marginTop: '8px',
                    }}
                >
                    {[
                        { value: '80K+', label: 'Lines of Code' },
                        { value: '16+', label: 'Certifications' },
                        { value: '10+', label: 'Projects Delivered' },
                    ].map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.7 + i * 0.1 }}
                            style={{ textAlign: 'center' }}
                        >
                            <div
                                style={{
                                    fontSize: '1.8rem',
                                    fontWeight: 800,
                                    fontFamily: "'Outfit', sans-serif",
                                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                }}
                            >
                                {stat.value}
                            </div>
                            <div style={{ color: '#d4d4d8', fontSize: '0.85rem' }}>{stat.label}</div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '20px',
                        justifyContent: 'center',
                        marginTop: '12px',
                    }}
                >
                    <motion.button
                        whileHover={{ scale: 1.08, boxShadow: '0 20px 60px rgba(139, 92, 246, 0.5)' }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToProjects}
                        className="btn-primary ripple"
                    >
                        <FiGithub size={22} />
                        Explore Projects
                    </motion.button>
                    <motion.button
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={scrollToContact}
                        className="btn-secondary"
                    >
                        <FiMail size={22} />
                        Get in Touch
                    </motion.button>
                </motion.div>
            </motion.div>

            {/* Scroll Indicator - Outside content div for proper positioning */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 10, 0] }}
                transition={{
                    opacity: { delay: 1.2, duration: 0.5 },
                    y: { delay: 1.2, duration: 2, repeat: Infinity },
                }}
                style={{
                    position: 'absolute',
                    bottom: '30px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '8px',
                    color: '#d4d4d8',
                    zIndex: 10,
                }}
            >
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', fontWeight: 500 }}>SCROLL TO EXPLORE</span>
                <motion.div
                    animate={{ y: [0, 8, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                >
                    <FiArrowDown size={20} />
                </motion.div>
            </motion.div>

            <style>{`
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
      `}</style>
        </section>
    );
}

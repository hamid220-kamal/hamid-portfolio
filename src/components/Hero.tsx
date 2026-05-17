import { motion, useMotionValue, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';
import { FiArrowDown, FiGithub, FiMail, FiTerminal, FiShield, FiCode } from 'react-icons/fi';

const roles = [
    "Software Engineer",
    "AI Developer",
    "Agentic Architect",
    "Cybersecurity Enthusiast"
];

const floatingIcons = [
    { Icon: FiCode, delay: 0, x: '10%', y: '20%' },
    { Icon: FiTerminal, delay: 0.5, x: '85%', y: '25%' },
    { Icon: FiShield, delay: 1, x: '15%', y: '70%' },
    { Icon: FiGithub, delay: 1.5, x: '80%', y: '65%' },
];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const rotateX = useTransform(mouseY, [0, 1], [3, -3]);
    const rotateY = useTransform(mouseX, [0, 1], [-3, 3]);

    useEffect(() => {
        const role = roles[currentRole];
        const typingSpeed = isDeleting ? 20 : 60;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                if (displayText.length < role.length) {
                    setDisplayText(role.substring(0, displayText.length + 1));
                } else {
                    setTimeout(() => setIsDeleting(true), 2500);
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
            <div className="gradient-bg" />

            {/* Subtle Grid Background */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                pointerEvents: 'none',
                opacity: 0.5,
                zIndex: -1
            }} />

            {/* UI Accents */}
            {floatingIcons.map(({ Icon, delay, x, y }, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                        opacity: 0.15,
                        scale: 1,
                        y: [0, -15, 0],
                    }}
                    transition={{
                        opacity: { delay, duration: 0.5 },
                        scale: { delay, duration: 0.5 },
                        y: { delay: delay + 0.5, duration: 5, repeat: Infinity, ease: "easeInOut" },
                    }}
                    style={{
                        position: 'absolute',
                        left: x,
                        top: y,
                        color: '#ffffff',
                        pointerEvents: 'none',
                    }}
                >
                    <Icon size={24} />
                </motion.div>
            ))}

            <motion.div
                style={{
                    maxWidth: '900px',
                    margin: '0 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    gap: '24px',
                    rotateX,
                    rotateY,
                }}
            >
                {/* Profile Image */}
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    whileHover={{ scale: 1.02 }}
                    style={{
                        position: 'relative',
                        width: '160px',
                        height: '160px',
                        marginBottom: '10px'
                    }}
                >
                    <img
                        src="/images/hamid-ai-developer-portfolio.jpg"
                        alt="Hamid Kamal"
                        style={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: '2px solid rgba(255, 255, 255, 0.1)',
                            boxShadow: '0 20px 40px rgba(0, 0, 0, 0.4)'
                        }}
                    />
                </motion.div>

                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '8px',
                        padding: '6px 16px',
                        background: 'rgba(59, 130, 246, 0.1)',
                        border: '1px solid rgba(59, 130, 246, 0.2)',
                        borderRadius: '4px',
                    }}
                >
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#3b82f6', boxShadow: '0 0 8px #3b82f6' }} />
                    <span style={{ color: '#60a5fa', fontWeight: 500, letterSpacing: '0.5px', fontSize: '0.8rem', textTransform: 'uppercase' }}>
                        Available for Opportunities
                    </span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                        fontWeight: 800,
                        lineHeight: 1.1,
                        color: '#f8fafc',
                        letterSpacing: '-0.03em'
                    }}
                >
                    Hi, I'm Hamid Kamal
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    style={{
                        fontSize: 'clamp(1.2rem, 3vw, 1.8rem)',
                        fontWeight: 500,
                        color: '#ffffff',
                        height: '40px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <span style={{ color: '#60a5fa' }}>{displayText}</span>
                    <motion.span
                        animate={{ opacity: [1, 0, 1] }}
                        transition={{ duration: 0.8, repeat: Infinity }}
                        style={{
                            width: '2px',
                            height: '24px',
                            background: '#60a5fa',
                            marginLeft: '4px',
                        }}
                    />
                </motion.div>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    style={{
                        fontSize: '1.1rem',
                        color: '#ffffff',
                        maxWidth: '650px',
                        lineHeight: 1.8,
                        fontWeight: 400
                    }}
                >
                    Specializing in building scalable web applications, agentic AI systems, and robust cybersecurity architectures. Passionate about transforming complex engineering challenges into elegant, production-ready solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '16px',
                        justifyContent: 'center',
                        marginTop: '16px',
                    }}
                >
                    <button onClick={scrollToProjects} className="btn-primary">
                        <FiTerminal size={18} />
                        View Projects
                    </button>
                    <button onClick={scrollToContact} className="btn-secondary">
                        <FiMail size={18} />
                        Contact Me
                    </button>
                </motion.div>
            </motion.div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                style={{
                    position: 'absolute',
                    bottom: '40px',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '12px',
                    color: '#ffffff',
                }}
            >
                <span style={{ fontSize: '0.75rem', letterSpacing: '2px', textTransform: 'uppercase' }}>Scroll</span>
                <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}>
                    <FiArrowDown size={18} />
                </motion.div>
            </motion.div>
        </section>
    );
}

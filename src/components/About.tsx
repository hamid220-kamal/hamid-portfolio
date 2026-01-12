import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiUser, FiCalendar, FiCode, FiAward, FiFolder, FiMapPin, FiBookOpen } from 'react-icons/fi';

const stats = [
    { icon: FiCalendar, value: '16', label: 'Years Old' },
    { icon: FiCode, value: '80,000+', label: 'Lines of Code' },
    { icon: FiAward, value: '16+', label: 'Certifications' },
    { icon: FiFolder, value: '10+', label: 'Projects Delivered' },
];

const journeyItems = [
    {
        year: '2023',
        title: 'Embarked on Development Journey',
        description: 'Began exploring web development fundamentals and discovered a passion for building digital solutions.',
    },
    {
        year: '2024',
        title: 'Mastered Full-Stack Development',
        description: 'Developed expertise in React, Next.js, and backend technologies while completing enterprise-level projects.',
    },
    {
        year: '2025',
        title: 'Pioneered AI Integration',
        description: 'Specialized in artificial intelligence, building multi-agent systems and voice-enabled applications with cutting-edge AI.',
    },
];

export default function About() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiUser size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>About Me</h2>
                    </div>
                    <p className="section-subtitle">
                        Pioneering the next generation of AI-powered digital experiences
                    </p>
                </motion.div>

                {/* Bio Section */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '32px',
                        marginBottom: '60px',
                    }}
                >
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="glass-card"
                        style={{ padding: '36px' }}
                    >
                        <div
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                marginBottom: '24px',
                            }}
                        >
                            <div
                                style={{
                                    width: '56px',
                                    height: '56px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                                    borderRadius: '16px',
                                }}
                            >
                                <FiBookOpen size={28} color="#8b5cf6" />
                            </div>
                            <div>
                                <h3
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: '1.5rem',
                                        fontWeight: 700,
                                        color: '#fff',
                                        marginBottom: '4px',
                                    }}
                                >
                                    Young Technology Pioneer
                                </h3>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#e4e4e7', fontSize: '0.9rem' }}>
                                    <FiMapPin size={14} />
                                    <span>Hyderabad, India</span>
                                </div>
                            </div>
                        </div>
                        <p
                            style={{
                                color: '#e4e4e7',
                                lineHeight: 1.9,
                                fontSize: '1rem',
                            }}
                        >
                            As a <strong style={{ color: '#8b5cf6' }}>Class 11 student</strong> with an exceptional
                            aptitude for technology, I specialize in developing AI-integrated applications and
                            enterprise-scale web platforms. My journey represents a unique blend of academic
                            excellence and practical software engineering expertise.
                        </p>
                        <p
                            style={{
                                color: '#e4e4e7',
                                lineHeight: 1.9,
                                fontSize: '1rem',
                                marginTop: '16px',
                            }}
                        >
                            I am driven by a passion for <strong style={{ color: '#06b6d4' }}>artificial intelligence</strong> and
                            its transformative potential. From architecting multi-agent voice assistants to building
                            comprehensive learning platforms, I consistently deliver solutions that push the boundaries
                            of what's possible in modern software development.
                        </p>
                    </motion.div>

                    {/* Stats Grid */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        style={{
                            display: 'grid',
                            gridTemplateColumns: 'repeat(2, 1fr)',
                            gap: '20px',
                        }}
                    >
                        {stats.map((stat, index) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={inView ? { opacity: 1, scale: 1 } : {}}
                                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                                whileHover={{ scale: 1.05, y: -5 }}
                                className="glass-card stat-card"
                            >
                                <stat.icon
                                    size={32}
                                    style={{
                                        color: '#8b5cf6',
                                        marginBottom: '12px',
                                    }}
                                />
                                <div className="stat-number">{stat.value}</div>
                                <div className="stat-label">{stat.label}</div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Journey Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <h3
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '1.6rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: '36px',
                            textAlign: 'center',
                        }}
                    >
                        Professional Development Journey
                    </h3>

                    <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                        {journeyItems.map((item, index) => (
                            <motion.div
                                key={item.year}
                                initial={{ opacity: 0, x: -30 }}
                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                transition={{ duration: 0.4, delay: 0.6 + index * 0.15 }}
                                className="timeline-item"
                            >
                                <div className="timeline-dot" />
                                <div className="glass-card" style={{ padding: '24px' }}>
                                    <span
                                        style={{
                                            display: 'inline-block',
                                            padding: '4px 14px',
                                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                                            borderRadius: '50px',
                                            fontSize: '0.8rem',
                                            color: '#8b5cf6',
                                            fontWeight: 600,
                                            marginBottom: '12px',
                                        }}
                                    >
                                        {item.year}
                                    </span>
                                    <h4
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '1.15rem',
                                            fontWeight: 600,
                                            color: '#fff',
                                            marginBottom: '8px',
                                        }}
                                    >
                                        {item.title}
                                    </h4>
                                    <p style={{ color: '#e4e4e7', fontSize: '0.95rem', lineHeight: 1.7 }}>
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

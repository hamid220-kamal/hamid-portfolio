import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiBriefcase, FiCalendar, FiMapPin, FiCheckCircle, FiArrowRight, FiStar } from 'react-icons/fi';

const experiences = [
    {
        title: 'Artificial Intelligence Intern',
        company: 'Codec Technologies',
        location: 'Remote',
        period: 'August 2024 - October 2024',
        type: 'Internship',
        description: 'Contributed to the development of AI-powered solutions, gaining hands-on experience with machine learning workflows, model integration, and intelligent automation systems.',
        achievements: [
            'Developed machine learning models for practical business applications',
            'Collaborated with senior engineers on AI integration projects',
            'Gained expertise in Python-based ML frameworks and tools',
            'Received commendation for exceptional problem-solving abilities',
        ],
    },
    {
        title: 'Full-Stack Web Developer',
        company: 'Zoontourism',
        location: 'Remote',
        period: 'Freelance Project',
        type: 'Freelance',
        description: 'Architected and delivered a comprehensive travel and tourism website for a commercial client, focusing on user experience optimization and responsive design principles.',
        achievements: [
            'Delivered a fully responsive, mobile-first web application',
            'Implemented interactive UI components for enhanced engagement',
            'Optimized performance achieving 90+ Lighthouse scores',
            'Managed end-to-end project lifecycle independently',
        ],
    },
];

export default function Experience() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="experience" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiBriefcase size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Professional Experience</h2>
                    </div>
                    <p className="section-subtitle">
                        Building expertise through real-world projects and industry collaborations
                    </p>
                </motion.div>

                <div style={{ maxWidth: '850px', margin: '0 auto' }}>
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={exp.title}
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.2 + index * 0.15 }}
                            className="timeline-item"
                        >
                            <div className="timeline-dot" />
                            <motion.div
                                className="glass-card"
                                style={{ padding: '32px' }}
                                whileHover={{ scale: 1.02 }}
                            >
                                {/* Header */}
                                <div
                                    style={{
                                        display: 'flex',
                                        flexWrap: 'wrap',
                                        justifyContent: 'space-between',
                                        alignItems: 'flex-start',
                                        gap: '16px',
                                        marginBottom: '20px',
                                    }}
                                >
                                    <div>
                                        <span
                                            style={{
                                                display: 'inline-block',
                                                padding: '6px 16px',
                                                background: exp.type === 'Internship'
                                                    ? 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(139, 92, 246, 0.1))'
                                                    : 'linear-gradient(135deg, rgba(6, 182, 212, 0.2), rgba(6, 182, 212, 0.1))',
                                                border: `1px solid ${exp.type === 'Internship' ? 'rgba(139, 92, 246, 0.3)' : 'rgba(6, 182, 212, 0.3)'}`,
                                                borderRadius: '50px',
                                                fontSize: '0.8rem',
                                                color: exp.type === 'Internship' ? '#8b5cf6' : '#06b6d4',
                                                fontWeight: 600,
                                                marginBottom: '12px',
                                            }}
                                        >
                                            {exp.type}
                                        </span>
                                        <h3
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: '1.4rem',
                                                fontWeight: 700,
                                                color: '#fff',
                                                marginBottom: '6px',
                                            }}
                                        >
                                            {exp.title}
                                        </h3>
                                        <div style={{ color: '#8b5cf6', fontWeight: 600, fontSize: '1.05rem' }}>
                                            {exp.company}
                                        </div>
                                    </div>
                                    <div style={{ textAlign: 'right' }}>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: '#e4e4e7',
                                                fontSize: '0.9rem',
                                                marginBottom: '6px',
                                                justifyContent: 'flex-end',
                                            }}
                                        >
                                            <FiCalendar size={14} />
                                            {exp.period}
                                        </div>
                                        <div
                                            style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: '#d4d4d8',
                                                fontSize: '0.85rem',
                                                justifyContent: 'flex-end',
                                            }}
                                        >
                                            <FiMapPin size={14} />
                                            {exp.location}
                                        </div>
                                    </div>
                                </div>

                                {/* Description */}
                                <p
                                    style={{
                                        color: '#e4e4e7',
                                        lineHeight: 1.8,
                                        fontSize: '1rem',
                                        marginBottom: '20px',
                                    }}
                                >
                                    {exp.description}
                                </p>

                                {/* Achievements */}
                                <div>
                                    <h4
                                        style={{
                                            color: '#fff',
                                            fontSize: '0.95rem',
                                            fontWeight: 600,
                                            marginBottom: '14px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                        }}
                                    >
                                        <FiStar size={16} color="#f59e0b" />
                                        Key Contributions
                                    </h4>
                                    <ul style={{ listStyle: 'none', padding: 0 }}>
                                        {exp.achievements.map((achievement, i) => (
                                            <motion.li
                                                key={i}
                                                initial={{ opacity: 0, x: -10 }}
                                                animate={inView ? { opacity: 1, x: 0 } : {}}
                                                transition={{ delay: 0.4 + index * 0.15 + i * 0.08 }}
                                                style={{
                                                    display: 'flex',
                                                    alignItems: 'flex-start',
                                                    gap: '12px',
                                                    marginBottom: '12px',
                                                    color: '#e4e4e7',
                                                    fontSize: '0.95rem',
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                <FiCheckCircle
                                                    size={18}
                                                    style={{ color: '#10b981', flexShrink: 0, marginTop: '3px' }}
                                                />
                                                {achievement}
                                            </motion.li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>

                {/* Open to Opportunities */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="glass-card"
                    style={{
                        maxWidth: '700px',
                        margin: '50px auto 0',
                        padding: '36px',
                        textAlign: 'center',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(6, 182, 212, 0.1))',
                        border: '1px solid rgba(139, 92, 246, 0.3)',
                    }}
                >
                    <motion.div
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        style={{
                            width: '70px',
                            height: '70px',
                            background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            margin: '0 auto 24px',
                            boxShadow: '0 0 40px rgba(139, 92, 246, 0.4)',
                        }}
                    >
                        <FiArrowRight size={32} color="#fff" />
                    </motion.div>
                    <h3
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '1.6rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: '14px',
                        }}
                    >
                        Open to New Opportunities
                    </h3>
                    <p style={{ color: '#e4e4e7', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: '500px', margin: '0 auto' }}>
                        Actively seeking internships, collaborative projects, and opportunities to contribute to
                        innovative teams building impactful technology solutions.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}

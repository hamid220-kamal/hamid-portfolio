import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiCode, FiLayers, FiCpu, FiTool, FiZap } from 'react-icons/fi';
import { skillCategories } from '../data/skills';

const categoryIcons: { [key: string]: React.ElementType } = {
    code: FiCode,
    layers: FiLayers,
    brain: FiCpu,
    tools: FiTool,
};

const softSkills = [
    'Problem-Solving',
    'Critical Thinking',
    'Self-Directed Learning',
    'Technical Communication',
    'Project Management',
    'Analytical Reasoning',
];

export default function Skills() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="skills" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiZap size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>My Tech Stack</h2>
                    </div>
                    <p className="section-subtitle">
                        The tools and languages I use to build my projects
                    </p>
                </motion.div>

                {/* Skills Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '28px',
                        marginBottom: '50px',
                    }}
                >
                    {skillCategories.map((category, categoryIndex) => {
                        const Icon = categoryIcons[category.icon] || FiCode;
                        return (
                            <motion.div
                                key={category.title}
                                initial={{ opacity: 0, y: 30 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: 0.1 * categoryIndex }}
                                className="glass-card"
                                style={{ padding: '32px' }}
                            >
                                <div
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '14px',
                                        marginBottom: '24px',
                                    }}
                                >
                                    <div
                                        style={{
                                            width: '52px',
                                            height: '52px',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                                            borderRadius: '14px',
                                        }}
                                    >
                                        <Icon size={26} color="#8b5cf6" />
                                    </div>
                                    <h3
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '1.2rem',
                                            fontWeight: 700,
                                            color: '#fff',
                                        }}
                                    >
                                        {category.title}
                                    </h3>
                                </div>

                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.span
                                            key={skill.name}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.1 * categoryIndex + 0.05 * skillIndex,
                                            }}
                                            className="skill-badge"
                                        >
                                            {skill.name}
                                        </motion.span>
                                    ))}
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Soft Skills Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="glass-card"
                    style={{
                        padding: '36px',
                        textAlign: 'center',
                        maxWidth: '800px',
                        margin: '0 auto',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.08), rgba(6, 182, 212, 0.08))',
                    }}
                >
                    <h3
                        style={{
                            fontFamily: "'Outfit', sans-serif",
                            fontSize: '1.4rem',
                            fontWeight: 700,
                            color: '#fff',
                            marginBottom: '24px',
                        }}
                    >
                        Beyond the Code
                    </h3>
                    <div
                        style={{
                            display: 'flex',
                            flexWrap: 'wrap',
                            justifyContent: 'center',
                            gap: '14px',
                        }}
                    >
                        {softSkills.map((skill, index) => (
                            <motion.span
                                key={skill}
                                initial={{ opacity: 0, y: 10 }}
                                animate={inView ? { opacity: 1, y: 0 } : {}}
                                transition={{ delay: 0.6 + index * 0.08 }}
                                whileHover={{ scale: 1.08 }}
                                style={{
                                    padding: '12px 24px',
                                    background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.15), rgba(6, 182, 212, 0.15))',
                                    border: '1px solid rgba(139, 92, 246, 0.25)',
                                    borderRadius: '50px',
                                    color: '#fff',
                                    fontSize: '0.95rem',
                                    fontWeight: 500,
                                    cursor: 'default',
                                }}
                            >
                                {skill}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}

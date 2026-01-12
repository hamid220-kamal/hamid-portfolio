import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiGithub, FiExternalLink, FiLayers, FiArrowRight } from 'react-icons/fi';
import { projects } from '../data/projects';

export default function Projects() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [selectedProject, setSelectedProject] = useState<number | null>(null);

    const selectedProjectData = projects.find(p => p.id === selectedProject);

    return (
        <section id="projects" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiLayers size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Featured Projects</h2>
                    </div>
                    <p className="section-subtitle">
                        A selection of my recent work showcasing AI, full-stack development, and modern web technologies
                    </p>
                </motion.div>

                {/* Projects Grid */}
                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
                        gap: '30px',
                    }}
                >
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{
                                duration: 0.5,
                                delay: index * 0.1,
                                type: "spring",
                                stiffness: 100
                            }}
                            className="glass-card project-card"
                            onMouseEnter={() => setHoveredProject(project.id)}
                            onMouseLeave={() => setHoveredProject(null)}
                            onClick={() => setSelectedProject(project.id)}
                            style={{ cursor: 'pointer' }}
                        >
                            {/* Project Image */}
                            <div
                                style={{
                                    position: 'relative',
                                    overflow: 'hidden',
                                    borderRadius: '20px 20px 0 0',
                                }}
                            >
                                <motion.img
                                    src={project.image}
                                    alt={project.title}
                                    animate={{
                                        scale: hoveredProject === project.id ? 1.15 : 1,
                                        rotate: hoveredProject === project.id ? 2 : 0,
                                    }}
                                    transition={{ duration: 0.5 }}
                                    style={{
                                        width: '100%',
                                        height: '220px',
                                        objectFit: 'cover',
                                    }}
                                />

                                {/* Gradient Overlay */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(to top, rgba(10, 10, 15, 0.95) 0%, rgba(10, 10, 15, 0.3) 50%, transparent 100%)',
                                    }}
                                />

                                {/* Hover Overlay */}
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                                    style={{
                                        position: 'absolute',
                                        inset: 0,
                                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.4), rgba(6, 182, 212, 0.3))',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '16px',
                                    }}
                                >
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: hoveredProject === project.id ? 1 : 0 }}
                                        transition={{ delay: 0.1 }}
                                        style={{
                                            padding: '14px',
                                            background: 'rgba(255, 255, 255, 0.15)',
                                            borderRadius: '50%',
                                            backdropFilter: 'blur(10px)',
                                        }}
                                    >
                                        <FiArrowRight size={24} color="#fff" />
                                    </motion.div>
                                </motion.div>

                                {/* Project Number Badge */}
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        left: '16px',
                                        width: '40px',
                                        height: '40px',
                                        background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                        borderRadius: '12px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        fontWeight: 800,
                                        fontSize: '1.1rem',
                                        fontFamily: "'Outfit', sans-serif",
                                    }}
                                >
                                    {String(index + 1).padStart(2, '0')}
                                </div>
                            </div>

                            {/* Project Content */}
                            <div className="project-content">
                                <motion.h3
                                    animate={{
                                        color: hoveredProject === project.id ? '#8b5cf6' : '#fff',
                                    }}
                                    style={{
                                        fontFamily: "'Outfit', sans-serif",
                                        fontSize: '1.35rem',
                                        fontWeight: 700,
                                        marginBottom: '12px',
                                        transition: 'color 0.3s ease',
                                    }}
                                >
                                    {project.title}
                                </motion.h3>
                                <p
                                    style={{
                                        color: '#e4e4e7',
                                        fontSize: '0.95rem',
                                        lineHeight: 1.7,
                                        marginBottom: '18px',
                                    }}
                                >
                                    {project.description}
                                </p>

                                {/* Tech Tags */}
                                <div className="project-tags">
                                    {project.tags.map((tag, tagIndex) => (
                                        <motion.span
                                            key={tag}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={inView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{ delay: index * 0.1 + tagIndex * 0.05 }}
                                            className="project-tag"
                                        >
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>

                                {/* Links */}
                                <div
                                    style={{
                                        display: 'flex',
                                        gap: '20px',
                                        marginTop: '22px',
                                        paddingTop: '18px',
                                        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
                                    }}
                                >
                                    <motion.a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1, x: 3 }}
                                        onClick={(e) => e.stopPropagation()}
                                        style={{
                                            color: '#e4e4e7',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            fontSize: '0.95rem',
                                            textDecoration: 'none',
                                            fontWeight: 500,
                                            transition: 'color 0.3s ease',
                                        }}
                                        onMouseEnter={(e) => e.currentTarget.style.color = '#8b5cf6'}
                                        onMouseLeave={(e) => e.currentTarget.style.color = '#e4e4e7'}
                                    >
                                        <FiGithub size={20} />
                                        Source Code
                                    </motion.a>
                                    {project.demo && (
                                        <motion.a
                                            href={project.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.1, x: 3 }}
                                            onClick={(e) => e.stopPropagation()}
                                            style={{
                                                color: '#06b6d4',
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '8px',
                                                fontSize: '0.95rem',
                                                textDecoration: 'none',
                                                fontWeight: 500,
                                            }}
                                        >
                                            <FiExternalLink size={20} />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* GitHub CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    style={{
                        textAlign: 'center',
                        marginTop: '60px',
                    }}
                >
                    <motion.a
                        href="https://github.com/hamid220-kamal"
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.08 }}
                        whileTap={{ scale: 0.95 }}
                        className="btn-secondary"
                        style={{
                            padding: '18px 40px',
                            fontSize: '1.05rem',
                        }}
                    >
                        <FiGithub size={22} />
                        View All on GitHub
                        <FiArrowRight size={18} />
                    </motion.a>
                </motion.div>

                {/* Project Modal */}
                <AnimatePresence>
                    {selectedProjectData && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedProject(null)}
                            style={{
                                position: 'fixed',
                                inset: 0,
                                background: 'rgba(0, 0, 0, 0.95)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 2000,
                                padding: '24px',
                                backdropFilter: 'blur(10px)',
                            }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0, y: 50 }}
                                animate={{ scale: 1, opacity: 1, y: 0 }}
                                exit={{ scale: 0.8, opacity: 0, y: 50 }}
                                transition={{ type: "spring", damping: 25 }}
                                onClick={(e) => e.stopPropagation()}
                                style={{
                                    background: 'linear-gradient(135deg, #1a1a2e, #12121a)',
                                    borderRadius: '24px',
                                    maxWidth: '800px',
                                    width: '100%',
                                    maxHeight: '90vh',
                                    overflow: 'auto',
                                    position: 'relative',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    boxShadow: '0 0 80px rgba(139, 92, 246, 0.3)',
                                }}
                            >
                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedProject(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '20px',
                                        right: '20px',
                                        background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                                        border: 'none',
                                        borderRadius: '50%',
                                        width: '44px',
                                        height: '44px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        cursor: 'pointer',
                                        color: '#fff',
                                        zIndex: 10,
                                        fontSize: '20px',
                                    }}
                                >
                                    ✕
                                </motion.button>

                                {/* Project Image */}
                                <img
                                    src={selectedProjectData.image}
                                    alt={selectedProjectData.title}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        borderRadius: '24px 24px 0 0',
                                    }}
                                />

                                {/* Content */}
                                <div style={{ padding: '32px' }}>
                                    <h3
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '2rem',
                                            fontWeight: 700,
                                            color: '#fff',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        {selectedProjectData.title}
                                    </h3>

                                    <p
                                        style={{
                                            color: '#e4e4e7',
                                            fontSize: '1.05rem',
                                            lineHeight: 1.8,
                                            marginBottom: '24px',
                                        }}
                                    >
                                        {selectedProjectData.description}
                                    </p>

                                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginBottom: '28px' }}>
                                        {selectedProjectData.tags.map(tag => (
                                            <span key={tag} className="project-tag" style={{ fontSize: '0.9rem', padding: '8px 18px' }}>
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                                        <motion.a
                                            href={selectedProjectData.github}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            className="btn-primary"
                                        >
                                            <FiGithub size={20} />
                                            View on GitHub
                                        </motion.a>
                                        {selectedProjectData.demo && (
                                            <motion.a
                                                href={selectedProjectData.demo}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                whileHover={{ scale: 1.05 }}
                                                className="btn-secondary"
                                            >
                                                <FiExternalLink size={20} />
                                                Live Demo
                                            </motion.a>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

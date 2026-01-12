import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiX, FiAward, FiZoomIn } from 'react-icons/fi';
import { certificates } from '../data/certificates';

const categories = [
    { id: 'all', name: 'All Certifications', count: certificates.length },
    { id: 'ai', name: 'AI & Machine Learning', count: certificates.filter(c => c.category === 'ai').length },
    { id: 'cloud', name: 'Cloud Computing', count: certificates.filter(c => c.category === 'cloud').length },
    { id: 'development', name: 'Development', count: certificates.filter(c => c.category === 'development').length },
    { id: 'analytics', name: 'Data Analytics', count: certificates.filter(c => c.category === 'analytics').length },
    { id: 'other', name: 'Other', count: certificates.filter(c => c.category === 'other').length },
];

export default function Certificates() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [activeCategory, setActiveCategory] = useState('all');
    const [selectedCert, setSelectedCert] = useState<number | null>(null);
    const [hoveredCard, setHoveredCard] = useState<number | null>(null);

    const filteredCerts =
        activeCategory === 'all'
            ? certificates
            : certificates.filter((c) => c.category === activeCategory);

    const selectedCertData = certificates.find((c) => c.id === selectedCert);

    return (
        <section id="certificates" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiAward size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Professional Certifications</h2>
                    </div>
                    <p className="section-subtitle">
                        Industry-recognized credentials from leading technology organizations
                    </p>
                </motion.div>

                {/* Category Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        justifyContent: 'center',
                        gap: '12px',
                        marginBottom: '50px',
                    }}
                >
                    {categories.map((category) => (
                        <motion.button
                            key={category.id}
                            whileHover={{ scale: 1.08, y: -2 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setActiveCategory(category.id)}
                            style={{
                                padding: '12px 28px',
                                background:
                                    activeCategory === category.id
                                        ? 'linear-gradient(135deg, #8b5cf6, #06b6d4)'
                                        : 'rgba(255, 255, 255, 0.05)',
                                border:
                                    activeCategory === category.id
                                        ? 'none'
                                        : '1px solid rgba(255, 255, 255, 0.1)',
                                borderRadius: '50px',
                                color: '#fff',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '8px',
                            }}
                        >
                            {category.name}
                            <span
                                style={{
                                    background: activeCategory === category.id
                                        ? 'rgba(255, 255, 255, 0.2)'
                                        : 'rgba(139, 92, 246, 0.3)',
                                    padding: '2px 8px',
                                    borderRadius: '50px',
                                    fontSize: '0.75rem',
                                }}
                            >
                                {category.count}
                            </span>
                        </motion.button>
                    ))}
                </motion.div>

                {/* Certificates Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '28px',
                    }}
                >
                    <AnimatePresence mode="popLayout">
                        {filteredCerts.map((cert, index) => (
                            <motion.div
                                key={cert.id}
                                layout
                                initial={{ opacity: 0, scale: 0.8, y: 30 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.8, y: -30 }}
                                transition={{
                                    duration: 0.4,
                                    delay: index * 0.08,
                                    type: "spring",
                                    stiffness: 200
                                }}
                                className="glass-card cert-card"
                                style={{
                                    padding: 0,
                                    cursor: 'pointer',
                                    overflow: 'hidden',
                                }}
                                onClick={() => setSelectedCert(cert.id)}
                                onMouseEnter={() => setHoveredCard(cert.id)}
                                onMouseLeave={() => setHoveredCard(null)}
                            >
                                {/* Certificate Image */}
                                <div
                                    style={{
                                        position: 'relative',
                                        overflow: 'hidden',
                                        height: '200px',
                                    }}
                                >
                                    <motion.img
                                        src={cert.image}
                                        alt={cert.title}
                                        animate={{
                                            scale: hoveredCard === cert.id ? 1.1 : 1,
                                        }}
                                        transition={{ duration: 0.4 }}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />

                                    {/* Overlay on hover */}
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredCard === cert.id ? 1 : 0 }}
                                        style={{
                                            position: 'absolute',
                                            inset: 0,
                                            background: 'linear-gradient(to top, rgba(139, 92, 246, 0.9), rgba(6, 182, 212, 0.6))',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                        }}
                                    >
                                        <motion.div
                                            initial={{ scale: 0 }}
                                            animate={{ scale: hoveredCard === cert.id ? 1 : 0 }}
                                            transition={{ delay: 0.1 }}
                                            style={{
                                                width: '60px',
                                                height: '60px',
                                                borderRadius: '50%',
                                                background: 'rgba(255, 255, 255, 0.2)',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backdropFilter: 'blur(10px)',
                                            }}
                                        >
                                            <FiZoomIn size={28} color="#fff" />
                                        </motion.div>
                                    </motion.div>

                                    {/* Provider Badge */}
                                    <div
                                        style={{
                                            position: 'absolute',
                                            top: '12px',
                                            right: '12px',
                                            padding: '6px 14px',
                                            background: 'rgba(0, 0, 0, 0.7)',
                                            backdropFilter: 'blur(10px)',
                                            borderRadius: '50px',
                                            fontSize: '0.75rem',
                                            fontWeight: 600,
                                            color: '#06b6d4',
                                        }}
                                    >
                                        {cert.provider}
                                    </div>
                                </div>

                                {/* Certificate Info */}
                                <div style={{ padding: '20px' }}>
                                    <div
                                        style={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '12px',
                                        }}
                                    >
                                        <div
                                            style={{
                                                width: '44px',
                                                height: '44px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                                                borderRadius: '12px',
                                                flexShrink: 0,
                                            }}
                                        >
                                            <FiAward size={22} color="#8b5cf6" />
                                        </div>
                                        <h3
                                            style={{
                                                fontFamily: "'Outfit', sans-serif",
                                                fontSize: '1rem',
                                                fontWeight: 600,
                                                color: '#fff',
                                                lineHeight: 1.3,
                                            }}
                                        >
                                            {cert.title}
                                        </h3>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Certificate Modal */}
                <AnimatePresence>
                    {selectedCertData && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedCert(null)}
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
                                    padding: '32px',
                                    maxWidth: '700px',
                                    width: '100%',
                                    maxHeight: '90vh',
                                    overflow: 'auto',
                                    position: 'relative',
                                    border: '1px solid rgba(139, 92, 246, 0.3)',
                                    boxShadow: '0 0 60px rgba(139, 92, 246, 0.3)',
                                }}
                            >
                                {/* Close Button */}
                                <motion.button
                                    whileHover={{ scale: 1.1, rotate: 90 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => setSelectedCert(null)}
                                    style={{
                                        position: 'absolute',
                                        top: '16px',
                                        right: '16px',
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
                                    }}
                                >
                                    <FiX size={22} />
                                </motion.button>

                                {/* Header */}
                                <div style={{ marginBottom: '24px', paddingRight: '50px' }}>
                                    <div
                                        style={{
                                            display: 'inline-flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            padding: '8px 16px',
                                            background: 'rgba(6, 182, 212, 0.1)',
                                            border: '1px solid rgba(6, 182, 212, 0.3)',
                                            borderRadius: '50px',
                                            marginBottom: '16px',
                                        }}
                                    >
                                        <FiAward size={16} color="#06b6d4" />
                                        <span style={{ color: '#06b6d4', fontSize: '0.9rem', fontWeight: 600 }}>
                                            {selectedCertData.provider}
                                        </span>
                                    </div>

                                    <h3
                                        style={{
                                            fontFamily: "'Outfit', sans-serif",
                                            fontSize: '1.8rem',
                                            fontWeight: 700,
                                            color: '#fff',
                                            lineHeight: 1.2,
                                        }}
                                    >
                                        {selectedCertData.title}
                                    </h3>
                                </div>

                                {/* Certificate Image */}
                                <motion.img
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.2 }}
                                    src={selectedCertData.image}
                                    alt={selectedCertData.title}
                                    style={{
                                        width: '100%',
                                        borderRadius: '16px',
                                        border: '2px solid rgba(139, 92, 246, 0.3)',
                                        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.5)',
                                    }}
                                />
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FiMail, FiMapPin, FiGithub, FiLinkedin, FiInstagram, FiPhone, FiMessageCircle } from 'react-icons/fi';
import { useState } from 'react';

const contactInfo = [
    {
        icon: FiMail,
        label: 'Email',
        value: 'hamidkamal220@gmail.com',
        href: 'mailto:hamidkamal220@gmail.com',
    },
    {
        icon: FiMapPin,
        label: 'Location',
        value: 'Hyderabad, India',
        href: null,
    },
    {
        icon: FiPhone,
        label: 'Availability',
        value: 'Open for Opportunities',
        href: null,
    },
];

const socialLinks = [
    { icon: FiGithub, href: 'https://github.com/hamid220-kamal', label: 'GitHub', color: '#8b5cf6' },
    { icon: FiLinkedin, href: 'https://linkedin.com/in/hamid-kamal-hyderabad', label: 'LinkedIn', color: '#0077b5' },
    { icon: FiInstagram, href: 'https://instagram.com/hamid220_kamal', label: 'Instagram', color: '#e4405f' },
];

export default function Contact() {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // WhatsApp number: +91 8332059777
        const phoneNumber = '918332059777';
        const message = `*New Portfolio Inquiry*%0A%0A*Name:* ${formData.name}%0A*Email:* ${formData.email}%0A*Subject:* ${formData.subject || 'General Inquiry'}%0A%0A*Message:*%0A${formData.message}`;
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <section id="contact" className="section" ref={ref}>
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '8px' }}>
                        <FiMessageCircle size={28} color="#8b5cf6" />
                        <h2 className="section-title" style={{ marginBottom: 0 }}>Let's Connect</h2>
                    </div>
                    <p className="section-subtitle">
                        Interested in collaboration or have a project in mind? I'd love to hear from you.
                    </p>
                </motion.div>

                <div
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                        gap: '40px',
                        maxWidth: '1000px',
                        margin: '0 auto',
                    }}
                >
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.5rem',
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '28px',
                            }}
                        >
                            Contact Information
                        </h3>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px' }}>
                            {contactInfo.map((item, index) => (
                                <motion.div
                                    key={item.label}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={inView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.3 + index * 0.1 }}
                                    className="glass-card"
                                    style={{
                                        padding: '20px 24px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '18px',
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
                                        <item.icon size={24} color="#8b5cf6" />
                                    </div>
                                    <div>
                                        <div style={{ color: '#d4d4d8', fontSize: '0.85rem', marginBottom: '4px', fontWeight: 500 }}>
                                            {item.label}
                                        </div>
                                        {item.href ? (
                                            <a
                                                href={item.href}
                                                style={{
                                                    color: '#fff',
                                                    textDecoration: 'none',
                                                    fontWeight: 600,
                                                    fontSize: '1.05rem',
                                                    transition: 'color 0.3s ease',
                                                }}
                                                onMouseEnter={(e) => (e.currentTarget.style.color = '#8b5cf6')}
                                                onMouseLeave={(e) => (e.currentTarget.style.color = '#fff')}
                                            >
                                                {item.value}
                                            </a>
                                        ) : (
                                            <span style={{ color: '#fff', fontWeight: 600, fontSize: '1.05rem' }}>{item.value}</span>
                                        )}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <h4
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.2rem',
                                fontWeight: 600,
                                color: '#fff',
                                marginBottom: '20px',
                            }}
                        >
                            Connect on Social Media
                        </h4>
                        <div style={{ display: 'flex', gap: '14px' }}>
                            {socialLinks.map((social, index) => (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                    whileHover={{ scale: 1.15, y: -5 }}
                                    whileTap={{ scale: 0.9 }}
                                    style={{
                                        width: '56px',
                                        height: '56px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        border: '1px solid rgba(255, 255, 255, 0.1)',
                                        borderRadius: '14px',
                                        color: social.color,
                                        transition: 'all 0.3s ease',
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.background = `${social.color}20`;
                                        e.currentTarget.style.borderColor = social.color;
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                                        e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                                    }}
                                >
                                    <social.icon size={26} />
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="glass-card"
                        style={{ padding: '36px' }}
                    >
                        <h3
                            style={{
                                fontFamily: "'Outfit', sans-serif",
                                fontSize: '1.4rem',
                                fontWeight: 700,
                                color: '#fff',
                                marginBottom: '28px',
                            }}
                        >
                            Send a Message
                        </h3>

                        <form onSubmit={handleSubmit}>
                            <div style={{ marginBottom: '22px' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        color: '#e4e4e7',
                                        fontSize: '0.9rem',
                                        marginBottom: '10px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Full Name
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="Enter your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '22px' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        color: '#e4e4e7',
                                        fontSize: '0.9rem',
                                        marginBottom: '10px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Email Address
                                </label>
                                <input
                                    type="email"
                                    className="form-input"
                                    placeholder="Enter your email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    required
                                />
                            </div>

                            <div style={{ marginBottom: '22px' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        color: '#e4e4e7',
                                        fontSize: '0.9rem',
                                        marginBottom: '10px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="form-input"
                                    placeholder="What is this regarding?"
                                    value={formData.subject}
                                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                                />
                            </div>

                            <div style={{ marginBottom: '28px' }}>
                                <label
                                    style={{
                                        display: 'block',
                                        color: '#e4e4e7',
                                        fontSize: '0.9rem',
                                        marginBottom: '10px',
                                        fontWeight: 500,
                                    }}
                                >
                                    Message
                                </label>
                                <textarea
                                    className="form-input"
                                    placeholder="Share your thoughts or project ideas..."
                                    rows={5}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    required
                                    style={{ resize: 'vertical', minHeight: '130px' }}
                                />
                            </div>

                            <motion.button
                                type="submit"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.98 }}
                                className="btn-primary"
                                style={{ width: '100%', justifyContent: 'center', padding: '18px', background: 'linear-gradient(135deg, #25D366, #128C7E)' }}
                            >
                                <FiMessageCircle size={20} />
                                Send via WhatsApp
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

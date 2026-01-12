import { motion } from 'framer-motion';
import { FiCode } from 'react-icons/fi';

export default function LoadingScreen() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{
                position: 'fixed',
                inset: 0,
                background: '#0a0a0f',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                zIndex: 9999,
            }}
        >
            {/* Background gradient */}
            <div
                style={{
                    position: 'absolute',
                    inset: 0,
                    background: `
            radial-gradient(ellipse at center, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
            radial-gradient(ellipse at bottom right, rgba(6, 182, 212, 0.1) 0%, transparent 50%)
          `,
                }}
            />

            {/* Logo animation */}
            <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
                style={{
                    position: 'relative',
                    marginBottom: '40px',
                }}
            >
                {/* Rotating ring */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        border: '3px solid transparent',
                        borderTopColor: '#8b5cf6',
                        borderRightColor: '#06b6d4',
                        position: 'absolute',
                        inset: '-10px',
                    }}
                />

                {/* Inner rotating ring */}
                <motion.div
                    animate={{ rotate: -360 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    style={{
                        width: '100px',
                        height: '100px',
                        borderRadius: '50%',
                        border: '2px solid transparent',
                        borderBottomColor: '#f59e0b',
                        borderLeftColor: '#8b5cf6',
                        position: 'absolute',
                        inset: 0,
                    }}
                />

                {/* Center icon */}
                <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    style={{
                        width: '100px',
                        height: '100px',
                        background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.2), rgba(6, 182, 212, 0.2))',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <FiCode size={40} color="#8b5cf6" />
                </motion.div>
            </motion.div>

            {/* Name */}
            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                style={{
                    fontFamily: "'Outfit', sans-serif",
                    fontSize: 'clamp(1.5rem, 5vw, 2.5rem)',
                    fontWeight: 800,
                    background: 'linear-gradient(135deg, #8b5cf6, #06b6d4)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    marginBottom: '16px',
                }}
            >
                Hamid Kamal
            </motion.h1>

            {/* Loading text */}
            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ delay: 0.5, duration: 1.5, repeat: Infinity }}
                style={{
                    color: '#e4e4e7',
                    fontSize: '0.95rem',
                    letterSpacing: '3px',
                    fontWeight: 500,
                }}
            >
                LOADING PORTFOLIO
            </motion.p>

            {/* Progress bar */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                style={{
                    width: '200px',
                    height: '4px',
                    background: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '2px',
                    marginTop: '30px',
                    overflow: 'hidden',
                }}
            >
                <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 3.5, ease: "easeInOut" }}
                    style={{
                        height: '100%',
                        background: 'linear-gradient(90deg, #8b5cf6, #06b6d4)',
                        borderRadius: '2px',
                    }}
                />
            </motion.div>
        </motion.div>
    );
}

import { useEffect, useState } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';

export default function Effects() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
      
      // Update CSS variables for card hover glow
      document.documentElement.style.setProperty('--mouse-x', `${(e.clientX / window.innerWidth) * 100}%`);
      document.documentElement.style.setProperty('--mouse-y', `${(e.clientY / window.innerHeight) * 100}%`);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Custom Cursor */}
      <motion.div 
        className="custom-cursor"
        animate={{ x: mousePos.x - 10, y: mousePos.y - 10 }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.5 }}
      />
      <motion.div 
        className="custom-cursor-follower"
        animate={{ x: mousePos.x - 20, y: mousePos.y - 20 }}
        transition={{ type: 'spring', stiffness: 250, damping: 20, mass: 0.8 }}
      />

      {/* Animated Mesh Background */}
      <div className="mesh-bg">
        <div className="mesh-sphere" style={{ width: '600px', height: '600px', top: '-10%', right: '-5%', background: 'radial-gradient(circle, #6366f1 0%, transparent 70%)' }} />
        <div className="mesh-sphere" style={{ width: '500px', height: '500px', bottom: '10%', left: '-10%', background: 'radial-gradient(circle, #a855f7 0%, transparent 70%)', animationDelay: '-5s' }} />
        <div className="mesh-sphere" style={{ width: '400px', height: '400px', top: '40%', left: '30%', background: 'radial-gradient(circle, #4f46e5 0%, transparent 70%)', animationDelay: '-10s', opacity: 0.1 }} />
      </div>
    </>
  );
}

import { useEffect, useRef } from 'react';

export default function Hero3DCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 500);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    // Mouse tracking for interactive 3D rotation
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let rotationX = 0;
    let rotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) / (width / 2);
      mouseY = (e.clientY - rect.top - height / 2) / (height / 2);
      targetRotationY = mouseX * 0.75;
      targetRotationX = -mouseY * 0.75;
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const rect = canvas.getBoundingClientRect();
        const touch = e.touches[0];
        mouseX = (touch.clientX - rect.left - width / 2) / (width / 2);
        mouseY = (touch.clientY - rect.top - height / 2) / (height / 2);
        targetRotationY = mouseX * 0.75;
        targetRotationX = -mouseY * 0.75;
      }
    };

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleTouchMove);
    window.addEventListener('resize', handleResize);

    // Create 3D Machine Node Points & Mechanical Mesh
    const numPoints = 36;
    const points: { x: number; y: number; z: number }[] = [];

    for (let i = 0; i < numPoints; i++) {
      const theta = (i * Math.PI * 2) / numPoints;
      const z = (i / numPoints) * 2 - 1 + 1 / numPoints;
      const radius = Math.sqrt(1 - z * z);
      points.push({
        x: Math.cos(theta * 4) * radius * 160,
        y: Math.sin(theta * 4) * radius * 160,
        z: z * 160
      });
    }

    // Orbiting Particles
    const numParticles = 54;
    const particles = Array.from({ length: numParticles }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 130 + Math.random() * 110,
      speed: 0.007 + Math.random() * 0.012,
      yOffset: (Math.random() - 0.5) * 160,
      size: 2 + Math.random() * 3.5,
      color: Math.random() > 0.5 ? '#2563eb' : '#0284c7'
    }));

    let autoAngle = 0;
    let gearAngle = 0;
    let pulseRadius = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Smooth lerp rotation toward mouse/touch target
      rotationX += (targetRotationX - rotationX) * 0.05;
      rotationY += (targetRotationY - rotationY) * 0.05;
      autoAngle += 0.007;
      gearAngle += 0.015;
      pulseRadius = (pulseRadius + 1.2) % 200;

      const totalRotY = rotationY + autoAngle;
      const totalRotX = rotationX;

      const cosY = Math.cos(totalRotY);
      const sinY = Math.sin(totalRotY);
      const cosX = Math.cos(totalRotX);
      const sinX = Math.sin(totalRotX);

      const centerX = width > 1024 ? width * 0.55 : width / 2;
      const centerY = height * 0.52;

      // Draw Rotating 3D Radar Sonar HUD Rings
      ctx.save();
      ctx.translate(centerX, centerY);

      // Expanding Pulse Sonar Ring
      ctx.strokeStyle = `rgba(37, 99, 235, ${Math.max(0, 0.35 - pulseRadius / 200)})`;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.arc(0, 0, pulseRadius, 0, Math.PI * 2);
      ctx.stroke();

      // Outer Dotted Radar Ring
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.15)';
      ctx.lineWidth = 1;
      ctx.setLineDash([8, 8]);
      ctx.beginPath();
      ctx.arc(0, 0, 190, 0, Math.PI * 2);
      ctx.stroke();

      // Inner Concentric Ring
      ctx.strokeStyle = 'rgba(2, 132, 199, 0.2)';
      ctx.setLineDash([4, 4]);
      ctx.beginPath();
      ctx.arc(0, 0, 110, 0, Math.PI * 2);
      ctx.stroke();

      // Rotating Mechanical HUD Crosshair Lines
      ctx.setLineDash([]);
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.22)';
      ctx.lineWidth = 1.5;

      ctx.save();
      ctx.rotate(gearAngle);
      ctx.beginPath();
      ctx.moveTo(-190, 0);
      ctx.lineTo(190, 0);
      ctx.moveTo(0, -190);
      ctx.lineTo(0, 190);
      ctx.stroke();
      ctx.restore();

      ctx.restore();

      // Project 3D Machine Node Points
      const projectedPoints = points.map(p => {
        let x1 = p.x * cosY - p.z * sinY;
        let z1 = p.x * sinY + p.z * cosY;
        let y2 = p.y * cosX - z1 * sinX;
        let z2 = p.y * sinX + z1 * cosX;

        const perspective = 420 / (420 + z2);
        return {
          x: centerX + x1 * perspective,
          y: centerY + y2 * perspective,
          scale: perspective,
          z: z2
        };
      });

      // Draw 3D Connecting Toolpath Lines
      ctx.lineWidth = 1.2;
      for (let i = 0; i < projectedPoints.length; i++) {
        for (let j = i + 1; j < projectedPoints.length; j++) {
          const dx = projectedPoints[i].x - projectedPoints[j].x;
          const dy = projectedPoints[i].y - projectedPoints[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 125) {
            const alpha = (1 - dist / 125) * 0.28;
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.beginPath();
            ctx.moveTo(projectedPoints[i].x, projectedPoints[i].y);
            ctx.lineTo(projectedPoints[j].x, projectedPoints[j].y);
            ctx.stroke();
          }
        }
      }

      // Draw 3D Node Joints & Pulse Halos
      projectedPoints.forEach(p => {
        const radius = Math.max(1.5, 4.0 * p.scale);
        const alpha = Math.min(1, Math.max(0.2, (p.z + 160) / 320));

        ctx.fillStyle = `rgba(37, 99, 235, ${alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();

        // Glow ring around nodes
        ctx.strokeStyle = `rgba(2, 132, 199, ${alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius * 2, 0, Math.PI * 2);
        ctx.stroke();
      });

      // Render Orbiting 3D Tech Particles
      particles.forEach(pt => {
        pt.angle += pt.speed;
        const px = Math.cos(pt.angle) * pt.radius;
        const pz = Math.sin(pt.angle) * pt.radius;

        const x1 = px * cosY - pz * sinY;
        const z1 = px * sinY + pz * cosY;
        const y2 = pt.yOffset * cosX - z1 * sinX;
        const z2 = pt.yOffset * sinX + z1 * cosX;

        const perspective = 420 / (420 + z2);
        const screenX = centerX + x1 * perspective;
        const screenY = centerY + y2 * perspective;
        const alpha = Math.min(1, Math.max(0.15, (z2 + 220) / 440));

        ctx.fillStyle = pt.color;
        ctx.globalAlpha = alpha;
        ctx.beginPath();
        ctx.arc(screenX, screenY, pt.size * perspective, 0, Math.PI * 2);
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleTouchMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1
      }}
    />
  );
}

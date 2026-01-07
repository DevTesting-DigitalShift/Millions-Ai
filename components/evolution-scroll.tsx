import React, { useEffect, useRef, useState } from 'react';
import { Infinity as InfinityIcon } from 'lucide-react';

export default function App() {
  const canvasRef = useRef(null);
  
  // Animation configuration for the Light Theme
  const config = {
    particleCount: 100,
    baseSpeed: 0.3, 
    connectionRadius: 120,
    colorBase: '45, 55, 72', // Dark charcoal for particles
    bgHex: '#f9f2e9'
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    let time = 0;

    // Handle Resize
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle Class
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 0.5;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = (Math.random() * 30) + 1;
        this.speedX = (Math.random() - 0.5) * config.baseSpeed;
        this.speedY = (Math.random() - 0.5) * config.baseSpeed;
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Gentle bounce off edges
        if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
        if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
      }

      draw() {
        ctx.fillStyle = `rgba(${config.colorBase}, 0.6)`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      // Use the specific beige color for the trail effect to blend smoothly
      ctx.fillStyle = 'rgba(249, 242, 233, 0.3)'; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      time += 0.005;
      
      particles.forEach((particle, i) => {
        particle.update();
        particle.draw();

        // Connect particles with subtle dark lines
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < config.connectionRadius) {
            ctx.beginPath();
            // Dark elegant lines, fading with distance
            ctx.strokeStyle = `rgba(${config.colorBase}, ${0.15 * (1 - distance / config.connectionRadius)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      });

      // Draw the central organic sine-wave loop
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const radius = 140;

      ctx.beginPath();
      for (let i = 0; i <= 360; i++) {
        const angle = (i * Math.PI) / 180;
        // Smoother, slower wave for the light theme
        const wave = Math.sin(angle * 6 + time * 2) * 10 + Math.cos(angle * 4 - time) * 10;
        const dynamicRadius = radius + wave;
        
        const x = centerX + Math.cos(angle) * dynamicRadius;
        const y = centerY + Math.sin(angle) * dynamicRadius;
        
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      
      ctx.closePath();
      // Dark slate/orange accent gradient stroke
      const gradient = ctx.createLinearGradient(centerX - radius, centerY - radius, centerX + radius, centerY + radius);
      gradient.addColorStop(0, '#2d3748');
      gradient.addColorStop(0.5, '#ed8936'); // Soft orange accent
      gradient.addColorStop(1, '#2d3748');
      
      ctx.strokeStyle = gradient;
      ctx.lineWidth = 2;
      ctx.stroke();

      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div style={{ backgroundColor: '#f9f2e9' }} className="relative w-full h-screen overflow-hidden flex items-center justify-center text-slate-800">
      {/* Background Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full z-0"
      />

      {/* Foreground SVG Layer */}
      <div className="z-10 relative flex flex-col items-center justify-center pointer-events-none">
        
        {/* Animated SVG Ring - Clean Geometric Style */}
        <div className="relative animate-spin-slow">
           <svg 
            width="320" 
            height="320" 
            viewBox="0 0 100 100" 
            className="opacity-90"
          >
            {/* Outer dashed ring */}
            <circle cx="50" cy="50" r="48" stroke="#2d3748" strokeWidth="0.5" fill="none" strokeDasharray="4 4" className="opacity-40" />
            
            {/* Middle solid ring with gradient */}
            <defs>
              <linearGradient id="lightGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#2d3748" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#ed8936" stopOpacity="0.8" />
              </linearGradient>
            </defs>
            <circle cx="50" cy="50" r="42" stroke="url(#lightGrad)" strokeWidth="0.8" fill="none" />
            
            {/* Inner rotating accents */}
            <circle cx="50" cy="50" r="30" stroke="#2d3748" strokeWidth="0.2" fill="none" />
          </svg>
        </div>
        
        {/* Central Element */}
        <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#f9f2e9]/50 backdrop-blur-sm p-6 rounded-full border border-slate-300/50 shadow-xl">
                <InfinityIcon size={40} className="text-slate-700 animate-pulse" strokeWidth={1.5} />
            </div>
        </div>

        {/* Text Overlay - Modern Serif/Sans Mix */}
        <div className="absolute top-[82%] text-center">
           <h1 className="text-slate-800 font-light text-3xl tracking-[0.3em] uppercase">
             Flow
           </h1>
           <div className="h-px w-12 bg-orange-400 mx-auto my-3"></div>
           <p className="text-slate-500 text-[10px] tracking-widest uppercase font-medium">
             Seamless Loop
           </p>
        </div>
      </div>

      <style>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 30s linear infinite;
        }
      `}</style>
    </div>
  );
}
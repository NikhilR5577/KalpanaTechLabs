import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

const Hero = () => {
  const canvasRef = useRef(null);
  const { ref: sectionRef, inView } = useInView({ threshold: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const particles = [];
    const particleCount = 70;
    const connectionDistance = 120;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', resize);
    resize();

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 1.5,
        vy: (Math.random() - 0.5) * 1.5,
        radius: Math.random() * 1.5 + 1.5,
      });
    }

    const draw = () => {
      if (!inView) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particleCount; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0 || p.x > canvas.width) p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(59, 130, 246, 0.6)';
        ctx.fill();

        for (let j = i + 1; j < particleCount; j++) {
          const p2 = particles[j];
          const dx = p.x - p2.x;
          const dy = p.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < connectionDistance) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(p2.x, p2.y);
            const alpha = 1 - distance / connectionDistance;
            ctx.strokeStyle = `rgba(59, 130, 246, ${alpha * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [inView]);

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <canvas ref={canvasRef} className="absolute inset-0 z-0 pointer-events-none" />
      <div className="container mx-auto px-6 relative z-10 py-32 lg:py-0 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div>
          <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-400 border border-blue-500/30 rounded-full px-4 py-2 bg-blue-500/10 mb-6">
            [KALPANA TECHLABS]
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
            The Navigation Layer for Indian Hospitals
          </h1>
          <p className="text-white/55 mt-4 text-lg max-w-lg">
            We build smart QR-based indoor navigation for hospitals and large facilities. Patients scan a wall, speak their destination, and get instant 2D routing — no app download required.
          </p>
          <div className="flex flex-wrap gap-4 mt-8">
            <button onClick={scrollToContact} className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all">
              Book a Demo
            </button>
            <a href="https://youtube.com/shorts/uKDTOD5HxyY" target="_blank" rel="noopener noreferrer" className="border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center">
              Watch Demo &rarr;
            </a>
            <a href="https://navcare.vercel.app/" target="_blank" rel="noopener noreferrer" className="border border-green-500/40 hover:border-green-400/70 text-green-400 hover:text-green-300 px-6 py-3 rounded-xl transition-all inline-flex items-center justify-center gap-2 bg-green-500/5">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
              Try Live System ↗
            </a>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative rounded-[2.5rem] border-4 border-white/20 shadow-2xl overflow-hidden" style={{ aspectRatio: '9/16', maxWidth: '260px', width: '100%' }}>
            <iframe
              src="https://www.youtube.com/embed/uKDTOD5HxyY"
              title="YouTube video player"
              className="w-full h-full"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

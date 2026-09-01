import React from 'react';
import { useInView } from 'react-intersection-observer';

const Problem = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className={`py-24 px-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-5xl font-bold mb-4 text-center">The problem is real.</h2>
        <p className="text-white/55 text-lg mb-16 text-center">Large hospitals are mazes. Patients are lost. Time and dignity are wasted.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-400">15+ min</h3>
            <p className="text-white/55 mt-3 text-sm leading-relaxed">Average time a patient spends finding their department in a large hospital</p>
          </div>
          <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-400">1 Live Site</h3>
            <p className="text-white/55 mt-3 text-sm leading-relaxed">Already deployed and operational at District Hospital Sagar, M.P. — a government hospital</p>
          </div>
          <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center">
            <h3 className="text-5xl font-bold text-blue-400">0 app downloads</h3>
            <p className="text-white/55 mt-3 text-sm leading-relaxed">Required. Works instantly on any phone browser via a simple QR scan</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;

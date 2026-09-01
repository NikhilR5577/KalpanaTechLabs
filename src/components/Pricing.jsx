import React from 'react';
import { useInView } from 'react-intersection-observer';

const Pricing = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section ref={ref} className={`py-24 px-6 max-w-5xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-3xl lg:text-5xl font-bold text-center">Simple, transparent pricing.</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8">
          <div className="text-xs text-white/40 uppercase tracking-widest mb-4">Proof of Concept</div>
          <div className="text-5xl font-bold text-white">₹0</div>
          <p className="text-white/40 mt-1 mb-8">Free for government hospitals & pilots</p>
          <div className="border-t border-white/[0.08] mb-8"></div>
          <ul className="space-y-4">
            {['One-time setup & installation', 'Mapper tool session', 'Community impact report', 'Government documentation support'].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          <button onClick={scrollToContact} className="w-full border border-white/20 hover:border-white/40 text-white px-6 py-3 rounded-xl transition-all mt-8">
            Request Pilot
          </button>
        </div>

        <div className="bg-blue-950/40 backdrop-blur-xl border border-blue-500/50 rounded-2xl p-8 ring-1 ring-blue-500/20">
          <div className="text-xs text-blue-400 uppercase tracking-widest mb-4">Full Commercial</div>
          <div className="text-5xl font-bold text-white">₹1,00,000</div>
          <p className="text-white/40 mt-1 mb-8">setup + ₹60,000 / year AMC</p>
          <div className="border-t border-white/[0.08] mb-8"></div>
          <ul className="space-y-4">
            {['Complete implementation & deployment', 'Custom SVG floor map design', 'Admin analytics dashboard', 'QR board consultation & printing', 'Mapper.exe session', '1-year priority support'].map((feature, idx) => (
              <li key={idx} className="flex items-center gap-3">
                <svg className="w-5 h-5 text-green-400 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-white/80">{feature}</span>
              </li>
            ))}
          </ul>
          <button onClick={scrollToContact} className="w-full bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all mt-8">
            Book a Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;

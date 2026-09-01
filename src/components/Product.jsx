import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Smartphone, Mic, Accessibility, MapPin } from 'lucide-react';

const Product = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section ref={ref} className={`py-24 px-6 max-w-6xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <div className="text-center">
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest text-blue-400 border border-blue-500/30 rounded-full px-4 py-2 bg-blue-500/10 mb-4">
          [ASPATAL DISHA]
        </div>
        <h2 className="text-4xl lg:text-5xl font-bold mt-4 mb-4">Scan. Speak. Arrive.</h2>
        <img src="/aspatal_logo.jpg" alt="Aspatal Disha Logo" className="h-24 mx-auto my-8 object-contain" />
        <p className="text-white/55 text-lg max-w-2xl mx-auto text-center mb-6">
          Aspatal Disha is the flagship product of Kalpana TechLabs. A zero-friction indoor navigation system built for the Indian healthcare environment.
        </p>
        <a href="https://navcare.vercel.app/" target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-2 border border-green-500/40 hover:border-green-400/70 text-green-400 hover:text-green-300 px-6 py-3 rounded-xl transition-all bg-green-500/5 mb-12">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
          Live at District Hospital Sagar, M.P. ↗
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
            <Smartphone size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">No App Download</h3>
          <p className="text-white/55">Works in any phone browser. Zero friction.</p>
        </div>
        <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
            <Mic size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Hindi & English Voice</h3>
          <p className="text-white/55">Patients speak their destination naturally.</p>
        </div>
        <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
            <Accessibility size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Wheelchair Routes</h3>
          <p className="text-white/55">Accessible paths planned for all users.</p>
        </div>
        <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6">
          <div className="bg-blue-500/10 p-3 rounded-xl w-fit mb-4">
            <MapPin size={24} className="text-blue-400" />
          </div>
          <h3 className="text-xl font-bold mb-2">Real-time 2D Map</h3>
          <p className="text-white/55">Live floor maps with current location.</p>
        </div>
      </div>
    </section>
  );
};

export default Product;

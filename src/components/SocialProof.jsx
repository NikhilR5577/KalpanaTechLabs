import React from 'react';
import { useInView } from 'react-intersection-observer';

const SocialProof = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="bg-white/[0.02]">
      <section ref={ref} className={`py-24 px-6 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
        <h2 className="text-3xl lg:text-5xl font-bold mb-16 text-center">Trusted by the Government of Madhya Pradesh.</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <img src="/certificate.jpg" alt="Certificate" className="w-full rounded-2xl ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/10" />
          <img src="/rmo_photo.jpg" alt="RMO Photo" className="w-full rounded-2xl ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/10" />
        </div>

        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="italic text-white/70 text-xl">"Mr. Nikhil Rajput demonstrated excellent technical skills, dedication, sincerity and a strong sense of responsibility."</p>
          <p className="text-white/40 mt-3 text-sm">— Certificate of Appreciation, District Hospital Sagar, Madhya Pradesh</p>
          <p className="text-white/30 mt-1 text-xs">Presented by Dr. Abhishek Thakur (RMO) · Signed by the Civil Surgeon</p>
        </div>
      </section>
    </div>
  );
};

export default SocialProof;

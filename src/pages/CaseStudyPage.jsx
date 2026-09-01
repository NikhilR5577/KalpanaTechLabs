import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { AlertTriangle, CheckCircle2 } from 'lucide-react';

const CaseStudyPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: challengeRef, inView: challengeInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: solutionRef, inView: solutionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: recognitionRef, inView: recognitionInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-[#050508] text-white font-['DM_Sans'] pt-28 pb-24">
      {/* Hero */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={heroRef}
          className={`flex flex-col items-center text-center transform transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase border border-blue-500/20">
            CASE STUDY
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            District Hospital Sagar, <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Madhya Pradesh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl">
            How we deployed Aspatal Disha at a 200+ bed government district hospital — serving real patients every day.
          </p>
        </div>
      </section>

      {/* The Challenge */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={challengeRef}
          className={`max-w-5xl mx-auto transform transition-all duration-700 ${challengeInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">The Challenge</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <ChallengeCard text="Patients spent 15+ minutes finding departments in a large multi-building campus." />
            <ChallengeCard text="No signage in multiple languages — many patients only spoke Hindi." />
            <ChallengeCard text="Elderly and wheelchair-bound patients had no way to find accessible routes." />
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={solutionRef}
          className={`max-w-5xl mx-auto transform transition-all duration-700 ${solutionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">The Solution</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <SolutionCard text="Mapped the entire hospital campus and created custom SVG floor plans." />
            <SolutionCard text="Installed QR codes at strategic locations across the hospital." />
            <SolutionCard text="Deployed Aspatal Disha with Hindi voice input for zero-friction navigation." />
          </div>
        </div>
      </section>

      {/* The Results */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={statsRef}
          className={`max-w-4xl mx-auto bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-3xl p-12 transform transition-all duration-700 ${statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-4">15+ min</div>
              <p className="text-gray-300 text-lg">Average time saved per patient finding their destination</p>
            </div>
            <div>
              <div className="text-5xl font-bold text-blue-400 mb-4">0 App Downloads</div>
              <p className="text-gray-300 text-lg">Required. Works instantly on any phone browser via QR scan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Official Recognition */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={recognitionRef}
          className={`max-w-5xl mx-auto transform transition-all duration-700 ${recognitionInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold mb-12 text-center">Official Recognition</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="rounded-2xl overflow-hidden ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/10 bg-black/40">
              <img src="/certificate.jpg" alt="Government Certificate of Appreciation" className="w-full h-auto object-cover" />
            </div>
            <div className="rounded-2xl overflow-hidden ring-2 ring-blue-500/30 shadow-xl shadow-blue-500/10 bg-black/40">
              <img src="/rmo_photo.jpg" alt="Photo with RMO" className="w-full h-auto object-cover" />
            </div>
          </div>
          <div className="bg-blue-900/10 border-l-4 border-blue-500 p-8 rounded-r-2xl max-w-4xl mx-auto">
            <p className="text-xl italic text-gray-300 mb-6">
              "Mr. Nikhil Rajput demonstrated excellent technical skills, dedication, sincerity and a strong sense of responsibility."
            </p>
            <div className="text-gray-400 font-semibold">
              — Certificate of Appreciation, District Hospital Sagar. <br />
              Presented by Dr. Abhishek Thakur (RMO), Signed by the Civil Surgeon.
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6">
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto text-center transform transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Want the same results for your hospital?</h2>
          <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all">
            Book a Demo
          </Link>
        </div>
      </section>
    </div>
  );
};

const ChallengeCard = ({ text }) => (
  <div className="bg-black/20 backdrop-blur-xl border border-amber-500/20 rounded-2xl p-8 hover:border-amber-500/40 transition-colors">
    <div className="w-12 h-12 rounded-full bg-amber-500/10 flex items-center justify-center mb-6">
      <AlertTriangle className="w-6 h-6 text-amber-500" />
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
  </div>
);

const SolutionCard = ({ text }) => (
  <div className="bg-black/20 backdrop-blur-xl border border-green-500/20 rounded-2xl p-8 hover:border-green-500/40 transition-colors">
    <div className="w-12 h-12 rounded-full bg-green-500/10 flex items-center justify-center mb-6">
      <CheckCircle2 className="w-6 h-6 text-green-500" />
    </div>
    <p className="text-gray-300 text-lg leading-relaxed">{text}</p>
  </div>
);

export default CaseStudyPage;

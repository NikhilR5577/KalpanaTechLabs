import React from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import { QrCode, Mic, Navigation, Smartphone, Accessibility, MapPin, LayoutDashboard, Palette } from 'lucide-react';

const ProductPage = () => {
  const { ref: heroRef, inView: heroInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: howItWorksRef, inView: howItWorksInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: featuresRef, inView: featuresInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: liveRef, inView: liveInView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { ref: ctaRef, inView: ctaInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <div className="min-h-screen bg-[#050508] text-white font-['DM_Sans'] pt-28">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={heroRef}
          className={`flex flex-col items-center text-center transform transition-all duration-700 ${heroInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="bg-blue-500/10 text-blue-400 px-4 py-1.5 rounded-full text-sm font-semibold mb-6 tracking-wide uppercase border border-blue-500/20">
            ASPATAL DISHA
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl leading-tight">
            Smart Indoor Navigation for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Indian Hospitals</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mb-12">
            Aspatal Disha is the flagship product of Kalpana TechLabs. A zero-friction indoor navigation system that helps patients find their way inside large hospitals — no app download required.
          </p>

          <div className="relative mx-auto w-full max-w-[280px] aspect-[9/16] rounded-[2.5rem] border-4 border-white/20 shadow-2xl overflow-hidden bg-black flex items-center justify-center">
            <iframe
              className="absolute inset-0 w-full h-full"
              src="https://www.youtube.com/embed/uKDTOD5HxyY"
              title="Aspatal Disha Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={howItWorksRef}
          className={`transform transition-all duration-700 ${howItWorksInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold text-center mb-16">How It Works</h2>
          <div className="flex flex-col md:flex-row items-start justify-center gap-8 relative">
            {/* Desktop Connectors */}
            <div className="hidden md:block absolute top-12 left-[15%] right-[15%] h-0.5 border-t-2 border-dashed border-white/20 z-0"></div>

            {/* Step 1 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30 mb-6 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                <QrCode className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Scan QR Code</h3>
              <p className="text-gray-400">Patient scans a QR code placed on the hospital wall near their current location.</p>
            </div>

            {/* Step 2 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30 mb-6 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                <Mic className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Speak Destination</h3>
              <p className="text-gray-400">Patient says where they want to go in Hindi or English. No typing needed.</p>
            </div>

            {/* Step 3 */}
            <div className="flex-1 flex flex-col items-center text-center relative z-10 w-full">
              <div className="w-24 h-24 bg-blue-900/50 rounded-full flex items-center justify-center border border-blue-500/30 mb-6 shadow-lg shadow-blue-500/20 backdrop-blur-sm">
                <Navigation className="w-10 h-10 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Follow the Route</h3>
              <p className="text-gray-400">A real-time 2D map shows the shortest path to their destination.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={featuresRef}
          className={`transform transition-all duration-700 ${featuresInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <h2 className="text-3xl font-bold text-center mb-12">Core Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <FeatureCard icon={Smartphone} title="No App Download" desc="Works instantly in any phone browser. Patients don't need to install anything." />
            <FeatureCard icon={Mic} title="Hindi & English Voice" desc="Patients speak their destination naturally in their preferred language." />
            <FeatureCard icon={Accessibility} title="Wheelchair Routes" desc="Accessible paths planned for users with mobility challenges." />
            <FeatureCard icon={MapPin} title="Real-time 2D Map" desc="Live floor maps with the patient's current location and step-by-step directions." />
            <FeatureCard icon={LayoutDashboard} title="Admin Dashboard" desc="Hospital administrators can monitor navigation usage and update floor maps." />
            <FeatureCard icon={Palette} title="Custom Floor Maps" desc="We design custom SVG floor maps tailored to your hospital's exact layout." />
          </div>
        </div>
      </section>

      {/* Live Deployment Banner */}
      <section className="container mx-auto px-6 mb-24">
        <div
          ref={liveRef}
          className={`transform transition-all duration-700 ${liveInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a
            href="https://navcare.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/20 backdrop-blur-xl border border-white/[0.08] hover:border-blue-500/50 transition-colors rounded-2xl p-8 max-w-3xl mx-auto text-center group relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <span className="text-green-400 font-semibold tracking-wide uppercase text-sm">Currently Live</span>
            </div>
            <h3 className="text-2xl font-bold mb-2">District Hospital Sagar, M.P.</h3>
            <p className="text-gray-400 group-hover:text-white transition-colors">Click to view the live deployment of Aspatal Disha →</p>
          </a>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 pb-24">
        <div
          ref={ctaRef}
          className={`transform transition-all duration-700 ${ctaInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <div className="bg-blue-950/30 rounded-3xl p-12 text-center border border-blue-500/20 max-w-4xl mx-auto backdrop-blur-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Ready to upgrade your hospital?</h2>
            <Link to="/contact" className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all">
              Book a Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon: Icon, title, desc }) => (
  <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors group">
    <div className="w-12 h-12 rounded-full bg-blue-900/40 flex items-center justify-center mb-6 border border-blue-500/20 group-hover:scale-110 transition-transform">
      <Icon className="w-6 h-6 text-blue-400" />
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{desc}</p>
  </div>
);

export default ProductPage;

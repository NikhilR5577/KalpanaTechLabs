import React from 'react';
import { Link } from 'react-router-dom';
import { Lightbulb, Heart, Target } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans pt-28 pb-20 overflow-hidden selection:bg-blue-500/30">
      <div className="container mx-auto px-6 max-w-5xl">
        {/* Hero */}
        <FadeInSection>
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Building the Navigation Layer for Indian Facilities
            </h1>
            <p className="text-xl md:text-2xl text-white/70 max-w-3xl mx-auto">
              Kalpana TechLabs is on a mission to ensure no visitor ever gets lost inside a large facility again.
            </p>
          </div>
        </FadeInSection>

        {/* The Story */}
        <FadeInSection delay={100}>
          <div className="bg-white/[0.03] border border-white/[0.06] rounded-2xl p-8 md:p-12 mb-20 shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-blue-400">Our Story</h2>
            <div className="space-y-4 text-lg text-white/80 leading-relaxed">
              <p>
                It started with a simple observation at District Hospital Sagar — patients wandering through crowded corridors, asking staff for directions, losing precious time when they needed care the most.
              </p>
              <p>
                We realized this problem isn't unique to hospitals. It exists everywhere: malls, campuses, and airports. What if a visitor could simply scan a code on the wall and be guided to their destination without an app?
              </p>
              <p>
                That question became Aspatal Disha, and Aspatal Disha evolved into Kalpana TechLabs — a company built to solve indoor navigation for the large facilities that need it most.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Values */}
        <FadeInSection delay={200}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors">
                <Lightbulb className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Innovation</h3>
                <p className="text-white/70">
                  We build technology that works in the real world — for real people, in real Indian facilities.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors">
                <Heart className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Accessibility</h3>
                <p className="text-white/70">
                  Every visitor deserves to navigate complex facilities with ease — regardless of age, language, or ability.
                </p>
              </div>
              <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-6 hover:border-white/20 transition-colors">
                <Target className="w-10 h-10 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-3">Impact</h3>
                <p className="text-white/70">
                  We measure success not in downloads, but in minutes saved and stress reduced for visitors.
                </p>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* Founder Section */}
        <FadeInSection delay={300}>
          <div className="mb-20">
            <h2 className="text-3xl font-bold mb-10 text-center">Leadership</h2>
            <div className="max-w-2xl mx-auto bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 text-center hover:border-white/20 transition-colors">
              <img 
                src="/nikhil_photo.jpg" 
                alt="Nikhil Rajput" 
                className="w-28 h-28 rounded-full object-cover mx-auto mb-6 ring-4 ring-blue-500/30 shadow-lg shadow-blue-500/20"
              />
              <h3 className="text-2xl font-bold mb-1">Nikhil Rajput</h3>
              <p className="text-blue-400 font-medium mb-2">Founder & CEO</p>
              <p className="text-white/50 text-sm mb-6">Final Year, MANIT Bhopal (NIT)</p>
              <p className="text-white/80 leading-relaxed max-w-lg mx-auto">
                Nikhil built and deployed Aspatal Disha at District Hospital Sagar during his engineering journey — earning a Certificate of Appreciation from the Government of Madhya Pradesh. He is now scaling the solution to hospitals across India.
              </p>
            </div>
          </div>
        </FadeInSection>

        {/* Milestones Timeline */}
        <FadeInSection delay={400}>
          <div className="mb-24">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Journey</h2>
            <div className="max-w-3xl mx-auto">
              <div className="border-l-2 border-blue-500/30 pl-8 space-y-12 ml-4">
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#050508]" />
                  <div className="text-blue-400 font-bold mb-2">2025</div>
                  <p className="text-white/80 text-lg">Built the first prototype of Aspatal Disha and began testing with hospital staff.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#050508]" />
                  <div className="text-blue-400 font-bold mb-2">2026</div>
                  <p className="text-white/80 text-lg">Live deployment at District Hospital Sagar, M.P. — serving patients daily.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[41px] top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-[#050508]" />
                  <div className="text-blue-400 font-bold mb-2">2026</div>
                  <p className="text-white/80 text-lg">Received Certificate of Appreciation from the Government of Madhya Pradesh.</p>
                </div>
              </div>
            </div>
          </div>
        </FadeInSection>

        {/* CTA */}
        <FadeInSection delay={500}>
          <div className="text-center bg-gradient-to-b from-blue-900/20 to-transparent border border-blue-500/20 rounded-3xl p-12 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join us in transforming hospital navigation.</h2>
            <Link 
              to="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all hover:scale-105 active:scale-95"
            >
              Get in Touch
            </Link>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
}

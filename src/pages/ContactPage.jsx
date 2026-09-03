import React, { useState } from 'react';
import { Mail, MapPin, Clock } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

function FadeInSection({ children, delay = 0 }) {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out transform h-full ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    hospital: '',
    email: '',
    phone: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      // Simulate fetch delay to show loading state nicely if it returns quickly
      await new Promise(r => setTimeout(r, 600));

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: '', hospital: '', email: '', phone: '', message: '' });
        setTimeout(() => setSuccess(false), 5000);
      } else {
        setError(true);
        setTimeout(() => setError(false), 5000);
      }
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 5000);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#050508] text-white font-sans pt-28 pb-20 selection:bg-blue-500/30">
      <div className="container mx-auto px-6 max-w-6xl">
        <FadeInSection>
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Have a question or want to see a demo? We would love to hear from you.
            </p>
          </div>
        </FadeInSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-start">
          <FadeInSection delay={100}>
            <div className="space-y-6">
              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 shrink-0">
                  <Mail className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white/90">Email</h3>
                  <p className="text-white/60">kalpanatechlabs@gmail.com</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 shrink-0">
                  <MapPin className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white/90">Location</h3>
                  <p className="text-white/60">Sagar, Madhya Pradesh, India</p>
                </div>
              </div>

              <div className="bg-white/[0.03] border border-white/[0.06] rounded-xl p-6 flex items-start gap-4">
                <div className="bg-blue-500/10 p-3 rounded-lg border border-blue-500/20 shrink-0">
                  <Clock className="w-6 h-6 text-blue-400" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1 text-white/90">Response Time</h3>
                  <p className="text-white/60">We typically respond within 24 hours</p>
                </div>
              </div>
            </div>
          </FadeInSection>

          <FadeInSection delay={200}>
            <div className="bg-black/20 backdrop-blur-xl border border-white/[0.08] rounded-2xl p-8 lg:p-10 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-white/70 mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Dr. Rajesh Sharma"
                    className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="hospital" className="block text-sm font-medium text-white/70 mb-2">Facility Name</label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    required
                    value={formData.hospital}
                    onChange={handleChange}
                    placeholder="Sanjeevani Hospital / City Mall"
                    className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-white/70 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="admin@sanjeevani.in"
                      className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-white/70 mb-2">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      pattern="[0-9\+\-\s\(\)]+"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 98765 43210"
                      className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-white/70 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your facility..."
                    className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full resize-none transition-colors"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 disabled:hover:bg-blue-600 text-white px-6 py-4 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all flex justify-center items-center min-h-[56px]"
                >
                  {loading ? (
                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    'Send Message'
                  )}
                </button>
              </form>
            </div>
          </FadeInSection>
        </div>

        {/* Toasts */}
        {success && (
          <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50">
            Thanks! We will be in touch within 24 hours.
          </div>
        )}
        
        {error && (
          <div className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50">
            Something went wrong. Please try again.
          </div>
        )}
      </div>
    </div>
  );
}

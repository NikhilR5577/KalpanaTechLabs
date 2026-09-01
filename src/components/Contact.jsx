import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';

const Contact = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [formData, setFormData] = useState({ name: '', hospital: '', email: '', phone: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
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
    <section id="contact" ref={ref} className={`py-24 px-6 max-w-2xl mx-auto transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
      <h2 className="text-3xl lg:text-5xl font-bold text-center">Let's upgrade your hospital.</h2>
      <p className="text-white/55 text-center mt-4 mb-10">Fill in the form and we'll get back to you within 24 hours.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm text-white/70 mb-2">Name</label>
          <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full" placeholder="Dr. Rajesh Sharma" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Hospital Name</label>
          <input type="text" required value={formData.hospital} onChange={e => setFormData({...formData, hospital: e.target.value})} className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full" placeholder="Sanjeevani Multispecialty Hospital" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Email</label>
          <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full" placeholder="admin@sanjeevani.in" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Phone Number</label>
          <input type="tel" required value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full" placeholder="+91 98765 43210" />
        </div>
        <div>
          <label className="block text-sm text-white/70 mb-2">Message</label>
          <textarea required rows={4} value={formData.message} onChange={e => setFormData({...formData, message: e.target.value})} className="bg-white/[0.05] border border-white/[0.10] rounded-xl px-4 py-3 text-white placeholder-white/30 focus:outline-none focus:border-blue-500/50 w-full" placeholder="Tell us about your facility..."></textarea>
        </div>
        <button disabled={loading} type="submit" className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white px-6 py-3 rounded-xl font-semibold shadow-lg shadow-blue-500/25 transition-all flex justify-center items-center gap-2">
          {loading ? (
            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
          ) : "Send Message"}
        </button>
      </form>

      {success && (
        <div className="fixed bottom-6 right-6 bg-green-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50">
          Thanks! We'll be in touch within 24 hours.
        </div>
      )}
      {error && (
        <div className="fixed bottom-6 right-6 bg-red-500 text-white px-6 py-4 rounded-2xl shadow-2xl z-50">
          Something went wrong. Please try again.
        </div>
      )}
    </section>
  );
};

export default Contact;

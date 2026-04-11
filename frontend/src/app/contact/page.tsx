'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await api.contact.create(form);
      toast.success('Message sent! We will get back to you soon.');
      setForm({ name: '', email: '', subject: '', message: '' });
    } catch (err: any) {
      toast.error(err.message || 'Failed to send message');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
            Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Touch</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
            Have a question, suggestion, or want to partner with us? We would love to hear from you.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative z-10 -mt-8 rounded-t-3xl shadow-sm sm:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            <FadeIn delay={0.2} direction="right" className="lg:col-span-1 space-y-8 sticky top-24">
              <div>
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Reach Out Direct</h2>
                <p className="text-gray-600 leading-relaxed text-lg pb-6 border-b border-slate-200">
                  We are here to help and eagerly waiting to answer any question you might have.
                </p>
              </div>
              <div className="space-y-6 pt-2">
                {[
                  { icon: Mail, label: 'Email Support', value: 'hello@cruisethelimit.com', color: 'text-blue-600', bg: 'bg-blue-100' },
                  { icon: Phone, label: 'Phone Line', value: '(555) 123-4567', color: 'text-green-600', bg: 'bg-green-100' },
                  { icon: MapPin, label: 'Headquarters', value: 'Austin, Texas - United States', color: 'text-purple-600', bg: 'bg-purple-100' },
                ].map((item, i) => (
                  <div key={item.label} className="flex gap-5 group items-center">
                    <div className={`flex-shrink-0 w-14 h-14 ${item.bg} ${item.color} rounded-2xl flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm`}>
                      <item.icon size={24} strokeWidth={2} />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">{item.label}</p>
                      <p className="text-lg font-semibold text-gray-900 mt-0.5">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>

            <FadeIn delay={0.3} direction="left" className="lg:col-span-2">
              <div className="bg-white p-8 md:p-12 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                <h3 className="text-3xl font-display font-bold text-gray-900 mb-8">Send a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                      <input type="text" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none bg-slate-50 focus:bg-white" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="Jane Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address</label>
                      <input type="email" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none bg-slate-50 focus:bg-white" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Subject Line</label>
                    <input type="text" required className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none bg-slate-50 focus:bg-white" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="Partnership inquiry, Question about kit, etc." />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Message Content</label>
                    <textarea required rows={6} className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none bg-slate-50 focus:bg-white resize-none" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="How can we help you out today...?" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all outline-none xl:w-auto xl:px-12 ml-auto">
                    <Send size={20} className="mr-2" />
                    {loading ? 'Sending Securely...' : 'Dispatch Message'}
                  </button>
                </form>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Mail, MapPin, Phone, Send } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold">Contact Us</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Have a question, suggestion, or want to partner with us? We would love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1 space-y-8">
              <div>
                <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Get in Touch</h2>
                <p className="text-gray-600">We are here to help and answer any question you might have.</p>
              </div>
              {[
                { icon: Mail, label: 'Email', value: 'hello@cruisethelimit.com' },
                { icon: Phone, label: 'Phone', value: '(555) 123-4567' },
                { icon: MapPin, label: 'Location', value: 'United States' },
              ].map((item) => (
                <div key={item.label} className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-500">{item.label}</p>
                    <p className="text-gray-900">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="lg:col-span-2">
              <div className="card p-8">
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                      <input type="text" required className="input-field" value={form.name} onChange={(e) => update('name', e.target.value)} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" required className="input-field" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@example.com" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                    <input type="text" required className="input-field" value={form.subject} onChange={(e) => update('subject', e.target.value)} placeholder="How can we help?" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea required rows={5} className="input-field resize-none" value={form.message} onChange={(e) => update('message', e.target.value)} placeholder="Your message..." />
                  </div>
                  <button type="submit" disabled={loading} className="btn-primary">
                    <Send size={16} className="mr-2" />
                    {loading ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

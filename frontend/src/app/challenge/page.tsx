'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { CheckCircle, Car, Leaf, Shield } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function ChallengePage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    vehicleType: '',
    tripDuration: '',
    route: '',
    agreedToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      toast.error('You must agree to the eco-friendly driving terms');
      return;
    }
    setLoading(true);
    try {
      await api.challenges.create(token ?? null, form);
      toast.success('Challenge accepted! Drive safe and green!');
      setSubmitted(true);
      if (user) {
        setTimeout(() => router.push('/profile'), 2000);
      }
    } catch (err: any) {
      toast.error(err.message || 'Failed to submit challenge');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: any) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
            Take the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-green-400">Challenge</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
            Commit to eco-friendly driving and join thousands of responsible drivers making a real difference.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative z-10 -mt-8 rounded-t-3xl shadow-sm sm:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Challenge Info */}
            <FadeIn delay={0.2} direction="right">
              <div className="sticky top-24">
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 tracking-tight">What You Commit To</h2>
                <div className="space-y-6">
                  {[
                    { icon: Car, title: 'Mindful Driving', desc: 'Maintain steady speeds, avoid aggressive acceleration, and coast to stops when safe.', color: 'text-blue-600', bg: 'bg-blue-100' },
                    { icon: Leaf, title: 'Eco-Friendly Habits', desc: 'Reduce idling, combine trips, and keep your vehicle well-maintained for optimal efficiency.', color: 'text-green-600', bg: 'bg-green-100' },
                    { icon: Shield, title: 'Safety Pledge', desc: 'Follow all traffic laws, eliminate distractions, and always prioritize safety for everyone on the road.', color: 'text-purple-600', bg: 'bg-purple-100' },
                    { icon: CheckCircle, title: 'Share Your Journey', desc: 'Inspire others by sharing your eco-driving experience on social media with #CruiseTheLimit.', color: 'text-orange-600', bg: 'bg-orange-100' },
                  ].map((item, i) => (
                    <FadeIn key={item.title} delay={0.3 + (i * 0.1)} direction="right" className="flex gap-5 group">
                      <div className={`flex-shrink-0 w-12 h-12 ${item.bg} ${item.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <item.icon size={24} strokeWidth={2} />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                        <p className="mt-1 text-gray-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </FadeIn>
                  ))}
                </div>
              </div>
            </FadeIn>

            {/* Challenge Form */}
            <FadeIn delay={0.3} direction="left" className="w-full">
              <div className="bg-white p-8 sm:p-10 rounded-3xl shadow-2xl shadow-slate-200/50 border border-slate-100">
                {submitted && !user ? (
                  <FadeIn className="text-center py-10">
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mb-6 relative">
                      <div className="absolute inset-0 bg-green-400 animate-ping rounded-full opacity-20"></div>
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Challenge Accepted!</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      Thank you, <strong className="text-gray-900">{form.fullName}</strong>! Your eco-friendly driving challenge has been recorded.
                      Drive safe and green — every mile counts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', vehicleType: '', tripDuration: '', route: '', agreedToTerms: false }); }} className="btn-primary w-full sm:w-auto">
                        Take Another
                      </button>
                      <button onClick={() => router.push('/register')} className="w-full sm:w-auto bg-slate-100 text-slate-800 font-semibold px-6 py-3 rounded-lg hover:bg-slate-200 transition-colors">
                        Create an Account
                      </button>
                    </div>
                  </FadeIn>
                ) : (
                  <>
                    <h2 className="text-2xl sm:text-3xl font-display font-bold text-gray-900 mb-3">Accept the Challenge</h2>
                    {!user && (
                      <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-slate-100">
                        No account needed — or <a href="/login" className="text-primary-700 font-semibold hover:text-primary-800 hover:underline transition-colors">log in</a> to track your challenges.
                      </p>
                    )}
                    {user && <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-slate-100">Submitting securely as <strong className="text-gray-900">{user.email}</strong></p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Jane Doe" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                          <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white" value={form.vehicleType} onChange={(e) => update('vehicleType', e.target.value)}>
                            <option value="">Select vehicle</option>
                            <option value="Sedan">Sedan</option>
                            <option value="SUV">SUV</option>
                            <option value="Truck">Truck</option>
                            <option value="Hybrid">Hybrid</option>
                            <option value="Electric">Electric</option>
                            <option value="Motorcycle">Motorcycle</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Typical Trip</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white" value={form.tripDuration} onChange={(e) => update('tripDuration', e.target.value)}>
                            <option value="">Select duration</option>
                            <option value="Under 15 minutes">Under 15 minutes</option>
                            <option value="15-30 minutes">15-30 minutes</option>
                            <option value="30-60 minutes">30-60 minutes</option>
                            <option value="Over 1 hour">Over 1 hour</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Common Route (Optional)</label>
                        <input type="text" className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.route} onChange={(e) => update('route', e.target.value)} placeholder="e.g. Daily commute, Highway driving" />
                      </div>
                      <div className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
                        <input type="checkbox" id="terms" checked={form.agreedToTerms} onChange={(e) => update('agreedToTerms', e.target.checked)} className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500" />
                        <label htmlFor="terms" className="text-sm text-slate-700 leading-snug cursor-pointer font-medium">
                          I agree to practice eco-friendly, safe driving habits and share my commitment to responsible driving.
                        </label>
                      </div>
                      <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-primary-500/50">
                        {loading ? 'Submitting secure protocol...' : 'Accept the Challenge'}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}

'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { CheckCircle, Car, Leaf, Shield } from 'lucide-react';

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
        router.push('/profile');
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
      <section className="bg-gradient-to-br from-primary-700 to-primary-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold">Take the Challenge</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Commit to eco-friendly driving and join thousands of responsible drivers making a real difference.
          </p>
        </div>
      </section>

      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Challenge Info */}
            <div>
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">What You Commit To</h2>
              <div className="space-y-5">
                {[
                  { icon: Car, title: 'Mindful Driving', desc: 'Maintain steady speeds, avoid aggressive acceleration, and coast to stops when safe.' },
                  { icon: Leaf, title: 'Eco-Friendly Habits', desc: 'Reduce idling, combine trips, and keep your vehicle well-maintained for optimal efficiency.' },
                  { icon: Shield, title: 'Safety Pledge', desc: 'Follow all traffic laws, eliminate distractions, and always prioritize safety for everyone on the road.' },
                  { icon: CheckCircle, title: 'Share Your Journey', desc: 'Inspire others by sharing your eco-driving experience on social media with #CruiseTheLimit.' },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-primary-100 text-primary-700 rounded-lg flex items-center justify-center">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Challenge Form */}
            <div className="card p-8">
              {submitted && !user ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 text-green-600 rounded-full mb-4">
                    <CheckCircle size={32} />
                  </div>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-3">Challenge Accepted!</h2>
                  <p className="text-gray-600 mb-6">
                    Thank you, <strong>{form.fullName}</strong>! Your eco-friendly driving challenge has been recorded.
                    Drive safe and green — every mile counts.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <button onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', vehicleType: '', tripDuration: '', route: '', agreedToTerms: false }); }} className="btn-primary">
                      Take Another Challenge
                    </button>
                    <button onClick={() => router.push('/register')} className="btn-secondary">
                      Create an Account
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <h2 className="text-2xl font-display font-bold text-gray-900 mb-2">Accept the Challenge</h2>
                  {!user && (
                    <p className="text-sm text-gray-500 mb-6">
                      No account needed — or <a href="/login" className="text-primary-700 font-medium hover:underline">log in</a> to track your challenges.
                    </p>
                  )}
                  {user && <p className="text-sm text-gray-500 mb-6">Submitting as <strong>{user.email}</strong></p>}
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                      <input type="text" required className="input-field" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <input type="email" required className="input-field" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="john@example.com" />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Vehicle Type</label>
                      <select required className="input-field" value={form.vehicleType} onChange={(e) => update('vehicleType', e.target.value)}>
                        <option value="">Select vehicle type</option>
                        <option value="Sedan">Sedan</option>
                        <option value="SUV">SUV</option>
                        <option value="Truck">Truck</option>
                        <option value="Hybrid">Hybrid</option>
                        <option value="Electric">Electric</option>
                        <option value="Motorcycle">Motorcycle</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Typical Trip Duration</label>
                      <select required className="input-field" value={form.tripDuration} onChange={(e) => update('tripDuration', e.target.value)}>
                        <option value="">Select duration</option>
                        <option value="Under 15 minutes">Under 15 minutes</option>
                        <option value="15-30 minutes">15-30 minutes</option>
                        <option value="30-60 minutes">30-60 minutes</option>
                        <option value="Over 1 hour">Over 1 hour</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Common Route (Optional)</label>
                      <input type="text" className="input-field" value={form.route} onChange={(e) => update('route', e.target.value)} placeholder="e.g. I-95 North, Downtown commute" />
                    </div>
                    <div className="flex items-start gap-3">
                      <input type="checkbox" id="terms" checked={form.agreedToTerms} onChange={(e) => update('agreedToTerms', e.target.checked)} className="mt-1 w-4 h-4 text-primary-600 rounded" />
                      <label htmlFor="terms" className="text-sm text-gray-600">
                        I agree to practice eco-friendly, safe driving habits and share my commitment to responsible driving.
                      </label>
                    </div>
                    <button type="submit" disabled={loading} className="btn-primary w-full text-lg !py-4">
                      {loading ? 'Submitting...' : 'Accept the Challenge'}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

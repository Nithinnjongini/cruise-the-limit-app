'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { CheckCircle, Car, Shield, Clock, MessageSquare } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function ChallengePage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    fullName: '',
    email: '',
    zipCode: '',
    state: '',
    country: 'USA',
    vehicleType: '',
    agreedToTerms: false,
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.agreedToTerms) {
      toast.error('You must agree to the Cruise The Limit pledge');
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
      <section className="relative bg-gradient-to-br from-primary-800 to-primary-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
            Take the <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400">&ldquo;Cruise The Limit&rdquo;</span> Challenge
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
            Choose to cruise the posted speed limit and join thousands of other responsible drivers already making a real difference.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative z-10 -mt-8 rounded-t-3xl shadow-sm sm:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* What You Commit To */}
            <FadeIn delay={0.2} direction="right">
              <div className="sticky top-24">
                <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 tracking-tight">Choose to</h2>
                <div className="space-y-6">
                  {[
                    { icon: Car, title: 'Cruise the speed limit…', desc: '(set your cruise control at the speed limit and help maintain a predictable flow.)', color: 'text-blue-600', bg: 'bg-blue-100' },
                    { icon: Shield, title: 'Safely…', desc: '(following traffic laws, avoiding distractions, and prioritizing safety for everyone on the road)', color: 'text-primary-700', bg: 'bg-primary-100' },
                    { icon: Clock, title: 'For 30 days…', desc: '(Notice the impact you make on the road, the environment, your wallet, and peace of mind.)', color: 'text-accent-600', bg: 'bg-accent-100' },
                    { icon: MessageSquare, title: 'And share your experience.', desc: '(Let others know how the challenge impacted you. Really!)', color: 'text-rose-600', bg: 'bg-rose-100' },
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
                    <div className="inline-flex items-center justify-center w-20 h-20 bg-primary-100 text-primary-600 rounded-full mb-6 relative">
                      <div className="absolute inset-0 bg-primary-400 animate-ping rounded-full opacity-20"></div>
                      <CheckCircle size={40} />
                    </div>
                    <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">Challenge Accepted!</h2>
                    <p className="text-gray-600 mb-8 text-lg">
                      Thank you, <strong className="text-gray-900">{form.fullName}</strong>! Your Cruise The Limit challenge has been recorded.
                      Drive safe — every mile counts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <button onClick={() => { setSubmitted(false); setForm({ fullName: '', email: '', zipCode: '', state: '', country: 'USA', vehicleType: '', agreedToTerms: false }); }} className="btn-primary w-full sm:w-auto">
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
                        No account needed - or <a href="/login" className="text-primary-700 font-semibold hover:text-primary-800 hover:underline transition-colors">log in</a> if member
                      </p>
                    )}
                    {user && <p className="text-sm text-gray-500 mb-8 pb-4 border-b border-slate-100">Submitting securely as <strong className="text-gray-900">{user.email}</strong></p>}

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name</label>
                        <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.fullName} onChange={(e) => update('fullName', e.target.value)} placeholder="Jane Doe" />
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
                          <input type="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.email} onChange={(e) => update('email', e.target.value)} placeholder="jane@example.com" />
                        </div>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Zip Code</label>
                          <input type="text" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none" value={form.zipCode} onChange={(e) => update('zipCode', e.target.value)} placeholder="55401" />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">State</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white" value={form.state} onChange={(e) => update('state', e.target.value)}>
                            <option value="">Select state</option>
                            <option value="AL">Alabama</option>
                            <option value="AK">Alaska</option>
                            <option value="AZ">Arizona</option>
                            <option value="AR">Arkansas</option>
                            <option value="CA">California</option>
                            <option value="CO">Colorado</option>
                            <option value="CT">Connecticut</option>
                            <option value="DE">Delaware</option>
                            <option value="FL">Florida</option>
                            <option value="GA">Georgia</option>
                            <option value="HI">Hawaii</option>
                            <option value="ID">Idaho</option>
                            <option value="IL">Illinois</option>
                            <option value="IN">Indiana</option>
                            <option value="IA">Iowa</option>
                            <option value="KS">Kansas</option>
                            <option value="KY">Kentucky</option>
                            <option value="LA">Louisiana</option>
                            <option value="ME">Maine</option>
                            <option value="MD">Maryland</option>
                            <option value="MA">Massachusetts</option>
                            <option value="MI">Michigan</option>
                            <option value="MN">Minnesota</option>
                            <option value="MS">Mississippi</option>
                            <option value="MO">Missouri</option>
                            <option value="MT">Montana</option>
                            <option value="NE">Nebraska</option>
                            <option value="NV">Nevada</option>
                            <option value="NH">New Hampshire</option>
                            <option value="NJ">New Jersey</option>
                            <option value="NM">New Mexico</option>
                            <option value="NY">New York</option>
                            <option value="NC">North Carolina</option>
                            <option value="ND">North Dakota</option>
                            <option value="OH">Ohio</option>
                            <option value="OK">Oklahoma</option>
                            <option value="OR">Oregon</option>
                            <option value="PA">Pennsylvania</option>
                            <option value="RI">Rhode Island</option>
                            <option value="SC">South Carolina</option>
                            <option value="SD">South Dakota</option>
                            <option value="TN">Tennessee</option>
                            <option value="TX">Texas</option>
                            <option value="UT">Utah</option>
                            <option value="VT">Vermont</option>
                            <option value="VA">Virginia</option>
                            <option value="WA">Washington</option>
                            <option value="WV">West Virginia</option>
                            <option value="WI">Wisconsin</option>
                            <option value="WY">Wyoming</option>
                            <option value="Other">Other / Non-US</option>
                          </select>
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-gray-700 mb-2">Country</label>
                          <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white" value={form.country} onChange={(e) => update('country', e.target.value)}>
                            <option value="USA">United States</option>
                            <option value="CAN">Canada</option>
                            <option value="MEX">Mexico</option>
                            <option value="GBR">United Kingdom</option>
                            <option value="AUS">Australia</option>
                            <option value="DEU">Germany</option>
                            <option value="FRA">France</option>
                            <option value="IND">India</option>
                            <option value="JPN">Japan</option>
                            <option value="OTHER">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">Vehicle Type</label>
                        <select required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-all outline-none bg-white" value={form.vehicleType} onChange={(e) => update('vehicleType', e.target.value)}>
                          <option value="">Select vehicle</option>
                          <option value="Sedan">Sedan</option>
                          <option value="Hatchback">Hatchback</option>
                          <option value="Wagon">Wagon</option>
                          <option value="Coupe">Coupe</option>
                          <option value="SUV (Compact / Midsize / Full-Size)">SUV (Compact / Midsize / Full-Size)</option>
                          <option value="Crossover">Crossover</option>
                          <option value="Pickup Truck">Pickup Truck</option>
                          <option value="Minivan">Minivan</option>
                          <option value="Electric Vehicle (EV)">Electric Vehicle (EV)</option>
                          <option value="Hybrid Vehicle">Hybrid Vehicle</option>
                          <option value="Cargo / Work Van">Cargo / Work Van</option>
                          <option value="Work Truck">Work Truck</option>
                          <option value="Motorcycle">Motorcycle</option>
                          <option value="RV / Motorhome">RV / Motorhome</option>
                          <option value="Commercial Truck">Commercial Truck</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      <div className="flex items-start gap-3 bg-primary-50/50 p-4 rounded-xl border border-primary-100">
                        <input type="checkbox" id="terms" checked={form.agreedToTerms} onChange={(e) => update('agreedToTerms', e.target.checked)} className="mt-1 w-5 h-5 text-primary-600 rounded focus:ring-primary-500" />
                        <label htmlFor="terms" className="text-sm text-slate-700 leading-snug cursor-pointer font-medium">
                          I agree to intentionally cruise the speed limit in a safe and responsible manner for 30 days (for safety, sustainability and savings &ndash; as well as for my own peace of mind)
                        </label>
                      </div>
                      <button type="submit" disabled={loading} className="w-full bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary-500/30 transform hover:-translate-y-0.5 transition-all outline-none focus:ring-4 focus:ring-primary-500/50">
                        {loading ? 'Submitting...' : 'Accept the Challenge'}
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

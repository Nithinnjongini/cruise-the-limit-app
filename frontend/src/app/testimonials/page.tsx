'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Star, MessageSquare, Send, Quote } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

interface Testimonial {
  id: string;
  content: string;
  rating: number;
  user: { id: string; displayName: string; avatarUrl?: string };
  createdAt: string;
}

export default function TestimonialsPage() {
  const { user, token } = useAuth();
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [content, setContent] = useState('');
  const [rating, setRating] = useState(5);

  useEffect(() => {
    api.testimonials.getPublic()
      .then((data: any) => setTestimonials(data))
      .catch(() => toast.error('Failed to load testimonials'))
      .finally(() => setLoading(false));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !token) {
      toast.error('Please login to submit a testimonial');
      return;
    }
    setSubmitting(true);
    try {
      await api.testimonials.create(token, { content, rating, isPublic: true });
      toast.success('Testimonial submitted! It will appear once approved.');
      setContent('');
      setRating(5);
    } catch (err: any) {
      toast.error(err.message || 'Failed to submit');
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <section className="relative bg-gradient-to-br from-primary-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-tight">
            Community <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-yellow-400">Testimonials</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
            Hear from our community of eco-friendly drivers making a difference every single day.
          </p>
        </FadeIn>
      </section>

      <section className="py-16 md:py-24 bg-slate-50 relative z-10 -mt-8 rounded-t-3xl shadow-sm sm:-mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600"></div>
            </div>
          ) : testimonials.length === 0 ? (
            <FadeIn className="text-center py-20 max-w-lg mx-auto bg-white rounded-3xl shadow-sm border border-slate-100">
              <MessageSquare size={56} className="mx-auto text-slate-300 mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No Stories Yet</h3>
              <p className="text-gray-500">Be the first to share your eco-driving experience with our community!</p>
            </FadeIn>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {testimonials.map((t, i) => (
                <FadeIn key={t.id} delay={i * 0.1} direction="up" className="h-full">
                  <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 h-full flex flex-col group relative overflow-hidden">
                    <Quote size={80} className="absolute -top-4 -left-4 text-slate-50 opacity-50 transform -rotate-12 group-hover:scale-110 transition-transform duration-500" />

                    <div className="flex gap-1 mb-6 relative z-10">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} size={18} className={s <= t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-slate-200'} />
                      ))}
                    </div>

                    <p className="text-slate-700 leading-relaxed text-lg flex-grow relative z-10 italic">
                      &ldquo;{t.content}&rdquo;
                    </p>

                    <div className="mt-8 flex items-center gap-4 pt-6 border-t border-slate-100 relative z-10">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-accent-500 text-white shadow-md rounded-full flex items-center justify-center text-lg font-bold">
                        {t.user.displayName?.charAt(0) || '?'}
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{t.user.displayName}</p>
                        <p className="text-sm font-medium text-slate-400">{new Date(t.createdAt).toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })}</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Testimonial */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="bg-gradient-to-b from-slate-50 to-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-2 text-center">Share Your Story</h2>
              <p className="text-center text-slate-500 mb-8">We love hearing how eco-driving has impacted your commute.</p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-3 text-center">How would you rate your experience?</label>
                  <div className="flex justify-center gap-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <button key={s} type="button" onClick={() => setRating(s)} className="focus:outline-none transform hover:scale-110 transition-transform">
                        <Star size={36} className={s <= rating ? 'text-yellow-400 fill-yellow-400 drop-shadow-sm' : 'text-slate-200 hover:text-yellow-200'} />
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">Your Experience</label>
                  <textarea required rows={5} className="w-full px-5 py-4 rounded-2xl border border-slate-200 focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all outline-none resize-none text-slate-700" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Tell us how joining Cruise The Limit changed your daily commute..." />
                </div>
                <button type="submit" disabled={submitting || !user} className="w-full flex items-center justify-center bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-700 hover:to-indigo-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-indigo-500/30 transform hover:-translate-y-0.5 transition-all outline-none disabled:opacity-70 disabled:cursor-not-allowed">
                  <Send size={20} className="mr-2" />
                  {submitting ? 'Submitting...' : user ? 'Publish Testimonial' : 'Login to Share Story'}
                </button>
              </form>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

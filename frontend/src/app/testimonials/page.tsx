'use client';

import { useEffect, useState } from 'react';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Star, MessageSquare, Send } from 'lucide-react';

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
      <section className="bg-gradient-to-br from-primary-700 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold">Testimonials</h1>
          <p className="mt-4 text-lg text-primary-100 max-w-2xl mx-auto">
            Hear from our community of eco-friendly drivers making a difference every day.
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-12 text-gray-500">Loading testimonials...</div>
          ) : testimonials.length === 0 ? (
            <div className="text-center py-12">
              <MessageSquare size={48} className="mx-auto text-gray-300 mb-4" />
              <p className="text-gray-500">No testimonials yet. Be the first to share your experience!</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((t) => (
                <div key={t.id} className="card p-6">
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={16} className={s <= t.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                  <p className="text-gray-700 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
                  <div className="mt-4 flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-sm font-semibold">
                      {t.user.displayName?.charAt(0) || '?'}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">{t.user.displayName}</p>
                      <p className="text-xs text-gray-400">{new Date(t.createdAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Submit Testimonial */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="card p-8">
            <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Share Your Experience</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <button key={s} type="button" onClick={() => setRating(s)} className="focus:outline-none">
                      <Star size={28} className={s <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300 hover:text-yellow-300'} />
                    </button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Your Testimonial</label>
                <textarea required rows={4} className="input-field resize-none" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Tell us about your experience with Cruise The Limit..." />
              </div>
              <button type="submit" disabled={submitting || !user} className="btn-primary w-full">
                <Send size={16} className="mr-2" />
                {submitting ? 'Submitting...' : user ? 'Submit Testimonial' : 'Login to Submit'}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

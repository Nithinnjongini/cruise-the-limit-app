import Link from 'next/link';
import { Shield, Leaf, DollarSign, Heart, ChevronRight, Car, Award } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900 via-primary-800 to-primary-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-accent-500/20 to-transparent blur-3xl opacity-50 pointer-events-none" />

        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-tight tracking-tight drop-shadow-md">
              Drive Smarter.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-accent-400"> Live Greener.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto font-light leading-relaxed">
              Join the Cruise The Limit movement and take the eco-friendly driving challenge.
              Earn your sticker set, and show the world you drive with purpose.
            </p>
            <p className="mt-4 text-base sm:text-lg text-accent-200/80 italic font-light">
              &ldquo;Cruising is a choice. Peace is the result.&rdquo;
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/challenge" className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-accent-400 hover:from-accent-400 hover:to-accent-300 text-gray-900 text-lg font-bold px-10 py-5 rounded-full shadow-xl shadow-accent-900/50 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center group">
                Take the Challenge
                <ChevronRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/membership" className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg px-10 py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                Get Your Sticker Set
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Four Pillars Overview */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100 relative z-10 -mt-8 shadow-sm rounded-t-3xl sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 tracking-tight">The Cruiser Commitment</h2>
          <p className="mt-2 text-gray-600">Our four pillars for a better drive</p>
        </FadeIn>
        <FadeIn delay={0.2} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: Shield, label: 'Safety', desc: 'Set a reasonable pace. We can do this!', gradient: 'from-blue-500 to-indigo-600' },
              { icon: Leaf, label: 'Sustainability', desc: 'Reduce your carbon footprint by 15% overnight.', gradient: 'from-primary-500 to-primary-700' },
              { icon: DollarSign, label: 'Savings', desc: 'Spend less on gas, maintenance & tickets.', gradient: 'from-accent-500 to-accent-600' },
              { icon: Heart, label: 'Sanity', desc: 'Turn your car back into a sanctuary.', gradient: 'from-rose-400 to-pink-500' },
            ].map((pillar, i) => (
              <FadeIn key={pillar.label} delay={0.3 + (i * 0.1)} direction="up">
                <div className="text-center group cursor-pointer">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${pillar.gradient} text-white shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <pillar.icon size={28} strokeWidth={1.8} />
                  </div>
                  <p className="text-lg font-display font-extrabold text-gray-900">{pillar.label}</p>
                  <p className="mt-1 text-sm text-gray-500">{pillar.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* Savings at a Glance */}
      <section className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Savings at a Glance</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
              Compared to a &ldquo;Cruiser,&rdquo; here are average stats on a &ldquo;Speeder&rdquo; (+10 mph) and a &ldquo;Racer&rdquo; (+20 mph).
              Based on 10,260 miles per year at $3.58/gal.
            </p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="overflow-x-auto rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100">
              <table className="w-full text-left bg-white">
                <thead>
                  <tr className="bg-gradient-to-r from-primary-700 to-primary-800 text-white">
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider rounded-tl-3xl">Driving Style</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">Avg. Speed</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">Efficiency</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">Gallons/Year</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">$/Year</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider">$/Month</th>
                    <th className="px-6 py-5 text-sm font-bold uppercase tracking-wider rounded-tr-3xl">$/Week</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="bg-red-50/50 hover:bg-red-50 transition-colors">
                    <td className="px-6 py-5 font-bold text-red-700">&ldquo;Racer&rdquo;</td>
                    <td className="px-6 py-5 text-gray-700">80 mph</td>
                    <td className="px-6 py-5 text-gray-700">18.5 mpg</td>
                    <td className="px-6 py-5 text-gray-700">555</td>
                    <td className="px-6 py-5 font-semibold text-red-600">$1,986.90</td>
                    <td className="px-6 py-5 text-gray-700">$165.58</td>
                    <td className="px-6 py-5 text-gray-700">$38.25</td>
                  </tr>
                  <tr className="bg-amber-50/50 hover:bg-amber-50 transition-colors">
                    <td className="px-6 py-5 font-bold text-amber-700">&ldquo;Speeder&rdquo;</td>
                    <td className="px-6 py-5 text-gray-700">70 mph</td>
                    <td className="px-6 py-5 text-gray-700">22.3 mpg</td>
                    <td className="px-6 py-5 text-gray-700">460</td>
                    <td className="px-6 py-5 font-semibold text-amber-600">$1,646.80</td>
                    <td className="px-6 py-5 text-gray-700">$137.23</td>
                    <td className="px-6 py-5 text-gray-700">$31.67</td>
                  </tr>
                  <tr className="bg-primary-50/50 hover:bg-primary-50 transition-colors">
                    <td className="px-6 py-5 font-bold text-primary-700">&ldquo;Cruiser&rdquo; ✓</td>
                    <td className="px-6 py-5 text-gray-700">60 mph</td>
                    <td className="px-6 py-5 text-gray-700">27.2 mpg</td>
                    <td className="px-6 py-5 text-gray-700">377</td>
                    <td className="px-6 py-5 font-semibold text-primary-700">$1,349.66</td>
                    <td className="px-6 py-5 text-gray-700">$114.47</td>
                    <td className="px-6 py-5 text-gray-700">$25.98</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Hidden savings callout */}
            <div className="mt-10 grid sm:grid-cols-3 gap-6">
              {[
                { title: 'Tire & Brake Savings', desc: 'Cruising extends tire life by 10-15% and reduces brake wear. Save ~$80-$100/year in deferred maintenance.', color: 'border-blue-200 bg-blue-50' },
                { title: 'No More Tickets', desc: 'Speeding tickets dissolve into thin air. No surcharge on insurance premiums. Save $250-$400/year.', color: 'border-accent-200 bg-accent-50' },
                { title: 'Total Cruiser Dividend', desc: 'Add it all up: a consistent Cruiser in 2026 gives themselves a $600-$800 annual "bonus" just by adjusting their set speed.', color: 'border-primary-200 bg-primary-50' },
              ].map((card) => (
                <div key={card.title} className={`p-6 rounded-2xl border ${card.color}`}>
                  <h4 className="font-bold text-gray-900 mb-2">{card.title}</h4>
                  <p className="text-sm text-gray-600 leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Time-Saving Illusion */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight">The &ldquo;Time-Saving&rdquo; Illusion</h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="bg-gradient-to-br from-slate-50 to-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                On an unhindered 15-mile commute:
              </p>
              <div className="grid sm:grid-cols-2 gap-6 mb-8">
                <div className="bg-primary-50 p-5 rounded-2xl border border-primary-100 text-center">
                  <p className="text-3xl font-display font-bold text-primary-800">15 min</p>
                  <p className="text-sm text-primary-600 mt-1 font-medium">At 60 mph (Cruiser)</p>
                </div>
                <div className="bg-red-50 p-5 rounded-2xl border border-red-100 text-center">
                  <p className="text-3xl font-display font-bold text-red-700">11 min 15 sec</p>
                  <p className="text-sm text-red-500 mt-1 font-medium">At 80 mph (Racer)</p>
                </div>
              </div>
              <p className="text-gray-600 leading-relaxed">
                <strong className="text-gray-900">Time &ldquo;saved&rdquo;: 3 minutes and 45 seconds</strong> &mdash; with an additional fuel cost of about $0.30 and 1.5 pounds more of CO₂ output. Factoring in red lights, highway on-ramps, and the inevitable &ldquo;brake-and-crawl&rdquo; of your normal commute, that 3 minutes and 45 seconds often shrinks to <strong>ZERO</strong>.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Three simple steps to join the movement.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Car, title: '1. Take the Challenge', desc: 'Commit to cruising the speed limit in a safe and responsible manner for 30 days. Notice the impact on the road, the environment, your pocket book, and your peace of mind.', color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-200' },
              { icon: Award, title: '2. Share Your Feedback', desc: 'Honestly share on our site what you think and how this went for you. Your story inspires others to join the movement.', color: 'from-accent-400 to-accent-500', shadow: 'shadow-accent-200' },
              { icon: Shield, title: '3. Get Your Sticker Set', desc: 'Show your commitment to everyone\'s safety, the environment and your personal savings with your official sticker set.', color: 'from-primary-500 to-primary-700', shadow: 'shadow-primary-200' },
            ].map((step, i) => (
              <FadeIn key={step.title} delay={0.2 + (i * 0.2)} direction="up" className="h-full">
                <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500 h-full flex flex-col items-center text-center group">
                  <div className={`flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg ${step.shadow} mb-8 group-hover:scale-110 transition-transform duration-500`}>
                    <step.icon size={36} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{step.title}</h3>
                  <p className="mt-4 text-gray-600 leading-relaxed flex-grow">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What Will You Do With Your Peaceful Time? */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">What Will You Do With All This Peaceful Time?</h2>
            <p className="mt-4 text-lg text-gray-600">Your car becomes your quiet place. Here are some ideas:</p>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                'Listen to your favorite music',
                'Enjoy a good book on tape',
                'Catch up on a good podcast',
                'Have some quiet alone time to think',
                'Think about how to spend the money you\'re saving',
                'Contemplate how much faster you\'re moving than your great-grandparents ever did',
                'Contemplate that list of things you\'re thankful for',
                'What else will you get to do with this time?',
              ].map((item, i) => (
                <FadeIn key={i} delay={0.1 * i} direction="up">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-gradient-to-br from-primary-50 to-accent-50/50 border border-primary-100/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
                    <span className="text-accent-500 font-bold text-lg mt-0.5">✦</span>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cruising Wisdom */}
      <section className="py-16 bg-gradient-to-br from-primary-50 to-accent-50/30 border-y border-primary-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center">
            <h3 className="text-xl md:text-2xl font-display font-bold text-primary-800 mb-8">Cruising Wisdom</h3>
            <div className="space-y-6">
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed">
                &ldquo;The 4-Minute Peace&rdquo; &mdash; Is saving 4 minutes worth the 40 minutes of stress it took to chase them down?
              </blockquote>
              <p className="text-gray-600 text-base leading-relaxed">
                Your steady pace gives other drivers &ldquo;permission&rdquo; to slow down (to the speed limit!) and relax.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10 mix-blend-overlay" />
        <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">Ready to Make a Difference?</h2>
          <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto font-light">
            Join thousands of drivers who are choosing a greener, safer way to drive.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/register" className="w-full sm:w-auto bg-accent-400 text-gray-900 font-bold px-10 py-5 rounded-full hover:bg-accent-300 hover:scale-105 transition-all shadow-xl shadow-black/10">
              Create Account
            </Link>
            <Link href="/challenge" className="w-full sm:w-auto border-2 border-white/30 text-white font-bold px-10 py-5 rounded-full hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  );
}

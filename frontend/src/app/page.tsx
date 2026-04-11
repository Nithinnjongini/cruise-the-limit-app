import Link from 'next/link';
import { Leaf, Shield, Users, Award, ChevronRight, Car } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900 via-primary-800 to-indigo-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-gradient-to-b from-blue-500/20 to-transparent blur-3xl opacity-50 pointer-events-none" />

        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 lg:py-48">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-display font-extrabold leading-tight tracking-tight drop-shadow-md">
              Drive Smarter.<br className="hidden sm:block" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-300 to-green-400"> Live Greener.</span>
            </h1>
            <p className="mt-8 text-lg sm:text-xl md:text-2xl text-primary-100 max-w-3xl mx-auto font-light leading-relaxed">
              Join the Cruise The Limit movement and take the eco-friendly driving challenge.
              Earn your sticker kit, and show the world you drive with purpose.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-5">
              <Link href="/challenge" className="w-full sm:w-auto bg-gradient-to-r from-accent-500 to-green-500 hover:from-accent-400 hover:to-green-400 text-white text-lg font-bold px-10 py-5 rounded-full shadow-xl shadow-green-900/50 hover:-translate-y-1 transition-all duration-300 flex justify-center items-center group">
                Take the Challenge
                <ChevronRight size={22} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link href="/membership" className="w-full sm:w-auto inline-flex items-center justify-center border-2 border-white/20 bg-white/5 backdrop-blur-sm text-white font-semibold text-lg px-10 py-5 rounded-full hover:bg-white/10 hover:border-white/40 transition-all duration-300">
                Get Your Sticker Kit
              </Link>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 md:py-16 border-b border-gray-100 relative z-10 -mt-8 shadow-sm rounded-t-3xl sm:-mt-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn delay={0.2} direction="up">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center">
            {[
              { label: 'Challenges Taken', value: '10,000+' },
              { label: 'Active Members', value: '5,000+' },
              { label: 'Sticker Kits Sold', value: '8,000+' },
              { label: 'Miles Driven Eco', value: '1M+' },
            ].map((stat, i) => (
              <FadeIn key={stat.label} delay={0.3 + (i * 0.1)} direction="up">
                <p className="text-4xl md:text-5xl font-display font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-primary-600 to-blue-800">{stat.value}</p>
                <p className="mt-2 text-sm sm:text-base font-medium text-gray-500 uppercase tracking-wider">{stat.label}</p>
              </FadeIn>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* How It Works */}
      <section className="py-20 md:py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">How It Works</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">Three simple steps to become part of the movement and make a verifiable impact.</p>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Car, title: '1. Take the Challenge', desc: 'Sign up and commit to eco-friendly driving habits. Track your journey and make every mile count.', color: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-200' },
              { icon: Award, title: '2. Become a Member', desc: 'Complete the challenge and join our growing community of conscious drivers who care about the planet.', color: 'from-accent-400 to-green-500', shadow: 'shadow-green-200' },
              { icon: Shield, title: '3. Get Your Sticker Kit', desc: 'Purchase your official sticker kit and proudly display your commitment on your vehicle.', color: 'from-purple-500 to-pink-600', shadow: 'shadow-purple-200' },
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

      {/* Core Values Preview */}
      <section className="py-20 md:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 rounded-full bg-accent-50 opacity-50 blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <FadeIn className="text-center mb-16 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 tracking-tight">Our Core Values</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">The principles that drive our mission forward</p>
          </FadeIn>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Eco-Conscious', desc: 'Every drive is an opportunity to reduce our carbon footprint and protect the environment.', bg: 'bg-green-50', text: 'text-green-600' },
              { icon: Users, title: 'Community Driven', desc: 'We believe in the power of a united community working towards sustainable transportation.', bg: 'bg-blue-50', text: 'text-blue-600' },
              { icon: Shield, title: 'Safety First', desc: 'Responsible driving means safer roads for everyone. We champion defensive, mindful driving.', bg: 'bg-purple-50', text: 'text-purple-600' },
            ].map((value, i) => (
              <FadeIn key={value.title} delay={0.1 * i} direction="up">
                <div className="flex flex-col sm:flex-row gap-5 p-6 rounded-2xl hover:bg-slate-50 transition-colors border border-transparent hover:border-slate-100">
                  <div className={`flex-shrink-0 w-14 h-14 ${value.bg} ${value.text} rounded-2xl flex items-center justify-center shadow-sm`}>
                    <value.icon size={28} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{value.title}</h3>
                    <p className="mt-2 text-gray-600 leading-relaxed">{value.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.4} className="text-center mt-12">
            <Link href="/core-values" className="inline-flex items-center gap-2 text-primary-600 font-bold hover:text-primary-800 transition-colors text-lg group">
              Learn more about our values
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-accent-600" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10 mix-blend-overlay" />
        <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <h2 className="text-4xl md:text-6xl font-display font-extrabold text-white tracking-tight">Ready to Make a Difference?</h2>
          <p className="mt-6 text-xl text-primary-100 max-w-2xl mx-auto font-light">
            Join thousands of drivers who are choosing a greener, safer way to drive.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">
            <Link href="/register" className="w-full sm:w-auto bg-white text-primary-800 font-bold px-10 py-5 rounded-full hover:bg-slate-50 hover:scale-105 transition-all shadow-xl shadow-black/10">
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

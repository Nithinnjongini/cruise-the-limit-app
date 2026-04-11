import Link from 'next/link';
import { Leaf, Shield, Users, Award, ChevronRight, Car } from 'lucide-react';

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-700 via-primary-600 to-accent-600 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-display font-extrabold leading-tight">
              Drive Smarter.<br />
              <span className="text-accent-200">Live Greener.</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-primary-100 max-w-2xl">
              Join the Cruise The Limit movement and take the eco-friendly driving challenge.
              Become a member, earn your sticker kit, and show the world you drive with purpose.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link href="/challenge" className="btn-accent text-lg !px-8 !py-4">
                Take the Challenge <ChevronRight size={20} className="ml-1" />
              </Link>
              <Link href="/membership" className="inline-flex items-center justify-center border-2 border-white/40 text-white font-semibold text-lg px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
                Get Your Sticker Kit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Challenges Taken', value: '10,000+' },
              { label: 'Active Members', value: '5,000+' },
              { label: 'Sticker Kits Sold', value: '8,000+' },
              { label: 'Miles Driven Eco', value: '1M+' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-display font-bold text-primary-700">{stat.value}</p>
                <p className="mt-1 text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">How It Works</h2>
            <p className="mt-3 section-subheading">Three simple steps to become part of the movement</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Car, title: '1. Take the Challenge', desc: 'Sign up and commit to eco-friendly driving habits. Track your journey and make every mile count.' },
              { icon: Award, title: '2. Become a Member', desc: 'Complete the challenge and join our growing community of conscious drivers who care about the planet.' },
              { icon: Shield, title: '3. Get Your Sticker Kit', desc: 'Purchase your official sticker kit and proudly display your commitment on your vehicle.' },
            ].map((step) => (
              <div key={step.title} className="card p-8 text-center hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary-100 text-primary-700 rounded-xl mb-5">
                  <step.icon size={28} />
                </div>
                <h3 className="text-xl font-display font-semibold text-gray-900">{step.title}</h3>
                <p className="mt-3 text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Core Values</h2>
            <p className="mt-3 section-subheading">The principles that drive our mission forward</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Leaf, title: 'Eco-Conscious', desc: 'Every drive is an opportunity to reduce our carbon footprint and protect the environment.' },
              { icon: Users, title: 'Community Driven', desc: 'We believe in the power of a united community working towards sustainable transportation.' },
              { icon: Shield, title: 'Safety First', desc: 'Responsible driving means safer roads for everyone. We champion defensive, mindful driving.' },
            ].map((value) => (
              <div key={value.title} className="flex gap-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
                <div className="flex-shrink-0 w-12 h-12 bg-accent-100 text-accent-700 rounded-lg flex items-center justify-center">
                  <value.icon size={24} />
                </div>
                <div>
                  <h3 className="font-display font-semibold text-gray-900">{value.title}</h3>
                  <p className="mt-1 text-sm text-gray-600">{value.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/core-values" className="text-primary-700 font-semibold hover:text-primary-800 inline-flex items-center gap-1">
              Learn more about our values <ChevronRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-accent-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Ready to Make a Difference?</h2>
          <p className="mt-4 text-lg text-primary-100">
            Join thousands of drivers who are choosing a greener, safer way to drive.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/register" className="bg-white text-primary-700 font-semibold px-8 py-4 rounded-lg hover:bg-primary-50 transition-colors">
              Create Account
            </Link>
            <Link href="/challenge" className="border-2 border-white/30 text-white font-semibold px-8 py-4 rounded-lg hover:bg-white/10 transition-colors">
              Learn More
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

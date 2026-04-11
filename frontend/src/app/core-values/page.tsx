import { Leaf, Shield, Users, Heart, Target, Zap } from 'lucide-react';

const values = [
  { icon: Leaf, title: 'Environmental Stewardship', desc: 'The road beneath us connects communities — but it also leaves a mark on the planet. We believe that every mile driven is an opportunity to choose sustainability over convenience. From maintaining optimal tire pressure and reducing idle time to embracing hybrid and electric alternatives, our members commit to tangible actions that lower CO₂ output. Together, we have prevented thousands of tons of emissions and proven that responsible driving is not a sacrifice — it is a statement of values.', iconBg: 'bg-green-500', accent: 'from-green-400 to-emerald-500', ring: 'ring-green-200' },
  { icon: Shield, title: 'Safety Above All', desc: 'A single moment of distraction can alter lives forever. Safety is not just a guideline for us — it is a non-negotiable covenant with every person who shares the road. We advocate for maintaining proper following distances, eliminating phone usage behind the wheel, respecting speed limits in residential zones, and always yielding to pedestrians and cyclists. Our community holds itself to the highest standard because we understand that arriving safely is always more important than arriving quickly.', iconBg: 'bg-blue-500', accent: 'from-blue-400 to-indigo-500', ring: 'ring-blue-200' },
  { icon: Users, title: 'Community & Connection', desc: 'Real change does not happen in isolation — it grows through shared purpose. Cruise The Limit is more than a platform; it is a movement of tens of thousands of drivers who encourage, challenge, and celebrate one another. Members share fuel-saving strategies, organize local clean-driving meetups, and mentor new participants. Whether you are a daily commuter or a long-haul road tripper, you belong here. Our strength lies in the collective commitment of ordinary people choosing to drive extraordinarily.', iconBg: 'bg-purple-500', accent: 'from-purple-400 to-violet-500', ring: 'ring-purple-200' },
  { icon: Heart, title: 'Compassion on the Road', desc: 'Traffic can bring out the worst in people — but it does not have to. We champion a culture of patience, courtesy, and genuine empathy for fellow drivers. That means letting someone merge without frustration, giving a friendly wave instead of a horn blast, and understanding that the person driving slowly might be navigating an unfamiliar route or dealing with a difficult day. Compassion behind the wheel creates a ripple effect: one act of kindness inspires another, transforming congested roads into spaces of mutual respect.', iconBg: 'bg-rose-500', accent: 'from-rose-400 to-pink-500', ring: 'ring-rose-200' },
  { icon: Target, title: 'Continuous Improvement', desc: 'Becoming a better driver is not a one-time achievement — it is a lifelong practice. We encourage our members to set personal benchmarks, whether that means reducing fuel consumption by 10%, completing an advanced defensive driving course, or simply committing to one distraction-free trip per day. Our challenge system tracks real progress with measurable milestones, and our community celebrates every step forward. The goal is not perfection; it is the relentless pursuit of doing better today than yesterday.', iconBg: 'bg-amber-500', accent: 'from-amber-400 to-orange-500', ring: 'ring-amber-200' },
  { icon: Zap, title: 'Innovation & Education', desc: 'The future of transportation is evolving at an unprecedented pace, and informed drivers lead the charge. We curate research-backed content on topics ranging from regenerative braking techniques and optimal route planning to the latest breakthroughs in EV battery technology and autonomous safety systems. Through webinars, community workshops, and our resource library, we equip every member with the knowledge to make smarter decisions — not just for themselves, but for the generations of drivers who will follow.', iconBg: 'bg-cyan-500', accent: 'from-cyan-400 to-teal-500', ring: 'ring-cyan-200' },
];

export default function CoreValuesPage() {
  return (
    <>
      {/* Hero with animated gradient + decorative shapes */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-600 to-accent-600 text-white py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/10 rounded-full translate-x-1/3 -translate-y-1/2" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary-400/10 rounded-full translate-y-1/2" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/10">
            What We Stand For
          </span>
          <h1 className="text-4xl md:text-6xl font-display font-extrabold tracking-tight">Our Core Values</h1>
          <p className="mt-5 text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
            The guiding principles that shape our mission and unite our community of responsible drivers.
          </p>
        </div>
      </section>

      {/* Values Grid */}
      <section className="relative py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-primary-50 to-transparent rounded-full -translate-y-1/2 translate-x-1/4 opacity-60" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-accent-50 to-transparent rounded-full translate-y-1/2 -translate-x-1/4 opacity-60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group relative bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Gradient accent bar at top */}
                <div className={`absolute top-0 left-8 right-8 h-1 bg-gradient-to-r ${value.accent} rounded-b-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                {/* Icon */}
                <div className={`relative inline-flex items-center justify-center w-16 h-16 ${value.iconBg} text-white rounded-2xl mb-6 shadow-lg ring-4 ${value.ring} ring-opacity-30 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon size={30} strokeWidth={1.8} />
                </div>

                {/* Number badge */}
                <span className="absolute top-6 right-6 text-5xl font-display font-extrabold text-gray-100 group-hover:text-gray-200 transition-colors select-none">
                  0{index + 1}
                </span>

                <h3 className="text-xl font-display font-bold text-gray-900 group-hover:text-primary-700 transition-colors">
                  {value.title}
                </h3>
                <p className="mt-3 text-gray-500 leading-relaxed text-[15px]">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-700 via-primary-800 to-primary-900" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-accent-500/10 rounded-full -translate-x-1/2 -translate-y-1/2" />
          <div className="absolute top-0 right-0 w-80 h-80 bg-primary-500/10 rounded-full translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium text-white/90 mb-6 border border-white/10">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white">Our Mission</h2>
          <p className="mt-8 text-lg text-white/75 leading-relaxed">
            Cruise The Limit exists to transform the way people think about driving. We believe that small,
            intentional changes in driving behavior can lead to massive positive impacts on the environment,
            road safety, and community wellbeing. By gamifying eco-friendly driving through challenges,
            memberships, and visual reminders like our sticker kits, we make it easy and rewarding to
            drive responsibly every single day.
          </p>
          <div className="mt-10 flex items-center justify-center gap-6">
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">10K+</p>
              <p className="text-sm text-white/60 mt-1">Challenges Taken</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">5K+</p>
              <p className="text-sm text-white/60 mt-1">Active Members</p>
            </div>
            <div className="w-px h-12 bg-white/20" />
            <div className="text-center">
              <p className="text-3xl font-display font-bold text-white">1M+</p>
              <p className="text-sm text-white/60 mt-1">Eco Miles Driven</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

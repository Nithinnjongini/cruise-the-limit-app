import Image from 'next/image';
import { Shield, Leaf, DollarSign, Heart, AlertTriangle, BookOpen } from 'lucide-react';
import { FadeIn } from '@/components/fade-in';

export default function CoreValuesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-72 h-72 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-2xl" />
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent-500/20 rounded-full translate-x-1/3 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-primary-400/20 rounded-full translate-y-1/2 blur-2xl" />
        </div>
        <FadeIn className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold text-white/90 mb-6 border border-white/20 uppercase tracking-widest shadow-xl">
            What Drives Us
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold tracking-tight drop-shadow-sm">Our Core Values</h1>
          <p className="mt-6 text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
            The guiding principles that shape our mission and unite our community of responsible drivers.
          </p>
        </FadeIn>
      </section>

      {/* The Cruiser Commitment */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">The Cruiser Commitment</h2>
            <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our movement stands on four pillars — each one a reason to choose the speed limit every time you drive.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* ─── SAFETY ─── */}
      <section id="safety" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
                <Image src="/images/pillars/safety.png" alt="Safety" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 uppercase tracking-wide">Safety</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-10">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                The data is out: We&rsquo;re addicted to speed, and it is dangerous.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                Stricter laws and increased enforcement are battling to help us drive more safely. In order to make a difference it is up to each of us to choose to set a reasonable pace on our roads. We can do this!
              </p>
              <div className="bg-blue-50 rounded-2xl p-6 border border-blue-100 mb-8">
                <p className="text-gray-700 leading-relaxed italic">
                  In a 2011 survey, most drivers (91%) agreed that everyone should obey the speed limits because it&rsquo;s the law, and 87% agree that it is unacceptable to exceed speed limits by more than 20 mph. Yet, 27% of respondents agreed that speeding is something they do without thinking, and 42% agreed that driving at or near the speed limit makes it difficult to keep up with traffic.
                </p>
                <p className="mt-3 text-sm text-blue-600 font-medium">
                  &mdash; 2011 National Survey of Speeding Attitudes and Behaviors, by Schroeder, Kostyniuk and Mack. US Department of Transportation.
                </p>
              </div>

              {/* Data Points */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">Key Research Findings</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <p className="text-sm font-bold text-blue-700 mb-2">IIHS &ndash; Insurance Institute for Highway Safety</p>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex gap-2 items-start"><span className="text-blue-500 mt-1">•</span><span><strong>The Kinetic Energy Rule:</strong> Increasing your speed from 40 to 60 mph increases the energy of a crash by 125%</span></li>
                    <li className="flex gap-2 items-start"><span className="text-blue-500 mt-1">•</span><span><strong>The &ldquo;5 mph&rdquo; study:</strong> A 5 mph increase in the maximum state speed limit was associated with an 8% increase in fatality rates on interstates and freeways.</span></li>
                  </ul>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200">
                  <p className="text-sm font-bold text-blue-700 mb-2">AAA &ndash; American Automobile Association</p>
                  <p className="text-sm text-gray-700">2024 studies show that while drivers think that speeding saves time, the actual time saved is negligible (often less than 2 minutes), while the risk of a fatal crash increases exponentially.</p>
                </div>
                <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 md:col-span-2">
                  <p className="text-sm font-bold text-blue-700 mb-2">NACTO &ndash; National Association of City Transportation Officials</p>
                  <p className="text-sm text-gray-700">A person hit by a car at 30 mph is <strong>7 times more likely to die</strong> than if they were hit at 20 mph.</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Minnesota Organizations */}
          <FadeIn delay={0.2} direction="up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Additional MN Safety Organizations &amp; Programs</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { name: 'TZD – Minnesota Towards Zero Deaths', desc: 'State safety program, focusing on Education, Enforcement, Engineering & Emergency Medical Services. They promote self-enforcement of speed limits.' },
                  { name: 'Minnesota Safety Council', desc: 'Defensive driving courses.' },
                  { name: 'ACTS – Advisory Council on Traffic Safety', desc: 'Established by the legislature to lead safety initiatives.' },
                  { name: 'AARP Minnesota', desc: 'Driver Safety courses.' },
                  { name: 'mn4a – Minnesota Association of Area Agencies on Aging', desc: 'Support senior-friendly communities and pedestrian safety.' },
                  { name: 'AAA Minneapolis, AAA Minnesota-Iowa', desc: 'Interested in reducing claims through safe driving.' },
                  { name: 'Local Insurance Mutuals', desc: 'Promoting "loss control" and community goodwill.' },
                  { name: 'Countryside Public Health', desc: 'Leading "Safe Communities" coalitions for local traffic safety.' },
                  { name: 'APBP – Association of Pedestrian and Bicycle Professionals', desc: 'Advocating "Complete Streets" with slower vehicle speeds to protect the most vulnerable road users.' },
                  { name: 'Impact Teen Drivers (Minnesota Chapter)', desc: 'Tackling the "reckless and distracted driving" epidemic.' },
                  { name: 'Minnesota Safe Teen Driving Coalition', desc: 'Reducing teen road fatalities.' },
                  { name: 'Teamster Joint Council 32', desc: 'Thousands of professional drivers in Minnesota working toward slower, more predictable traffic to make their "office" (the road) a safer place to work.' },
                  { name: 'Minneapolis Vision Zero Program', desc: 'Eliminating traffic fatalities through community-led safety initiatives.' },
                ].map((org) => (
                  <div key={org.name} className="flex gap-3 p-3 rounded-xl hover:bg-blue-50/50 transition-colors">
                    <span className="text-blue-500 mt-0.5 shrink-0">▸</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{org.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{org.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SUSTAINABILITY ─── */}
      <section id="sustainability" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
                <Image src="/images/pillars/sustainability.png" alt="Sustainability" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 uppercase tracking-wide">Sustainability</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <div className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-3xl p-8 md:p-12 border border-primary-100 mb-10">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                We leave noise and air pollution in our wake. Cruising the speed limit can reduce each driver&rsquo;s personal carbon-footprint from driving by 15% overnight &ndash; no expensive electronic car required.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                The more inefficiently your vehicle is operated, the more contaminants it emits into the environment. We know this, but at some level we decide that it doesn&rsquo;t matter. Our hurried life demands that we go faster than everyone else, even if that means we jeopardize all of our lives, harm the environment needlessly, and allow our hard-earned income to be siphoned off for this apparent advantage we feel that we deserve.
              </p>
              <p className="text-gray-700 leading-relaxed font-semibold">
                We could make a tremendous impact if we simply choose to maximize the efficient use of our vehicles.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <p className="text-sm font-bold text-primary-700 mb-3">DOE &ndash; U.S. Department of Energy &amp; FuelEconomy.gov</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-primary-500">•</span><span>Most vehicles fuel economy peaks between 35 and 50 mph.</span></li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span><span>Above 50 mph, fuel economy drops roughly 1 mpg for every additional 5 mph.</span></li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span><span>Above 50 mph, you pay an effective fuel surcharge of $0.30 to $0.50 per gallon for each 10 mph over the speed limit.</span></li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <p className="text-sm font-bold text-primary-700 mb-3">EPA &ndash; Environmental Protection Agency</p>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex gap-2"><span className="text-primary-500">•</span><span>Vehicles emit the most pollutants per mile during hard acceleration and high-speed driving.</span></li>
                  <li className="flex gap-2"><span className="text-primary-500">•</span><span>NOx emissions nearly double from 60 to 80 mph.</span></li>
                </ul>
              </div>
            </div>
          </FadeIn>

          {/* Environmental Partners */}
          <FadeIn delay={0.3} direction="up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100">
              <h3 className="text-lg font-bold text-gray-900 mb-6">Environmental Partners &amp; Resources</h3>
              <div className="grid md:grid-cols-2 gap-3">
                {[
                  { name: 'MPCA – Minnesota Pollution Control Agency', desc: 'Enforcing state emissions standards; operates air quality monitoring stations.' },
                  { name: 'Sierra Club – North Star Chapter', desc: 'Advocates for Transportation & Climate policies, including reduced vehicle emissions through behavioral changes.' },
                  { name: 'Fresh Energy (MN)', desc: 'Focused on clean transportation policy.' },
                  { name: 'MN Center for Environmental Advocacy', desc: 'Legal and policy work to protect air quality and promote cleaner transportation.' },
                  { name: 'Minnesota Green Step Cities', desc: 'A voluntary challenge/assistance program to help Minnesota cities achieve their sustainability goals.' },
                  { name: 'MN350 & The Coalition for Clean Transportation', desc: 'Focused on systemic changes to reduce carbon.' },
                ].map((org) => (
                  <div key={org.name} className="flex gap-3 p-3 rounded-xl hover:bg-primary-50/50 transition-colors">
                    <span className="text-primary-500 mt-0.5 shrink-0">▸</span>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{org.name}</p>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{org.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary-50 rounded-2xl border border-primary-100">
                <p className="text-sm text-gray-700 italic">
                  <strong>Carbon Footprint:</strong> Driving 80 mph instead of 60 mph adds about 3,500 lbs. of CO₂ to the atmosphere every year &ndash; the equivalent to the carbon sequestered by nearly 2 full-grown trees annually.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SAVINGS ─── */}
      <section id="savings" className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-8">
              <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
                <Image src="/images/pillars/savings.png" alt="Savings" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 uppercase tracking-wide">Savings</h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-slate-200/50 border border-slate-100 mb-10">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                Cruisers spend less money on gas, car maintenance, insurance premiums, and speeding tickets. With gas prices surging, Cruising the Limit is one of the most effective ways to combat inflation.
              </p>

              {/* Fueling Table */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">Fuel Cost Comparison</h3>
              <p className="text-sm text-gray-600 mb-6">Based on average 10,260 miles per year at $4.00/gal.</p>
              <div className="overflow-x-auto rounded-2xl border border-slate-200 mb-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gradient-to-r from-primary-700 to-primary-800 text-white">
                      <th className="px-5 py-4 text-xs font-bold rounded-tl-3xl">Driving Style</th>
                      <th className="px-5 py-4 text-xs font-bold text-center">Speed</th>
                      <th className="px-5 py-4 text-xs font-bold text-center">Efficiency</th>
                      <th className="px-5 py-4 text-xs font-bold text-center">Gal./year</th>
                      <th className="px-5 py-4 text-xs font-bold text-center">$/year</th>
                      <th className="px-5 py-4 text-xs font-bold text-center">$/month</th>
                      <th className="px-5 py-4 text-xs font-bold rounded-tr-3xl text-center">$/week</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-lg">
                    <tr className="bg-primary-50/50 hover:bg-primary-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-primary-700 text-center">Cruiser (Limit)</td>
                      <td className="px-5 py-4 text-gray-700 text-center">60</td>
                      <td className="px-5 py-4 text-gray-700 text-center">27.2 mpg</td>
                      <td className="px-5 py-4 text-gray-700 text-center">377</td>
                      <td className="px-5 py-4 font-semibold text-primary-700 text-center">$1,508</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$125.67</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$29.56</td>
                    </tr>
                    <tr className="bg-amber-50/50 hover:bg-amber-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-amber-700 text-center">Speeder + 10</td>
                      <td className="px-5 py-4 text-gray-700 text-center">70</td>
                      <td className="px-5 py-4 text-gray-700 text-center">22.3 mpg</td>
                      <td className="px-5 py-4 text-gray-700 text-center">460</td>
                      <td className="px-5 py-4 font-semibold text-amber-600 text-center">$1,840</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$153.33</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$36.08</td>
                    </tr>
                    <tr className="bg-red-50/50 hover:bg-red-50 transition-colors">
                      <td className="px-5 py-4 font-bold text-red-700 text-center">Racer + 20</td>
                      <td className="px-5 py-4 text-gray-700 text-center">80</td>
                      <td className="px-5 py-4 text-gray-700 text-center">18.5 mpg</td>
                      <td className="px-5 py-4 text-gray-700 text-center">555</td>
                      <td className="px-5 py-4 font-semibold text-red-600 text-center">$2,200</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$183.33</td>
                      <td className="px-5 py-4 text-gray-700 text-center">$43.14</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="grid sm:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-blue-50 border border-blue-100">
                  <h4 className="font-bold text-gray-900 mb-2">Tire &amp; Brake Savings</h4>
                  <p className="text-sm text-gray-600">Cruising extends tire life by 10-15% and reduces brake wear. Save ~$80-$100/year in deferred maintenance.</p>
                </div>
                <div className="p-5 rounded-2xl bg-accent-50 border border-accent-100">
                  <h4 className="font-bold text-gray-900 mb-2">No More Tickets</h4>
                  <p className="text-sm text-gray-600">Speeding tickets dissolve into thin air. No surcharge on insurance premiums. Save $250-$400/year.</p>
                </div>
                <div className="p-5 rounded-2xl bg-primary-50 border border-primary-100">
                  <h4 className="font-bold text-gray-900 mb-2">Total Cruiser Dividend</h4>
                  <p className="text-sm text-gray-600">A consistent Cruiser in 2026 gives themselves a $600-$800 annual &ldquo;bonus&rdquo; just by adjusting their set speed.</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ─── SANITY ─── */}
      <section id="sanity" className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex items-center gap-4 mb-2">
              <div className="relative w-16 h-16 md:w-20 md:h-20 drop-shadow-md">
                <Image src="/images/pillars/serenity.png" alt="Serenity" fill className="object-contain" />
              </div>
              <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 uppercase tracking-wide">Serenity</h2>
            </div>
            <p className="text-lg text-gray-500 ml-[82px] mb-8">(Peace of Mind) : )</p>
          </FadeIn>

          <FadeIn delay={0.1} direction="up">
            <div className="bg-gradient-to-br from-rose-50 to-pink-50/30 rounded-3xl p-8 md:p-12 border border-rose-100 mb-10">
              <p className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                We spend enough of our lives rushing. &ldquo;Cruise The Limit&rdquo; turns your car back into a sanctuary (your quiet place) instead of a stress-box. You&rsquo;ll find that when you stop fighting traffic, the traffic stops fighting you.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="up">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <h4 className="font-bold text-gray-900 mb-3">Cortisol &amp; the &ldquo;Vigilance Tax&rdquo;</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Sustained high-speed driving triggers a chronic stress response. At 80 mph, your brain operates in a state of heightened surveillance &mdash; checking mirrors more frequently, anticipating gaps, evaluating threats at a much higher processing rate. This results in elevated cortisol levels, not just during the drive but lingering well after you arrive. Over months and years, this contributes to fatigue, irritability, high blood pressure, and impaired decision-making &mdash; a hidden price for arriving 3 minutes earlier.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <h4 className="font-bold text-gray-900 mb-3">Road Rage Contagion</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  AAA Foundation for Traffic Safety research found that nearly 80% of drivers expressed significant anger, aggression, or road rage at least once in the past year, with tailgating, honking, and yelling cited as leading behaviors. However, these aggressive episodes don&rsquo;t exist in isolation &mdash; they are contagious. One driver&rsquo;s aggressive lane change can provoke a stress spike in every nearby motorist, triggering a cascade of reactive driving behaviors.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <h4 className="font-bold text-gray-900 mb-3">Time Anxiety</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  The perception that &ldquo;I&rsquo;m losing time by going slower&rdquo; creates a cognitive distortion psychologists call time anxiety. Even though the actual time difference on a typical commute is negligible, the feeling of falling behind is surprisingly strong. We mentally tell ourselves we must speed, creating self-imposed stress. Cruising at the limit interrupts this cycle. The first reaction is discomfort &mdash; but within days, most participants report a profound shift toward calm.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100">
                <h4 className="font-bold text-gray-900 mb-3">Highway Hypnosis vs. Flow State</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Most drivers have experienced &ldquo;highway hypnosis&rdquo; &mdash; zoning out after miles of monotonous driving. Interestingly, Cruisers often report entering a healthier state &mdash; a relaxed focus (a &ldquo;flow state&rdquo;) where they remain fully aware of the road but without the gripping tension that comes from racing through traffic. This state conserves mental energy, reduces driver fatigue, and makes the entire drive more enjoyable.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-md border border-slate-100 md:col-span-2">
                <h4 className="font-bold text-gray-900 mb-3">Lower &ldquo;Cognitive Load&rdquo;</h4>
                <p className="text-sm text-gray-600 leading-relaxed">
                  Pace car drivers have lower heart rates and reduced muscle tension. There&rsquo;s no need to scan for police or seek gaps in traffic to advance.
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cruisers Do NOT */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-500 to-red-600 text-white shadow-lg mb-4">
              <AlertTriangle size={28} strokeWidth={1.8} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">Cruisers Do NOT</h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                'Block the left lane — Cruise in the right or center lane; the left is for passing',
                'Enforce speed limits on other drivers — that is the job of law enforcement',
                'Drive aggressively or brake-check faster drivers',
                'Create dangerous situations by going too slowly where it is unsafe',
                'Act self-righteous — this is a personal choice, not a moral mandate',
                'Ignore road conditions — cruising the limit means adapting to weather, construction, and traffic',
              ].map((rule, i) => (
                <div key={i} className="flex items-start gap-3 p-4 rounded-2xl bg-white border border-red-100 shadow-sm">
                  <span className="text-red-500 font-bold text-lg shrink-0">✕</span>
                  <p className="text-sm text-gray-700 leading-relaxed">{rule}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Cruising Wisdom */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-400 to-accent-500 text-white shadow-lg mb-4">
              <BookOpen size={28} strokeWidth={1.8} />
            </div>
            <h2 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900">Cruising Wisdom</h2>
          </FadeIn>
          <FadeIn delay={0.2} direction="up">
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { quote: 'The 4-Minute Peace', text: 'Is saving 4 minutes worth the 40 minutes of stress it took to chase them down?' },
                { quote: 'The Permission Effect', text: 'Your steady pace gives other drivers "permission" to slow down (to the speed limit!) and relax.' },
                { quote: 'Precious cargo', text: 'Drive as if someone who is deeply loved is riding in the back seat of every car around you — because they are.' },
                { quote: 'Lower "Cognitive Load"', text: "Pace car drivers have lower heart rates and reduced muscle tension. There's no need to scan for police or seek gaps in traffic to advance." },
              ].map((wisdom) => (
                <div key={wisdom.quote} className="bg-gradient-to-br from-primary-50 to-accent-50/30 rounded-2xl p-6 border border-primary-100">
                  <p className="text-sm font-bold text-primary-700 uppercase tracking-wider mb-2">&ldquo;{wisdom.quote}&rdquo;</p>
                  <p className="text-gray-700 leading-relaxed">{wisdom.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="relative py-24 md:py-36 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900" />
        <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-10 mix-blend-overlay" />
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 w-[800px] h-[800px] bg-accent-500/20 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
        </div>
        <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center" direction="up">
          <span className="inline-block px-5 py-2 bg-white/10 backdrop-blur-md rounded-full text-sm font-bold text-accent-200 mb-6 border border-white/20 uppercase tracking-widest">
            Our Purpose
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight drop-shadow-md">Our Mission</h2>
          <p className="mt-8 text-lg md:text-xl text-white/80 leading-relaxed font-light max-w-3xl mx-auto">
            &ldquo;Cruise The Limit&rdquo; is a national drivers&rsquo; movement that recognizes its members and applauds their decision to be a responsible &ldquo;pace car&rdquo; in and among the ever-accelerating raceway that our US roadways have become. We choose to drive at the un-hurried and predictable tempo of the posted speed limit because it instills in us a relaxed sense of peace, which allows us to be the most vigilant as we drive. In addition to our own mindfulness, the additional benefits of community safety, environmental sustainability and multi-layered economic savings make speeding for us a ridiculous option.
          </p>
        </FadeIn>
      </section>
    </>
  );
}

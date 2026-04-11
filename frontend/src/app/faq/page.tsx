import { FadeIn } from '@/components/fade-in';
import { HelpCircle, Car, Shield, Leaf } from 'lucide-react';
import Link from 'next/link';

export default function FAQPage() {
    const faqs = [
        {
            category: "Getting Started",
            icon: Car,
            questions: [
                { q: "What is Cruise The Limit?", a: "Cruise The Limit is an eco-driving movement and gamification platform. We challenge drivers to commit to mindful, safe, and environmentally friendly driving habits to reduce emissions and improve road safety." },
                { q: "How much does it cost?", a: "Taking the challenge and joining the community is completely free! If you wish to proudly display your commitment, you can purchase our official Sticker Kits through the Membership portal." },
            ]
        },
        {
            category: "Eco-Driving",
            icon: Leaf,
            questions: [
                { q: "Does driving the speed limit actually help the environment?", a: "Yes. Driving at optimal speeds (usually between 55-65 mph on highways) significantly reduces aerodynamic drag, which in turn reduces fuel consumption and carbon emissions by up to 15-20% compared to driving at 75 mph." },
                { q: "What other habits make me an eco-driver?", a: "Beyond speed, eco-driving involves avoiding harsh acceleration, coasting to stops, eliminating unnecessary idling, and keeping tires properly inflated. Every small action adds up." },
            ]
        },
        {
            category: "My Membership & Orders",
            icon: Shield,
            questions: [
                { q: "When will my sticker kit arrive?", a: "Sticker kits typically ship within 2-3 business days. Depending on your location, you should receive your package via standard mail within 7-10 days." },
                { q: "I lost my sticker. Can I get a replacement?", a: "Yes! Active members can request a replacement sticker from their profile dashboard for a minimal shipping and handling fee." },
            ]
        }
    ];

    return (
        <>
            <section className="relative bg-gradient-to-br from-primary-800 to-indigo-900 text-white overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0 bg-[url('/hero-pattern.svg')] opacity-5" />
                <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">
                        Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-200">Questions</span>
                    </h1>
                    <p className="mt-6 text-lg sm:text-xl text-primary-100 max-w-2xl mx-auto font-light leading-relaxed">
                        Everything you need to know about the challenge, our community, and the impact we are making together.
                    </p>
                </FadeIn>
            </section>

            <section className="py-16 md:py-24 bg-slate-50">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="space-y-12">
                        {faqs.map((group, index) => (
                            <FadeIn key={group.category} delay={index * 0.1} direction="up" className="bg-white rounded-3xl p-8 sm:p-10 shadow-xl shadow-slate-200/40 border border-slate-100">
                                <div className="flex items-center gap-4 mb-8 pb-6 border-b border-slate-100">
                                    <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600">
                                        <group.icon size={24} />
                                    </div>
                                    <h2 className="text-2xl font-display font-bold text-gray-900">{group.category}</h2>
                                </div>
                                <div className="space-y-8">
                                    {group.questions.map((faq, i) => (
                                        <div key={i} className="group">
                                            <h3 className="text-lg font-bold text-gray-900 flex items-start gap-3">
                                                <HelpCircle className="flex-shrink-0 w-6 h-6 text-accent-500 mt-0.5" />
                                                {faq.q}
                                            </h3>
                                            <p className="mt-3 text-gray-600 leading-relaxed pl-9">{faq.a}</p>
                                        </div>
                                    ))}
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.4} className="mt-16 text-center">
                        <div className="bg-gradient-to-br from-primary-600 to-indigo-600 rounded-3xl p-10 text-white shadow-xl shadow-indigo-200">
                            <h3 className="text-2xl font-display font-bold mb-4">Still have questions?</h3>
                            <p className="text-primary-100 mb-8 max-w-lg mx-auto">
                                If you could not find the answer to your question, our support team is ready to help you out.
                            </p>
                            <Link href="/contact" className="inline-flex items-center justify-center bg-white text-primary-800 font-bold px-8 py-4 rounded-xl hover:bg-slate-50 hover:-translate-y-0.5 transition-all w-full sm:w-auto shadow-lg shadow-black/10">
                                Contact Support
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}

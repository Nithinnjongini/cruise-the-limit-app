import { FadeIn } from '@/components/fade-in';

export default function TermsPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden py-16 md:py-24">
                <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">Terms of Service</h1>
                    <p className="mt-4 text-lg text-slate-300 font-light">Effective Date: October 2023</p>
                </FadeIn>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="prose prose-lg max-w-none text-slate-600">
                            <p className="mb-8 text-lg font-medium text-slate-800">
                                Welcome to Cruise The Limit! By accessing or using our website, services, and challenges, you agree to be bound by these Terms of Service. Please read them carefully.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">1. Acceptance of Terms</h2>
                            <p className="mb-6 leading-relaxed">
                                By registering for an account, purchasing a product, or using the Site, you confirm that you are at least 18 years old (or have parental consent) and legally able to enter into these binding terms.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Community Challenges and Safety Pledge</h2>
                            <p className="mb-6 leading-relaxed">
                                Cruise The Limit is dedicated to promoting mindful, eco-friendly driving. However, <strong>we are an advocacy and gamification platform, not a regulatory authority.</strong>
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>You agree to obey all local traffic laws and regulations.</li>
                                <li>Our challenge to "Cruise The Limit" refers to driving responsibly and safely. It does not replace or supersede any posted speed limits or lawful driving instructions.</li>
                                <li>Cruise The Limit assumes zero liability for your actions on the road, including accidents, tickets, or damages incurred while participating in our challenges.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. Purchases and Payments</h2>
                            <p className="mb-6 leading-relaxed">
                                All merchandise and membership Sticker Kit purchases are final unless specifically stated in our return policy. Payments are securely processed via third-party providers (e.g., Stripe). You agree to provide current, complete, and accurate billing information for all purchases made through our store.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Intellectual Property</h2>
                            <p className="mb-6 leading-relaxed">
                                All content, logos, graphics, and interface designs on this site are the property of Cruise The Limit. You may not copy, reproduce, or distribute our proprietary materials without explicit written consent.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Termination</h2>
                            <p className="mb-6 leading-relaxed">
                                We reserve the right to suspend or terminate your account without notice if we find that you have violated these Terms or engaged in conduct that is harmful to other users or our platform.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Limitation of Liability</h2>
                            <p className="mb-6 leading-relaxed">
                                To the fullest extent permitted by law, Cruise The Limit shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.
                            </p>

                            <div className="mt-12 pt-8 border-t border-slate-200">
                                <p className="text-sm text-slate-500">
                                    By using Cruise The Limit, you acknowledge that you have read and understood these Terms of Service. For any questions, please reach out via our contact channels.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}

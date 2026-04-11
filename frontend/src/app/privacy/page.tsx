import { FadeIn } from '@/components/fade-in';

export default function PrivacyPage() {
    return (
        <>
            <section className="relative bg-gradient-to-br from-primary-800 to-indigo-900 text-white overflow-hidden py-16 md:py-24">
                <FadeIn className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl sm:text-5xl font-display font-extrabold tracking-tight">Privacy Policy</h1>
                    <p className="mt-4 text-lg text-primary-100 font-light">Last Updated: October 2023</p>
                </FadeIn>
            </section>

            <section className="py-16 md:py-24 bg-white">
                <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                    <FadeIn direction="up">
                        <div className="prose prose-lg prose-primary max-w-none text-slate-600">
                            <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Introduction</h2>
                            <p className="mb-6 leading-relaxed">
                                At <strong>Cruise The Limit</strong>, your privacy is a top priority. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, gamification platform, and community services.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">2. Information We Collect</h2>
                            <p className="mb-4 leading-relaxed">We collect information to provide you with the best experience on our platform. The types of data we collect include:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li><strong>Personal Details:</strong> Name, email address, and vehicle type when you register or take the eco-driving challenge.</li>
                                <li><strong>Transaction Data:</strong> Billing information and shipping address when you purchase a Sticker Kit.</li>
                                <li><strong>Usage Data:</strong> Information about how you interact with our website, including device type, IP address, and browser information.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">3. How We Use Your Information</h2>
                            <p className="mb-4 leading-relaxed">Your data is utilized strictly for the operations and improvement of our services:</p>
                            <ul className="list-disc pl-6 space-y-2 mb-6">
                                <li>To process your orders and deliver your Sticker Kits.</li>
                                <li>To maintain your membership profile and track your gamification challenges.</li>
                                <li>To communicate with you regarding updates, support inquiries, and community news.</li>
                            </ul>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">4. Data Security</h2>
                            <p className="mb-6 leading-relaxed">
                                We implement industry-standard security measures, including encryption and secure server hosting, to protect your data from unauthorized access, alteration, or disclosure. However, no internet transmission is 100% secure, and we cannot guarantee absolute security.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">5. Third-Party Services</h2>
                            <p className="mb-6 leading-relaxed">
                                We do not sell or rent your personal information to third parties. We may share information with trusted service providers (e.g., payment gateways like Stripe, email delivery services) solely for the purpose of running our application.
                            </p>

                            <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">6. Your Rights</h2>
                            <p className="mb-6 leading-relaxed">
                                You have the right to access, update, or delete your personal information at any time. If you wish to exercise these rights, please contact us via our Contact Support page.
                            </p>

                            <div className="mt-12 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                                <p className="text-sm text-slate-500">
                                    If you have any questions about this Privacy Policy, please email us directly at <a href="mailto:privacy@cruisethelimit.com" className="text-primary-600 font-semibold hover:underline">privacy@cruisethelimit.com</a>.
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    );
}

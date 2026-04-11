import Image from 'next/image';
import Link from 'next/link';
import { ShoppingCart, ShieldCheck, Leaf, DollarSign, ArrowRight } from 'lucide-react';

export default function StickerKitsPage() {
    return (
        <div className="min-h-screen bg-slate-50 pt-24 pb-16 px-4 sm:px-6 lg:px-8">
            {/* Header Section */}
            <div className="max-w-7xl mx-auto text-center mb-16">
                <h1 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-600 tracking-tight sm:text-6xl">
                    Cruise The Limit Sticker Kits
                </h1>
                <p className="mt-6 max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
                    Show your commitment to smarter driving. Get our official sticker kits for <span className="font-semibold text-blue-700">Safety, Sustainability & Savings.</span>
                </p>
            </div>

            {/* Benefits Banner */}
            <div className="max-w-5xl mx-auto mb-16 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="flex items-center justify-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <ShieldCheck className="h-8 w-8 text-blue-600" />
                    <span className="text-lg font-medium text-slate-800">Promote Safety</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <Leaf className="h-8 w-8 text-green-600" />
                    <span className="text-lg font-medium text-slate-800">Enhance Sustainability</span>
                </div>
                <div className="flex items-center justify-center space-x-3 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
                    <DollarSign className="h-8 w-8 text-amber-500" />
                    <span className="text-lg font-medium text-slate-800">Maximize Savings</span>
                </div>
            </div>

            {/* Products Grid */}
            <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Banner Sticker Kit */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative h-72 w-full bg-slate-900 border-b border-slate-100 p-6 flex flex-col justify-center items-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/40 via-transparent to-transparent opacity-50 blur-xl"></div>
                        {/* The Image must be placed in public/images/sticker-banner.png */}
                        <Image
                            src="/images/sticker-banner.png"
                            alt="Cruise The Limit Banner Sticker"
                            fill
                            className="object-contain p-6 hover:scale-105 transition-transform duration-500"
                            priority
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Official Bumper Banner</h3>
                                <p className="text-sm font-medium text-blue-600 mt-1">Premium Vinyl Finish</p>
                            </div>
                            <span className="text-2xl font-extrabold text-slate-900">$14.99</span>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            The complete Cruise The Limit phrase in a highly visible rectangular banner. Perfect for bumpers, toolboxes, and laptops. Weather-resistant and UV protected.
                        </p>
                        <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-blue-500/30">
                            <ShoppingCart className="w-5 h-5" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>

                {/* Square Recycle Sticker Kit */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-transform duration-300 hover:-translate-y-2">
                    <div className="relative h-72 w-full bg-emerald-50/50 border-b border-slate-100 p-6 flex justify-center items-center overflow-hidden">
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-200/40 via-transparent to-transparent opacity-50 blur-2xl"></div>
                        {/* The Image must be placed in public/images/sticker-square.png */}
                        <Image
                            src="/images/sticker-square.png"
                            alt="Cruise The Limit Square Logo Sticker"
                            fill
                            className="object-contain p-8 hover:scale-105 transition-transform duration-500 max-h-64 mx-auto"
                        />
                    </div>
                    <div className="p-8">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-slate-900">Classic Logo Sticker</h3>
                                <p className="text-sm font-medium text-green-600 mt-1">Die-Cut Design</p>
                            </div>
                            <span className="text-2xl font-extrabold text-slate-900">$9.99</span>
                        </div>
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            The iconic Cruise The Limit logo enclosed in a beautiful eco-friendly recycle frame. Ideal for car windows, notebooks, and water bottles.
                        </p>
                        <button className="w-full flex items-center justify-center space-x-2 bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold transition-all shadow-md hover:shadow-lg focus:ring-4 focus:ring-green-500/30">
                            <ShoppingCart className="w-5 h-5" />
                            <span>Add to Cart</span>
                        </button>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="mt-20 max-w-4xl mx-auto text-center">
                <div className="inline-block p-[2px] rounded-2xl bg-gradient-to-r from-blue-500 to-green-400">
                    <div className="bg-white rounded-2xl px-8 py-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div className="text-left">
                            <h4 className="text-xl font-bold text-slate-900">Want to buy in bulk?</h4>
                            <p className="text-slate-600 mt-1">Get special pricing for fleets and organizations.</p>
                        </div>
                        <Link
                            href="/contact"
                            className="flex-shrink-0 flex items-center space-x-2 text-blue-600 font-semibold hover:text-blue-800 transition-colors"
                        >
                            <span>Contact Us</span>
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

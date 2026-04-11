'use client';

import Link from 'next/link';
import { Facebook, Instagram, Twitter } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <span className="text-xl font-display font-bold text-white">
              Cruise<span className="text-accent-400">The</span>Limit
            </span>
            <p className="mt-3 text-sm text-gray-400">
              Promoting eco-friendly driving habits and building a community of responsible drivers.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link href="/challenge" className="text-sm hover:text-white transition-colors">Take the Challenge</Link></li>
              <li><Link href="/membership" className="text-sm hover:text-white transition-colors">Sticker Kits</Link></li>
              <li><Link href="/core-values" className="text-sm hover:text-white transition-colors">Core Values</Link></li>
              <li><Link href="/testimonials" className="text-sm hover:text-white transition-colors">Testimonials</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-sm hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link href="/faq" className="text-sm hover:text-white transition-colors">FAQ</Link></li>
              <li><Link href="/privacy" className="text-sm hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-sm hover:text-white transition-colors">Terms of Service</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
            </div>
            <p className="mt-4 text-sm text-gray-400">Share your journey with #CruiseTheLimit</p>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-8 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} Cruise The Limit. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

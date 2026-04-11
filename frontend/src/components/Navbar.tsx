'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/lib/auth-context';
import { Menu, X, User, LogOut, LayoutDashboard } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/challenge', label: 'Take the Challenge' },
  { href: '/membership', label: 'Sticker Kits' },
  { href: '/core-values', label: 'Core Values' },
  { href: '/testimonials', label: 'Testimonials' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { user, isAdmin, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-display font-bold text-primary-700">
              Cruise<span className="text-accent-600">The</span>Limit
            </span>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-600 hover:text-primary-700 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            {user ? (
              <>
                {isAdmin && (
                  <Link href="/admin" className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-700">
                    <LayoutDashboard size={16} /> Admin
                  </Link>
                )}
                <Link href="/profile" className="flex items-center gap-1 text-sm text-gray-600 hover:text-primary-700">
                  <User size={16} /> {user.displayName || user.firstName}
                </Link>
                <button onClick={logout} className="flex items-center gap-1 text-sm text-gray-500 hover:text-red-600">
                  <LogOut size={16} /> Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm font-medium text-gray-600 hover:text-primary-700">
                  Login
                </Link>
                <Link href="/register" className="btn-primary text-sm !px-4 !py-2">
                  Sign Up
                </Link>
              </>
            )}
          </div>

          <button
            className="lg:hidden p-2 text-gray-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <div className="lg:hidden border-t border-gray-100 py-4 space-y-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2 text-sm font-medium text-gray-600 hover:bg-primary-50 hover:text-primary-700 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="border-t border-gray-100 pt-3 mt-3 space-y-2">
              {user ? (
                <>
                  {isAdmin && (
                    <Link href="/admin" className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 rounded-lg" onClick={() => setMobileOpen(false)}>
                      Admin Dashboard
                    </Link>
                  )}
                  <Link href="/profile" className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 rounded-lg" onClick={() => setMobileOpen(false)}>
                    Profile
                  </Link>
                  <button onClick={() => { logout(); setMobileOpen(false); }} className="block w-full text-left px-3 py-2 text-sm text-red-600 hover:bg-red-50 rounded-lg">
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <Link href="/login" className="block px-3 py-2 text-sm text-gray-600 hover:bg-primary-50 rounded-lg" onClick={() => setMobileOpen(false)}>
                    Login
                  </Link>
                  <Link href="/register" className="block px-3 py-2 text-sm font-semibold text-primary-700 hover:bg-primary-50 rounded-lg" onClick={() => setMobileOpen(false)}>
                    Sign Up
                  </Link>
                </>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

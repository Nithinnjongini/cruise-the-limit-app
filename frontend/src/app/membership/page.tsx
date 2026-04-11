'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import Image from 'next/image';
import { Package, Truck, Star, Shield, Minus, Plus } from 'lucide-react';

export default function MembershipPage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    shippingName: '',
    shippingAddress: '',
    shippingCity: '',
    shippingState: '',
    shippingZipCode: '',
    shippingCountry: 'US',
  });

  const unitPrice = 14.99;
  const total = (quantity * unitPrice).toFixed(2);

  const handleOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!user || !token) {
      toast.error('Please login to order');
      router.push('/login');
      return;
    }
    setLoading(true);
    try {
      const order = await api.orders.create(token, { ...form, quantity }) as any;
      const payment = await api.payments.createIntent(token, order.id) as any;
      toast.success('Order placed! Redirecting to payment...');
      router.push(`/profile`);
    } catch (err: any) {
      toast.error(err.message || 'Failed to place order');
    } finally {
      setLoading(false);
    }
  };

  const update = (field: string, value: string) => setForm((p) => ({ ...p, [field]: value }));

  return (
    <>
      <section className="bg-gradient-to-br from-accent-700 to-accent-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-extrabold">Sticker Kits</h1>
          <p className="mt-4 text-lg text-accent-100 max-w-2xl mx-auto">
            Show the world you drive with purpose. Get your official Cruise The Limit sticker kit.
          </p>
        </div>
      </section>

      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Product Info */}
            <div>
              <div className="card p-8">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="aspect-video relative rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/images/sticker-banner.png" alt="Cruise The Limit Banner Sticker" fill className="object-contain p-2 hover:scale-105 transition-transform duration-300" />
                  </div>
                  <div className="aspect-square relative rounded-lg border border-gray-200 overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow">
                    <Image src="/images/sticker-square.png" alt="Cruise The Limit Square Logo Sticker" fill className="object-contain p-2 hover:scale-105 transition-transform duration-300" />
                  </div>
                </div>
                <h2 className="text-2xl font-display font-bold text-gray-900">Official Sticker Kit</h2>
                <p className="text-3xl font-bold text-primary-700 mt-2">${unitPrice}</p>
                <p className="mt-4 text-gray-600">
                  Each kit includes a set of premium vinyl stickers for your vehicle, laptop, and personal items.
                  Show your commitment to eco-friendly driving everywhere you go.
                </p>
                <div className="mt-6 space-y-3">
                  {[
                    { icon: Star, text: 'Premium weatherproof vinyl' },
                    { icon: Truck, text: 'Free shipping on orders of 3+' },
                    { icon: Shield, text: 'UV resistant, lasts 5+ years' },
                    { icon: Package, text: '5 stickers per kit' },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-3 text-sm text-gray-700">
                      <item.icon size={16} className="text-primary-600 flex-shrink-0" />
                      {item.text}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Order Form */}
            <div className="card p-8">
              <h2 className="text-2xl font-display font-bold text-gray-900 mb-6">Place Your Order</h2>
              <form onSubmit={handleOrder} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Quantity</label>
                  <div className="flex items-center gap-4">
                    <button type="button" onClick={() => setQuantity(Math.max(1, quantity - 1))} className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                      <Minus size={16} />
                    </button>
                    <span className="text-xl font-semibold w-8 text-center">{quantity}</span>
                    <button type="button" onClick={() => setQuantity(Math.min(50, quantity + 1))} className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50">
                      <Plus size={16} />
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input type="text" required className="input-field" value={form.shippingName} onChange={(e) => update('shippingName', e.target.value)} />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Address</label>
                  <input type="text" required className="input-field" value={form.shippingAddress} onChange={(e) => update('shippingAddress', e.target.value)} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">City</label>
                    <input type="text" required className="input-field" value={form.shippingCity} onChange={(e) => update('shippingCity', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">State</label>
                    <input type="text" required className="input-field" value={form.shippingState} onChange={(e) => update('shippingState', e.target.value)} />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Zip Code</label>
                    <input type="text" required className="input-field" value={form.shippingZipCode} onChange={(e) => update('shippingZipCode', e.target.value)} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Country</label>
                    <input type="text" required className="input-field" value={form.shippingCountry} onChange={(e) => update('shippingCountry', e.target.value)} />
                  </div>
                </div>
                <div className="border-t pt-4 mt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total</span>
                    <span className="text-primary-700">${total}</span>
                  </div>
                </div>
                <button type="submit" disabled={loading} className="btn-primary w-full text-lg !py-4">
                  {loading ? 'Processing...' : `Order Now - $${total}`}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

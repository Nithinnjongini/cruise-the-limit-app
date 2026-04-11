'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { User, Award, Package, Edit3 } from 'lucide-react';

export default function ProfilePage() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [challenges, setChallenges] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState({ displayName: '', bio: '' });
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    if (!user || !token) {
      router.push('/login');
      return;
    }
    setForm({ displayName: user.displayName || '', bio: user.bio || '' });
    api.challenges.my(token).then((d: any) => setChallenges(d)).catch(() => {});
    api.orders.my(token).then((d: any) => setOrders(d)).catch(() => {});
  }, [user, token, router]);

  const handleSave = async () => {
    if (!token) return;
    setSaving(true);
    try {
      await api.users.updateMe(token, form);
      toast.success('Profile updated');
      setEditing(false);
    } catch (err: any) {
      toast.error(err.message || 'Failed to update');
    } finally {
      setSaving(false);
    }
  };

  if (!user) return null;

  return (
    <section className="py-12 bg-gray-50 min-h-[calc(100vh-160px)]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Profile Header */}
        <div className="card p-8 mb-8">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-primary-100 text-primary-700 rounded-full flex items-center justify-center text-2xl font-bold">
                {user.displayName?.charAt(0) || <User size={28} />}
              </div>
              <div>
                {editing ? (
                  <div className="space-y-2">
                    <input type="text" className="input-field text-lg font-bold" value={form.displayName} onChange={(e) => setForm((p) => ({ ...p, displayName: e.target.value }))} />
                    <input type="text" className="input-field text-sm" value={form.bio} onChange={(e) => setForm((p) => ({ ...p, bio: e.target.value }))} placeholder="Short bio..." />
                    <div className="flex gap-2">
                      <button onClick={handleSave} disabled={saving} className="btn-primary text-sm !py-1 !px-4">{saving ? 'Saving...' : 'Save'}</button>
                      <button onClick={() => setEditing(false)} className="btn-secondary text-sm !py-1 !px-4">Cancel</button>
                    </div>
                  </div>
                ) : (
                  <>
                    <h1 className="text-2xl font-display font-bold text-gray-900">{user.displayName || 'User'}</h1>
                    <p className="text-gray-500">{user.email}</p>
                    {user.bio && <p className="text-sm text-gray-600 mt-1">{user.bio}</p>}
                  </>
                )}
              </div>
            </div>
            {!editing && (
              <button onClick={() => setEditing(true)} className="p-2 text-gray-400 hover:text-gray-600"><Edit3 size={18} /></button>
            )}
          </div>
        </div>

        {/* Challenges */}
        <div className="card p-6 mb-6">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2"><Award size={20} className="text-primary-600" /> My Challenges</h2>
          {challenges.length === 0 ? (
            <p className="text-gray-500 text-sm">No challenges yet. Take the challenge to get started!</p>
          ) : (
            <div className="space-y-3">
              {challenges.map((c: any) => (
                <div key={c.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">{c.fullName}</p>
                    <p className="text-xs text-gray-500">{c.vehicleType} &middot; {new Date(c.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${c.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{c.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Orders */}
        <div className="card p-6">
          <h2 className="text-lg font-display font-bold text-gray-900 mb-4 flex items-center gap-2"><Package size={20} className="text-accent-600" /> My Orders</h2>
          {orders.length === 0 ? (
            <p className="text-gray-500 text-sm">No orders yet. Get your sticker kit!</p>
          ) : (
            <div className="space-y-3">
              {orders.map((o: any) => (
                <div key={o.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <p className="font-medium text-gray-900">Sticker Kit x{o.quantity}</p>
                    <p className="text-xs text-gray-500">${(o.totalCents / 100).toFixed(2)} &middot; {new Date(o.createdAt).toLocaleDateString()}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${o.status === 'SHIPPED' ? 'bg-green-100 text-green-700' : o.status === 'PAID' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{o.status}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

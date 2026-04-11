'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/lib/auth-context';
import { api } from '@/lib/api';
import toast from 'react-hot-toast';
import { Users, Award, Package, DollarSign, MessageSquare, Mail, CheckCircle, XCircle } from 'lucide-react';

interface DashboardStats {
  totalUsers: number;
  totalChallenges: number;
  totalOrders: number;
  totalRevenue: number;
  pendingTestimonials: number;
  unreadMessages: number;
  recentUsers: any[];
  recentOrders: any[];
}

type AdminTab = 'overview' | 'users' | 'challenges' | 'orders' | 'testimonials' | 'messages';

export default function AdminDashboard() {
  const { user, token } = useAuth();
  const router = useRouter();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [tab, setTab] = useState<AdminTab>('overview');
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState<any[]>([]);
  const [challenges, setChallenges] = useState<any[]>([]);
  const [orders, setOrders] = useState<any[]>([]);
  const [testimonials, setTestimonials] = useState<any[]>([]);
  const [messages, setMessages] = useState<any[]>([]);

  useEffect(() => {
    if (!user || user.role !== 'ADMIN') {
      router.push('/');
      return;
    }
    if (!token) return;
    api.admin.getStats(token)
      .then((data: any) => setStats(data))
      .catch(() => toast.error('Failed to load dashboard'))
      .finally(() => setLoading(false));
  }, [user, token, router]);

  useEffect(() => {
    if (!token) return;
    if (tab === 'users') api.users.getAll(token).then((d: any) => setUsers(Array.isArray(d) ? d : d.data ?? [])).catch(() => { });
    if (tab === 'challenges') api.challenges.getAll(token).then((d: any) => setChallenges(Array.isArray(d) ? d : d.data ?? [])).catch(() => { });
    if (tab === 'orders') api.orders.getAll(token).then((d: any) => setOrders(Array.isArray(d) ? d : d.data ?? [])).catch(() => { });
    if (tab === 'testimonials') api.testimonials.getAll(token).then((d: any) => setTestimonials(Array.isArray(d) ? d : d.data ?? [])).catch(() => { });
    if (tab === 'messages') api.contact.getAll(token).then((d: any) => setMessages(Array.isArray(d) ? d : d.data ?? [])).catch(() => { });
  }, [tab, token]);

  const approveTestimonial = async (id: string) => {
    if (!token) return;
    try {
      await api.testimonials.approve(token, id);
      setTestimonials((prev) => prev.map((t) => t.id === id ? { ...t, status: 'APPROVED' } : t));
      toast.success('Testimonial approved');
    } catch { toast.error('Failed to approve'); }
  };

  const rejectTestimonial = async (id: string) => {
    if (!token) return;
    try {
      await api.testimonials.reject(token, id);
      setTestimonials((prev) => prev.map((t) => t.id === id ? { ...t, status: 'REJECTED' } : t));
      toast.success('Testimonial rejected');
    } catch { toast.error('Failed to reject'); }
  };

  const markMessageRead = async (id: string) => {
    if (!token) return;
    try {
      await api.contact.markRead(token, id);
      setMessages((prev) => prev.map((m) => m.id === id ? { ...m, isRead: true } : m));
    } catch { toast.error('Failed to mark as read'); }
  };

  if (loading) return <div className="min-h-screen flex items-center justify-center text-gray-500">Loading dashboard...</div>;
  if (!stats) return <div className="min-h-screen flex items-center justify-center text-gray-500">Access denied</div>;

  const statCards: { icon: any; label: string; value: any; color: string; tabKey?: AdminTab }[] = [
    { icon: Users, label: 'Users', value: stats.totalUsers, color: 'bg-blue-100 text-blue-700', tabKey: 'users' },
    { icon: Award, label: 'Challenges', value: stats.totalChallenges, color: 'bg-green-100 text-green-700', tabKey: 'challenges' },
    { icon: Package, label: 'Orders', value: stats.totalOrders, color: 'bg-purple-100 text-purple-700', tabKey: 'orders' },
    { icon: DollarSign, label: 'Revenue', value: `$${(stats.totalRevenue / 100).toFixed(2)}`, color: 'bg-amber-100 text-amber-700' },
    { icon: MessageSquare, label: 'Pending Reviews', value: stats.pendingTestimonials, color: 'bg-rose-100 text-rose-700', tabKey: 'testimonials' },
    { icon: Mail, label: 'Unread Messages', value: stats.unreadMessages, color: 'bg-cyan-100 text-cyan-700', tabKey: 'messages' },
  ];

  const tabs: { key: AdminTab; label: string }[] = [
    { key: 'overview', label: 'Overview' },
    { key: 'users', label: 'Users' },
    { key: 'challenges', label: 'Challenges' },
    { key: 'orders', label: 'Orders' },
    { key: 'testimonials', label: 'Testimonials' },
    { key: 'messages', label: 'Messages' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-2xl font-display font-bold text-gray-900">Admin Dashboard</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        {/* Tabs */}
        <div className="flex gap-1 bg-gray-100 rounded-lg p-1 mb-8 overflow-x-auto">
          {tabs.map((t) => (
            <button key={t.key} onClick={() => setTab(t.key)} className={`px-4 py-2 rounded-md text-sm font-medium whitespace-nowrap transition-colors ${tab === t.key ? 'bg-white text-primary-700 shadow-sm' : 'text-gray-600 hover:text-gray-900'}`}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Overview */}
        {tab === 'overview' && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {statCards.map((s) => (
              <div
                key={s.label}
                onClick={() => s.tabKey && setTab(s.tabKey)}
                className={`card p-6 flex items-center gap-4 ${s.tabKey ? 'cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300' : ''}`}
              >
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${s.color}`}>
                  <s.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900">{s.value}</p>
                  <p className="text-sm text-gray-500">{s.label}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Users Table */}
        {tab === 'users' && (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b"><tr>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Name</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Email</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Role</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Joined</th>
              </tr></thead>
              <tbody className="divide-y">
                {users.map((u: any) => (
                  <tr key={u.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{u.displayName || '—'}</td>
                    <td className="px-6 py-4 text-gray-600">{u.email}</td>
                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs font-medium ${u.role === 'ADMIN' ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}`}>{u.role}</span></td>
                    <td className="px-6 py-4 text-gray-500">{new Date(u.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Challenges Table */}
        {tab === 'challenges' && (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b"><tr>
                <th className="text-left px-6 py-3 font-medium text-gray-500">User</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Vehicle</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
              </tr></thead>
              <tbody className="divide-y">
                {challenges.map((c: any) => (
                  <tr key={c.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-medium text-gray-900">{c.fullName}</td>
                    <td className="px-6 py-4 text-gray-600">{c.vehicleType}</td>
                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs font-medium ${c.status === 'COMPLETED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}>{c.status}</span></td>
                    <td className="px-6 py-4 text-gray-500">{new Date(c.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Orders Table */}
        {tab === 'orders' && (
          <div className="card overflow-hidden">
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b"><tr>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Order ID</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Qty</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Total</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Status</th>
                <th className="text-left px-6 py-3 font-medium text-gray-500">Date</th>
              </tr></thead>
              <tbody className="divide-y">
                {orders.map((o: any) => (
                  <tr key={o.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 font-mono text-xs text-gray-900">{o.id.slice(0, 8)}...</td>
                    <td className="px-6 py-4 text-gray-600">{o.quantity}</td>
                    <td className="px-6 py-4 text-gray-900 font-medium">${(o.totalCents / 100).toFixed(2)}</td>
                    <td className="px-6 py-4"><span className={`px-2 py-1 rounded text-xs font-medium ${o.status === 'SHIPPED' ? 'bg-green-100 text-green-700' : o.status === 'PAID' ? 'bg-blue-100 text-blue-700' : 'bg-yellow-100 text-yellow-700'}`}>{o.status}</span></td>
                    <td className="px-6 py-4 text-gray-500">{new Date(o.createdAt).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Testimonials */}
        {tab === 'testimonials' && (
          <div className="space-y-4">
            {testimonials.map((t: any) => (
              <div key={t.id} className="card p-6 flex items-start justify-between gap-4">
                <div className="flex-1">
                  <p className="text-gray-700">&ldquo;{t.content}&rdquo;</p>
                  <p className="mt-2 text-sm text-gray-500">by {t.user?.displayName || 'Unknown'} &middot; {new Date(t.createdAt).toLocaleDateString()}</p>
                  <span className={`inline-block mt-2 px-2 py-1 rounded text-xs font-medium ${t.status === 'APPROVED' ? 'bg-green-100 text-green-700' : t.status === 'REJECTED' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700'}`}>{t.status}</span>
                </div>
                {t.status === 'PENDING' && (
                  <div className="flex gap-2 flex-shrink-0">
                    <button onClick={() => approveTestimonial(t.id)} className="p-2 rounded-lg bg-green-100 text-green-700 hover:bg-green-200"><CheckCircle size={18} /></button>
                    <button onClick={() => rejectTestimonial(t.id)} className="p-2 rounded-lg bg-red-100 text-red-700 hover:bg-red-200"><XCircle size={18} /></button>
                  </div>
                )}
              </div>
            ))}
            {testimonials.length === 0 && <p className="text-center py-8 text-gray-500">No testimonials found</p>}
          </div>
        )}

        {/* Messages */}
        {tab === 'messages' && (
          <div className="space-y-4">
            {messages.map((m: any) => (
              <div key={m.id} className={`card p-6 ${!m.isRead ? 'border-l-4 border-l-primary-500' : ''}`}>
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-semibold text-gray-900">{m.subject}</h3>
                      {!m.isRead && <span className="w-2 h-2 bg-primary-500 rounded-full" />}
                    </div>
                    <p className="text-sm text-gray-500 mt-1">{m.name} &middot; {m.email} &middot; {new Date(m.createdAt).toLocaleDateString()}</p>
                    <p className="mt-3 text-gray-700">{m.message}</p>
                  </div>
                  {!m.isRead && (
                    <button onClick={() => markMessageRead(m.id)} className="text-sm text-primary-700 hover:underline flex-shrink-0">Mark read</button>
                  )}
                </div>
              </div>
            ))}
            {messages.length === 0 && <p className="text-center py-8 text-gray-500">No messages found</p>}
          </div>
        )}
      </div>
    </div>
  );
}
